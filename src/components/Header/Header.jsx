import NavMenu from '../NavMenu/';
import logo from './../../assets/logo.jpg';
import classes from './Header.module.scss';
const Header = () => {
  return (
    <header className={classes.wrapper}>
      <div>
        <img src={logo} alt='Абориген Тур' />
      </div>
      <NavMenu />
      <div>
        <a href='tel:+78000000000'>+7-800-000-00-00</a>
        <p>Закажите обратный звонок</p>
      </div>
    </header>
  );
};

export default Header;
