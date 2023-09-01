import { termsLinks } from '../../utils/constants';
import './Terms.css';

export default function Terms() {
  return (
    <section className='terms main-padding'>
      <p className='terms__text'>
        Доп. опция «Абонемент на самокаты» на 8 месяцев (240 дней) активируется
        автоматически с момента старта сезона 2024 г. самокатов Яндекс Go, далее
        предусмотрено автопродление доп.опции за 399 руб./мес. Сертификат на
        доп.опцию «Абонемент на самокаты» на 8 месяцев оформляется на условиях
        документа{' '}
        <a className='terms__link' href={termsLinks.SEASONPASS}>
          yandex.ru/legal/scooters_seasonpass
        </a>
        . Доп.опция доступна пользователям с активной подпиской (условия
        подписки:{' '}
        <a className='terms__link' href={termsLinks.CONDITIONS}>
          yandex.ru/legal/yandex_plus_conditions
        </a>
        ), есть ограничения, подробнее:{' '}
        <a className='terms__link' href={termsLinks.OPTIONS}>
          yandex.ru/legal/yandex_plus_opzii_list
        </a>
        . В случае отсутствия у пользователя активной подписки на дату активации
        доп.опции, пользователю предоставляется 7 дней подписки Яндекс Плюс
        бесплатно, далее автопродление — 299 руб./мес. Электросамокаты Яндекс Go
        — сервис аренды электросамокатов на условиях:{' '}
        <a className='terms__link' href={termsLinks.MAIN}>
          clck.ru/gwDGn
        </a>
        . 0+
      </p>
    </section>
  );
}
