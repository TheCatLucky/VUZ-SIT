import { Link } from 'react-router-dom';
import classes from './NavMenu.module.scss';
const NavMenu = () => {
  return (
    <div className={classes.wrapper}>
      <Link to={`/price`}>Прайс Лист</Link>
      <Link to={`/about`}>Информация о нас</Link>
      <Link to={`/contacts`}>Контакты</Link>
    </div>
  );
};
export default NavMenu;
