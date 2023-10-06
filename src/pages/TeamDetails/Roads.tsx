import { iRoad } from "../../services/teams/iTeam";

import s from "./team.module.scss";

interface Props {
    roads: iRoad[],
}

function Roads({ roads }: Props): JSX.Element {
    return (
        <div>
            <h3 className={s.aidaTitle}>How To Get To Stadium</h3>

            {roads.map((road: iRoad, index: number) =>
                <div key={index} className={s.aidaItem}>
                    <div className={s.aidaItem}><strong>Road: {road.route}</strong></div>
                    <div><strong>Ways: </strong></div>
                    {road.ways.map((way: string, index) =>
                        <div key={index} className={s.aidaItem}>
                            {way}
                        </div>
                    )}
                </div>)
            }
        </div>)
}

export default Roads;