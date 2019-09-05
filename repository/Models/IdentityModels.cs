using System;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;

namespace repository.Models
{
    public class ApplicationUser : IdentityUser
    {
        public string FullName { get; set; }
        public string ProfileImage { get; set; }
        public string SkypeId { get; set; }
        public string CompanyName { get; set; }
        public string Bio { get; set; }
        public bool IsActive { get; set; }
        public string Gender { get; set; }
        public DateTime? DateOfBirth { get; set; }
        public string FacebookLink { get; set; }
        public string TwitterLink { get; set; }
        public string LinkedInLink { get; set; }
        public string UserDefine1 { get; set; }
        public string UserDefine2 { get; set; }
        public string UserDefine3 { get; set; }

        public async Task<ClaimsIdentity> GenerateUserIdentityAsync(UserManager<ApplicationUser> manager)
        {
            // Note the authenticationType must match the one defined in CookieAuthenticationOptions.AuthenticationType
            var userIdentity = await manager.CreateIdentityAsync(this, DefaultAuthenticationTypes.ApplicationCookie);
            // Add custom user claims here
            return userIdentity;
        }
    }

    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext()
            : base("DefaultConnection", false)
        {
        }

        public static ApplicationDbContext Create()
        {
            return new ApplicationDbContext();
        }
    }
}