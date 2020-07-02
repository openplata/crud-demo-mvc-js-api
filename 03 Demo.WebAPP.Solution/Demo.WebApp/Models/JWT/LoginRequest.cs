using System;

namespace Demo.WebApp.Models.JWT
{
    public class LoginRequest
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public string Token { get; set; }
    }
}