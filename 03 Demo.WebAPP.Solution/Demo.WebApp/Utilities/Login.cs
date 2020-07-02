using System.Web;

namespace Demo.WebApp.Utilities
{
    public static class Login
    {
        
        public static void LogOut()
        {
            HttpContext.Current.Session.Abandon();
        }
    }
}