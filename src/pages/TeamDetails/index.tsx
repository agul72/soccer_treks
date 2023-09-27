import { Link } from "react-router-dom";
import Stadiums from "./Stadiums";
import Airports from "./Airports";
import Highlights from "./Highlights";
import Team from "./Team";
import { iTeam } from "../../services/teams/iTeam";
import Roads from "./Roads";

import s from "./team.module.scss";
import Action from "./Action";

interface Props {
    team: iTeam | null
}


function TeamDetails({team}: Props) {

    

    if (team) {
        const { awareness, interest, desire, action } = team.aida;
        return (
            <div className={s.container}>
                <Team team={team} />
                <Stadiums stadiums={awareness.stadiums} />
                <Airports airports={awareness.airports} />
                <Highlights highlights={interest.highlights} />
                <Roads roads={desire.howToGetToStadium} />
                <Action action={action}/>    
            </div>    
        );
    } else {
        return (
            <div className={s.container}>
                <h2>Please select team to show details</h2>
            </div>
        )
    }

    
};

export default TeamDetails;