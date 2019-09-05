using System;
using System.Data.Entity;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Mvc;
using DevTracker.WebHelpers;
using Repository.Helpers;
using Repository.Models;
using Repository.Models.ViewModels;

namespace DevTracker.Controllers
{
    [CheckAuthorization]
    public class TasksController : Controller
    {
        private DBEntities _entities = new DBEntities();

        public async Task<ActionResult> Create(long id = 0)
        {
            try
            {
                using (_entities = new DBEntities())
                {
                    if (TempData["Success"] != null)
                        TempData["Success"] = TempData["Success"];

                    var taskVm = new TaskVm();
                    var roleMasterId = Convert.ToInt64(CookieHelper.GetCookie(CookieName.RoleMasterId));

                    //Check that if we found id 0 and role not owener or PM
                    if (id > 0 ||
                        (roleMasterId == (int)EnumList.Roles.Owner ||
                         roleMasterId == (int)EnumList.Roles.Project_Manager))
                    {
                        var taskMaster =
                            await
                                _entities.TaskMasters.Where(s => s.TaskMasterId == id && !s.IsDelete)
                                    .FirstOrDefaultAsync();

                        if (taskMaster != null)
                        {
                            taskVm.CopyProperties(taskMaster);
                            taskVm.StartDateString = taskMaster.StartDate.ToString("dd/MM/yyyy");
                            if (taskMaster.EndDate != null)
                                taskVm.EndDateString = taskMaster.EndDate.Value.ToString("dd/MM/yyyy");
                        }
                    }
                    else
                    {
                        taskVm.Description = "<p><strong>Objective:</strong></p><p>&nbsp;</p><p><strong>References:</strong></p><p>&nbsp;</p><p><strong>Condition Satisfied:</strong></p>";
                    }
                    
                    return View(taskVm);
                }
            }
            catch
            {
                throw;
            }


        }

        [HttpPost]
        [ValidateInput(false)]
        public async Task<ActionResult> Create(TaskVm data)
        {
            try
            {
                using (_entities)
                {

                    var projectDetails = await _entities.Projects.FindAsync(data.ProjectId);
                    var taskCount = await _entities.TaskCategories.Where(s => s.ProjectId == data.ProjectId).ToListAsync();
                    var currentTask = taskCount.Count + 1;
                    var userMasterId = Convert.ToInt64(CookieHelper.GetCookie(CookieName.UserMasterId));

                    if (data.TaskMasterId > 0)
                    {
                        //Update code HERE
                        var taskmaster = await _entities.TaskMasters.FindAsync(data.TaskMasterId);

                        if (taskmaster != null)
                        {
                            taskmaster.ProjectId = data.ProjectId;
                            taskmaster.ActualTimeHours = data.ActualTimeHours;
                            taskmaster.AssignyId = data.AssignyId;
                            taskmaster.Description = data.Description;
                            taskmaster.EstimateTimeHours = data.EstimateTimeHours;
                            taskmaster.PriorityMasterId = data.PriorityMasterId;
                            taskmaster.TaskStatusMasterId = data.TaskStatusMasterId;
                            taskmaster.UpdatedBy = userMasterId;
                            taskmaster.UpdatedDate = DateTime.Now;
                            taskmaster.StartDate = DateTime.ParseExact(data.StartDateString, data.StartDateString.Contains('-') ? "dd-MM-yyyy" : "dd/MM/yyyy", CultureInfo.InvariantCulture);
                            if (!string.IsNullOrWhiteSpace(data.EndDateString))
                            {
                                taskmaster.EndDate = DateTime.ParseExact(data.EndDateString, data.EndDateString.Contains('-') ? "dd-MM-yyyy" : "dd/MM/yyyy", CultureInfo.InvariantCulture);
                            }
                            _entities.Entry(taskmaster).State = EntityState.Modified;
                            await _entities.SaveChangesAsync();

                            //Delete existing attachment and Save new attachment
                            if (data.AttachedFiles.Any())
                            {
                                var taskAttachments = await _entities.TaskAttachments.Where(s => s.TaskMasterId == data.TaskMasterId).ToListAsync();

                                if (taskAttachments.Any())
                                {
                                    _entities.TaskAttachments.RemoveRange(taskAttachments);
                                    await _entities.SaveChangesAsync();
                                }

                                taskAttachments = data.AttachedFiles.Select(item => new TaskAttachment
                                {
                                    TaskMasterId = taskmaster.TaskMasterId,
                                    CreatedBy = userMasterId,
                                    CreatedDate = DateTime.Now,
                                    DisplayName = item.FileName,
                                    FileName = Utilities.SaveFile(item, Server.MapPath("~" + BasicProperty.ProjectAttachmentPath + taskmaster.ProjectId + "/"), Guid.NewGuid().ToString()),
                                    FileSize = item.ContentLength / 1024
                                }).ToList();

                                _entities.TaskAttachments.AddRange(taskAttachments);

                                TempData["Success"] = "Task updated successfully";
                            }
                        }
                        else
                        {
                            TempData["Error"] = "Request failed! Please try after some time.";
                        }
                    }
                    else
                    {
                        //Save task details in taskmaster table
                        var taskmaster = new TaskMaster();
                        taskmaster.CopyProperties(data);
                        taskmaster.TaskCode = projectDetails != null ? "[" + projectDetails.Name.Substring(0, 2).ToUpper() + "-" + currentTask + "]" : "[" + currentTask.ToString() + "]";
                        taskmaster.CreatedBy = userMasterId;
                        taskmaster.CreatedDate = DateTime.Now;
                        taskmaster.StartDate = DateTime.ParseExact(data.StartDateString, data.StartDateString.Contains('-') ? "dd-MM-yyyy" : "dd/MM/yyyy", CultureInfo.InvariantCulture);
                        if (!string.IsNullOrWhiteSpace(data.EndDateString))
                        {
                            taskmaster.EndDate = DateTime.ParseExact(data.EndDateString, data.EndDateString.Contains('-') ? "dd-MM-yyyy" : "dd/MM/yyyy", CultureInfo.InvariantCulture);
                        }
                        _entities.TaskMasters.Add(taskmaster);
                        await _entities.SaveChangesAsync();

                        //Save attached file if any found
                        if (data.AttachedFiles.Any())
                        {

                            var taskAttachments = data.AttachedFiles.Select(item => new TaskAttachment
                            {
                                TaskMasterId = taskmaster.TaskMasterId,
                                CreatedBy = userMasterId,
                                CreatedDate = DateTime.Now,
                                DisplayName = item.FileName,
                                FileName = Utilities.SaveFile(item, Server.MapPath("~" + BasicProperty.ProjectAttachmentPath + taskmaster.ProjectId + "/"), Guid.NewGuid().ToString()),
                                FileSize = item.ContentLength / 1024
                            }).ToList();

                            _entities.TaskAttachments.AddRange(taskAttachments);
                        }

                        //Save call
                        await _entities.SaveChangesAsync();

                        TempData["Success"] = "Task added successfully";
                    }
                }
            }
            catch (Exception ex)
            {
                throw;
            }

            return RedirectToAction("Create");
        }

