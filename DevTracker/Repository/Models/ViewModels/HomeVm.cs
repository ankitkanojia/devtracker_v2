using System.ComponentModel.DataAnnotations;

namespace Repository.Models.ViewModels
{

    public class ResetPasswordVm
    {
        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public string RetypePassword { get; set; }

        
        public long UserMasterId { get; set; }
    }

    public class RecoverPasswordVm
    {
        [Required]
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }
    }

    public class AccountVm
    {
        [DataType(DataType.Password)]
        public string PasswordLogin { get; set; }

        [DataType(DataType.EmailAddress)]
        public string EmailLogin { get; set; }

        public long UserMasterId { get; set; }

        public string ReturnUrl { get; set; }

        public bool IsRemember { get; set; }

        [DataType(DataType.Text)]
        public string Name { get; set; }

        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }

        [DataType(DataType.Password)]
        public string Password { get; set; }

        [DataType(DataType.Password)]
        public string RetypePassword { get; set; }

        [StringLength(10, MinimumLength = 10)]
        [DataType(DataType.Text)]
        public string Mobile { get; set; }

        public bool IsMailAccountDetails { get; set; }

        [Required]
        public bool IsTermsAndCondition { get; set; }
    }
}
