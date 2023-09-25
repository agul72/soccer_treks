import { Link, useLocation } from "react-router-dom";
import Stadiums from "./Stadiums";
import Airports from "./Airports";
import Highlights from "./Highlights";

import s from "./team.module.scss";

function Team() {
    let { state } = useLocation();

    const { team, city, conference, founded, logo, link, aida } = state;

    return (
        <div className={s.container}>
            <Link to={"/"}>&lt;- Back to Teams list</Link>
            <h1>{team}</h1>
            <div className={s.place}>
                <div >
                    <img src={'/src/assets/images/logos/' + logo}
                        alt='logo' />
                </div>
                <div>
                    <div>City: {city}</div>
                    <div>Conference: {conference}</div>
                    <div>Founded: {founded}</div>
                    <div><a href={link} target="_blank">Go to team's site</a></div>
                </div>
            </div>
            <h2>Awareness:</h2>
            <Stadiums stadiums={aida.awareness.stadiums} />
            <Airports airports={aida.awareness.airports} />
            <h2>Interest</h2>
            <Highlights highlights={aida.interest.highlights} />
            <h2>Desire</h2>
            <h3>How To Get To Stadium</h3>
            {Object.entries(aida.desire.howToGetToStadium)
                .map(([key, value], index) => {
                    return (<div key={index}>
                        <strong>{key}:</strong>
                        {value.map((road: string, roadIndex: number) =>
                            <div key={roadIndex}>
                                {road}
                            </div>)}
                    </div>)
                })
            }
            <h2>Action</h2>
            <div><a href={aida.action.scheduleLink} target="_blank">Schedule</a></div>
            <div><a href={aida.action.ticketSalesLink} target="_blank">Buy ticket</a></div>
            <div>{ aida.action.narrative}</div>
        </div>

    );
};

export default Team;