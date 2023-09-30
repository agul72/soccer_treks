import { useEffect, useState } from 'react';
import { iTeam } from '../../services/teams/iTeam';
import { teams } from '../../services/teams';

import s from './home.module.scss';
import TeamDetails from '../TeamDetails';

function Home() {

    const [selectedTeams, setSelectedTeams] = useState<iTeam[]>(teams);
    const [selectedTeam, setSelectedTeam] = useState<iTeam | null>(null);
    const [selectedComference, setSelectedConference] = useState<string>("Eastern");
    const [filterCity, setFilterCity] = useState<string>("");
    const [filterTeam, setFilterTeam] = useState<string>("");

    useEffect(() => {
        let result = teams;
        teams.sort((a, b): number => a.team < b.team ? -1 : 0);

        result = result.filter((team: iTeam) => team.conference === selectedComference);


        if (filterCity.length) {
            result = result.filter((team: iTeam) =>
                team.city.toLowerCase().includes(filterCity.toLowerCase()));
        }

        if (filterTeam.length) {
            // console.log("filterTeam", filterTeam);
            result = result.filter((team: iTeam) =>
                team.team.toLowerCase().includes(filterTeam.toLowerCase()));
        }

        if (JSON.stringify(result) !== JSON.stringify(selectedTeams)) {
            setSelectedTeams(result);
        }

    }, [selectedComference, filterCity, filterTeam]);

    function onSelectConference(conference: string) {
        setSelectedConference(conference);
        setSelectedTeam(null);
    }

    return (
        <div className={s.mainWrapper}>
            <div >

                <div className={s.filters}>
                    
                    <div className={s.conferenceTabs}>
                        <div >
                            <button
                                className={
                                    [
                                        s.conferenceBtn,
                                        selectedComference === "Eastern" ? s.active : null
                                    ].join(" ")}
                                onClick={() => onSelectConference("Eastern")}>Eastern</button>
                        </div>
                        <div >
                            <button
                                className={
                                    [
                                        s.conferenceBtn,
                                        selectedComference === "Western" ? s.active : null
                                    ].join(" ")}
                                onClick={() => onSelectConference("Western")}>Western</button>
                        </div>
                    </div>
                    <div><h3>Filters:</h3></div>
                    <div className={s.filter}>
                        <div>City</div>
                        <div>
                            <input
                                className={s.input}
                                value={filterCity}
                                onChange={(e) => setFilterCity(e.target.value)} />
                        </div>
                    </div>

                    <div className={s.filter}>
                        <div>Team</div>
                        <div>
                            <input
                                className={s.input}
                                value={filterTeam}
                                onChange={(e) => setFilterTeam(e.target.value)} />
                        </div>
                    </div>
                </div>
                <div className={s.mainContainer}>
                    <div >
                        {selectedTeams.map((team: iTeam) => {
                            return (
                                <div
                                    className={[
                                        s.teamRow,
                                        selectedTeam === team ? s.active : null
                                    ].join(" ")}
                                    key={team.team}
                                    onClick={() => setSelectedTeam(team)}
                                >
                                    <div>
                                        <img src={'/src/assets/images/logos/' + team.logo}
                                            alt='logo' className={s.teamLogo} />
                                    </div>
                                    <div>{team.team}</div>

                                </div>
                            )
                        })}

                    </div>

                    <div>
                        <TeamDetails team={selectedTeam} />
                    </div>
                </div>

            </div>
            <div>
                <div className={s.advertising}>
                    Your banner may be here
                </div>
            </div>
        </div>
    );
};

export default Home;