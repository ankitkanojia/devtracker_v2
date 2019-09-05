using System;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Web;

namespace Repository.Helpers
{
    public static class Utilities
    {
        public static string SaveFile(HttpPostedFileBase file, string rootPath, string fileName)
        {
            var response = string.Empty;
            try
            {
                if (file != null)
                {
                    // Directory creation
                    if (!Directory.Exists(rootPath))
                    {
                        Directory.CreateDirectory(rootPath);
                    }

                    // Remove all the old files of same record
                    var files = new DirectoryInfo(rootPath).GetFiles();
                    if (files.Any())
                    {
                        foreach (var f in files)
                        {
                            if (f.Name.ToLower().Contains(fileName.ToLower()))
                            {
                                File.Delete(Path.Combine(rootPath, f.ToString()));
                            }
                        }
                    }

                    fileName = fileName + Path.GetExtension(file.FileName);
                    file.SaveAs(Path.Combine(rootPath, fileName));
                    response = fileName;
                }
            }
            catch (Exception)
            {
                return null;
            }
            return response;
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

        public static string Encrypt(string stringToEncode)
        {
            stringToEncode = stringToEncode.ToUpper();
            var data = Encoding.ASCII.GetBytes(stringToEncode);
            var str = Convert.ToBase64String(data);
            str = str + "@";
            return str;
        }

        public static string Decrypt(string stringToDecode)
        {
            try
            {
                stringToDecode = stringToDecode.Replace("@", "");
                var data = Convert.FromBase64String(stringToDecode);
                var str = Encoding.ASCII.GetString(data);
                return str;
            }
            catch (Exception)
            {
                return string.Empty;
            }
        }

        #region --> Random String generator 

        public class RandomStringGenerator
        {
            public const string AlphanumericCaps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
            public const string AlphaCaps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            public const string Numeric = "1234567890";
            public const string NumericCode = "120";


            readonly Random _random = new Random();

            public string GetRandomString(int length, params char[] chars)
            {
                var s = "";
                for (var i = 0; i < length; i++)
                    s += chars[_random.Next() % chars.Length];

                return s;
            }
        }
        #endregion

        #region --> Save Image 
        public static string SaveImage(HttpPostedFileBase file, string path)
        {
            var uploadedFile = string.Empty;

            if (file == null) return uploadedFile;

            uploadedFile = Guid.NewGuid().ToString().Substring(12) + Path.GetExtension(file.FileName);
            file.SaveAs(path + uploadedFile);

            return uploadedFile;
        }
        #endregion

        #region --> Generate SALT Key

        public static byte[] GenerateSalt(int maximumSaltLength)
        {
            var salt = new byte[maximumSaltLength];

            //Require NameSpace: using System.Security.Cryptography;
            using (var random = new RNGCryptoServiceProvider())
            {
                random.GetNonZeroBytes(salt);
            }

            return salt;
        }

        #endregion

        #region --> Generate HASH Using SHA512
        public static string GenerateHash(string password, string username, byte[] salt)
        {
            try
            {
                //required NameSpace: using System.Text;
                //Plain Text in Byte
                byte[] plainTextBytes = Encoding.UTF8.GetBytes(password + username);

                //Plain Text + SALT Key in Byte
                byte[] plainTextWithSaltBytes = new byte[plainTextBytes.Length + salt.Length];

                for (int i = 0; i < plainTextBytes.Length; i++)
                {
                    plainTextWithSaltBytes[i] = plainTextBytes[i];
                }

                for (int i = 0; i < salt.Length; i++)
                {
                    plainTextWithSaltBytes[plainTextBytes.Length + i] = salt[i];
                }

                HashAlgorithm hash = new SHA512Managed();
                byte[] hashBytes = hash.ComputeHash(plainTextWithSaltBytes);
                byte[] hashWithSaltBytes = new byte[hashBytes.Length + salt.Length];

                for (int i = 0; i < hashBytes.Length; i++)
                {
                    hashWithSaltBytes[i] = hashBytes[i];
                }

                for (int i = 0; i < salt.Length; i++)
                {
                    hashWithSaltBytes[hashBytes.Length + i] = salt[i];
                }

                return Convert.ToBase64String(hashWithSaltBytes);
            }
            catch
            {
                return string.Empty;
            }
        }
        #endregion

        #region --> Comapare HASH Value
        public static bool CompareHashValue(string password, string email, string oldHashValue, byte[] salt)
        {
            try
            {
                string expectedHashString = GenerateHash(password, email, salt);

                return (oldHashValue == expectedHashString);
            }
            catch
            {
                return false;
            }
        }
        #endregion
    }
}
