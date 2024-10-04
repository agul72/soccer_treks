import Stadiums from "./Stadiums";
import Airports from "./Airports";
import Highlights from "./Highlights";
import Action from "./Action";
import Team from "./Team";
import { iTeam } from "../../services/teams/iTeam";
import Roads from "./Roads";

import s from "./team.module.scss";

interface Props {
  team: iTeam | undefined
}


function TeamDetails({ team }: Props) {

  if (team) {
    const { awareness, interest, desire, action } = team.aida;
    return (
      <div className={s.container}>
        <div className={s.sticky}>
          <Action action={action} />
        </div>
        <Team team={team} />
        <div className={s.aidaItem}>
          <Stadiums stadiums={awareness.stadiums} />
        </div>
        <div className={s.aidaItem}>
          <Airports airports={awareness.airports} />
        </div>
        <div className={s.aidaItem}>
          <Highlights highlights={interest.highlights} />
        </div>
        <div className={s.aidaItem}>
          <Roads roads={desire.howToGetToStadium} />
        </div>
      </div>
    );
  } else {
    return (
      <div className={s.container}>
        <h2>There are not select team to show details</h2>
      </div>
    )
  }


};

export default TeamDetails;