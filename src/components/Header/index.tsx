import ToggleDarkMode from '../Buttons/ToggleDarkMode';
import './style.scss'

const Header = () => {

    return (
        <header>
            <h1>Where in the world?</h1>
            <ToggleDarkMode />
        </header>
    );
};

export default Header;