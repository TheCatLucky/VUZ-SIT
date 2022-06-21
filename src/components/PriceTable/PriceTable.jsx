import classes from './PriceTable.module.scss';

const PriceTable = () => {
  const randDate = (start, end) =>
    new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

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

  const data = Array(20)
    .fill(0)
    .map(() => ({
      date: randDate(new Date(2023, 0, 1), new Date(2024, 0, 1)),
      country: randomCountry(),
      price: randomPrice(),
    }))
    .sort((a, b) => a.date - b.date);

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
              <td>{date.date.toLocaleDateString()}</td>
              <td>{date.country}</td>
              <td>{date.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PriceTable;
