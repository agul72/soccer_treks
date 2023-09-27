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
    const [sortBy, setSortBy] = useState<string>("name");

    useEffect(() => {
        let result = teams;

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
        <div>
            <div className={s.filters}>
                <div><h3>Filters</h3></div>
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
                <div><h3>Sort by</h3></div>
                <div>
                    <select
                        className={s.input}
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}>
                        <option value="name">Name</option>
                        <option value="city">City</option>
                    </select>
                </div>
            </div>

            <div className={s.conferenceTabs}>

                <div >
                    <button
                        className={
                            [
                                s.conferenceBtn,
                                selectedComference === "Eastern" ? s.active : ""
                            ].join(" ")}
                        onClick={() => onSelectConference("Eastern")}>Eastern</button>
                </div>
                <div >
                    <button
                        className={
                            [
                                s.conferenceBtn,
                                selectedComference === "Western" ? s.active : ""
                            ].join(" ")}
                        onClick={() => onSelectConference("Western")}>Western</button>
                </div>
            </div>

            <div className={s.mainContainer}>

                <div >
                    <div className={s.title}>
                        <div>Team</div>
                    </div>
                    {selectedTeams.map((team: iTeam) => {
                        return (
                            <div
                                className={s.teamRow}
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
    );
};

export default Home;