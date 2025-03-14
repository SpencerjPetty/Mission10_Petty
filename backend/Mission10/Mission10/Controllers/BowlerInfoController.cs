using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Mission10.Data;

namespace Mission10.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BowlerInfoController : ControllerBase
    {
        private IBowlingRepository _repo;
        public BowlerInfoController(IBowlingRepository temp)
        {
            _repo = temp;
        }

        [HttpGet(Name = "GetBowlers")]
        public IEnumerable<Bowler> GetBowlers()
        {
            var bowlerList = _repo.Bowlers.ToList();
            return bowlerList;
        }
    }
}
