import './Membership.css';

import scooterBigImage from '../../images/membership/scooter01.png';
import scooterSmallImage from '../../images/membership/scooter02.png';

export default function Membership() {
  return (
    <section className='membership' id='membership'>
      <div className='membership__container main-padding'>
        <div className='membership__item'>
          <h2 className='membership__title'>
            Купить абонемент <br />и вступить <br />в клуб смогут <br />
            те, кто в Плюсе
          </h2>
          <p className='membership__text'>
            За каждую поездку на самокатах такие пользователи получают кешбэк
            баллами. Баллы можно тратить на поездки на самокатах <br />и такси с
            Яндекс Go, покупки <br />и заказы в других сервисах Яндекса
          </p>
        </div>
        <div className='membership__item membership__item_invisible'>
          <img
            className='membership__scooter-big'
            src={scooterBigImage}
            alt='скутер'
          />
          <span className='membership__plus-logo'></span>
          <span className='membership__image-ellipse'></span>
        </div>
        <div className='membership__item'>
          <img
            className='membership__scooter-small'
            src={scooterSmallImage}
            alt='скутер'
          />
          <span className='membership__image-ellipse membership__image-ellipse_small-scooter'></span>
        </div>
        <div className='membership__item'>
          <h2 className='membership__title'>
            80% наших пользователей уже в клубе <br />и экономят <br />
            на поездках
          </h2>
          <p className='membership__text'>
            Присоединяйтесь — опция начнёт действовать в начале сезона–2024. Об
            открытии сезона предупредим заранее, чтобы вы были готовы
          </p>
          <a href='#buy-me' className='membership__btn'>
            Хочу абонимент
          </a>
        </div>
      </div>
    </section>
  );
}
