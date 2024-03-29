import Logo from '../images/Logo.png';
import { Link } from 'react-router-dom';
import '../styles/components/Header.scss';

function Header() {
  return (
    <header className="header">
      <figure className="header__figure">
        <Link to="/">
          <img className="header__figure-logo" src={Logo} alt="Logo Rick and Morty" />
        </Link>
      </figure>
    </header>
  );
}

export default Header;
