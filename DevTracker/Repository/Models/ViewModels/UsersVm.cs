using System;
using System.Web;

namespace Repository.Models.ViewModels
{
    public class ChangePasswordVm
    {
        public string NewPassword { get; set; }
        public string ConfirmPassword { get; set; }
        public string OldPassword { get; set; }
    }

    public class UsersVm
    {
        public HttpPostedFileBase ProfileImage { get; set; }
        public long UserMasterId { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public long RoleMasterId { get; set; }
        public string Mobile { get; set; }
        public string Profile { get; set; }
        public string CompanyName { get; set; }
        public string SkypeId { get; set; }
        public Nullable<System.DateTime> BirthDate { get; set; }
        public string BioStatus { get; set; }
        public string GoogleId { get; set; }
        public bool IsTermAccept { get; set; }
        public bool IsEmailVerified { get; set; }
        public string FacebookLink { get; set; }
        public string TwitterLink { get; set; }
        public string LinkedInLink { get; set; }
        public bool IsActive { get; set; }
        public bool IsDelete { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}
