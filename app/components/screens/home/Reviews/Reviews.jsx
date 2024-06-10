import * as React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import styles from './Reviews.module.scss'
import { Context } from '@/app/components/ui/Context/Context';
import MyContainer from '@/app/components/ui/MyContainer/MyContainer';
import user from '../../../../../public/img/user.png'

const Reviews = () => {
    const { lan } = React.useContext(Context);
    const [reviewsTitle] = React.useState([{ id: 1, nav_en: 'REVIEWS', nav_ru: 'ОТЗЫВЫ', nav_uz: 'SHARHLAR', }]);
    const [link] = React.useState([{ id: 1, nav_en: 'See all', nav_ru: 'Смотреть все', nav_uz: "Hammasini ko'rish" }]);
    const [reviewData] = React.useState(
        [
            {
                id: 1,
                name: "Jony",
                img: user,
                text: "ipsum dolor sit amet consectetur adipisicing elit.Consequatur, voluptatibus.ipsum dolor sit amet consectetur adipisicing elit.Consequatur, voluptatibus."
            },
            {
                id: 2,
                name: "Jakson",
                img: user,
                text: "ipsum dolor sit amet consectetur adipisicing elit.Consequatur, voluptatibus."
            },
            {
                id: 3,
                name: "Javlon",
                img: user,
                text: "ipsum dolor sit amet consectetur adipisicing elit.Consequatur, voluptatibus."
            },
            {
                id: 4,
                name: "Jake",
                img: user,
                text: "ipsum dolor sit amet consectetur adipisicing elit.Consequatur, voluptatibus."
            },
        ]
    );

    return (
        <section className={styles.reviews}>
            <MyContainer>
                <div className={styles.reviews__item}>
                    {
                        reviewsTitle?.map((item) => (
                            <p data-aos="fade-up" className={styles.reviews__item__title} key={item.id}>
                                {item[`nav_${lan}`]}
                            </p>
                        ))
                    }
                    <ul className={styles.reviews__item__list}>
                        {
                            reviewData?.map((item) => (
                                <li data-aos="fade-up" className={styles.reviews__item__list__item}>
                                    <div className={styles.header}>
                                        <Image
                                            src={item.img}
                                            alt='user' />
                                        <p className={styles.name}>{item.name}</p>
                                    </div>
                                    <p className={styles.text}>{item.text}</p>
                                </li>
                            ))
                        }
                    </ul>
                    {
                        link?.map((item) => (
                            <Link data-aos="fade-up" className={styles.reviews__item__link} key={item.id} href={'/'}>
                                {item[`nav_${lan}`]}
                            </Link>
                        ))
                    }
                </div>
            </MyContainer>
        </section>
    )
}

export default Reviews;