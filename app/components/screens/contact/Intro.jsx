import * as React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import styles from './Intro.module.scss'
import { Context } from '@/app/components/ui/Context/Context';
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'


const Intro = () => {
    const { lan } = React.useContext(Context);
    const [title] = React.useState({
        en: 'Contact',
        ru: 'Контакт',
        uz: 'Kontakt'
    });
    const address = [
        {
            id: 1,
            titel: "Адрес",
            name: "г. Ташкент, ул. Паркент, 283",
            icon: "fa-solid fa-location-dot"
        },
        {
            id: 2,
            titel: "Ориентир",
            name: "Паркентский рынок",
            icon: "fa-regular fa-map"
        },
        {
            id: 3,
            titel: "Телефон",
            tel: "+998 (93) 701-17-23",
            icon: "fa-solid fa-phone-volume"
        },
        {
            id: 4,
            titel: "Режим работы",
            name: "Ежедневно 09:00 - 19:00",
            icon: "fa-regular fa-clock"
        },
    ]

    return (
        <section className={styles.intro}>
            <MyContainer>
                <div className={styles.intro__item}>
                    <div class={styles.ellipse__el}></div>
                    <h1 className={styles.intro__item__title}>{title[lan]}</h1>
                    <div className={styles.intro__item__list}>
                        <div className={styles.intro__item__list__address}>
                            {
                                address?.map((item) => (
                                    <div className={styles.intro__item__list__address__item} key={item.id}>
                                        <i className={item.icon}></i>
                                        <div>
                                            <p>{item.titel}</p>
                                            {
                                                item.tel ? (
                                                    <a href={`tel:${item.tel}`}>
                                                        <b>{item.tel}</b>
                                                    </a>
                                                ) : (

                                                    <b>{item.name}</b>
                                                )
                                            }
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                        <div className={styles.intro__item__list__map}>
                            <iframe src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4876.99878707187!2d72.3288522771734!3d40.739349435939225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bced2ca7c5470d%3A0x94dd6d4ba9d395e1!2z0YPQu9C40YbQsCDQnNGD0YHRgtCw0LrQuNC70LvQuNC6IDIsINCQ0L3QtNC40LbQsNC9LCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e1!3m2!1sru!2s!4v1689419610812!5m2!1sru!2s`} width="100%" height="100%" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </MyContainer>
        </section >
    )
}

export default Intro;