        public async Task<ActionResult> Details(long id = 0)
        {
            try
            {
                using (_entities = new DBEntities())
                {
                    var taskDetailsVm = new TaskDetailsVm();

                    var taskMaster = await _entities.TaskMasters.Where(s => s.TaskMasterId == id && !s.IsDelete).FirstOrDefaultAsync();

                    if (taskMaster != null)
                    {
                        //Assigny task details to view model
                        taskDetailsVm.CopyProperties(taskMaster);

                        //Convert data to string format
                        taskDetailsVm.StartDateString = taskMaster.StartDate.ToString("dd/MM/yyyy");
                        if (taskMaster.EndDate != null)
                            taskDetailsVm.EndDateString = taskMaster.EndDate.Value.ToString("dd/MM/yyyy");

                        //Get task attachments
                        taskDetailsVm.TaskAttachments = await _entities.TaskAttachments.Where(s => s.TaskMasterId == taskMaster.TaskMasterId).ToListAsync();

                        //Get task comments
                        taskDetailsVm.CommentMasters = await _entities.CommentMasters.Where(s => s.TaskMasterId == taskMaster.TaskMasterId).ToListAsync();

                        return View(taskDetailsVm);
                    }
                    else
                    {
                        return RedirectToAction("Create");
                    }
                }
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<ActionResult> _GetComments(long taskMasterId)
        {
            try
            {
                using (_entities)
                {
                    var commentMaster = await _entities.CommentMasters.Where(s => s.TaskMasterId == taskMasterId && !s.IsDelete).OrderByDescending(s => s.CreatedDate).Take(10).ToListAsync();

                    return PartialView(commentMaster);
                }
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<ActionResult> _GetActivities(long taskMasterId)
        {
            try
            {
                using (_entities)
                {
                    var activities = await _entities.Activities.Where(s => s.TaskMasterId == taskMasterId && !s.IsDelete).OrderByDescending(s => s.CreatedDate).Take(10).ToListAsync();

                    return PartialView(activities);
                }
            }
            catch (Exception)
            {
                throw;
            }
        }

        [HttpPost]
        public JsonResult ChangeTaskField(long taskMasterId, long changeType, long changeValue)
        {
            var status = false;

            try
            {
                using (_entities)
                {
                    var taskMaster = _entities.TaskMasters.Find(taskMasterId);

                    if (taskMaster != null)
                    {
                        switch (changeType)
                        {
                            case (int)EnumList.TaskChangeType.Assignee:
                                taskMaster.AssignyId = changeValue;
                                break;
                            case (int) EnumList.TaskChangeType.Reporter:
                                taskMaster.ReporterId = changeValue;
                                break;
                            case (int)EnumList.TaskChangeType.Priority:
                                taskMaster.PriorityMasterId = changeValue;
                                break;
                            case (int)EnumList.TaskChangeType.Task_Status:
                                taskMaster.TaskStatusMasterId = changeValue;
                                break;
                            case (int)EnumList.TaskChangeType.Completion_Percentage:
                                taskMaster.CompletionPercentage = Convert.ToInt32(changeValue);
                                break;
                        }

                        _entities.Entry(taskMaster).State = EntityState.Modified;
                        _entities.SaveChanges();

                        status = true;
                    }
                }
            }
            catch (Exception)
            {
                status = false;
            }

            return Json(status, JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetTasks(long? projectId, long? taskId)
        {
            try
            {
                var chatList = SelectListFunction.GetTasks(projectId, taskId);
                return Json(new { chatList }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}