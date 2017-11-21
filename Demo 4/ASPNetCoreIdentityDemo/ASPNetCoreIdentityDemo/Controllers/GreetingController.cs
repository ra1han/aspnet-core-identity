using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using System.Security.Claims;
using Microsoft.AspNetCore.Cors;

namespace ASPNetCoreIdentityDemo.Controllers
{
    [EnableCors("CORSPolicy")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [Route("api/[controller]")]
    public class GreetingController : Controller
    {
        [HttpGet]
        public string Get()
        {
            return "Hello " + User.FindFirst(ClaimTypes.NameIdentifier).Value;
        }
    }
}
