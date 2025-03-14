namespace Mission10.Data
{
    public interface IBowlingRepository
    {
        IQueryable<Bowler> Bowlers { get; }
    }
}
