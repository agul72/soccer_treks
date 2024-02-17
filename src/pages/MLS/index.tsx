import { useEffect, useState } from 'react';
import { iTeam } from '../../services/teams/iTeam';
import { teams } from '../../services/teams';

import s from './mls.module.scss';
import TeamDetails from '../../components/TeamDetails';
// import Ads from '../../components/Ads';

interface Props {
  changeTheme: () => void,
}

function MLS({ changeTheme }: Props): JSX.Element {

  const [selectedTeams, setSelectedTeams] = useState<iTeam[]>(teams);
  const [selectedTeam, setSelectedTeam] = useState<iTeam>();
  const [selectedComference, setSelectedConference] = useState<string>("Eastern");
  const [filterCity, setFilterCity] = useState<string>("");
  const [filterTeam, setFilterTeam] = useState<string>("");
  const [isTeamListVisible, setIsTeamListVisible] = useState<boolean>();
  const [isTeamDetailsVisible, setIsTeamDetailsVisible] = useState<boolean>();

  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {

    function handleResize() {
      setInnerWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);

  }, []);

  useEffect(() => {

    if (innerWidth < 1100) {
      setIsTeamDetailsVisible(false);
      setIsTeamListVisible(true);

    } else {
      setIsTeamListVisible(true);
      setIsTeamDetailsVisible(true);
    }

  }, [innerWidth]);

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

    setSelectedTeam(result?.[0]);

  }, [selectedComference, filterCity, filterTeam]);

  function onSelectConference(conference: string) {
    setSelectedConference(conference);
  }

  function onTeamClickHandler(team: iTeam) {
    setSelectedTeam(team);
    if (innerWidth < 1100) {
      setIsTeamDetailsVisible(true)
      setIsTeamListVisible(false);
    }
  }

  function backToListBtnClickHandler() {
    // if (window?.matchMedia("(max-width: 1100px)")) {
    setIsTeamDetailsVisible(false);
    setIsTeamListVisible(true);
    // }
  }



  return (
    <div id={s.mainWrapper}>
      <div >
        <div id={s.header}>
          <div id={s.filters}>
            <div id={s.conferenceTabs}>
              <div >
                <button
                  className={[
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
            <div id={s.aditionalFilters}>
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
          </div>
          <div>
            <button className="theme-button" onClick={changeTheme}></button>
          </div>
        </div>
        <div id={s.mainContainer}>
          {isTeamListVisible && <div id={s.teamsWrapper}>
            {selectedTeams.map((team: iTeam) => {
              return (
                <div
                  className={[
                    s.teamRow,
                    selectedTeam === team ? s.active : null
                  ].join(" ")}
                  key={team.team}
                  onClick={() => onTeamClickHandler(team)}
                >
                  <div>
                    <img src={'/assets/images/logos/' + team.logo}
                      alt='logo' className={s.teamLogo} />
                  </div>
                  <div>{team.team}</div>

                </div>
              )
            })}

          </div>}

          {isTeamDetailsVisible && <div id={s.teamDetailsWrapper}>
            <div
              className={s.navBtn}
              onClick={backToListBtnClickHandler}
            >
              Back to list
            </div>
            <TeamDetails team={selectedTeam || undefined} />
          </div>}
        </div>

      </div>
      {/* <div id={s.advertising}>

        <Ads />
      </div> */}
    </div>
  );
};

export default MLS;