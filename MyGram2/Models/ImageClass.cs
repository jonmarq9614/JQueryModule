using System;
namespace MyGram2.Models
{
    public class ImageClass
    {
        public ImageClass()
        {
        }
        public int ImageId { get; set; }
        public string ImagePath { get; set; }
        public string ImageAlt { get; set; }
        public string Description { get; set; }
    }
}
