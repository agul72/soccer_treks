import { useEffect, useState } from 'react';
import { iTeam } from '../../services/teams/iTeam';
import { teams, conferences } from '../../services/teams';

import s from './home.module.scss';
import { Link } from 'react-router-dom';

function Home() {

    const [selectedTeams, setSelectedTeams] = useState<iTeam[]>(teams);
    // const [selectedTeam, setSelectedTeam] = useState<iTeam | null>(null);
    const [filterComference, setFilterConference] = useState<string>("none");
    const [filterCity, setFilterCity] = useState<string>("");
    const [filterTeam, setFilterTeam] = useState<string>("");
    const [sortBy, setSortBy] = useState<string>("conference");

    useEffect(() => {
        let result = teams;

        if (filterComference !== "none") {
            result = result.filter((team: iTeam) => team.conference === filterComference);
        }

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

    }, [filterComference, filterCity, filterTeam]);

    return (
        <div>
            <div className={s.filters}>
                <div><h3>Filters</h3></div>
                <div className={s.filter}>
                    <div>Conference: </div>
                    <div>
                        <select
                            className={s.input}
                            value={filterComference}
                            onChange={(e) => setFilterConference(e.target.value)}>
                            <option value="none">None</option>
                            {conferences.map((item: string) => <option value={item} key={item}>
                                {item}
                            </option>)}
                        </select>
                    </div>
                </div>
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
                        <option value="conference">Conference</option>
                        <option value="name">Name</option>
                        <option value="city">City</option>
                    </select>
                </div>

            </div>

            <div className={s.teamWrapper}>
                <div className={s.title}>
                    <div>Team</div>
                    <div>Conference</div>
                </div>
                {selectedTeams.map((team: iTeam) => {
                    return (
                        <div
                            className={s.teamRow}
                            key={team.team}
                        >
                            <div>
                                <img src={'/src/assets/images/logos/' + team.logo}
                                    alt='logo' className={s.teamLogo} />
                            </div>
                            <div>{team.team}</div>
                            <div>{team.conference}</div>
                            <Link
                                to="/team"
                                state={team}
                            >
                                More details
                            </Link>
                        </div>
                    )
                })}

            </div>
        </div>
    );
};

export default Home;