import classes from './Contacts.module.scss';
const Contacts = (props) => {
  const {} = props;

  return (
    <div className={classes.wrapper}>
      <div>
        <h1>Контактные телефоны</h1>
        <p>
          Телефон: <a href='tel:+78000000000'>+7-800-000-00-00</a>
        </p>
        <p>Email: info@aborigen.ru</p>
      </div>
      <div>
        <h1>Время работы call-центра</h1>
        <p>10:00 - 18:00 Понедельник - пятница</p>
        <p>
          <span>выходной</span> Суббота - Воскресенье
        </p>
      </div>
      <div>
        <h1>Наши реквизиты</h1>
        <p>ООО «АБОРИГЕН»</p>
        <p>ИНН 2161321645 КПП 16519616165465 ОГРН 16516912185</p>
        <p>Директор: Иванов Иван Иванович</p>
      </div>
    </div>
  );
};
export default Contacts;
