import classes from './Countries.module.scss';

const Countries = () => {
  return (
    <nav className={classes.wrapper}>
      <h3>Где отдохнуть?</h3>
      <ul>
        <li>
          <a
            href='https://ru.wikipedia.org/wiki/%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F'
            target='_blank'
          >
            Россия
          </a>
        </li>
        <li>
          <a
            href='https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D0%BB%D0%BE%D1%80%D1%83%D1%81%D1%81%D0%B8%D1%8F'
            target='_blank'
          >
            Белоруссия
          </a>
        </li>
        <li>
          <a
            href='https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D0%BB%D0%B4%D0%B0%D0%B2%D0%B8%D1%8F'
            target='_blank'
          >
            Молдавия
          </a>
        </li>
        <li>
          <a
            href='https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D0%B7%D0%B0%D1%85%D1%81%D1%82%D0%B0%D0%BD'
            target='_blank'
          >
            Казахстан
          </a>
        </li>
        <li>
          <a href='https://ru.wikipedia.org/wiki/%D0%9A%D0%B8%D1%82%D0%B0%D0%B9' target='_blank'>
            Китай
          </a>
        </li>
        <li>
          <a
            href='https://ru.wikipedia.org/wiki/%D0%9D%D0%BE%D1%80%D0%B2%D0%B5%D0%B3%D0%B8%D1%8F'
            target='_blank'
          >
            Норвгегия
          </a>
        </li>
        <li>
          <a
            href='https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BD%D0%BB%D1%8F%D0%BD%D0%B4%D0%B8%D1%8F'
            target='_blank'
          >
            Финляндия
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Countries;
