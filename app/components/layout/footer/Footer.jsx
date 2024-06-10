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

    return (
        <footer className={styles.footer}>
            <Link href={'/'}>
                <div>
                    <span></span>
                    <div>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </Link>
            <MyContainer>
                <div className={styles.footer__list}>
                    <div className={styles.footer__list__logo}>
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
                            <p className={styles.footer__list__logo__title} key={item.id}>
                                {item[`nav_${lan}`]}
                            </p>
                        ))}
                    </div>
                    <nav className={styles.footer__list__nav}>
                        <div>
                            {
                                menuTitle?.map((item) => (
                                    <p className={styles.footer__list__nav__title} key={item.id}>
                                        {item[`nav_${lan}`]}
                                    </p>
                                ))
                            }
                            <ul className={styles.footer__list__nav__list}>
                                {
                                    headerData?.map((item) => (
                                        <li
                                            key={item.id}
                                            className={`${styles.footer__list__nav__list__item} ${pathname === item.link ? styles.active : ""}`}
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
                                    <p className={styles.footer__list__nav__title} key={item.id}>
                                        {item[`nav_${lan}`]}
                                    </p>
                                ))
                            }
                            <ul className={styles.footer__list__nav__list}>
                                {
                                    bardata?.map((item) => (
                                        <li
                                            key={item.id}
                                            className={styles.footer__list__nav__list__item}
                                        >
                                            <span className={styles.footer__list__nav__list__item__span}></span>
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
                    <div className={styles.footer__list__links}>
                        {
                            menuTitle?.map((item) => (
                                <p className={styles.footer__list__links__title} key={item.id}>
                                    {item[`nav_${lan}`]}
                                </p>
                            ))
                        }
                        <ul className={styles.footer__list__links__list}>
                            <li className={styles.footer__list__links__list__item}>
                                <Link target='_blank' href={'/'}>
                                    <i className="fa-brands fa-instagram"></i>
                                </Link>
                            </li>
                            <li className={styles.footer__list__links__list__item}>
                                <Link target='_blank' href={'/'}>
                                    <i className="fa-brands fa-telegram"></i>
                                </Link>
                            </li>
                            <li className={styles.footer__list__links__list__item}>
                                <Link target='_blank' href={'/'}>
                                    <i className="fa-brands fa-facebook"></i>
                                </Link>
                            </li>
                            <li className={styles.footer__list__links__list__item}>
                                <Link target='_blank' href={'/'}>
                                    <i className="fa-brands fa-youtube"></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </MyContainer>
        </footer>
    )
}

export default Footer;