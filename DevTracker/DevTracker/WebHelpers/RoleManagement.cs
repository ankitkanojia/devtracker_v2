using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web.Mvc;
using Newtonsoft.Json;
using Repository.Models;
using Repository.Models.ViewModels;

namespace DevTracker.WebHelpers
{
    public static class RoleManagement
    {
        public static IEnumerable<RoleMaster> GetRoleList()
        {
            try
            {
                using (var db = new DBEntities())
                {
                    var roles = db.RoleMasters.ToList();
                    return roles;
                }
            }
            catch
            {
                throw;
            }
        }

        public static IEnumerable<MenuVM> GetPagesForSelectedRole(long userRoleId)
        {
            try
            {
                using (var db = new DBEntities())
                {

                    var lstMenu = new List<MenuVM>();
                    MenuVM objMenu;

                    var lstResult = (from link in db.Links
                                     join module in db.Modules on link.ModuleId equals module.ModuleId
                                     where link.IsVisible == true
                                     select new
                                     {
                                         link.LinkId,
                                         link.LinkName,
                                         link.Action,
                                         link.Controller,
                                         link.ModuleId,
                                         link.Module,
                                         link.IsDefault,
                                         link.IsSingle,
                                         module.CssClass,
                                         module.ViewIndex
                                     }).OrderBy(s => s.ViewIndex).ToList();

                    foreach (var item in lstResult.ToList())
                    {
                        objMenu = new MenuVM
                        {
                            LinkID = item.LinkId,
                            LinkName = item.LinkName,
                            Action = item.Action,
                            Controller = item.Controller,
                            ModuleID = item.ModuleId,
                            ModuleName = item.Module.ModuleName,
                            IsDefault = item.IsDefault,
                            IsSingle = item.IsSingle,
                            CssClass = item.CssClass
                        };

                        var firstOrDefault = db.UserRights.FirstOrDefault(x => x.LinkId == objMenu.LinkID && x.RoleMasterId == userRoleId);
                        if (firstOrDefault != null)
                        {
                            objMenu.IsAccess = firstOrDefault.IsAccess;
                            objMenu.UserRoleID = firstOrDefault.RoleMasterId;
                        }
                           

                        lstMenu.Add(objMenu);
                    }

                    return lstMenu;
                }
            }
            catch
            {
                throw;
            }
        }

        public static long ConfigureRoleTransaction(FormCollection frmCollection, long createdBy)
        {
            var userRoleId = Convert.ToInt64(frmCollection["hdnUserRoleID"]);
            try
            {
                using (var db = new DBEntities())
                {
                    //Delete existing rights for the selected User Role
                    var rights = from ur in db.UserRights
                                 where ur.RoleMasterId == userRoleId
                                 select ur;
                    db.UserRights.RemoveRange(rights);
                    db.SaveChanges();

                    //We have the checked checkbox list HERE
                    for (var i = 1; i < frmCollection.Count; i++)
                    {

                        var linkId = Convert.ToInt64(frmCollection.GetKey(i).Split('_')[1]);
                        var userRight = db.UserRights.FirstOrDefault(s => s.LinkId == linkId && s.RoleMasterId == userRoleId);

                        if (userRight != null)
                        {
                            //Update rights as per new configurtation for the selected User Role
                            userRight.IsAccess = true;
                            db.Entry(userRight).State = EntityState.Modified;
                            db.SaveChanges();
                        }
                        else
                        {
                            //Insert rights as per new configurtation for the selected User Role
                            userRight = new UserRight
                            {
                                RoleMasterId = userRoleId,
                                LinkId = linkId,
                                CreatedBy = createdBy,
                                CreatedDate = DateTime.Now,
                                IsAccess = true
                            };
                            db.UserRights.Add(userRight);
                            db.SaveChanges();
                        }
                    }
                }
            }
            catch
            {
                throw;
            }
            return userRoleId;
        }

        public static string GetRoleNameById(int userRoleId)
        {
            try
            {
                object roleName;
                using (var db = new DBEntities())
                {
                    roleName = (from a in db.RoleMasters
                                where a.RoleMasterId == userRoleId
                                select a.RoleName).FirstOrDefault();
                }
                return Convert.ToString(roleName);
            }
            catch
            {
                throw;
            }
        }

        public static void ChangeUserRoleStatus(int userRoleId)
        {
            try
            {
                using (var db = new DBEntities())
                {

                    var rm = (from a in db.RoleMasters
                                     where a.RoleMasterId == userRoleId
                                     select a).FirstOrDefault();

                    db.Entry(rm).State = EntityState.Modified;
                    db.SaveChanges();
                }
            }
            catch
            {
                throw;
            }
        }

        public static string GetMenu(long roleId)
        {
            var response = string.Empty;

            try
            {
                //var menuItems = GetPagesForSelectedRole(roleId).ToList();
                var menuItems = GetPagesForSelectedRole(roleId).Where(s => s.UserRoleID == roleId).ToList();

                response = JsonConvert.SerializeObject(menuItems);

                return response;
            }
            catch
            {
                return response;
            }
        }

    }
}