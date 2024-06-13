import * as React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import styles from './Intro.module.scss'
import { Context } from '@/app/components/ui/Context/Context';
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'
import Ellipse from '../../ui/Ellipse/Ellipse';


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
            name: "Andijan, Andijan region",
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
            name: "Ежедневно 09:00 - 18:00",
            icon: "fa-regular fa-clock"
        },
    ]

    return (
        <section className={styles.intro}>
            <MyContainer>
                <div className={styles.intro__item}>
                    <Ellipse />
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
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.306599303784!2d72.3010183!3d40.8043094!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bc950039f0707f%3A0xb4a115f4f00c297e!2sAsaloft.%20Loft%20Mebell!5e0!3m2!1sru!2s!4v1718297492203!5m2!1sru!2s" width="100%" height="100%" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </MyContainer>
        </section >
    )
}

export default Intro;