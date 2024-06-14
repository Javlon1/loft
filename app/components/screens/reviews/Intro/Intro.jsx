import * as React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import styles from './Intro.module.scss'
import { Context } from '@/app/components/ui/Context/Context';
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'
import Ellipse from '@/app/components/ui/Ellipse/Ellipse';
import user from '../../../../../public/img/user.png'

const Intro = () => {
    const { lan } = React.useContext(Context);
    const [title] = React.useState({ en: 'REVIEWS', ru: 'ОТЗЫВЫ', uz: 'SHARHLAR' });
    const [btn] = React.useState({ en: 'Leave feedback', ru: 'Оставить отзыв', uz: 'Fikr qoldiring' });

    const [data, setData] = React.useState([
        {
            id: 1,
            img: user,
            name: "Item One",
            text: "quibusdam enim, cupiditate repudiandae, illo ad cum sapiente pariatur voluptas quasi vero."
        },
        {
            id: 2,
            img: user,
            name: "Item Two",
            text: "This is the second item. Lorem ipsum dolor sit amet consectetur This is the second item. Lorem ipsum dolor sit amet consectetur This is the second item. Lorem ipsum dolor sit amet consectetur"
        },
        {
            id: 3,
            img: user,
            name: "Item Three",
            text: "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur "
        },
        {
            id: 4,
            img: user,
            name: "Item Four",
            text: "This is the fourth item."
        },
        {
            id: 5,
            img: user,
            name: "Item Five",
            text: "adipisicing elit. Sit quas ut, neque ratione corrupti sed quos sint numquam"
        }
    ]);


    return (
        <section className={styles.intro}>
            <MyContainer>
                <div className={styles.intro__item}>
                    <Ellipse />
                    <h1 className={styles.intro__item__title}>{title[lan]}</h1>
                    <div className={styles.intro__item__list}>
                        {
                            data?.map((item) => (
                                <div key={item.id} className={styles.intro__item__list__item}>
                                    <div className={styles.intro__item__list__item__left}>
                                        <Image
                                            src={item.img}
                                            alt='user'
                                        />
                                        <b>{item.name}</b>
                                    </div>
                                    <p>{item.text}</p>
                                </div>
                            ))
                        }
                    </div>
                    <Link href={'/feedback'} className={styles.intro__item__btn}>{btn[lan]}</Link>
                </div>
            </MyContainer>
        </section>
    )
}

export default Intro;