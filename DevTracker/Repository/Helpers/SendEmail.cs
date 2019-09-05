using System;
using System.Collections.Generic;
using System.Linq;
using Repository.Models;
//using static System.Web.Mail.MailFormat;
//using static System.Web.Mail.SmtpMail;
using SendGrid;
using SendGrid.Helpers.Mail;


namespace Repository.Helpers
{
    public static class SendEmail
    {
        public static bool Templete(Dictionary<string, string> replacement, string to, long emailTempleteId)
        {
            var response = false;

            try
            {
                using (var db = new DBEntities())
                {
                    //Get email templete data
                    var emailTemplete = db.EmailTempletes.FirstOrDefault(s => s.EmailTempleteId == emailTempleteId && s.IsActive && !s.IsDelete);

                    if (emailTemplete != null)
                    {
                        //Replace Hash Tag with value
                        replacement.ToList().ForEach(x =>
                        {
                            emailTemplete.Subject = emailTemplete.Subject.Replace(x.Key, x.Value);
                            emailTemplete.Body = emailTemplete.Body.Replace(x.Key, x.Value);
                        });

                        var apiKey = "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";
                        var client = new SendGridClient(apiKey);
                        var from = new EmailAddress("help@riowebs.com", "DevTacker");
                        var subject = emailTemplete.Subject;
                        var toAddress = new EmailAddress(to, "Valued User");
                        var plainTextContent = string.Empty;
                        var htmlContent = emailTemplete.Body;
                        var msg = MailHelper.CreateSingleEmail(from, toAddress, subject, plainTextContent, htmlContent);
                        var rsesponse = client.SendEmailAsync(msg);


                        ////Create mail object with credentials
                        //var message = new System.Web.Mail.MailMessage();
                        //message.Fields.Add("http://schemas.microsoft.com/cdo/configuration/smtpserver", WebConfigurationManager.AppSettings["smtpserver"]);
                        //message.Fields.Add("http://schemas.microsoft.com/cdo/configuration/sendusing", "2");
                        //message.Fields.Add("http://schemas.microsoft.com/cdo/configuration/smtpserverport", WebConfigurationManager.AppSettings["smtpserverport"]);
                        //message.Fields.Add("http://schemas.microsoft.com/cdo/configuration/smtpusessl", WebConfigurationManager.AppSettings["smtpusessl"]);
                        //message.Fields.Add("http://schemas.microsoft.com/cdo/configuration/smtpauthenticate", "1");
                        //message.Fields.Add("http://schemas.microsoft.com/cdo/configuration/sendusername", WebConfigurationManager.AppSettings["sendusername"]);
                        //message.Fields.Add("http://schemas.microsoft.com/cdo/configuration/sendpassword", WebConfigurationManager.AppSettings["sendpassword"]);

                        ////Preparing the message object....
                        //message.From = emailTemplete.FromEmail;
                        //message.To = to;
                        //message.Subject = emailTemplete.Subject;
                        //message.BodyFormat = Html;
                        //message.Body = emailTemplete.Body;

                        //if (!string.IsNullOrWhiteSpace(emailTemplete.BccEmail))
                        //    message.Bcc = emailTemplete.BccEmail;

                        //SmtpServer = "smtp.gmail.com";
                        //Send(message);

                        response = true;
                    }

                }
            }
            catch (Exception)
            {
                response = false;
            }
            return response;
        }
    }
}
