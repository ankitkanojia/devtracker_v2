using System;
using System.Globalization;
using System.IO;
using System.Web;

namespace repository.Helpers
{
    public static class Utilities
    {
        public static bool IsDateContains(string str)
        {
            string[] formats =
            {
                "dd-MMM-yyyy", "M/d/yyyy", "M/d/yyyy", "MM/dd/yyyy", "M/d/yyyy", "M/d/yyyy", "M/d/yyyy", "M/d/yyyy",
                "M/d/yyyy", "MM/dd/yyyy", "M/dd/yyyy"
            };
            return DateTime.TryParseExact(str, formats, CultureInfo.InvariantCulture, DateTimeStyles.None, out _);
        }

        public static DateTime ToCustomDateTime(this string str)
        {
            string[] formats =
            {
                "dd-MMM-yyyy", "M/d/yyyy", "M/d/yyyy", "MM/dd/yyyy", "M/d/yyyy", "M/d/yyyy", "M/d/yyyy", "M/d/yyyy",
                "M/d/yyyy", "MM/dd/yyyy", "M/dd/yyyy"
            };

            foreach (var item in formats)
            {
                var x = DateTime.TryParseExact(str, item, CultureInfo.InvariantCulture, DateTimeStyles.None, out _);

                if (x) return DateTime.ParseExact(str, item, null);
            }

            return new DateTime();
        }

        public static bool IsAmountContains(string str)
        {
            if (string.IsNullOrWhiteSpace(str)) return false;

            var cLastCharacter = str[str.Length - 1];
            if (!char.IsNumber(cLastCharacter)) str = str.Remove(str.Length - 1);

            if (decimal.TryParse(str, out _))
            {
                return true;
            }

            foreach (var c in str)
                if (c < '0' || c > '9')
                    return false;
            return true;
        }

        public static decimal ToCustomAmount(this string str)
        {
            var cLastCharacter = str[str.Length - 1];
            if (!char.IsNumber(cLastCharacter)) str = str.Remove(str.Length - 1);

            return Convert.ToDecimal(str);
        }

        public static string GetLast(this string source, int tailLength)
        {
            string lastFour;

            if (tailLength >= source.Length)
                lastFour = source;
            lastFour = source.Substring(source.Length - tailLength);

            return IsAmountContains(lastFour) ? lastFour : string.Empty;
        }

        public static void CopyProperties<TSelf, TSource>(this TSelf self, TSource source)
        {
            var sourceAllProperties = source.GetType().GetProperties();

            foreach (var sourceProperty in sourceAllProperties)
            {
                var selfProperty = self.GetType().GetProperty(sourceProperty.Name);
                if (selfProperty == null) continue;
                var sourceValue = sourceProperty.GetValue(source, null);
                selfProperty.SetValue(self, sourceValue, null);
            }
        }

        public static string SaveFile(HttpPostedFileBase file, string physicalPath, string deleteFilePath)
        {
            try
            {
                //Check directory exis or not
                if (!Directory.Exists(physicalPath)) Directory.CreateDirectory(physicalPath);

                //Check file is exist or not  
                if (!string.IsNullOrWhiteSpace(deleteFilePath) && File.Exists(deleteFilePath))
                    //Delete Existing file
                    File.Delete(deleteFilePath);

                //Save new image and update user data
                var filename = string.Concat(Guid.NewGuid(), Path.GetExtension(file.FileName));
                var savePath = Path.Combine(physicalPath, filename);
                file.SaveAs(savePath);

                return filename;
            }
            catch (Exception e)
            {
                return string.Empty;
            }
        }

        public static DateTime ConvertTimeZone(string fromZone, string toZone, DateTime inputDate)
        {
            var response = inputDate;

            try
            {
                var fromTimeZone = TimeZoneInfo.FindSystemTimeZoneById(fromZone);
                var isDaylightFrom = fromTimeZone.IsDaylightSavingTime(inputDate);

                var utcDateTime = Convert.ToDateTime(inputDate).Subtract(fromTimeZone.BaseUtcOffset);
                if (isDaylightFrom)
                    utcDateTime = utcDateTime.AddHours(-1);

                var toTimeZone = TimeZoneInfo.FindSystemTimeZoneById(toZone);
                response = TimeZoneInfo.ConvertTimeFromUtc(utcDateTime, toTimeZone);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return response;
        }

        public static DateTime GetCurrentIndianTime()
        {
            var toTimeZone = TimeZoneInfo.FindSystemTimeZoneById("India Standard Time");
            var response = TimeZoneInfo.ConvertTimeFromUtc(DateTime.UtcNow, toTimeZone);
            return response;
        }
    }
}
