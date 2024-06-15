import * as React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import styles from './Detail.module.scss'
import { Context } from '@/app/components/ui/Context/Context';
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'
import Ellipse from '@/app/components/ui/Ellipse/Ellipse';


const Detail = () => {
    const { lan } = React.useContext(Context);
    const [title] = React.useState({ en: 'Leave feedback', ru: 'Оставить отзыв', uz: 'Fikr qoldiring' }); //edit
    const [link] = React.useState({ en: 'Back', ru: 'Назад', uz: 'Orqaga' });

    return (
        <section className={styles.detail}>
            <MyContainer>
                <div className={styles.detail__item}>
                    <Link href={'/video-reviews'}>
                        <i className="fa-solid fa-arrow-left"></i>
                        <p>
                            {link[lan]}
                        </p>
                    </Link>
                    <Ellipse />
                    <h1 className={styles.detail__item__title}>{title[lan]}</h1>
                    <div className={styles.detail__item__video}>
                        <iframe
                            src="https://www.youtube.com/embed/CBoElK7i8B8?si=UM8tjb0FRQxd44uu"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen>
                        </iframe>
                    </div>
                </div>
            </MyContainer>
        </section>
    )
}

export default Detail;