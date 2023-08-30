import './Benefits.css';

import priceIcon from '../../images/benefits/price-icon.svg';
import scooterIcon from '../../images/benefits/scooter-icon.svg';
import clockIcon from '../../images/benefits/clock-icon.svg';
import batteryIcon from '../../images/benefits/battery-icon.svg';

export default function Benefits() {
  return (
    <section className='benefits'>
      <div className='benefits__container'>
        <h2 className='benefits__title'>Вот что даёт участие в клубе</h2>
        <ul className='benefits__list'>
          <li className='benefits__item'>
            <img
              src={priceIcon}
              alt='цена за старт'
              className='benefits__item-image'
            />
            <p className='benefits__item-text'>0₽ за старт в каждой поездке</p>
          </li>
          <li className='benefits__item'>
            <img
              src={scooterIcon}
              alt='цена за старт'
              className='benefits__item-image'
            />
            <p className='benefits__item-text'>
              Катаетесь с друзьями? Бронируйте до трёх самокатов <br />с
              аккаунта с абонементом —<br /> так у всех будет бесплатный старт
            </p>
          </li>
          <li className='benefits__item'>
            <img
              src={clockIcon}
              alt='цена за старт'
              className='benefits__item-image'
            />
            <p className='benefits__item-text'>
              Бесплатная пауза 15 минут <br />в поездке — например, чтобы зайти
              за кофе или передохнуть
            </p>
          </li>

          <li className='benefits__item'>
            <img
              src={batteryIcon}
              alt='цена за старт'
              className='benefits__item-image'
            />
            <p className='benefits__item-text'>
              Если самокат недостаточно заряжен или с ним неудобно переходить
              дорогу, замените
              <br /> по пути на другой — это бесплатно
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
