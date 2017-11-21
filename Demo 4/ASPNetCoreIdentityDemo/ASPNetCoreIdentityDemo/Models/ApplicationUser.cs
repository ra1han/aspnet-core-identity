using Microsoft.AspNetCore.Identity;

namespace ASPNetCoreIdentityDemo.Models
{
    public class ApplicationUser : IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }

    }
}
