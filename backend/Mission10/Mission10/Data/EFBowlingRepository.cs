using Microsoft.EntityFrameworkCore;

namespace Mission10.Data
{
    public class EFBowlingRepository : IBowlingRepository
    {
        private BowlingLeagueContext _context;
        public EFBowlingRepository(BowlingLeagueContext ctx)
        {
            _context = ctx;
        }
        public IQueryable<Bowler> Bowlers => _context.Bowlers.Include(b => b.Team);
    }
}
