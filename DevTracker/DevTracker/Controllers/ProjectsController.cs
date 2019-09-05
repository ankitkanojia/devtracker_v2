using System;
using System.Collections.Generic;
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
    public class ProjectsController : Controller
    {
        private DBEntities _entities = new DBEntities();

        public async Task<ActionResult> Create(long id = 0)
        {
            try
            {
                var projectsVm = new ProjectsVm();
                var roleMasterId = Convert.ToInt64(CookieHelper.GetCookie(CookieName.RoleMasterId));

                //Check that if we found id 0 and role not owener or PM
                if (id > 0 || (roleMasterId == (int)EnumList.Roles.Owner || roleMasterId == (int)EnumList.Roles.Project_Manager))
                {
                    var project = await _entities.Projects.Where(s => s.ProjectId == id && !s.IsDelete).FirstOrDefaultAsync();

                    if (project != null)
                    {
                        projectsVm.CopyProperties(project);
                        projectsVm.StartDateString = project.StartDate.ToString("dd/MM/yyyy");
                        if (project.EndDate != null)
                            projectsVm.EndDateString = project.EndDate.Value.ToString("dd/MM/yyyy");

                        //Assign assigny list
                        if (project.ProjectAssignies.Any())
                        {
                            projectsVm.AssignyList = new string[project.ProjectAssignies.Count];
                            var i = 0;

                            foreach (var item in project.ProjectAssignies)
                            {
                                projectsVm.AssignyList[i] = item.AssignyId.ToString();
                                i++;
                            }
                        }

                    }
                }

                return View(projectsVm);
            }
            catch (Exception)
            {
                throw;
            }
        }

        [HttpPost]
        [ValidateInput(false)]
        public async Task<ActionResult> Create(ProjectsVm data)
        {
            try
            {
                using (_entities = new DBEntities())
                {
                    var userMasterId = Convert.ToInt64(CookieHelper.GetCookie(CookieName.UserMasterId));

                    if (data.ProjectId > 0)
                    {
                        //Update Code HERE
                        var project = new Project();
                        project = await _entities.Projects.FindAsync(data.ProjectId);

                        if (project != null)
                        {
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
                            project.UpdatedBy = userMasterId;
                            project.UpdatedDate = DateTime.Now;
                            project.StartDate = DateTime.ParseExact(data.StartDateString, data.StartDateString.Contains('-') ? "dd-MM-yyyy" : "dd/MM/yyyy", CultureInfo.InvariantCulture);

                            if (!string.IsNullOrWhiteSpace(data.EndDateString))
                            {
                                project.EndDate = DateTime.ParseExact(data.EndDateString, data.EndDateString.Contains('-') ? "dd-MM-yyyy" : "dd/MM/yyyy", CultureInfo.InvariantCulture);
                            }
                            _entities.Entry(project).State = EntityState.Modified;
                            await _entities.SaveChangesAsync();


                            //Delete Existing Assigny and Add new Assigny and Save assigny list HERE
                            if (data.AssignyList.Any())
                            {
                                var projectAssignys = await _entities.ProjectAssignies.Where(s => s.ProjectId == data.ProjectId).ToListAsync();

                                if (projectAssignys.Any())
                                {
                                    _entities.ProjectAssignies.RemoveRange(projectAssignys);
                                    await _entities.SaveChangesAsync();
                                }

                                projectAssignys = new List<ProjectAssigny>();

                                projectAssignys = data.AssignyList.Select(item => new ProjectAssigny
                                {
                                    ProjectId = project.ProjectId,
                                    AssignyId = Convert.ToInt64(item),
                                    CreatedBy = userMasterId,
                                    CreatedDate = DateTime.Now,
                                    WhoAssign = userMasterId
                                }).ToList();

                                _entities.ProjectAssignies.AddRange(projectAssignys);
                                await _entities.SaveChangesAsync();
                            }

                            //Delete existing attachment and Save new attachment
                            if (data.AttachedFiles.Any())
                            {
                                var projectAttachments = await _entities.ProjectAttachments.Where(s => s.ProjectId == data.ProjectId).ToListAsync();

                                if (projectAttachments.Any())
                                {
                                    _entities.ProjectAttachments.RemoveRange(projectAttachments);
                                    await _entities.SaveChangesAsync();
                                }

                                projectAttachments = new List<ProjectAttachment>();

                                projectAttachments = data.AttachedFiles.Select(item => new ProjectAttachment
                                {
                                    ProjectId = project.ProjectId,
                                    CreatedBy = userMasterId,
                                    CreatedDate = DateTime.Now,
                                    DisplayName = item.FileName,
                                    FileName = Utilities.SaveFile(item, Server.MapPath("~" + BasicProperty.ProjectAttachmentPath + project.ProjectId + "/"), Guid.NewGuid().ToString()),
                                    FileSize = item.ContentLength / 1024
                                }).ToList();

                                _entities.ProjectAttachments.AddRange(projectAttachments);
                            }

                            TempData["Success"] = "Projece updated successfully";
                        }
                        else
                        {
                            TempData["Error"] = "Request failed! Please try after some time.";
                        }
                    }
                    else
                    {
                        //Save data in project table
                        var project = new Project();
                        project.CopyProperties(data);
                        project.ProjectStatusMasterId = data.ProjectStatusMasterId;
                        project.IsActive = true;
                        project.IsDelete = false;
                        project.CreatedBy = userMasterId;
                        project.CreatedDate = DateTime.Now;
                        project.StartDate = DateTime.ParseExact(data.StartDateString, data.StartDateString.Contains('-') ? "dd-MM-yyyy" : "dd/MM/yyyy", CultureInfo.InvariantCulture);

                        if (!string.IsNullOrWhiteSpace(data.EndDateString))
                        {
                            project.EndDate = DateTime.ParseExact(data.EndDateString, data.EndDateString.Contains('-') ? "dd-MM-yyyy" : "dd/MM/yyyy", CultureInfo.InvariantCulture);
                        }
                        _entities.Projects.Add(project);
                        await _entities.SaveChangesAsync();

                        // Save assigny list HERE
                        if (data.AssignyList.Any())
                        {
                            var projectAssignys = data.AssignyList.Select(item => new ProjectAssigny
                            {
                                ProjectId = project.ProjectId,
                                AssignyId = Convert.ToInt64(item),
                                CreatedBy = userMasterId,
                                CreatedDate = DateTime.Now,
                                WhoAssign = userMasterId
                            }).ToList();

                            _entities.ProjectAssignies.AddRange(projectAssignys);
                            await _entities.SaveChangesAsync();
                        }


                        //Save attachment
                        if (data.AttachedFiles.Any())
                        {
                            var projectAttachments = data.AttachedFiles.Select(item => new ProjectAttachment
                            {
                                ProjectId = project.ProjectId,
                                CreatedBy = userMasterId,
                                CreatedDate = DateTime.Now,
                                DisplayName = item.FileName,
                                FileName = Utilities.SaveFile(item, Server.MapPath("~" + BasicProperty.ProjectAttachmentPath + project.ProjectId + "/"), Guid.NewGuid().ToString()),
                                FileSize = item.ContentLength / 1024
                            }).ToList();

                            _entities.ProjectAttachments.AddRange(projectAttachments);
                        }

                        //Save call
                        await _entities.SaveChangesAsync();

                        TempData["Success"] = "Projece added successfully";
                    }
                }
            }
            catch (Exception)
            {
                throw;
            }
            return RedirectToAction("List");
        }

        public async Task<ActionResult> List()
        {
            try
            {
                using (_entities)
                {
                    var roleMasterId = Convert.ToInt64(CookieHelper.GetCookie(CookieName.RoleMasterId));
                    var userMasterId = Convert.ToInt64(CookieHelper.GetCookie(CookieName.UserMasterId));

                    var projectsListVms = await _entities.Projects.Select(s => new ProjectsListVm
                    {
                        ProjectId = s.ProjectId,
                        Name = s.Name,
                        EndDate = s.EndDate,
                        StartDate = s.StartDate,
                        ClientName = s.ClientName,
                        ProjectStatusMasterId = s.ProjectStatusMasterId,
                        ProjectAssignyAssignies = s.ProjectAssignies
                    }).ToListAsync();

                    if (roleMasterId == (int)EnumList.Roles.Team_Leader || roleMasterId == (int)EnumList.Roles.Designer)
                    {
                        projectsListVms = projectsListVms.Where(s => s.ProjectAssignyAssignies.Any(j => j.AssignyId == userMasterId)).ToList();
                    }


                    var userMasters = await _entities.UserMasters.ToListAsync();

                    var tuple = new Tuple<List<ProjectsListVm>, List<UserMaster>>(projectsListVms, userMasters);

                    return View(tuple);
                }
            }
            catch (Exception)
            {
                throw;
            }

        }
        
        public async Task<ActionResult> Details(long id)
        {
            try
            {
                using (_entities)
                {
                    var roleMasterId = Convert.ToInt64(CookieHelper.GetCookie(CookieName.RoleMasterId));
                    var userMasterId = Convert.ToInt64(CookieHelper.GetCookie(CookieName.UserMasterId));

                    var projectsListVm = await _entities.Projects.Select(s => new ProjectsListVm
                    {
                        ProjectId = s.ProjectId,
                        Name = s.Name,
                        EndDate = s.EndDate,
                        StartDate = s.StartDate,
                        ClientName = s.ClientName,
                        ProjectStatusMasterId = s.ProjectStatusMasterId,
                        ProjectAssignyAssignies = s.ProjectAssignies,
                        BasicDescription = s.BasicDescription,
                        TagLine = s.TagLine,
                        ProjectAttachments = s.ProjectAttachments.Where(p => p.ProjectId == s.ProjectId).ToList(),
                        Budget = s.Budget,
                        LiveURL = s.LiveURL,
                        TeamMemberCount = s.TeamMemberCount,
                        ActualTeamMemberCount = s.ActualTeamMemberCount
                    }).FirstOrDefaultAsync(s => s.ProjectId == id);


                    if (roleMasterId == (int)EnumList.Roles.Team_Leader || roleMasterId == (int)EnumList.Roles.Designer)
                    {
                        //Todo: do code for filter data assigny wise
                    }

                    var userMasters = await _entities.UserMasters.ToListAsync();

                    var tuple = new Tuple<ProjectsListVm, List<UserMaster>>(projectsListVm, userMasters);

                    return View(tuple);
                }
            }
            catch (Exception)
            {
                throw;
            }
        }

        public ActionResult TimeLine()
        {
            return View();
        }
    }
}