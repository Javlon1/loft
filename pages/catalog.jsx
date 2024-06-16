import * as React from 'react'
import Head from 'next/head'
import { Context } from '@/app/components/ui/Context/Context';
import Intro from '@/app/components/screens/catalog/Intro/Intro';


const Index = () => {
    const { lan } = React.useContext(Context);
    const [title] = React.useState({
        en: 'Main',
        ru: 'Главная',
        uz: 'Asosiy'
    });
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="" /> // Описание страницы
                <meta name="keywords" content="" /> // ключевые слова, страницы
                <meta name="image_src" content="" /> // URL для img

                <meta property="og:title" content="ASA.Loft | Main" /> // Название страницы
                <meta property="og:description" content="" /> // Описание страницы
                <meta property="og:image" content="" /> // URL для img: https://example.com/image.jpg
                <meta property="og:url" content="https://loft-beryl.vercel.app/" /> // оснавное URL: https://example.com/page-url
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="ASA.Loft" /> // Название сайта
                <meta property="og:locale" content="ru_RU" />
                <link rel="canonical" href="https://loft-beryl.vercel.app/" />

                <title>ASA.Loft | {title[lan]}</title>
            </Head>

            <Intro />
        </>
    )
}

export default Index;