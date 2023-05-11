using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    public class UserController : Controller
    {
        public IActionResult Index()
        {
            DatabaseContext context = HttpContext.RequestServices.GetService(typeof(DatabaseContext)) as DatabaseContext;

            return View(context.GetUsers());
        }
    }
}
