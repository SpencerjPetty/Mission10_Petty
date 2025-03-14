export type team = {
  teamId: number;
  teamName: string;
  captainId: number | null;
};

export type bowler = {
  bowlerId: number;
  bowlerLastName: string | null;
  bowlerFirstName: string | null;
  bowlerMiddleInit: string | null;
  bowlerAddress: string | null;
  bowlerCity: string | null;
  bowlerState: string | null;
  bowlerZip: string | null;
  bowlerPhoneNumber: string | null;
  teamId: number | null;
  team: team | null; // ✅ Add this to match the JSON structure
};
