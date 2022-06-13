import classes from './PriceTable.module.scss';

const PriceTable = () => {
  const data = Array(20).fill(0);

  const randomDate = () => {
    let day = Math.floor(Math.random() * (1, 30) + 1);
    let month = Math.floor(Math.random() * (0, 12));
    let monthArr = [
      'Января',
      'Февраля',
      'Марта',
      'Апреля',
      'Мая',
      'Июня',
      'Июля',
      'Августа',
      'Сентября',
      'Октября',
      'Ноября',
      'Декабря',
    ];
    return `${day} ${monthArr[month]} 2023 года`;
  };

  const randomPrice = () => {
    const price = Math.floor(Math.random() * (30000, 70000));
    return `${price} рублей`;
  };

  const randomCountry = () => {
    const countryArr = [
      'Россия',
      'Белоруссия',
      'Молдавия',
      'Казахстан',
      'Китай',
      'Норвгегия',
      'Финляндия',
    ];
    const num = Math.floor(Math.random() * (0, countryArr.length));
    return `${countryArr[num]}`;
  };

  return (
    <div className={classes.wrapper}>
      <table>
        <thead>
          <tr>
            <th>Страна</th>
            <th>Дата</th>
            <th>Цена</th>
          </tr>
        </thead>
        <tbody>
          {data.map((date, index) => (
            <tr key={index}>
              <td>{randomCountry()}</td>
              <td>{randomDate()}</td>
              <td>{randomPrice()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PriceTable;
