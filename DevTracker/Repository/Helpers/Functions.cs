using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Repository.Models;

namespace Repository.Helpers
{
    public static class Functions
    {
        public static bool SaveActivity(string title, string description)
        {
            var responce = false;

            try
            {
                using (var entity = new DBEntities())
                {
                    var userMasterId = Convert.ToInt64(CookieHelper.GetCookie(CookieName.UserMasterId));

                    var activity = new Activity
                    {
                        CreatedDate = DateTime.Now,
                        IsDelete =  false,
                        Description = description,
                        Title = title,
                        UserMasterId = userMasterId
                    };

                    responce = true;
                }
            }
            catch
            {
                responce = false;
            }

            return responce;
        }
    }
}
