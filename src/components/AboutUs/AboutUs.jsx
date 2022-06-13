import belTrip from '../../assets/bel-trip.webp';
import kazTrip from '../../assets/kaz-trip.webp';
import moldTrip from '../../assets/mold-trip.webp';
import ruTrip from '../../assets/ru-trip.webp';
import classes from './AboutUs.module.scss';
const AboutUs = (props) => {
  const {} = props;

  return (
    <div className={classes.wrapper}>
      <div className={classes.trip}>
        <p>Путешествия в России</p>
        <img src={ruTrip} alt='ru-trip' />
      </div>
      <div className={classes.trip}>
        <p>Путешествия в Белоруссию</p>
        <img src={belTrip} alt='bel-trip' />
      </div>
      <div className={classes.trip}>
        <p>Путешествия в Молдавию</p>
        <img src={moldTrip} alt='mold-trip' />
      </div>
      <div className={classes.trip}>
        <p>Путешествия в Казахстан</p>
        <img src={kazTrip} alt='kaz-trip' />
      </div>
    </div>
  );
};
export default AboutUs;
