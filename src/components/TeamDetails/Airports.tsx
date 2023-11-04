import { iAirport } from "../../services/teams/iTeam";

import s from "./team.module.scss";

interface Props {
  airports: iAirport[],
}

function Airports({ airports }: Props): JSX.Element {
  return (
    <div >
      <div className={s.aidaTitle}><h3>Airports:</h3></div>
      {airports.map((airport: iAirport, airIndex: number) =>
        <div key={airIndex} className={s.aidaItem}>
          <div><strong>{airport.name}</strong></div>
          <div><a href={airport.link} target="_blank">Go to airport site</a></div>
          <div>{airport.details}</div>
        </div>)
      }
    </div>)
}

export default Airports;