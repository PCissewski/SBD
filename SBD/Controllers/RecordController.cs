using Microsoft.AspNetCore.Mvc;
using SBD.TestData;

namespace SBD.Controllers;

[ApiController]
[Route("[controller]")]
public class RecordController : ControllerBase
{
    private Record? _record;
    private TestFileGenerator? _testFileGenerator = new ();
    [HttpPost]
    public IEnumerable<string> Post(string record)
    {
        return new string[] {record};
    }
}