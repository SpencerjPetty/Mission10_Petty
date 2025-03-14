using System;
using System.Collections.Generic;

namespace Mission10.Data;

public class Team
{
    public int TeamId { get; set; }

    public string TeamName { get; set; } = null!;

    public int? CaptainId { get; set; }
}
