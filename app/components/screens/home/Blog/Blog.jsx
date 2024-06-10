import * as React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import styles from './Blog.module.scss'
import { Context } from '@/app/components/ui/Context/Context';
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'


const Blog = () => {
    const { lan } = React.useContext(Context);

    return (
        <section className={styles.blog}>
            <MyContainer>
                <h1>Blog</h1>
            </MyContainer>
        </section>
    )
}

export default Blog;