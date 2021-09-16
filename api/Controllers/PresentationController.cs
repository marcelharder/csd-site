using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using System.Xml.Linq;
using csd.data.Interfaces;
using csd.data.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;

namespace csd.Controllers
{
    [ApiController]
    public class PresentationController : ControllerBase
    {
        XElement _testje;
        private readonly IWebHostEnvironment _env;
        public PresentationController(IWebHostEnvironment env)
        {
            _env = env;
            var content = _env.ContentRootPath;
            var filename = "data/url.xml";
            var test = Path.Combine(content, filename);
            XElement testje = XElement.Load($"{test}");
            _testje = testje;
        }

        [Route("api/presentation/{id}")]
        public async Task<IActionResult> Get(string id)
        {
            var help = "";

            await Task.Run(() =>
                        {
                            IEnumerable<XElement> op = _testje.Descendants("powerpoint").Elements("items").Elements(id);
                           
                            foreach (XElement s in op)
                            {
                                help = "";
                                help = s.Element("url").Value;
                            }
                        });
            return Ok(help);


        }



    }
}