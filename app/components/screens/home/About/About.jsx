import * as React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import styles from './About.module.scss'
import { Context } from '@/app/components/ui/Context/Context';
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'
import stilaj from '../../../../../public/img/stilaj.jpg'

const About = () => {
    const { lan } = React.useContext(Context);
    const [chairData] = React.useState([{ id: 1, nav_en: 'TABLES AND CHAIRS', nav_ru: 'СТОЛЫ И СТУЛЬЯ', nav_uz: 'Stol va kursilar' }]);
    const [racksData] = React.useState([{ id: 1, nav_en: 'RACKS', nav_ru: 'СТЕЛЛАЖИ', nav_uz: 'REKLAR' }]);
    const [cushionData] = React.useState([{ id: 1, nav_en: 'CUSHIONED FURNITURE', nav_ru: 'МЯГКАЯ МЕБЕЛЬ', nav_uz: 'YUMSHOQ MEBEL' }]);
    const [tableData] = React.useState([{ id: 1, nav_en: 'TABLES', nav_ru: 'ЖУРНАЛЬНЫЕ СТОЛИКИ', nav_uz: 'STOLLARI' }]);
    const [categoriesData] = React.useState([{ id: 1, nav_en: 'All categories', nav_ru: 'Все категории', nav_uz: 'Barcha toifalar' }]);

    return (
        <section className={styles.about}>
            <MyContainer>
                <div className={styles.about__items}>
                    <div className={styles.about__items__links}>
                        <Link
                            className={styles.about__items__links__a}
                            href={'/'}
                            data-aos="zoom-in"
                        >
                            <Image
                                src={stilaj}
                                alt=''
                            />

                            {
                                chairData?.map((item) => (
                                    <p key={item.id}>
                                        {item[`nav_${lan}`]}
                                    </p>
                                ))
                            }
                        </Link>
                        <Link
                            className={styles.about__items__links__a}
                            href={'/'}
                            data-aos="zoom-in"
                        >
                            <Image
                                src={stilaj}
                                alt=''
                            />

                            {
                                racksData?.map((item) => (
                                    <p key={item.id}>
                                        {item[`nav_${lan}`]}
                                    </p>
                                ))
                            }
                        </Link>
                        <Link
                            className={styles.about__items__links__a}
                            href={'/'}
                            data-aos="zoom-in"
                        >
                            <Image
                                src={stilaj}
                                alt=''
                            />

                            {
                                cushionData?.map((item) => (
                                    <p key={item.id}>
                                        {item[`nav_${lan}`]}
                                    </p>
                                ))
                            }
                        </Link>
                        <Link
                            className={styles.about__items__links__a}
                            href={'/'}
                            data-aos="zoom-in"
                        >
                            <Image
                                src={stilaj}
                                alt=''
                            />

                            {
                                tableData?.map((item) => (
                                    <p key={item.id}>
                                        {item[`nav_${lan}`]}
                                    </p>
                                ))
                            }
                        </Link>
                    </div>
                    {
                        categoriesData?.map((item) => (
                            <Link data-aos="fade-up" className={styles.about__items__link} key={item.id} href={'/'}>
                                {item[`nav_${lan}`]}
                            </Link>
                        ))
                    }
                </div>
            </MyContainer>
        </section>
    )
}

export default About;