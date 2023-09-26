import { iAirport } from "../../services/teams/iTeam";

interface Props {
    airports: iAirport[],
}

function Airports({ airports }: Props): JSX.Element {
    return (
        <div>
            <div><h3>Airports:</h3></div>
            {airports.map((airport: iAirport, airIndex: number) =>
                <div key={airIndex}>
                    <div>
                        <div><strong>{airport.name}</strong></div>
                        <div><a href={airport.link}>Go to airport site</a></div>
                        <div>{airport.details}</div>
                    </div>
                </div>)
            }
        </div>)
}

export default Airports;