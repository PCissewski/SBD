using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace SBD.Controllers;

[ApiController]
[Route("[controller]")]
public class RecordController
{
    private Record? _record;
    [HttpPost]
    public IEnumerable<string> Post(string record)
    {

        return new string[] {"test1", "test2"};
    }
}