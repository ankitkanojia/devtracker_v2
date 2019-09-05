using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace repository.Helpers
{
    public static class ValidationMessages
    {
        public const string PasswordLength = "The {0} must be at least {2} characters long!";
        public const string ComparePassword = "The password and confirmation password do not match!";
        public const string TermsAccept = "You gotta tick the terms and condition box!";
        public const string StringLength = "Maximum {0} character allowed!";
    }

    public static class SuccessMessage
    {
        public const string Created = "Data created succssfully!";
        public const string Updated = "Data updated succssfully!";
        public const string Activated = "Record activated succssfully!";
        public const string Deactivated = "Record deactivated succssfully!";
        public const string Deleted = "Record removed succssfully!";
        public const string PasswordUpdated = "Password updated succssfully!";
        public const string DataSend = "Data send succssfully!";
        public const string DataSync = "Data sync succssfully!";
    }

    public static class ErrorMessage
    {
        public const string SessionExpired = "Session expired! Please login again!";
        public const string SomethingWentWrong = "Something went wrong! Please try after some time!";
        public const string DataNotAvailable = "Data not available!";
        public const string Unauthorized = "Unauthorized request found!";
    }

    public static class Notification
    {
        public static string Success { get; set; }
        public static string Error { get; set; }
    }
}
