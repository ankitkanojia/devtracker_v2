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
                    if (roleMasterId == (int)EnumList.Roles.Owner)
                    {
                        chatList = await _entities.CommentMasters.OrderBy(m => m.TaskMasterId).Select(p => new ChatVm
                        {
                            CreatedDate = p.CreatedDate,
                            UserName = p.UserMaster.Name,
                            ProfileImage = (!string.IsNullOrEmpty(p.UserMaster.Profile) ? BasicProperty.ProfilePath + p.UserMaster.Profile : "/Content/img/userIcon.jpg"),
                            Message = p.Message,
                            ProjectId = p.ProjectId,
                            UserMasterId = p.UserMasterId,
                            Side = (p.UserMasterId != userMasterId) ? "sent" : "replies"
                        }).Take(10).ToListAsync();
                    }
                    else
                    {
                        var taskIds = await _entities.CommentMasters.Where(m => m.UserMasterId == userMasterId).Select(p => p.TaskMasterId).Distinct().ToListAsync();
                        chatList = await _entities.CommentMasters.Where(k => taskIds.Contains(k.TaskMasterId)).OrderBy(m => m.TaskMasterId).Select(p => new ChatVm
                        {
                            CreatedDate = p.CreatedDate,
                            UserName = p.UserMaster.Name,
                            ProfileImage = (!string.IsNullOrEmpty(p.UserMaster.Profile) ? BasicProperty.ProfilePath + p.UserMaster.Profile : "/Content/img/userIcon.jpg"),
                            Message = p.Message,
                            ProjectId = p.ProjectId,
                            UserMasterId = p.UserMasterId,
                            Side = (p.UserMasterId != userMasterId) ? "sent" : "replies"
                        }).Take(10).ToListAsync();
                    }
                }
                else
                {
                    if (roleMasterId == (int)EnumList.Roles.Owner)
                    {
                        chatList = await _entities.CommentMasters.Where(k => k.ProjectId == projectId).OrderBy(m => m.TaskMasterId).Select(p => new ChatVm
                        {
                            CreatedDate = p.CreatedDate,
                            UserName = p.UserMaster.Name,
                            ProfileImage = (!string.IsNullOrEmpty(p.UserMaster.Profile) ? BasicProperty.ProfilePath + p.UserMaster.Profile : "/Content/img/userIcon.jpg"),
                            Message = p.Message,
                            ProjectId = p.ProjectId,
                            UserMasterId = p.UserMasterId,
                            Side = (p.UserMasterId != userMasterId) ? "sent" : "replies"
                        }).ToListAsync();
                    }
                    else
                    {
                        var taskIds = await _entities.CommentMasters.Where(m => m.UserMasterId == userMasterId).Select(p => p.TaskMasterId).Distinct().ToListAsync();
                        chatList = await _entities.CommentMasters.Where(k => taskIds.Contains(k.TaskMasterId) && k.ProjectId == projectId).OrderBy(m => m.TaskMasterId).Select(p => new ChatVm
                        {
                            CreatedDate = p.CreatedDate,
                            UserName = p.UserMaster.Name,
                            ProfileImage = (!string.IsNullOrEmpty(p.UserMaster.Profile) ? BasicProperty.ProfilePath + p.UserMaster.Profile : "/Content/img/userIcon.jpg"),
                            Message = p.Message,
                            ProjectId = p.ProjectId,
                            UserMasterId = p.UserMasterId,
                            Side = (p.UserMasterId != userMasterId) ? "sent" : "replies"
                        }).ToListAsync();
                    }
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
        public async Task<JsonResult> GetChatList(FilterChatVm data)
        {
            try
            {
                using (_entities = new DBEntities())
                {
                    var chatList = new List<ChatVm>();
                    var userMasterId = Convert.ToInt64(CookieHelper.GetCookie(CookieName.UserMasterId));
                    if (data.TaskMasterId == 0)
                    {

                    }
                    else
                    {
                        chatList = await _entities.CommentMasters.Where(m => m.TaskMasterId == data.TaskMasterId && m.ProjectId == data.ProjectId && m.CreatedDate == data.ChatDate).Select(p => new ChatVm
                        {
                            CreatedDate = p.CreatedDate,
                            UserName = p.UserMaster.Name,
                            ProfileImage = p.UserMaster.Profile,
                            Message = p.Message,
                            ProjectId = p.ProjectId,
                            UserMasterId = p.UserMasterId,
                            Side = (p.UserMasterId != userMasterId) ? "sent" : "replies",
                        }).ToListAsync();
                    }
                    if (chatList.Count == 0)
                        chatList = new List<ChatVm>();
                    return Json(new { status = true, chatList, JsonRequestBehavior.AllowGet });
                }
            }
            catch (Exception)
            {
                return Json(new { status = false, JsonRequestBehavior.AllowGet });
            }
        }

        [HttpPost]
        public async Task<JsonResult> SendMessage(ChatVm data)
        {
            try
            {
                using (_entities = new DBEntities())
                {
                    var userMasterId = Convert.ToInt64(CookieHelper.GetCookie(CookieName.UserMasterId));
                    if (data.ProjectId == 0)
                    {

                    }
                    else
                    {
                        var taskModule = await _entities.TaskMasters.FindAsync(data.TaskMasterId);
                        CommentMaster commentMaster = new CommentMaster();
                        commentMaster.Message = data.Message;
                        commentMaster.TaskMasterId = data.TaskMasterId;
                        commentMaster.ProjectId = taskModule.ProjectId;
                        commentMaster.IsDelete = false;
                        commentMaster.CreatedDate = data.ChatDate;
                        commentMaster.UserMasterId = userMasterId;
                         _entities.CommentMasters.Add(commentMaster);
                        await _entities.SaveChangesAsync();
                    }
                    return Json(new { status = true, JsonRequestBehavior.AllowGet });
                }
            }
            catch (Exception)
            {
                return Json(new { status = false, JsonRequestBehavior.AllowGet });
            }
        }

        public ActionResult TaskChat()
        {
            return View();
        }
    }
}