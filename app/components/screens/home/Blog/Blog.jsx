import * as React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import styles from './Blog.module.scss'
import { Context } from '@/app/components/ui/Context/Context';
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'
import slayd1 from '../../../../../public/img/slayd1.jpg'
import slayd2 from '../../../../../public/img/slayd2.png'


const Blog = () => {
    const { lan } = React.useContext(Context);
    const [blogData] = React.useState([{ id: 1, nav_en: 'VIDEO BLOG', nav_ru: 'ВИДЕ ОБЛОГ', nav_uz: 'VIDEO BLOG' }]);
    const [blogTitle] = React.useState([{ id: 1, nav_en: 'See all', nav_ru: 'Смотреть все', nav_uz: "Hammasini ko'rish" }]);
    const [productTitle] = React.useState([{ id: 1, nav_en: 'PROJECTS', nav_ru: 'ПРОЕКТЫ', nav_uz: "LOYIHALAR" }]);
    const [data] = React.useState(
        [
            {
                id: 1,
                name: "Современная элегантность",
                image: slayd1
            },
            {
                id: 2,
                name: "Роскошный комфорт",
                image: slayd2
            },
        ]
    )

    return (
        <section className={styles.blog}>
            <MyContainer>
                <div className={styles.blog__item}>
                    {
                        blogData?.map((item) => (
                            <p data-aos="fade-up" className={styles.blog__item__title} key={item.id}>
                                {item[`nav_${lan}`]}
                            </p>
                        ))
                    }
                    <div className={styles.blog__item__list}>
                        {
                            data?.map((item) => (
                                <div data-aos="fade-up" key={item.id} className={styles.blog__item__list__cart}>
                                    <Link
                                        className={styles.blog__item__list__cart__img}
                                        href={'/'}
                                    >
                                        <Image
                                            src={item.image}
                                            alt='slayd'
                                            priority
                                        />
                                    </Link>
                                    <Link
                                        href={'/'}
                                    >
                                        <b>{item.name}</b>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                    {
                        blogTitle?.map((item) => (
                            <Link
                                data-aos="fade-up"
                                className={styles.blog__item__link}
                                href={'/'}
                                key={item.id}
                            >
                                {item[`nav_${lan}`]}
                            </Link>
                        ))
                    }
                </div>
                <div className={styles.blog__item}>
                    {
                        productTitle?.map((item) => (
                            <p data-aos="fade-up" className={styles.blog__item__title} key={item.id}>
                                {item[`nav_${lan}`]}
                            </p>
                        ))
                    }
                    <div className={styles.blog__item__list}>
                        {
                            data?.map((item) => (
                                <div data-aos="fade-up" key={item.id} className={styles.blog__item__list__cart}>
                                    <Link
                                        className={styles.blog__item__list__cart__img}
                                        href={'/'}
                                    >
                                        <Image
                                            src={item.image}
                                            alt='slayd'
                                            priority
                                        />
                                    </Link>
                                    <Link
                                        href={'/'}
                                    >
                                        <b>{item.name}</b>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                    {
                        blogTitle?.map((item) => (
                            <Link
                                data-aos="fade-up"
                                className={styles.blog__item__link}
                                href={'/'}
                                key={item.id}
                            >
                                {item[`nav_${lan}`]}
                            </Link>
                        ))
                    }
                </div>
            </MyContainer>
        </section>
    )
}

export default Blog;