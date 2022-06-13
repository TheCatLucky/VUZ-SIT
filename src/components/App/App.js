import AppRouter from '../AppRouter';
import Countries from '../Countries';
import Header from '../Header';
import classes from './App.module.scss';

const App = () => {
  return (
    <div className={classes.wrapper}>
      <Header />
      <Countries />
      <AppRouter />
    </div>
  );
}

export default App;
