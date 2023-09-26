import { iRoad } from "../../services/teams/iTeam";

interface Props {
    roads: iRoad[],
}

function Roads({ roads }: Props): JSX.Element {
    return (
        <div>
            <h3>How To Get To Stadium</h3>

            {roads.map((road: iRoad, index: number) =>
                <div key={index}>
                    <div><strong>Road: {road.route}</strong></div>
                    <div><strong>Ways: </strong></div>
                    {road.ways.map((way: string, index) =>
                        <div key={index}>
                            {way}
                        </div>
                    )}
                </div>)
            }
        </div>)
}

export default Roads;