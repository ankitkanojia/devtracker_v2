using System.ComponentModel.DataAnnotations;

namespace repository.Helpers
{
    public class MustBeTrueAttribute : ValidationAttribute
    {
        public override bool IsValid(object value)
        {
            return value is bool b && b;
        }
    }
}