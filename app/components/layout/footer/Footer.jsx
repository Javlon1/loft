import * as React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import styles from './Footer.module.scss'
import { Context } from '@/app/components/ui/Context/Context';
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'
import logo from "../../../../public/img/logo.svg"
import { useRouter } from 'next/router';


const Footer = () => {
    const { lan } = React.useContext(Context);
    const { pathname } = useRouter();

    const [introTitle] = React.useState([{ id: 1, nav_en: 'FURNITURE IN LOFT STYLE', nav_ru: 'МЕБЕЛЬ В СТИЛЕ ЛОФТ', nav_uz: 'LOFT STILDAGI MEBELAR', }]);
    const [menuTitle] = React.useState([{ id: 1, nav_en: 'PAGES', nav_ru: 'СТРАНИЦЫ', nav_uz: 'SAHIFALAR', }]);
    const [barTitle] = React.useState([{ id: 1, nav_en: 'CATALOG', nav_ru: 'КАТАЛОГ', nav_uz: 'KATALOG', }]);
    const [headerData] = React.useState([{ id: 1, link: '/', nav_en: 'CATALOG', nav_ru: 'КАТАЛОГ', nav_uz: 'KATALOG', }, { id: 2, link: '/users', nav_en: 'VIDEO REVIEWS', nav_ru: 'ВИДЕО ОБЗОРЫ', nav_uz: 'VIDEO SHARHLAR', }, { id: 3, link: '/accepted', nav_en: 'REVIEWS', nav_ru: 'ОТЗЫВЫ', nav_uz: 'SHARHLAR', }, { id: 4, link: '/warehouse', nav_en: 'CONTACTS', nav_ru: 'КОНТАКТЫ', nav_uz: 'KONTAKTLAR', }]);
    const [bardata] = React.useState([{ id: 1, link: '/', nav_en: 'TABLES AND CHAIRS', nav_ru: 'СТОЛЫ И СТУЛЬЯ', nav_uz: 'Stol va kursilar', }, { id: 2, link: '/', nav_en: 'RACKS', nav_ru: 'СТЕЛЛАЖИ', nav_uz: 'REKLAR', }, { id: 3, link: '/', nav_en: 'FURNITURE', nav_ru: 'МЯГКАЯ МЕБЕЛЬ', nav_uz: 'YUMSHOQ MEBEL', }, { id: 4, link: '/', nav_en: 'TABLES', nav_ru: 'ЖУРНАЛЬНЫЕ СТОЛИКИ', nav_uz: 'STOLLAR', }]);
    const [questiondata] = React.useState(
        [
            {
                id: 1,
                text_ru: "Есть вопросы?",
                text_en: "Have questions?",
                text_uz: "Savollaringiz bormi?",
            },
            {
                id: 2,
                text_ru: "Есть вопросы?",
                text_en: "Have questions?",
                text_uz: "Savollaringiz bormi?",
            },
            {
                id: 3,
                text_ru: "Есть вопросы?",
                text_en: "Have questions?",
                text_uz: "Savollaringiz bormi?",
            },
            {
                id: 4,
                text_ru: "Есть вопросы?",
                text_en: "Have questions?",
                text_uz: "Savollaringiz bormi?",
            },
        ]
    );




    return (
        <div className={styles.mainFooter}>
            <Link href={'/'}>
                <div className={styles.mainFooter__question}>
                    <span className={styles.mainFooter__question__btn}>
                        <i className="fa-solid fa-arrow-right-long"></i>
                    </span>
                    <div className={styles.mainFooter__question__inner}>
                        {
                            questiondata?.map((item) => (
                                <span
                                    key={item.id}
                                    className={styles.mainFooter__question__inner__text}
                                >
                                    <p>
                                        {item[`text_${lan}`]}
                                    </p>
                                </span>
                            ))
                        }
                    </div>
                </div>
            </Link>
            <footer className={styles.mainFooter__footer}>
                <MyContainer>
                    <div className={styles.mainFooter__footer__list}>
                        <div className={styles.mainFooter__footer__list__logo}>
                            <Link
                                href={'/'}
                            >
                                <Image
                                    width={150}
                                    src={logo}
                                    alt='logo'
                                />
                            </Link>
                            {introTitle?.map((item) => (
                                <p className={styles.mainFooter__footer__list__logo__title} key={item.id}>
                                    {item[`nav_${lan}`]}
                                </p>
                            ))}
                        </div>
                        <nav className={styles.mainFooter__footer__list__nav}>
                            <div>
                                {
                                    menuTitle?.map((item) => (
                                        <p className={styles.mainFooter__footer__list__nav__title} key={item.id}>
                                            {item[`nav_${lan}`]}
                                        </p>
                                    ))
                                }
                                <ul className={styles.mainFooter__footer__list__nav__list}>
                                    {
                                        headerData?.map((item) => (
                                            <li
                                                key={item.id}
                                                className={`${styles.mainFooter__footer__list__nav__list__item} ${pathname === item.link ? styles.active : ""}`}
                                            >
                                                <Link
                                                    onClick={() => setMenu(false)}
                                                    href={item.link}
                                                >
                                                    <p>
                                                        {item[`nav_${lan}`]}
                                                    </p>
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div>
                                {
                                    barTitle?.map((item) => (
                                        <p className={styles.mainFooter__footer__list__nav__title} key={item.id}>
                                            {item[`nav_${lan}`]}
                                        </p>
                                    ))
                                }
                                <ul className={styles.mainFooter__footer__list__nav__list}>
                                    {
                                        bardata?.map((item) => (
                                            <li
                                                key={item.id}
                                                className={styles.mainFooter__footer__list__nav__list__item}
                                            >
                                                <span className={styles.mainFooter__footer__list__nav__list__item__span}></span>
                                                <Link
                                                    href={item.link}
                                                >
                                                    {item[`nav_${lan}`]}
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </nav>
                        <div className={styles.mainFooter__footer__list__links}>
                            {
                                menuTitle?.map((item) => (
                                    <p className={styles.mainFooter__footer__list__links__title} key={item.id}>
                                        {item[`nav_${lan}`]}
                                    </p>
                                ))
                            }
                            <ul className={styles.mainFooter__footer__list__links__list}>
                                <li className={styles.mainFooter__footer__list__links__list__item}>
                                    <Link target='_blank' href={'/'}>
                                        <i className="fa-brands fa-instagram"></i>
                                    </Link>
                                </li>
                                <li className={styles.mainFooter__footer__list__links__list__item}>
                                    <Link target='_blank' href={'/'}>
                                        <i className="fa-brands fa-telegram"></i>
                                    </Link>
                                </li>
                                <li className={styles.mainFooter__footer__list__links__list__item}>
                                    <Link target='_blank' href={'/'}>
                                        <i className="fa-brands fa-facebook"></i>
                                    </Link>
                                </li>
                                <li className={styles.mainFooter__footer__list__links__list__item}>
                                    <Link target='_blank' href={'/'}>
                                        <i className="fa-brands fa-youtube"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </MyContainer>
            </footer>
        </div>
    )
}

export default Footer;