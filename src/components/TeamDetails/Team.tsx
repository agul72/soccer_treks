import { iTeam } from "../../services/teams/iTeam";

import s from "./team.module.scss";

interface Props {
    team: iTeam,
}

function Team({ team }: Props): JSX.Element {
    return (
        <div>
            <h1>{team.team}</h1>
            <div className={s.place}>
                <div className={s.logoWrapper}>
                    <img src={'/assets/images/logos/' + team.logo}
                        alt='logo' className={s.image}/>
                </div>
                <div>
                    <div>City: {team.city}</div>
                    <div>Conference: {team.conference}</div>
                    <div>Founded: {team.founded}</div>
                    <div>
                      <a href={team.link} target="_blank">
                        Go to team's site
                      </a>
                    </div>
                </div>
            </div>
        </div>)
}

export default Team;