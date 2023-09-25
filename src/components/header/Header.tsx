// import { useTheme } from '../../hooks/useTheme';
import { Link } from "react-router-dom";
import "./header.scss"

interface Props {
    changeTheme: () => void,
    setDefaultTheme: () => void
}

function Header({ changeTheme, setDefaultTheme }: Props): JSX.Element {

    return (
        <div>
            <div className="title">
                <div><h1>Soccer treks</h1></div>
                <div className="button-container">
                    <button className="theme-button" onClick={changeTheme}></button>
                    <button onClick={setDefaultTheme}>Default</button>
                </div>
            </div>

            <div className="menu">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/calculator">Book online</Link>
                <Link to="/calculator">Bloge</Link>
                <Link to="/calculator">Groups</Link>
            </div>
        </div>
    )
}

export default Header;