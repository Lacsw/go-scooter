import './Parties.css';

import partyImage01 from '../../images/parties/party01.png';
import partyImage02 from '../../images/parties/party02.png';
import partyImage03 from '../../images/parties/party03.png';
import partyImage04 from '../../images/parties/party04.png';

export default function Parties() {
  return (
    <section className='parties'>
      <div className='parties__container'>
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
          <li className='parites__image parites__image_one'>
            <img src={partyImage01} alt='вечеринка' />
            <span className='parties__image-sticker-one' />
          </li>
          <li className='parites__image parites__image_two'>
            <img src={partyImage02} alt='вечеринка' />
            <span className='parties__image-sticker-two' />
          </li>
          <li className='parites__image parites__image_three'>
            <img src={partyImage03} alt='вечеринка' />
          </li>
          <li className='parites__image parites__image_four'>
            <img src={partyImage04} alt='вечеринка' />
            <span className='parties__image-sticker-three' />
          </li>
        </ul>
      </div>
    </section>
  );
}
