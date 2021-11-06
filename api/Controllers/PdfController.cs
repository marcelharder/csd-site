using System;
using System.IO;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;

namespace csd.Controllers
{
    [ApiController]
    
    public class PdfController : ControllerBase
    {
        private readonly IWebHostEnvironment _env;
        public PdfController(IWebHostEnvironment env) {

            _env = env;
         }

        [Route("api/getPDF/{id}")]
        [Produces("application/pdf")]
         public IActionResult Get(int id)
        {
            var fn = "";
            switch (id)
            {
                case 1: fn = "soa.pdf"; break;
                case 2: fn = "swl.pdf"; break;
                case 3: fn = "ovi.pdf"; break;
                case 4: fn = "chp.pdf"; break;
                case 5: fn = "tra.pdf"; break;
                case 6: fn = "ech.pdf"; break;
            }

            var pathToFile = _env.ContentRootPath + "/assets/pdf/"; // pick up the pdf
            var file_name = pathToFile + fn;
            try
            {
                var stream = new FileStream(file_name, FileMode.Open, FileAccess.Read);
                stream.Position = 0;
                FileStreamResult filestream = new FileStreamResult(stream, "application/pdf");
                return filestream;
            }
            catch (Exception ex) { return BadRequest(ex.InnerException); }
        }
    }
}
