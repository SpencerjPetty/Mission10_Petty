import { useEffect, useState } from 'react';
import { bowler } from './types/bowler';

function BowlerInfo() {
  const [bowler, setBowler] = useState<bowler[]>([]);

  useEffect(() => {
    const getBowlerInfo = async () => {
      const response = await fetch('https://localhost:5000/bowler');
      const data = await response.json();
      setBowler(data);
    };

    getBowlerInfo();
  }, []);

  return (
    <>
      <h1>Bowler Info</h1>
      <table>
        <tr>
          <th>Bowler ID</th>
          <th>Bowler Last Name</th>
          <th>Bowler First Name</th>
          <th>Bowler Middle Init</th>
          <th>Bowler Address</th>
          <th>Bowler City</th>
          <th>Bowler State</th>
          <th>Bowler Zip</th>
          <th>Bowler Phone Number</th>
          <th>Team ID</th>
        </tr>
        {bowler.map((bowler) => (
          <tr key={bowler.bowlerId}>
            <td>{bowler.bowlerId}</td>
            <td>{bowler.bowlerLastName}</td>
            <td>{bowler.bowlerFirstName}</td>
            <td>{bowler.bowlerMiddleInit}</td>
            <td>{bowler.bowlerAddress}</td>
            <td>{bowler.bowlerCity}</td>
            <td>{bowler.bowlerState}</td>
            <td>{bowler.bowlerZip}</td>
            <td>{bowler.bowlerPhoneNumber}</td>
            <td>{bowler.teamId}</td>
          </tr>
        ))}
      </table>
    </>
  );
}

export default BowlerInfo;
