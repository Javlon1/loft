import * as React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Header.module.scss';
import { Context } from '../../ui/Context/Context';
import me from "../../../../public/img/logo.svg"
import topbar from "../../../../public/img/topbar.png"
import Language from '../../ui/language/Language';
import MyContainer from '../../ui/MyContainer/MyContainer';

const Header = () => {
    const { lan } = React.useContext(Context);
    const { pathname } = useRouter();

    const [headerData] = React.useState([{ id: 1, link: '/', nav_en: 'CATALOG', nav_ru: 'КАТАЛОГ', nav_uz: 'KATALOG', }, { id: 2, link: '/users', nav_en: 'VIDEO REVIEWS', nav_ru: 'ВИДЕО ОБЗОРЫ', nav_uz: 'VIDEO SHARHLAR', }, { id: 3, link: '/accepted', nav_en: 'REVIEWS', nav_ru: 'ОТЗЫВЫ', nav_uz: 'SHARHLAR', }, { id: 4, link: '/warehouse', nav_en: 'CONTACTS', nav_ru: 'КОНТАКТЫ', nav_uz: 'KONTAKTLAR', }]);
    const [barTitle] = React.useState([{ id: 1, nav_en: 'Categories', nav_ru: 'Категории', nav_uz: 'Kategoriyalar', }]);
    const [menuTitle] = React.useState([{ id: 1, nav_en: 'PAGES', nav_ru: 'СТРАНИЦЫ', nav_uz: 'SAHIFALAR', }]);
    const [bardata] = React.useState([{ id: 1, link: '/', nav_en: 'TABLES AND CHAIRS', nav_ru: 'СТОЛЫ И СТУЛЬЯ', nav_uz: 'Stol va kursilar', }, { id: 2, link: '/', nav_en: 'RACKS', nav_ru: 'СТЕЛЛАЖИ', nav_uz: 'REKLAR', }, { id: 3, link: '/', nav_en: 'FURNITURE', nav_ru: 'МЯГКАЯ МЕБЕЛЬ', nav_uz: 'YUMSHOQ MEBEL', }, { id: 4, link: '/', nav_en: 'TABLES', nav_ru: 'ЖУРНАЛЬНЫЕ СТОЛИКИ', nav_uz: 'STOLLAR', }]);
    const [menuData] = React.useState([{ id: 1, nav_en: 'MENU', nav_ru: 'МЕНЮ', nav_uz: 'MENU' }]);
    const [saleData] = React.useState([{ id: 1, nav_en: 'SALES', nav_ru: 'СКИДКИ', nav_uz: 'CHERGIRMALAR' }]);

    const [overlay, setOverlay] = React.useState(false)
    const [menu, setMenu] = React.useState(false)

    return (
        <header className={styles.header}>
            <MyContainer>
                <nav className={styles.header__nav}>
                    <div className={styles.header__nav__logo}>
                        <Link
                            href={'/'}
                        >
                            <Image
                                src={me}
                                alt='logo'
                            />
                        </Link>
                        {
                            menuData?.map((item) => (
                                <button onClick={() => setOverlay(true)} key={item.id}>
                                    <i className="fa-solid fa-bars"></i>
                                    {item[`nav_${lan}`]}
                                </button>
                            ))
                        }
                    </div>
                    <ul className={styles.header__nav__list}>
                        {
                            headerData?.map((item) => (
                                <li
                                    key={item.id}
                                    className={`${styles.header__nav__list__item} ${pathname === item.link ? styles.active : ""}`}
                                >
                                    <Link
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
                    {
                        saleData?.map((item) => (
                            <Link className={styles.sale} key={item.id} href={'/sale'}>
                                {item[`nav_${lan}`]}
                            </Link>
                        ))
                    }
                    <div className={styles.header__nav__links}>
                        <Link href={'/'}>
                            <i className="fa-solid fa-cart-shopping"></i>
                        </Link>
                        <a className={styles.header__nav__links__tel} href="tel:+998937011723">(93) 701-17-23</a>
                        <Language />
                    </div>
                </nav>
                <nav className={styles.header__navResponsive}>
                    {
                        menu ? (

                            <button onClick={() => setMenu(false)} className={styles.header__navResponsive__ham}>
                                <i className="fa-solid fa-x"></i>
                            </button>
                        ) : (
                            <button onClick={() => setMenu(true)} className={styles.header__navResponsive__ham}>
                                <i className="fa-solid fa-bars"></i>
                            </button>
                        )
                    }

                    <Link
                        href={'/'}
                    >
                        <Image
                            src={me}
                            alt='logo'
                        />
                    </Link>

                    <div className={styles.header__navResponsive__links}>
                        <Link href={'/'}>
                            <i className="fa-solid fa-cart-shopping"></i>
                        </Link>
                        <a className={styles.header__navResponsive__links__tel} href="tel:+998937011723">
                            <i className="fa-solid fa-phone"></i>
                        </a>
                    </div>
                </nav>
            </MyContainer>


            <div className={`${styles.overlay} ${overlay ? styles.overlayAct : ""}`}>
                <div className={`${styles.overlay__item}`}></div>
                <div className={`${styles.overlay__item}`}></div>
                <div className={`${styles.overlay__item}`}></div>
                <div className={`${styles.overlay__item}`}></div>
            </div>
            <div className={`${styles.topbar} ${overlay ? styles.overlayAct : ""}`}>
                <button className={styles.topbar__x} onClick={() => setOverlay(false)}>
                    <i className="fa-solid fa-x"></i>
                </button>
                <div className={styles.topbar__items}>
                    <div className={styles.topbar__left}>
                        {
                            barTitle?.map((item) => (
                                <p className={styles.topbar__left__title} key={item.id}>
                                    {item[`nav_${lan}`]}
                                </p>
                            ))
                        }
                        <ul className={styles.topbar__left__list}>
                            {
                                bardata?.map((item) => (
                                    <li
                                        key={item.id}
                                        className={styles.topbar__left__list__item}
                                    >
                                        <span className={styles.topbar__left__list__item__span}></span>
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
                    <div className={styles.topbar__right}>
                        <Image
                            className={styles.topbar__right__img}
                            src={topbar}
                            alt='img'
                        />
                        <div className={styles.topbar__right__bottom}>
                            <a className={styles.header__nav__links__tel} href="tel:+998937011723">+998 (93) 701-17-23</a>
                            <ul className={styles.topbar__right__bottom__list}>
                                <li className={styles.topbar__right__bottom__list__item}>
                                    <Link target='_blank' href={'/'}>
                                        <i className="fa-brands fa-instagram"></i>
                                    </Link>
                                </li>
                                <li className={styles.topbar__right__bottom__list__item}>
                                    <Link target='_blank' href={'/'}>
                                        <i className="fa-brands fa-telegram"></i>
                                    </Link>
                                </li>
                                <li className={styles.topbar__right__bottom__list__item}>
                                    <Link target='_blank' href={'/'}>
                                        <i className="fa-brands fa-facebook"></i>
                                    </Link>
                                </li>
                                <li className={styles.topbar__right__bottom__list__item}>
                                    <Link target='_blank' href={'/'}>
                                        <i className="fa-brands fa-youtube"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.menu} ${menu ? styles.menuAct : ""}`}>
                <div className={styles.menu__center}>
                    {
                        barTitle?.map((item) => (
                            <p className={styles.menu__center__title} key={item.id}>
                                {item[`nav_${lan}`]}
                            </p>
                        ))
                    }
                    <ul className={styles.menu__center__list}>
                        {
                            bardata?.map((item) => (
                                <li
                                    key={item.id}
                                    className={styles.menu__center__list__item}
                                >
                                    <span className={styles.menu__center__list__item__span}></span>
                                    <Link
                                        href={item.link}
                                    >
                                        {item[`nav_${lan}`]}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>

                    {
                        menuTitle?.map((item) => (
                            <p className={styles.menu__center__title} key={item.id}>
                                {item[`nav_${lan}`]}
                            </p>
                        ))
                    }
                    <ul className={styles.menu__center__list}>
                        {
                            headerData?.map((item) => (
                                <li
                                    key={item.id}
                                    className={`${styles.menu__center__list__item} ${pathname === item.link ? styles.active : ""}`}
                                >
                                    <Link
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
                    <a className={styles.header__nav__links__tel} href="tel:+998937011723">+998 (93) 701-17-23</a>
                    <ul className={styles.topbar__right__bottom__list}>
                        <li className={styles.topbar__right__bottom__list__item}>
                            <Link target='_blank' href={'/'}>
                                <i className="fa-brands fa-instagram"></i>
                            </Link>
                        </li>
                        <li className={styles.topbar__right__bottom__list__item}>
                            <Link target='_blank' href={'/'}>
                                <i className="fa-brands fa-telegram"></i>
                            </Link>
                        </li>
                        <li className={styles.topbar__right__bottom__list__item}>
                            <Link target='_blank' href={'/'}>
                                <i className="fa-brands fa-facebook"></i>
                            </Link>
                        </li>
                        <li className={styles.topbar__right__bottom__list__item}>
                            <Link target='_blank' href={'/'}>
                                <i className="fa-brands fa-youtube"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;