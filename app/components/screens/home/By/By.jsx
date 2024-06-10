import * as React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import styles from './By.module.scss'
import { Context } from '@/app/components/ui/Context/Context';
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import slayd1 from '../../../../../public/img/slayd1.jpg'
import slayd2 from '../../../../../public/img/slayd2.png'


const By = () => {
    const { lan } = React.useContext(Context);
    const [BYData] = React.useState([{ id: 1, nav_en: 'Hurry up to buy', nav_ru: 'Успейте купить', nav_uz: 'Sotib olishga shoshiling' }]);
    const [byData] = React.useState([{ id: 1, nav_en: 'Buy', nav_ru: 'Купить', nav_uz: 'Sotib olish' }]);
    const [data] = React.useState(
        [
            {
                id: 1,
                category_ru: "Столы и стулья",
                category_en: "Tables and Chairs",
                category_uz: "Stollar va stullar",
                name_ru: "Современная элегантность",
                name_en: "Modern Elegance",
                name_uz: "Zamonaviy nafislik",
                price: "1 850 000 сум",
                image: slayd1
            },
            {
                id: 2,
                category_ru: "Мягкая мебель",
                category_en: "Soft Furniture",
                category_uz: "Yumshoq mebel",
                name_ru: "Роскошный комфорт",
                name_en: "Luxury Comfort",
                name_uz: "Hashamatli qulaylik",
                price: "2 300 000 сум",
                image: slayd2
            },
            {
                id: 3,
                category_ru: "Кровати и матрасы",
                category_en: "Beds and Mattresses",
                category_uz: "Krovatlar va matraslar",
                name_ru: "Королевский сон",
                name_en: "Royal Sleep",
                name_uz: "Qirollik uxlashi",
                price: "3 500 000 сум",
                image: slayd1
            },
        ]
    )
    return (
        <section className={styles.by}>
            <MyContainer>
                <div className={styles.by__item}>
                    <div className={styles.by__item__header}>
                        <div data-aos="fade-up" className={styles.by__item__header__title}>
                            {
                                BYData?.map((item) => (
                                    <p key={item.id}>
                                        {item[`nav_${lan}`]}
                                    </p>
                                ))
                            }
                            <i className="fa-solid fa-tag"></i>
                        </div>
                        <div className={styles.by__item__header__btns}>
                            <div data-aos="fade-up" className={styles.btn__next2}>
                                <i className="fa-solid fa-angle-left"></i>
                            </div>
                            <div data-aos="fade-up" className={styles.btn__prev2}>
                                <i className="fa-solid fa-angle-right"></i>
                            </div>
                        </div>
                    </div>
                    <Swiper
                        data-aos="fade-up"
                        modules={[Navigation, Scrollbar, A11y]}
                        spaceBetween={10}
                        navigation={{
                            prevEl: `.${styles.btn__next2}`,
                            nextEl: `.${styles.btn__prev2}`,
                        }}
                        loop={true}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 4,
                            },
                        }}
                    >
                        {
                            data?.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div className={styles.by__item__cart}>
                                        <div className={styles.by__item__cart__item}>
                                            <Link
                                                className={styles.by__item__cart__item__img}
                                                href={'/'}
                                            >
                                                <Image
                                                    src={item.image}
                                                    alt='slayd'
                                                />
                                            </Link>
                                            <b>{item[`name_${lan}`]}</b>
                                            <p>{item[`category_${lan}`]}</p>
                                            <p>{item.price}</p>
                                            {
                                                byData?.map((item) => (
                                                    <Link
                                                        className={styles.by__item__cart__item__link}
                                                        href={'/'}
                                                        key={item.id}
                                                    >
                                                        {item[`nav_${lan}`]}
                                                    </Link>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </MyContainer>
        </section>
    )
}

export default By;