using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Repository.Helpers;
using Repository.Models;

namespace DevTracker.WebHelpers
{
    public static class SelectListFunction
    {
        public static IEnumerable<SelectListItem> GetAssignyList()
        {
            try
            {
                using (var entity = new DBEntities())
                {
                    var response = new List<SelectListItem>
                    {
                        new SelectListItem
                        {
                            Text = "Select Assigny",
                            Value = string.Empty
                        }
                    };

                    var userMaster = entity.UserMasters.Where(s => s.RoleMasterId != (int)EnumList.Roles.Owner).ToList();

                    if (!userMaster.Any()) return response;

                    foreach (var item in userMaster)
                    {
                        var group = new SelectListGroup();
                        group.Name = item.RoleMaster.RoleName;
                        var single = new SelectListItem
                        {
                            Text = item.Name,
                            Value = item.UserMasterId.ToString(),
                            Group = @group
                        };
                        response.Add(single);
                    }

                    return response;
                }
            }
            catch (Exception)
            {
                throw;
            }
        }

        public static IEnumerable<SelectListItem> GetRoles(long? roleMasterId)
        {
            List<SelectListItem> list;

            try
            {
                using (var db = new DBEntities())
                {
                    list = db.RoleMasters.Where(s => s.RoleMasterId != (int)EnumList.Roles.Owner).Select(s => new SelectListItem
                    {
                        Value = s.RoleMasterId.ToString(),
                        Text = s.RoleName,
                        Selected = (roleMasterId == s.RoleMasterId)
                    }).ToList();
                }
            }
            catch (Exception)
            {
                throw;
            }
            return list;
        }

        public static IEnumerable<SelectListItem> GetProjectStatus(long? projectStatusMasterId)
        {
            List<SelectListItem> list;

            try
            {
                using (var db = new DBEntities())
                {
                    list = db.ProjectStatusMasters.Select(s => new SelectListItem
                    {
                        Value = s.ProjectStatusMasterId.ToString(),
                        Text = s.Status,
                        Selected = (projectStatusMasterId == s.ProjectStatusMasterId)
                    }).ToList();
                }
            }
            catch (Exception)
            {
                throw;
            }
            return list;
        }

        public static IEnumerable<SelectListItem> GetProjects(long? projectId)
        {
            List<SelectListItem> list;

            try
            {
                using (var db = new DBEntities())
                {
                    list = db.Projects.Select(s => new SelectListItem
                    {
                        Value = s.ProjectId.ToString(),
                        Text = s.Name,
                        Selected = (projectId == s.ProjectStatusMasterId)
                    }).ToList();
                }
            }
            catch (Exception)
            {
                throw;
            }
            return list;
        }

        public static IEnumerable<SelectListItem> GetTasks(long? projectId, long? taskId)
        {
            List<SelectListItem> list;

            try
            {
                using (var db = new DBEntities())
                {
                    if (projectId != 0)
                    {
                        list = db.TaskMasters.Where(m => m.ProjectId == projectId).Select(s => new SelectListItem
                        {
                            Value = s.TaskMasterId.ToString(),
                            Text = s.Title,
                            Selected = (taskId == s.TaskMasterId)
                        }).ToList();
                    }
                    else
                    {
                        list = db.TaskMasters.Select(s => new SelectListItem
                        {
                            Value = s.TaskMasterId.ToString(),
                            Text = s.Title,
                            Selected = (taskId == s.TaskMasterId)
                        }).ToList();
                    }
                }
            }
            catch (Exception)
            {
                throw;
            }
            return list;
        }


        public static IEnumerable<SelectListItem> GetTaskType(long? taskTypeMasterId)
        {
            List<SelectListItem> list;

            try
            {
                using (var db = new DBEntities())
                {
                    list = db.TaskTypeMasters.Select(s => new SelectListItem
                    {
                        Value = s.TaskTypeMasterId.ToString(),
                        Text = s.Type,
                        Selected = (taskTypeMasterId == s.TaskTypeMasterId)
                    }).ToList();
                }
            }
            catch (Exception)
            {
                throw;
            }
            return list;
        }

        public static IEnumerable<SelectListItem> GetUsers(long? userMasterId)
        {
            List<SelectListItem> list;

            try
            {
                using (var db = new DBEntities())
                {
                    list = db.UserMasters.Where(s=>s.IsActive && !s.IsDelete).Select(s => new SelectListItem
                    {
                        Value = s.UserMasterId.ToString(),
                        Text = s.Name,
                        Selected = (userMasterId == s.UserMasterId)
                    }).ToList();
                }
            }
            catch (Exception)
            {
                throw;
            }
            return list;
        }

        public static IEnumerable<SelectListItem> GetPriority(long? priorityMasterId)
        {
            List<SelectListItem> list;

            try
            {
                using (var db = new DBEntities())
                {
                    list = db.PriorityMasters.Where(s => s.IsActive && !s.IsDelete).Select(s => new SelectListItem
                    {
                        Value = s.PriorityMasterId.ToString(),
                        Text = s.Name,
                        Selected = (priorityMasterId == s.PriorityMasterId)
                    }).ToList();
                }
            }
            catch (Exception)
            {
                throw;
            }
            return list;
        }

        public static IEnumerable<SelectListItem> GetTaskStatus(long? taskStatusMasterId)
        {
            List<SelectListItem> list;

            try
            {
                using (var db = new DBEntities())
                {
                    list = db.TaskStatusMasters.Where(s => s.IsActive && !s.IsDelete).Select(s => new SelectListItem
                    {
                        Value = s.TaskStatusMasterId.ToString(),
                        Text = s.Status,
                        Selected = (taskStatusMasterId == s.TaskStatusMasterId)
                    }).ToList();
                }
            }
            catch (Exception)
            {
                throw;
            }
            return list;
        }

        public static IEnumerable<SelectListItem> GetTaskCategory(long? taskCategoryId)
        {
            List<SelectListItem> list;

            try
            {
                using (var db = new DBEntities())
                {
                    list = db.TaskCategories.Where(s => s.IsActive && !s.IsDelete).Select(s => new SelectListItem
                    {
                        Value = s.TaskCategoryId.ToString(),
                        Text = s.Name,
                        Selected = (taskCategoryId == s.TaskCategoryId)
                    }).ToList();
                }
            }
            catch (Exception)
            {
                throw;
            }
            return list;
        }

    }
}