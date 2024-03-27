import Logo from '../images/Logo.png';
import '../styles/components/Header.scss';

function Header() {
  return (
    <header className="header">
      <figure className="header__figure">
        <img className="header__figure-logo" src={Logo} alt="Logo Rick and Morty" />
      </figure>
    </header>
  );
}

export default Header;
