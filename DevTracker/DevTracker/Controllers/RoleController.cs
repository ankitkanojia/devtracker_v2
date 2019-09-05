using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using DevTracker.WebHelpers;
using Repository.Helpers;
using Repository.Models;
using Repository.Models.ViewModels;

namespace DevTracker.Controllers
{
    [CheckAuthorization]
    public class RoleController : Controller
    {
        private DBEntities _entities = new DBEntities();

        public ActionResult List()
        {
            try
            {
                //We dont need any changes for Owner so we append where condition for that.
                var roleMasterId = Convert.ToInt64(CookieHelper.GetCookie(CookieName.RoleMasterId));

                var roles = RoleManagement.GetRoleList().Where(s => s.RoleMasterId != roleMasterId).ToList();
                return View(roles);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public ActionResult Configuration(int id = 0)
        {
            try
            {
                if (id == 0)
                    return HttpNotFound();

                var menuVMs = RoleManagement.GetPagesForSelectedRole(id).ToList();
                ViewBag.RoleID = id;
                ViewBag.RoleName = RoleManagement.GetRoleNameById(id);

                return View(menuVMs);

            }
            catch (Exception e)
            {
                throw;
            }
        }

        [HttpPost, ValidateInput(false)]
        public ActionResult Configuration(FormCollection frmCollection)
        {
            try
            {
                var createdBy = Convert.ToInt64(CookieHelper.GetCookie(CookieName.UserMasterId));
                var userRoleId = RoleManagement.ConfigureRoleTransaction(frmCollection, createdBy);

                //Create Current Menu
                Session.Remove("Menu");

                //START | Bind A New Menu HERE | Add | Suchit Khunt | 30052016
                var roleId = Convert.ToInt64(CookieHelper.GetCookie(CookieName.RoleMasterId));

                //If We Found owner Then We Return ZERO.. Coz If Role ID is ZERO then it returns every Links
                if (roleId == (int)EnumList.Roles.Owner)
                    roleId = 0;

                var menu = RoleManagement.GetMenu(roleId);
                Session["Menu"] = menu;

                //END | Bind A New Menu HERE | Add | Suchit Khunt | 30052016

                //return RedirectToAction("ConfigureRole");
                TempData["Success"] = "Configuration updated successfully";

                return RedirectToAction("Configuration", "Role", new { id = userRoleId });
            }
            catch
            {
                throw;
            }
        }
    }
}