import * as React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import styles from './Intro.module.scss'
import { Context } from '@/app/components/ui/Context/Context';
import { EffectFade, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import slayd1 from '../../../../../public/img/slayd1.jpg'
import slayd2 from '../../../../../public/img/slayd2.png'

const Intro = () => {
    const { lan } = React.useContext(Context);
    const [introTitle] = React.useState([{ id: 1, nav_en: 'FURNITURE IN LOFT STYLE', nav_ru: 'МЕБЕЛЬ В СТИЛЕ ЛОФТ', nav_uz: 'LOFT STILDAGI MEBELAR', }]);


    return (
        <section className={styles.intro}>
            <div className={styles['swiper-container']}>
                <Swiper
                    modules={[EffectFade, Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={10}
                    slidesPerView={1}
                    effect={'fade'}
                    fadeEffect={{ crossFade: true }}
                    speed={2000}
                    navigation={{
                        nextEl: `.${styles['swiper-button-next-custom']}`,
                        prevEl: `.${styles['swiper-button-prev-custom']}`
                    }}
                    pagination={{ clickable: true, el: `.${styles['swiper-pagination-custom']}` }}
                    loop={true}
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')}
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
                </Swiper>
                <div className={styles['swiper-button-prev-custom']}>
                    <i className="fa-solid fa-angle-left"></i>
                </div>
                <div className={styles['swiper-button-next-custom']}>
                    <i className="fa-solid fa-angle-right"></i>
                </div>
                <div className={styles['swiper-pagination-custom']}></div>

                {
                    introTitle?.map((item) => (
                        <strong className={styles.intro__title} key={item.id}>
                            {item[`nav_${lan}`]}
                        </strong>
                    ))
                }
            </div>
        </section>
    )
}

export default Intro;