using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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
            var bowlerList = _repo.Bowlers
                .AsNoTracking() // Prevent EF Core from messing with tracked entities
                .Include(b => b.Team)
                .Where(b => b.Team != null && (b.Team.TeamName == "Marlins" || b.Team.TeamName == "Sharks"))
                .ToList();

            return bowlerList;
        }

    }
}
