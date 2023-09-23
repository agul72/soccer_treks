import { Link, useLocation } from "react-router-dom";
// import { iTeam } from "../../services/mock";

// import s from "./team.module.scss";

function Team() {
    let { state } = useLocation();

    const { team, city, conference, founded, logo, link, stadium } = state;
    return (
        <div >
            <Link to={"/"}>&lt;- Back to Teams list</Link>
            <h3>{ team }</h3>
            <div >
                <img src={'/src/assets/images/logos/' + logo}
                    alt='logo' />
            </div>
            <div>City: {city}</div>
            <div>Conference: {conference}</div>
            <div>Founded: {founded}</div>
            <div><a href={link} target="_blank">Company site</a></div>
            <div>Stadium: { stadium }</div>
        </div>

    );
};

export default Team;