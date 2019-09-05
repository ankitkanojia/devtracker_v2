using Repository.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Mvc;
using DevTracker.WebHelpers;
using Repository.Helpers;
using Repository.Models.ViewModels;

namespace DevTracker.Controllers
{
    [CheckAuthorization]
    public class UsersController : Controller
    {

        private readonly DBEntities _entities = new DBEntities();

        public async Task<ActionResult> List()
        {
            try
            {
                using (_entities)
                {
                    if (TempData["Success"] != null)
                        TempData["Success"] = TempData["Success"];

                    var userMasters = await _entities.UserMasters.Where(s => !s.IsDelete).ToListAsync();

                    return View(userMasters);
                }
            }
            catch (Exception)
            {
                throw;
            }
        }

        [HttpPost]
        public async Task<JsonResult> Delete(long id)
        {
            try
            {
                using (_entities)
                {
                    var userMaster = await _entities.UserMasters.FindAsync(id);

                    if (userMaster != null)
                    {
                        userMaster.IsDelete = true;
                        _entities.Entry(userMaster).State = EntityState.Modified;
                        await _entities.SaveChangesAsync();

                        return Json(new { status = true, message = "User deleted successfully." }, JsonRequestBehavior.AllowGet);
                    }

                    return Json(new { status = false, message = "Request failed! Please try after some time." }, JsonRequestBehavior.AllowGet);
                }

            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<ActionResult> MyProfile()
        {
            try
            {
                using (_entities)
                {
                    if (TempData["Success"] != null)
                        TempData["Success"] = TempData["Success"];

                    var usersVm = new UsersVm();
                    var userMasterId = Convert.ToInt64(CookieHelper.GetCookie(CookieName.UserMasterId));
                    var userMaster = await _entities.UserMasters.FindAsync(userMasterId);
                    if (userMaster != null)
                    {
                        usersVm.CopyProperties(userMaster);
                        return View(usersVm);
                    }
                    else
                    {
                        return RedirectToAction("Index", "Dashboard");
                    }
                }
            }
            catch (Exception)
            {
                throw;
            }
        }

        [HttpPost]
        public async Task<ActionResult> MyProfile(UsersVm data)
        {
            try
            {
                using (_entities)
                {
                    //Confirm that model is valid
                    if (!ModelState.IsValid)
                        return View(data);

                    var userMaster = await _entities.UserMasters.FindAsync(data.UserMasterId);

                    if (userMaster != null)
                    {
                        //If we find image then save it
                        if (data.ProfileImage != null)
                        {
                            userMaster.Profile = Utilities.SaveFile(data.ProfileImage, Server.MapPath("~" + BasicProperty.ProfilePath), Guid.NewGuid().ToString() + data.ProfileImage);
                            CookieHelper.SetCookie(CookieName.ProfileImage, BasicProperty.ProfilePath + userMaster.Profile, 36);
                        }

                        var roleMasterId = Convert.ToInt64(CookieHelper.GetCookie(CookieName.RoleMasterId));
                        var isOwnerPm = roleMasterId == (int)EnumList.Roles.Owner || roleMasterId == (int)EnumList.Roles.Project_Manager;

                        //If we found owner / pm then we allow below info for update
                        if (isOwnerPm)
                        {
                            userMaster.Name = data.Name;
                            userMaster.Mobile = data.Mobile;
                            userMaster.CompanyName = data.CompanyName;
                            userMaster.SkypeId = data.SkypeId;
                        }

                        userMaster.BioStatus = data.BioStatus;
                        userMaster.FacebookLink = data.FacebookLink;
                        userMaster.TwitterLink = data.TwitterLink;
                        userMaster.LinkedInLink = data.LinkedInLink;
                        _entities.Entry(userMaster).State = EntityState.Modified;
                        await _entities.SaveChangesAsync();

                        TempData["Success"] = "Profile updated successfully.";

                        return RedirectToAction("MyProfile");
                    }
                    else
                    {
                        TempData["Error"] = "Request failed! Please try after some time.";
                    }
                }
            }
            catch (Exception)
            {
                throw;
            }

            return View(data);
        }

        public async Task<ActionResult> Create(long id = 0)
        {
            try
            {
                using (_entities)
                {
                    var userMaster = await _entities.UserMasters.FindAsync(id) ?? new UserMaster();
                    return View(userMaster);
                }
            }
            catch (Exception)
            {
                throw;
            }
        }

        [HttpPost]
        public async Task<ActionResult> Create(UserMaster data)
        {
            try
            {
                using (_entities)
                {

                    if (data.UserMasterId > 0)
                    {
                        var userMaster = await _entities.UserMasters.FindAsync(data.UserMasterId);

                        if (userMaster != null)
                        {
                            //Update code HERE
                            userMaster.Name = data.Name;
                            userMaster.Email = data.Email;
                            userMaster.RoleMasterId = data.RoleMasterId;
                            userMaster.Mobile = data.Mobile;
                            userMaster.CompanyName = data.CompanyName;
                            userMaster.SkypeId = data.SkypeId;
                            userMaster.CreatedBy = Convert.ToInt64(CookieHelper.GetCookie(CookieName.UserMasterId));
                            userMaster.IsActive = true;
                            userMaster.IsDelete = false;
                            userMaster.CreatedDate = DateTime.Now;
                            _entities.Entry(userMaster).State = EntityState.Modified;
                            await _entities.SaveChangesAsync();

                            TempData["Success"] = "User details updated successfully";
                        }
                        else
                        {
                            return RedirectToAction("Create");
                        }
                    }
                    else
                    {
                        //Add code HERE
                        var randomStringGenerator = new Utilities.RandomStringGenerator();
                        var password = randomStringGenerator.GetRandomString(6, Utilities.RandomStringGenerator.AlphanumericCaps.ToCharArray());

                        //Create HASH & SALT
                        var salt = Utilities.GenerateSalt(32);
                        var hash = Utilities.GenerateHash(password, data.Email.Trim(), salt);

                        data.CreatedBy = Convert.ToInt64(CookieHelper.GetCookie(CookieName.UserMasterId));
                        data.IsActive = true;
                        data.IsDelete = false;
                        data.Salt = salt;
                        data.Hash = hash;
                        data.CreatedDate = DateTime.Now;
                        _entities.UserMasters.Add(data);
                        await _entities.SaveChangesAsync();

                        //Todo: Send Password Code HERE
                        //Send mail HERE
                        var replacement = new Dictionary<string, string>
                        {
                            {"#name#", data.Name},
                            {"#password#", password}
                        };

                        //Sent email from HERE
                        var isEailSent = SendEmail.Templete(replacement, data.Email, (int)EnumList.EmailTemplete.Welcome);


                        TempData["Success"] = "User details added successfully";
                    }

                    return RedirectToAction("List");
                }
            }
            catch (Exception)
            {
                throw;
            }
        }

        public ActionResult ChangePassword()
        {
            return View(new ChangePasswordVm());
        }

        [HttpPost]
        public async Task<ActionResult> ChangePassword(ChangePasswordVm data)
        {
            try
            {
                using (_entities)
                {
                    //Confirm that model is valid
                    if (!ModelState.IsValid)
                        return View(data);


                    var userMasterId = Convert.ToInt64(CookieHelper.GetCookie(CookieName.UserMasterId));

                    var userMaster = await _entities.UserMasters.FindAsync(userMasterId);

                    if (userMaster != null)
                    {
                        var oldHashValue = userMaster.Hash;
                        var salt = userMaster.Salt;

                        var isValidOldPwd = Utilities.CompareHashValue(data.OldPassword.Trim(), userMaster.Email, oldHashValue, salt);

                        if (isValidOldPwd)
                        {
                            //Create HASH & SALT
                            var newSalt = Utilities.GenerateSalt(32);
                            var hash = Utilities.GenerateHash(data.NewPassword.Trim(), userMaster.Email.Trim(), newSalt);

                            userMaster.Salt = newSalt;
                            userMaster.Hash = hash;
                            _entities.Entry(userMaster).State = EntityState.Modified;
                            await _entities.SaveChangesAsync();

                            TempData["Success"] = "Password changed successfully.";
                        }
                        else
                        {
                            TempData["Error"] = "You entered wrong old password.";
                        }
                    }
                    else
                    {
                        TempData["Error"] = "Request failed! Please try after some time.";
                    }

                    return View(new ChangePasswordVm());
                }
            }
            catch (Exception)
            {
                throw;
            }
        }

    }
}