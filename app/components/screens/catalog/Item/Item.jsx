import * as React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import styles from './Item.module.scss'
import { useRouter } from 'next/router';
import { Context } from '@/app/components/ui/Context/Context';

const Item = ({ data }) => {
    const { lan } = React.useContext(Context);

    const router = useRouter()

    const [byData] = React.useState({ en: 'Buy', ru: 'Купить', uz: 'Sotib olish' });

    return (
        <div className={styles.item}>
            {
                data?.map((item) => (
                    <Link
                        key={item.id}
                        href={item.link}
                        className={styles.item__link}
                    >
                        <div className={styles.item__link__img}>
                            <Image
                                width={200}
                                height={200}
                                src={item.img}
                                alt='catalog'
                                priority
                            />
                        </div>
                        <div className={styles.item__div}>
                            <p className={styles.item__div__type}>{item.name}</p>
                            <p className={styles.item__div__name}>{item.name}</p>
                            <p className={styles.item__div__price}>{item.price} сум</p>
                            <b className={styles.item__div__btn}>{byData[lan]}</b>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default Item;