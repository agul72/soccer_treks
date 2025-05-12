// import { useTheme } from '../../hooks/useTheme';
import { Link } from "react-router-dom";
import "./header.scss"

interface Props {
    changeTheme: () => void,
}

function Header({ changeTheme }: Props): JSX.Element {

    return (
        <div className="headerContainer">
            <div className="title">
                <div className="mainTitle">Fan Embassy</div>
            <div className="menu">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>
                <div className="button-container">
                    <button className="theme-button" onClick={changeTheme}></button>
                </div>
            </div>
        </div>
    )
}

export default Header;