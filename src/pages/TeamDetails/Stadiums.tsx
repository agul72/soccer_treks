import { iStadium } from "../../services/teams/iTeam";
import s from "./team.module.scss";

interface Props {
    stadiums: iStadium[],
}

function Stadiums({ stadiums }: Props): JSX.Element {
    return (
        <div>
            <div><h3>Stadiums:</h3></div>
            {stadiums.map((stadium: iStadium, stIndex: number) =>
                <div key={stIndex}>
                    <div>
                        <div><h4>{stadium.name}</h4></div>
                        <div className={s.place}>
                            <div className={s.plaseImageWrapper}>
                                <img src={'/assets/images/stadiums/' + stadium.photo}
                                    alt="Photo" className={s.image} />
                            </div>
                            <div className={s.aidaItem}>
                                <div>Location: {stadium.location}</div>
                                <div>Capacity: {stadium.capacity.toLocaleString()}</div>
                                <div><h5>Highlights:</h5></div>
                                {stadium.highlights.map((highlight: string, hlIndex) =>
                                    <div key={hlIndex}>
                                        - {highlight}
                                    </div>
                                )}

                            </div>
                        </div>


                    </div>

                </div>)
            }
        </div>

    )
}

export default Stadiums;