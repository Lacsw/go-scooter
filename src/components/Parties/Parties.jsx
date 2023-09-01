import './Parties.css';

import partyImage01 from '../../images/parties/party01.png';
import partyImage02 from '../../images/parties/party02.png';
import partyImage03 from '../../images/parties/party03.png';
import partyImage04 from '../../images/parties/party04.png';

export default function Parties() {
  return (
    <section className='parties'>
      <div className='parties__container main-padding'>
        <h2 className='parties__title'>
          Эксклюзивный доступ к событиям Самокатов
        </h2>
        <p className='parties__text'>
          С абонементом — у вас доступ <br />к специальным мероприятиям, скидки
          и классный мерч. В 2023 году мы танцевали на Даче Плюс
          <br /> с Антохой MC, катались на самокатах <br />с Сергеем Мезенцевым
          и слушали хор Attaque de Panique
        </p>
        <ul className='parites__images'>
          <li className='parites__image-group parites__image-group_one'>
            <img
              className='parites__image'
              src={partyImage01}
              alt='вечеринка'
            />
            <span className='parties__image-sticker-one' />
            <span className='parties__image-sticker-two parties__image-sticker-two_mobile' />
          </li>
          <li className='parites__image-group parites__image-group_two'>
            <img
              className='parites__image'
              src={partyImage02}
              alt='вечеринка'
            />
            <span className='parties__image-sticker-two' />
          </li>
          <li className='parites__image-group parites__image-group_three'>
            <img
              className='parites__image'
              src={partyImage03}
              alt='вечеринка'
            />
          </li>
          <li className='parites__image-group parites__image-group_four'>
            <img
              className='parites__image'
              src={partyImage04}
              alt='вечеринка'
            />
            <span className='parties__image-sticker-three' />
          </li>
        </ul>
        <nav className='parties__nav'>
          <button className='parties__nav-btn parties__nav-btn_prev' />
          <button className='parties__nav-btn parties__nav-btn_next' />
        </nav>
      </div>
    </section>
  );
}
