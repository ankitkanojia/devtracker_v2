using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Mvc;
using repository.Helpers;
using repository.Models;
using repository.Models.ViewModels;
using website.Helpers;

namespace website.Controllers
{
    public class ProjectsController : Controller
    {
        private DBEntities _entities;
        private readonly string _userId = AccountFunctions.CurrentUser();

        public ActionResult Index()
        {
            try
            {
                var model = new ProjectsVm();
                return View(model);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }

        [HttpPost]
        [ValidateInput(false)]
        public async Task<ActionResult> Index(ProjectsVm data)
        {
            try
            {
                using (_entities = new DBEntities())
                {

                    if (data.ProjectId > 0)
                    {
                        var project = await _entities.Projects.FindAsync(data.ProjectId);

                        if (project != null)
                        {
                            //Update Code HERE
                            project.BasicDescription = data.BasicDescription;
                            project.Budget = data.Budget;
                            project.ClientName = data.ClientName;
                            project.ConfidentialDescription = data.ConfidentialDescription;
                            project.EstimateHours = data.EstimateHours;
                            project.LiveURL = data.LiveURL;
                            project.Name = data.Name;
                            project.ClientName = data.ClientName;
                            project.TagLine = data.TagLine;
                            project.TeamMemberCount = data.TeamMemberCount;
                            project.UpdatedBy = _userId;
                            project.UpdatedDate = DateTime.Now;
                            project.StartDate = DateTime.ParseExact(data.StartDateString, data.StartDateString.Contains('-') ? "dd-MM-yyyy" : "dd/MM/yyyy", CultureInfo.InvariantCulture);

                            if (!string.IsNullOrWhiteSpace(data.EndDateString))
                            {
                                project.EndDate = DateTime.ParseExact(data.EndDateString, data.EndDateString.Contains('-') ? "dd-MM-yyyy" : "dd/MM/yyyy", CultureInfo.InvariantCulture);
                            }
                            _entities.Entry(project).State = EntityState.Modified;
                            await _entities.SaveChangesAsync();


                            //Delete Existing Assign and Add new Assign and Save Assign list HERE
                            if (data.AssignyList.Any())
                            {
                                var projectAssigns = await _entities.ProjectAssignies.Where(s => s.ProjectId == data.ProjectId).ToListAsync();

                                if (projectAssigns.Any())
                                {
                                    _entities.ProjectAssignies.RemoveRange(projectAssigns);
                                    await _entities.SaveChangesAsync();
                                }

                                projectAssigns = data.AssignyList.Select(item => new ProjectAssigny
                                {
                                    ProjectId = project.ProjectId,
                                    AssignyId = item,
                                    CreatedBy = _userId,
                                    CreatedDate = DateTime.Now,
                                    WhoAssign = _userId
                                }).ToList();

                                _entities.ProjectAssignies.AddRange(projectAssigns);
                                await _entities.SaveChangesAsync();
                            }
                             

                            //Delete existing attachment and Save new attachment
                            if (data.AttachedFiles != null && data.AttachedFiles.Any())
                            {
                                var projectAttachments = await _entities.ProjectAttachments.Where(s => s.ProjectId == data.ProjectId).ToListAsync();

                                if (projectAttachments.Any())
                                {
                                    _entities.ProjectAttachments.RemoveRange(projectAttachments);
                                    await _entities.SaveChangesAsync();
                                }

                                projectAttachments = (from item in data.AttachedFiles
                                                      where item != null
                                                      select new ProjectAttachment
                                                      {
                                                          ProjectId = project.ProjectId,
                                                          CreatedBy = _userId,
                                                          CreatedDate = DateTime.Now,
                                                          DisplayName = item.FileName,
                                                          FileName = Utilities.SaveFile(item, Server.MapPath("~" + StaticValues.ProjectAttachmentPath + project.ProjectId + "/"), Guid.NewGuid().ToString()),
                                                          FileSize = item.ContentLength / 1024
                                                      }).ToList();

                                if (projectAttachments.Any())
                                    _entities.ProjectAttachments.AddRange(projectAttachments);
                            }

                            StaticValues.NotifySuccess = SuccessMessage.Updated;
                        }
                        else
                            StaticValues.NotifyError = ErrorMessage.SomethingWentWrong;

                    }
                    else
                    {
                        //Save data in project table
                        var project = new Project();
                        project.CopyProperties(data);
                        project.ProjectStatusMasterId = data.ProjectStatusMasterId;
                        project.IsActive = true;
                        project.IsDelete = false;
                        project.CreatedBy = _userId;
                        project.CreatedDate = DateTime.Now;
                        project.StartDate = DateTime.ParseExact(data.StartDateString, data.StartDateString.Contains('-') ? "MM-dd-yyyy" : "MM/dd/yyyy", CultureInfo.InvariantCulture);

                        if (!string.IsNullOrWhiteSpace(data.EndDateString))
                        {
                            project.EndDate = DateTime.ParseExact(data.EndDateString, data.EndDateString.Contains('-') ? "MM-dd-yyyy" : "MM/dd/yyyy", CultureInfo.InvariantCulture);
                        }
                        _entities.Projects.Add(project);
                        await _entities.SaveChangesAsync();

                        // Save assign list HERE
                        if (data.AssignyList.Any())
                        {
                            var projectAssigns = data.AssignyList.Select(item => new ProjectAssigny
                            {
                                ProjectId = project.ProjectId,
                                AssignyId = item,
                                CreatedBy = _userId,
                                CreatedDate = DateTime.Now,
                                WhoAssign = _userId
                            }).ToList();

                            _entities.ProjectAssignies.AddRange(projectAssigns);
                            await _entities.SaveChangesAsync();
                        }


                        //Save attachment
                        if (data.AttachedFiles != null && data.AttachedFiles.Any())
                        {
                            var projectAttachments = (from item in data.AttachedFiles
                                                      where item != null
                                                      select new ProjectAttachment
                                                      {
                                                          ProjectId = project.ProjectId,
                                                          CreatedBy = _userId,
                                                          CreatedDate = DateTime.Now,
                                                          DisplayName = item.FileName,
                                                          FileName = Utilities.SaveFile(item, Server.MapPath("~" + StaticValues.ProjectAttachmentPath + project.ProjectId + "/"), Guid.NewGuid().ToString()),
                                                          FileSize = item.ContentLength / 1024
                                                      }).ToList();
                            if (projectAttachments.Any())
                                _entities.ProjectAttachments.AddRange(projectAttachments);
                        }

                        await _entities.SaveChangesAsync();

                        StaticValues.NotifySuccess = SuccessMessage.Created;
                    }

                    return RedirectToAction("List");
                }
            }
            catch (Exception e)
            {
                StaticValues.NotifyError = e.Message;
                return View(data);
            }
        }

        public ActionResult List()
        {
            return View();
        }
    }
}