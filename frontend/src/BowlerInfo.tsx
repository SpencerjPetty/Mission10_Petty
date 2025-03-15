import { useEffect, useState } from 'react';
import { bowler } from './types/bowler';

function BowlerInfo() {
  const [bowlers, setBowlers] = useState<bowler[]>([]); // ✅ Fixed state variable name

  useEffect(() => {
    const getBowlerInfo = async () => {
      try {
        const response = await fetch('https://localhost:5000/api/BowlerInfo');
        if (!response.ok) throw new Error('Failed to fetch bowler data');
        const data = await response.json();
        setBowlers(data);
      } catch (error) {
        console.error('Error fetching bowler info:', error);
      }
    };

    getBowlerInfo();
  }, []);

  return (
    <>
      <h1>Bowler Info</h1>
      <table>
        <thead>
          <tr>
            <th>Bowler Name</th>
            <th>Team Name</th> {/* ✅ Changed from Team ID to Team Name */}
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {bowlers.map((bowler) => (
            <tr key={bowler.bowlerId}>
              <td>
                {bowler.bowlerFirstName} {bowler.bowlerMiddleInit}{' '}
                {bowler.bowlerLastName}
              </td>
              <td>{bowler.team ? bowler.team.teamName : 'No Team'}</td>
              <td>{bowler.bowlerAddress}</td>
              <td>{bowler.bowlerCity}</td>
              <td>{bowler.bowlerState}</td>
              <td>{bowler.bowlerZip}</td>
              <td>{bowler.bowlerPhoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default BowlerInfo;
