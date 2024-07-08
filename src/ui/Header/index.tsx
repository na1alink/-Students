import LogoIcon from "../../assets/logo.svg?react";
import "./styles.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <a href="./" className="header__logo">
          <LogoIcon width={50} height={50} className="header__logo-icon" />
        </a>

        <p className="header__title">
          STUDENTS by{" "}
          <a href="https://github.com/na1alink?tab=repositories">na1alink</a>
        </p>
      </div>
    </header>
  );
};

export default Header;
