import Me from "./res/img/me.jpg";
const AboutMe = () => {
  return (
    <>
      <div id="about">
        <div id="column">
          <div>
            <h3>Основное</h3>
            <span>ФИО:</span> Давлетбердин Арслан Салаватович <br></br>
            <span>ПОЛ:</span> Мужской<br></br>
            <span>Дата рождения:</span> 11.05.2001<br></br>
          </div>
          <div>
            <h3>Образование</h3>
            <div>
              <h4>Бакалавриат</h4>
              <span>Учебное заведение:</span>Башкирский государственный
              университет(БашГУ)<br></br>
              <span>Факультет:</span>Естественно-математический факультет
              <br></br>
              <span>Специальность:</span>Прикладная математика и информатика
              <br></br>
              <span>Периуд обучения:</span>2018-2022 гг.
            </div>
            <div>
              <h4>Магистратура</h4>
              <span>Учебное заведение:</span>Башкирский государственный
              университет(БашГУ)<br></br>
              <span>Факультет:</span>Факультет математики и информационных
              технологий<br></br>
              <span>Специальность:</span>Прикладная математика и информатика
              <br></br>
              <span>Периуд обучения:</span>2022-2024 гг.
            </div>
          </div>
          <div>
            <h4>Контакты</h4>
            <span>Телефон</span> +7 (927) 318 52-85<br></br>
            <span>email</span> <u>a12.log@yandex.ru</u> <br></br>
          </div>
        </div>
        <div id="column">
          <img id="mmmg" src={Me} />
        </div>
      </div>
    </>
  );
};
export default AboutMe;
