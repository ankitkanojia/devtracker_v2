using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace repository.Helpers
{
    public static class StaticValues
    {
        
        public static string NotifyError { get; set; }
        public static string NotifySuccess { get; set; }
        public static string NotifyActionRequiredMsg { get; set; }
        
        public static string AvatarImagePath => "/Files/Avatar/";
        public static string DefaultAvatarImagePath => "/Files/Avatar/avatar.png";
        public static string AccountIcoImagePath => "/Files/AccountIco/";
        public static string AttachmentsPath => "/Files/Attachments/";

        public static string RoleOwner => "Owner";
        public static string RoleOwnerId => "44D28071-363B-45F2-8C2A-769AC0B56B4A";
        public static string RoleProjectManager => "Project Manager";
        public static string RoleProjectManagerId => "44D28071-363B-45F2-8C2A-769AC0B56B4B";
        public static string RoleTeamLeader => "Team Leader";
        public static string RoleTeamLeaderId => "44D28071-363B-45F2-8C2A-769AC0B56B4C";
        public static string RoleUser => "User";
        public static string RoleUserId => "44D28071-363B-45F2-8C2A-769AC0B56B4D";

        public static string CookieSafeSpent => "SafeSpent";
        public static string CookieProfileImage => "ProfileImage";
        public static string CookieFullName => "CookieFullName";
        public static string CookieRoleName => "CookieRoleName";

        public static string EmailLinkLogo => "http://i65.tinypic.com/j5gppd.jpg";
        public static string EmailLinkFacebook => "#";
        public static string EmailLinkTwitter => "#";
        public static string EmailLinkGPlus => "#";
        public static string EmailPhoneNumber => "+91 82380 45161";
        public static string EmailSiteEmail => "info@riowebs.com";
        public static string EmailSiteUrl => "https://www.riowebs.com/";

        public static string CopyRights => DateTime.UtcNow.Year.ToString();
        public static string SiteName => "Riowebs";
        public static string SiteEmail => "info@riowebs.com";
    }
}
