using System;
using System.Web;

namespace Repository.Helpers
{
    public static class CookieHelper
    {

        public static void SetCookie(string key, string value, int expiresHour)
        {
            if (HttpContext.Current.Request.Cookies[key] != null)
            {
                var cookieOld = HttpContext.Current.Request.Cookies[key];
                cookieOld.Expires = DateTime.Now.AddHours(expiresHour);
                cookieOld.Value = value;
                HttpContext.Current.Response.Cookies.Add(cookieOld);
            }
            else
            {
                var cookie = new HttpCookie(key)
                {
                    Value = value,
                    Expires = DateTime.Now.AddHours(expiresHour)
                };
                HttpContext.Current.Response.Cookies.Add(cookie);
            }
        }

        public static string GetCookie(string key)
        {
            try
            {
                if (string.IsNullOrEmpty(key)) return string.Empty;
                if (HttpContext.Current.Request.Cookies[key] == null) return string.Empty;
                var cookie = HttpContext.Current.Request.Cookies.Get(key);

                return cookie == null ? string.Empty : cookie.Value;
            }
            catch (Exception)
            {
                return string.Empty;
            }
        }

        public static void RemoveCookie(string key)
        {
            if (HttpContext.Current.Request.Cookies[key] == null) return;
            var cookie = new HttpCookie(key) { Expires = DateTime.Now.AddDays(-1d) };
            HttpContext.Current.Response.Cookies.Add(cookie);
        }

        public static void RemoveCookieAll()
        {
            var allCookie = HttpContext.Current.Request.Cookies.AllKeys;

            foreach (var cookie in allCookie)
            {
                var httpCookie = HttpContext.Current.Response.Cookies[cookie];
                if (httpCookie != null)
                    httpCookie.Expires = DateTime.Now.AddDays(-1d);
            }
        }


    }
}
