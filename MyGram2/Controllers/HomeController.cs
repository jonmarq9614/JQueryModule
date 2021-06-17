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

        public IActionResult ImageSaved()
        {
            ImageSaved saveImage = new ImageSaved();
            saveImage.SavedImage = "Image has been saved";

            return Json(saveImage);
        }

        public IActionResult Calendar()
        {
            return View();
        }

        public IActionResult ImageProperties()
        {
            List<ImageClass> imageList = new List<ImageClass>();

            ImageClass newImage = new ImageClass();
            newImage.Description = "Description 1";
            newImage.ImageAlt = "Image 1";
            newImage.ImagePath = "Image path";
            newImage.ImageId = 1;
            imageList.Add(newImage);

            newImage = new ImageClass();
            newImage.Description = "Description 2";
            newImage.ImageAlt = "Image 2";
            newImage.ImagePath = "Image path";
            newImage.ImageId = 2;
            imageList.Add(newImage);

            newImage = new ImageClass();
            newImage.Description = "Description 3";
            newImage.ImageAlt = "Image 3";
            newImage.ImagePath = "Image path";
            newImage.ImageId = 3;
            imageList.Add(newImage);

            newImage = new ImageClass();
            newImage.Description = "Description 4";
            newImage.ImageAlt = "Image 4";
            newImage.ImagePath = "Image path";
            newImage.ImageId = 4;
            imageList.Add(newImage);

            newImage = new ImageClass();
            newImage.Description = "Description 5";
            newImage.ImageAlt = "Image 5";
            newImage.ImagePath = "Image path";
            newImage.ImageId = 5;
            imageList.Add(newImage);

            newImage = new ImageClass();
            newImage.Description = "Description 6";
            newImage.ImageAlt = "Image 6";
            newImage.ImagePath = "Image path";
            newImage.ImageId = 6;
            imageList.Add(newImage);

            newImage = new ImageClass();
            newImage.Description = "Description 7";
            newImage.ImageAlt = "Image 7";
            newImage.ImagePath = "Image path";
            newImage.ImageId = 7;
            imageList.Add(newImage);

            newImage = new ImageClass();
            newImage.Description = "Description 8";
            newImage.ImageAlt = "Image 8";
            newImage.ImagePath = "Image path";
            newImage.ImageId = 8;
            imageList.Add(newImage);

            newImage = new ImageClass();
            newImage.Description = "Description 9";
            newImage.ImageAlt = "Image 9";
            newImage.ImagePath = "Image path";
            newImage.ImageId = 9;
            imageList.Add(newImage);

            newImage = new ImageClass();
            newImage.Description = "Description 10";
            newImage.ImageAlt = "Image 10";
            newImage.ImagePath = "Image path";
            newImage.ImageId = 10;
            imageList.Add(newImage);

            newImage = new ImageClass();
            newImage.Description = "Description 11";
            newImage.ImageAlt = "Image 11";
            newImage.ImagePath = "Image path";
            newImage.ImageId = 11;
            imageList.Add(newImage);

            newImage = new ImageClass();
            newImage.Description = "Description 12";
            newImage.ImageAlt = "Image 12";
            newImage.ImagePath = "Image path";
            newImage.ImageId = 12;
            imageList.Add(newImage);

            newImage = new ImageClass();
            newImage.Description = "Description 13";
            newImage.ImageAlt = "Image 13";
            newImage.ImagePath = "Image path";
            newImage.ImageId = 13;
            imageList.Add(newImage);

            newImage = new ImageClass();
            newImage.Description = "Description 14";
            newImage.ImageAlt = "Image 14";
            newImage.ImagePath = "Image path";
            newImage.ImageId = 14;
            imageList.Add(newImage);

            newImage = new ImageClass();
            newImage.Description = "Description 15";
            newImage.ImageAlt = "Image 15";
            newImage.ImagePath = "Image path";
            newImage.ImageId = 15;
            imageList.Add(newImage);

            newImage = new ImageClass();
            newImage.Description = "Description 16";
            newImage.ImageAlt = "Image 16";
            newImage.ImagePath = "Image path";
            newImage.ImageId = 16;
            imageList.Add(newImage);

            newImage = new ImageClass();
            newImage.Description = "Description 17";
            newImage.ImageAlt = "Image 17";
            newImage.ImagePath = "Image path";
            newImage.ImageId = 17;
            imageList.Add(newImage);

            newImage = new ImageClass();
            newImage.Description = "Description 18";
            newImage.ImageAlt = "Image 18";
            newImage.ImagePath = "Image path";
            newImage.ImageId = 18;
            imageList.Add(newImage);

            newImage = new ImageClass();
            newImage.Description = "Description 19";
            newImage.ImageAlt = "Image 19";
            newImage.ImagePath = "Image path";
            newImage.ImageId = 19;
            imageList.Add(newImage);

            newImage = new ImageClass();
            newImage.Description = "Description 20";
            newImage.ImageAlt = "Image 20";
            newImage.ImagePath = "Image path";
            newImage.ImageId = 20;
            imageList.Add(newImage);

            return Json(imageList);
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
