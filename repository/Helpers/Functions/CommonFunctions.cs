using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using repository.Models;

namespace repository.Helpers.Functions
{
    public static class CommonFunctions
    {
        public static async Task<EmailTemplete> GetEmailTemplate(long templateId, bool isDefaultReplacementInsert,
         Dictionary<string, string> replacement = null)
        {
            try
            {
                using (var db = new DBEntities())
                {
                    var template = await db.EmailTempletes.FindAsync(templateId);

                    if (template == null) return null;

                    if (replacement != null && replacement.Any())
                    {
                        template.Body = replacement.Aggregate(template.Body,
                            (current, value) => current.Replace(value.Key, value.Value));

                        if (isDefaultReplacementInsert)
                        {
                            var defaultReplacement = new Dictionary<string, string>
                            {
                                {"#link-logo#", StaticValues.EmailLinkLogo},
                                {"#link-facebook#", StaticValues.EmailLinkFacebook},
                                {"#link-twitter#", StaticValues.EmailLinkTwitter},
                                {"#link-gplus#", StaticValues.EmailLinkGPlus},
                                {"#phone-number#", StaticValues.EmailPhoneNumber},
                                {"#site-email#", StaticValues.EmailSiteEmail},
                                {"#site-url#", StaticValues.EmailSiteUrl}
                            };

                            template.Body = defaultReplacement.Aggregate(template.Body,
                                (current, value) => current.Replace(value.Key, value.Value));
                        }
                    }

                    return template;
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }

        public static string GetGreetings()
        {
            string response;

            var currentTime = Utilities.GetCurrentIndianTime();

            if (currentTime.TimeOfDay >= new TimeSpan(05, 00, 00) && currentTime.TimeOfDay <= new TimeSpan(11, 00, 00))
                response = "Good Morning!";
            else if (currentTime.TimeOfDay >= new TimeSpan(11, 00, 00) &&
                     currentTime.TimeOfDay <= new TimeSpan(14, 00, 00))
                response = "Good Noon!";
            else if (currentTime.TimeOfDay >= new TimeSpan(14, 00, 00) &&
                     currentTime.TimeOfDay <= new TimeSpan(19, 00, 00))
                response = "Good Afternoon!";
            else if (currentTime.TimeOfDay >= new TimeSpan(19, 00, 00) &&
                     currentTime.TimeOfDay <= new TimeSpan(21, 00, 00))
                response = "Good Evening!";
            else
                response = "Welcome!";

            return response;
        }
    }
}
