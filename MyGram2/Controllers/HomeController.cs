using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MyGram2.Models;

namespace MyGram2.Controllers
{
    public class HomeController : Controller
    {
        private static Dictionary<string, List<ImageClass>> imageList = new Dictionary<string, List<ImageClass>>();
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Register(string UserInput, string PasswordInput)
        {
            string result = $"{UserInput} is registerd";

            return Content(result);
        }

        public JsonResult UserInfo()
        {
            User user1 = new User();
            user1.UserName = "jon";
            user1.Password = "marq";

            return Json(user1);
        }

        public IActionResult Privacy()
        {
            return View();
        }

        public bool ImageProperties(string listName, ImageClass newImage)
        {
            List<ImageClass> existingClass = null;

            var exists = imageList.ContainsKey(listName);
            if (exists)
            {
                existingClass = imageList[listName];
            }
            else
            {
                existingClass = new List<ImageClass>();

            }
            List<ImageClass> result = existingClass.Where(ImageClass => ImageClass.ImageId == newImage.ImageId).ToList();
            bool imageWasCreated = false;

            if (result.Count == 0)
            {
                existingClass.Add(newImage);
                imageWasCreated = true;
                imageList[listName] = existingClass;
            }

            return imageWasCreated;
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
