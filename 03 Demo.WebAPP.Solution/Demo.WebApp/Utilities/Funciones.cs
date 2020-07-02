using System;
using System.Collections.Generic;
using System.Data;
using System.Globalization;
using System.Linq;
using System.Reflection;
using System.Text.RegularExpressions;

using System.Configuration;

namespace Demo.WebApp.Utilities
{
    public static class Funciones
    {
        public static string AppSettings(string key)
        {
            key = ConfigurationManager.AppSettings[key].ToString();
            return ConfigurationManager.AppSettings[key].ToString();
        }

        public static class Conversion
        {
            public static DataTable ListaToDatatable<T>(IList<T> items)
            {
                var dataTable = new DataTable();
                Type itemsType = typeof(T);
                foreach (PropertyInfo prop in itemsType.GetProperties())
                {
                    var column = new DataColumn(prop.Name)
                    {
                        DataType = Nullable.GetUnderlyingType(prop.PropertyType) ?? prop.PropertyType
                    };
                    dataTable.Columns.Add(column);
                }
                foreach (var item in items)
                {
                    int j = 0;
                    object[] newRow = new object[dataTable.Columns.Count];
                    foreach (PropertyInfo prop in itemsType.GetProperties())
                    {
                        newRow[j] = prop.GetValue(item, null);
                        j++;
                    }
                    dataTable.Rows.Add(newRow);
                }
                return dataTable;
            }

            public static DateTime? StringToDatetime(string dateformat, string dateString)
            {
                try
                {
                    DateTime dateValue;
                    if (DateTime.TryParseExact(dateString, dateformat, CultureInfo.InvariantCulture, DateTimeStyles.None, out dateValue))
                        return dateValue;
                    return null;
                }
                catch
                {
                    return null;
                }
            }
        }

        public static bool IsValidStringToDate(string dateformat, string dateString)
        {
            try
            {
                DateTime dateValue;
                return DateTime.TryParseExact(dateString, dateformat, CultureInfo.InvariantCulture, DateTimeStyles.None, out dateValue);
            }
            catch
            {
                return false;
            }
        }

        public static IEnumerable<TSource> DistinctBy<TSource, TKey>(this IEnumerable<TSource> source, Func<TSource, TKey> keySelector)
        {
            HashSet<TKey> seenKeys = new HashSet<TKey>();
            foreach (TSource element in source)
            {
                if (seenKeys.Add(keySelector(element)))
                {
                    yield return element;
                }
            }
        }

        public static bool IsValidEmail(string email)
        {
            try
            {
                var addr = new System.Net.Mail.MailAddress(email);
                return addr.Address == email;
            }
            catch
            {
                return false;
            }
        }

        public static string Truncate(string value, int maxLength)
        {
            if (string.IsNullOrEmpty(value)) return value;
            return value.Length <= maxLength ? value : value.Substring(0, maxLength);
        }

        //SGNA
        public static List<string> ObtenerParametrosSql(string cadenaSql)
        {
            char[] arrayCaracteres = { ' ', '=', ',', '(', ')', '\t', '\n', '\r', '>', '<', '/' };
            var arrayCadenaSql = cadenaSql.Split(arrayCaracteres, StringSplitOptions.RemoveEmptyEntries);
            int indice = 0;
            var listaParametros = new List<string>();

            for (int i = 0; i < arrayCadenaSql.Length; i++)
            {
                indice = arrayCadenaSql[i].IndexOf("@", StringComparison.Ordinal);
                if (indice == 0)
                {
                    var listaTmp = arrayCadenaSql[i].Split('@').Where(x => !string.IsNullOrEmpty(x)).Select(x => "@" + x).ToList();

                    //listaParametros.Add(arrayCadenaSql[i]);
                    listaParametros.AddRange(listaTmp);
                }
            }
            return listaParametros;
        }

    }

    public static class RegexUtilities
    {
        private static bool invalid = false;

        public static bool IsValidEmail(string strIn)
        {
            invalid = false;
            if (String.IsNullOrEmpty(strIn))
                return false;

            // Use IdnMapping class to convert Unicode domain names.
            strIn = Regex.Replace(strIn, @"(@)(.+)$", DomainMapper);
            if (invalid)
                return false;

            // Return true if strIn is in valid e-mail format.
            return Regex.IsMatch(strIn,
                   @"^(?("")(""[^""]+?""@)|(([0-9a-z]((\.(?!\.))|[-!#\$%&'\*\+/=\?\^`\{\}\|~\w])*)(?<=[0-9a-z])@))" +
                   @"(?(\[)(\[(\d{1,3}\.){3}\d{1,3}\])|(([0-9a-z][-\w]*[0-9a-z]*\.)+[a-z0-9]{2,17}))$",
                   RegexOptions.IgnoreCase);
        }

        private static string DomainMapper(Match match)
        {
            IdnMapping idn = new IdnMapping();
            string domainName = match.Groups[2].Value;
            try
            {
                domainName = idn.GetAscii(domainName);
            }
            catch (ArgumentException)
            {
                invalid = true;
            }
            return match.Groups[1].Value + domainName;
        }
    }
}