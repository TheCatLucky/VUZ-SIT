import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutUs from '../AboutUs';
import Contacts from '../Contacts';
import PriceTable from '../PriceTable';
import classes from './AppRouter.module.scss';

const AppRouter = () => {
  return (
    <div className={classes.wrapper}>
      <Suspense fallback={<h1>Загрузка...</h1>}>
        <Routes>
          <Route path='/price' element={<PriceTable />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/about' element={<AboutUs />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default AppRouter;
