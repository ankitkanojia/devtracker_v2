using Repository.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Repository.Models.ViewModels;
using System.Threading.Tasks;
using System.Data.Entity;
using Repository.Helpers;

namespace DevTracker.Controllers
{
    public class ChatController : Controller
    {
        private DBEntities _entities = new DBEntities();

        // get method to get project wise chat list
        // it will get default 10 record(s) when project id is not define
        // property use side in list for when userId and chatuserId both are same then we need to show them on right side other wise on other user's chat on left side
        // property IsBoxVisible use for when user is OWNER then send message box is disabled
        public async Task<ActionResult> ProjectChat(long projectId = 0)
        {
            try
            {
                var chatList = new List<ChatVm>();
                var userMasterId = Convert.ToInt64(CookieHelper.GetCookie(CookieName.UserMasterId));
                var roleMasterId = Convert.ToInt64(CookieHelper.GetCookie(CookieName.RoleMasterId));

                if (projectId == 0)
                {
                    var chatMaster = await _entities.ChatMasters.OrderByDescending(m => m.CreatedDate).Select(p => new ChatVm
                    {
                        CreatedDate = p.CreatedDate,
                        UserName = p.UserMaster.Name,
                        ProfileImage = p.UserMaster.Profile,
                        Message = p.Message,
                        ProjectId = p.ProjectId,
                        UserMasterId = p.UserMasterId,
                        Side = (p.UserMasterId != userMasterId) ? "left" : "right",
                        IsBoxVisible = (roleMasterId != (int)EnumList.Roles.Owner)
                    }).Take(10).ToListAsync();
                }
                else
                {
                    var chatMaster = await _entities.ChatMasters.Where(k => k.ProjectId == projectId).OrderByDescending(m => m.CreatedDate).Select(p => new ChatVm
                    {
                        CreatedDate = p.CreatedDate,
                        UserName = p.UserMaster.Name,
                        ProfileImage = p.UserMaster.Profile,
                        Message = p.Message,
                        ProjectId = p.ProjectId,
                        UserMasterId = p.UserMasterId,
                        Side = (p.UserMasterId != userMasterId) ? "left" : "right",
                        IsBoxVisible = (roleMasterId != (int)EnumList.Roles.Owner)
                    }).ToListAsync();
                }
                if (chatList.Count == 0)
                    chatList = new List<ChatVm>();
                return View(chatList);
            }
            catch (Exception)
            {
                throw;
            }
        }

        [HttpPost]
        public ActionResult ProjectChat()
        {
            return View();
        }

        public ActionResult TaskChat()
        {
            return View();
        }
    }
}