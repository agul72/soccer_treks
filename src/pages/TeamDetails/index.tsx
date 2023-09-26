import { Link, useLocation } from "react-router-dom";
import Stadiums from "./Stadiums";
import Airports from "./Airports";
import Highlights from "./Highlights";
import Team from "./Team";
import { iTeam } from "../../services/teams/iTeam";
import Roads from "./Roads";

import s from "./team.module.scss";
import Action from "./Action";


function TeamDetails() {
    let { state } = useLocation();

    const team: iTeam = state;
    const { awareness, interest, desire, action } = team.aida;

    return (
        <div className={s.container}>
            <Link to={"/"}>&lt;- Back to Teams list</Link>
            <Team team={team} />
            <h2>Awareness:</h2>
            <Stadiums stadiums={awareness.stadiums} />
            <Airports airports={awareness.airports} />
            <h2>Interest</h2>
            <Highlights highlights={interest.highlights} />
            <h2>Desire</h2>
            <Roads roads={desire.howToGetToStadium} />
            <Action action={action}/>

        </div>

    );
};

export default TeamDetails;