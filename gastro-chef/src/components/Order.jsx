import React from "react";
import "../App.css"
import './styles/Order.css'
import iconSet from "../icomoon/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";

const Order = () => {
  return (
    <div className="container">
      <div className="order__faq">
        <div className="order__block order__faq__item">
          <div className="section__title">Оформить заказ</div>
          <div className="center__text">
            Обсудите все детали заказа по телефону <br />
            или сами укажите все подробности онлайн
          </div>
          <div className="order__name">
            <div className="form__title form__name">Имя</div>
            <input type="text" className="order__input" placeholder="Иван" />
          </div>
          <div className="order__number">
            <div className="form__title form__number">Номер телефона</div>
            <input
              type="text"
              className="order__input"
              placeholder="097214063 2"
            />
          </div>
          <div className="agreements">
            <div className="agreement">
              <div className="green__circle__wrap">
                <div className="green__circle"></div>
              </div>
              <div className="agree__content">
                Тест-день! Получить скидку -30%?
              </div>
            </div>
            <div className="agreement">
              <div className="green__circle__wrap">
                <div className="green__circle"></div>
              </div>
              <div className="agree__content">
                Согласен с <span>условиями сотрудничества</span>
              </div>
            </div>
          </div>
          <a href="#" className="button btn__inactive">
            Заказ по телефону
          </a>
          <p className="block__title__custom">ИЛИ</p>
          <a href="#" className="button">
            Онлайн заказ
          </a>
        </div>
        <div className="faq__block order__faq__item">
          <div className="block__title__custom">Часто задаваемые вопросы</div>
          <div className="faq__wrap">
            <div className="faq">
              <div className="faq__item">
                Как осуществляется доставка правильного питания?{" "}
                <IcomoonReact iconSet={iconSet} size={30} icon="circle-right" />
              </div>
              <div className="faq__item">
                Можно ли менять время доставки\место?{" "}
                <IcomoonReact iconSet={iconSet} size={30} icon="circle-right" />
              </div>
              <div className="faq__item">
                Как и в чем приезжает еда?{" "}
                <IcomoonReact iconSet={iconSet} size={30} icon="circle-right" />
              </div>
              <div className="faq__item">
                Когда Вы готовите?{" "}
                <IcomoonReact iconSet={iconSet} size={30} icon="circle-right" />
              </div>
              <div className="faq__item">
                Какие продукты Вы используете?{" "}
                <IcomoonReact iconSet={iconSet} size={30} icon="circle-right" />
              </div>
              <div className="faq__item">
                Я буду есть одно и то же?{" "}
                <IcomoonReact iconSet={iconSet} size={30} icon="circle-right" />
              </div>
              <div className="faq__item">
                У меня аллергия и непереносимость определенных продуктов{" "}
                <IcomoonReact iconSet={iconSet} size={30} icon="circle-right" />
              </div>
              <div className="faq__item">
                В какой очередности все есть?{" "}
                <IcomoonReact iconSet={iconSet} size={30} icon="circle-right" />
              </div>
              <div className="faq__item">
                Можно ли замораживать программу?{" "}
                <IcomoonReact iconSet={iconSet} size={30} icon="circle-right" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
