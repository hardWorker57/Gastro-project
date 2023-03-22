import React from "react";
import "../App.css";
import "./styles/Advantages.css";
import iconSet from "../icomoon/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";
import Ellipse_115 from '../assets/Ellipse_115.png';

const Advantages = () => {
  return (
    <div className="container__custom">
      <div className="advantages">
        <div className="advantage">
          <IcomoonReact iconSet={iconSet} size={100} icon="eco" />{" "}
          <p className="card__content">Бережём природу. Эко-тара и проборы.</p>
        </div>
        <div className="advantage">
          <IcomoonReact iconSet={iconSet} size={100} icon="Group-213" />{" "}
          <p className="card__content">
            28 дней без повторения, более 300 блюд!
          </p>
        </div>
        <div className="advantage">
          <IcomoonReact iconSet={iconSet} size={100} icon="time" />{" "}
          <p className="card__content">
            Бесплатно заменяем блюда и ингредиенты.
          </p>
        </div>
        <div className="advantage">
          <IcomoonReact iconSet={iconSet} size={100} icon="night" />{" "}
          <p className="card__content">
            Готовим ночью, упаковываем отправляем Вам!
          </p>
        </div>
        <div className="advantage">
          <IcomoonReact iconSet={iconSet} size={100} icon="Group-215" />{" "}
          <p className="card__content">
            Ежедневная удобная и бесплатная доставка <br />с 6:00 до 10:00
          </p>
        </div>
        <div className="advantage">
          <IcomoonReact iconSet={iconSet} size={90} icon="Group-214" />{" "}
          <p className="card__content">
            Сохраняем Вашу энергию и до 14 часов в неделю <br />
            освобождая от готовки!
          </p>
        </div>
      </div>
      <div className="advantages__elips">
        <img src={Ellipse_115} />
      </div>
    </div>
  );
};

export default Advantages;
