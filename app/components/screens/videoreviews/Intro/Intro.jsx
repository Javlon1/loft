import * as React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import styles from './Intro.module.scss'
import { Context } from '@/app/components/ui/Context/Context';
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'
import Ellipse from '@/app/components/ui/Ellipse/Ellipse';
import video from '../../../../../public/img/slayd2.png'
import { useRouter } from 'next/router';

const Intro = () => {
    const { lan } = React.useContext(Context);
    const [title] = React.useState({ en: 'Video reviews', ru: 'Видео обзоры', uz: 'Video sharhlar' });

    const [data, setData] = React.useState([
        {
            id: 1,
            img: video,
            title: "Item One",
        },
        {
            id: 2,
            img: video,
            title: "Item Two",
        },
        {
            id: 3,
            img: video,
            title: "Item Three",
        },
        {
            id: 4,
            img: video,
            title: "Item Four",
        },
        {
            id: 5,
            img: video,
            title: "Item Five",
        }
    ]);
    const router = useRouter()

    return (
        <section className={styles.intro}>
            <MyContainer>
                <div className={styles.intro__item}>
                    <Ellipse />
                    <h1 className={styles.intro__item__title}>{title[lan]}</h1>
                    <div className={styles.intro__item__list}>
                        {
                            data?.map((item) => (
                                <div
                                    onClick={() => {
                                        router.push({
                                            pathname: '/reviewes-detail',
                                            // query: {
                                            //     id: item.id
                                            // }
                                        })
                                    }}
                                    key={item.id}
                                    className={styles.intro__item__list__item}
                                >
                                    <Image
                                        src={item.img}
                                        alt='user'
                                    />
                                    <p>{item.title}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </MyContainer>
        </section>
    )
}

export default Intro;