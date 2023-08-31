import './Hero.css';

import logo from '../../images/logo.svg';
import heroImage from '../../images/hero-image.png';
import heroImageCaption from '../../images/image-caption.png';

export default function Hero() {
  return (
    <section className='hero'>
      <div className='hero__container'>
        <img className='hero__logo' src={logo} alt='логотип' />
        <div className='hero__image-group'>
          <img className='hero__image' src={heroImage} alt='скутер' />
          <img
            className='hero__image-caption'
            src={heroImageCaption}
            alt='сообщество любителей самокатов'
          />
          <span className='hero__image-ellipse'></span>
        </div>

        <h1 className='hero__title'>Вступайте в клуб Самокатов</h1>
        <p className='hero__subtitile'>
          Купите абонемент, чтобы стать частью клуба в новом сезоне–2024. 8
          месяцев за
          <div className='hero__prices'>
            <span className='hero__new-price'>499₽</span>
            <span className='hero__old-price'>3190₽</span>
          </div>
        </p>
        <a href='#membership' className='hero__btn'>Стать частью клуба</a>
      </div>
    </section>
  );
}
