import * as React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import styles from './Item.module.scss'
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'
import { useRouter } from 'next/router';

const Item = ({ data }) => {

    const router = useRouter()

    return (
        <div className={styles.item}>
            {
                data?.map((item) => (
                    <Link
                        key={item.id}
                        href={item.link}
                    >
                        <Image
                            width={200}
                            height={200}
                            src={item.img}
                            alt='catalog'
                            priority
                        />
                        <p>
                            {item.name}
                        </p>
                    </Link>
                ))
            }
        </div>
    )
}

export default Item;