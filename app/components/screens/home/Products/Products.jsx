import * as React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import styles from './Products.module.scss'
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


const Products = () => {
    const { lan } = React.useContext(Context);

    return (
        <section className={styles.products}>
            <MyContainer>
                <div className={styles.products__item}>
                    <div className={styles.products__item__header}>
                        <div data-aos="fade-up" className={styles.products__item__header__title}>
                            <p>Популярные товары</p>
                            <i className="fa-regular fa-star"></i>
                        </div>
                        <div className={styles.products__item__header__btns}>
                            <div data-aos="fade-up" className={styles.btn__next}>
                                <i className="fa-solid fa-angle-left"></i>
                            </div>
                            <div data-aos="fade-up" className={styles.btn__prev}>
                                <i className="fa-solid fa-angle-right"></i>
                            </div>
                        </div>
                    </div>
                    <Swiper
                        data-aos="fade-up"
                        modules={[Navigation, Scrollbar, A11y]}
                        spaceBetween={10}
                        navigation={{
                            prevEl: `.${styles.btn__prev}`,
                            nextEl: `.${styles.btn__next}`,
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
                        <SwiperSlide>
                            <Image
                                src={slayd1}
                                alt='slayd'
                            />

                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={slayd2}
                                alt='slayd'
                            />

                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={slayd1}
                                alt='slayd'
                            />

                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={slayd2}
                                alt='slayd'
                            />

                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={slayd1}
                                alt='slayd'
                            />

                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={slayd2}
                                alt='slayd'
                            />

                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={slayd1}
                                alt='slayd'
                            />

                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={slayd2}
                                alt='slayd'
                            />

                        </SwiperSlide>
                    </Swiper>
                </div>
            </MyContainer>
        </section>
    )
}

export default Products;