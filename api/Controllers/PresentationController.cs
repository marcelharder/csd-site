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

       /*  [Route("api/presentation/{id}")]
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


        } */

         [Route("api/presentation/{id}")]
        public async Task<IActionResult> Get(string id)
        {
            var help = "";

            await Task.Run(() =>
                        {
                          if(id == "soa"){help = "https://docs.google.com/presentation/d/1vGzApLXgRND9iEnoPrPLwOggLpljfrr-S5sfr6XRu6M/edit?usp=sharing";}
                          if(id == "ovi"){help = "https://docs.google.com/presentation/d/1mD0BFR3N2W7eoH5tpTn8tbb0AvqoOqcf6kp3CBDrKIk/edit?usp=sharing";}
                          if(id == "ogi"){help = "https://docs.google.com/presentation/d/1mD0BFR3N2W7eoH5tpTn8tbb0AvqoOqcf6kp3CBDrKIk/edit?usp=sharing";}
                          if(id == "cda"){help = "https://docs.google.com/presentation/d/1Tg86Gr3_ubZL-O8ev137nRNmt0Lj63vc9MOO8mCrAmI/edit?usp=sharing";}
                          if(id == "wait"){help = "https://docs.google.com/presentation/d/1qTv-7DT9ARw_OpeTSoWx1nfmm6Nxc2FLRSDk6c3jcJU/edit?usp=sharing";}
                          if(id == "trac"){help = "https://docs.google.com/presentation/d/1e7kTDtSyxp51NOzL0CjG4oaE6zNQuu0I4kJ8xU2SSLE/edit?usp=sharing";}
                        });
            return Ok(help);


        }



    }
}