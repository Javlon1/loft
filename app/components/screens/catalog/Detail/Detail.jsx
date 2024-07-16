import * as React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import styles from './Detail.module.scss'
import { Context } from '@/app/components/ui/Context/Context';
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'
import Ellipse from '@/app/components/ui/Ellipse/Ellipse';
import img1 from "../../../../../public/img/slayd1.jpg"
import img from "../../../../../public/img/slayd2.png"


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const data = [
    {
        id: 1,
        images: [
            {
                id: 1,
                img: img,
            },
            {
                id: 2,
                img: img1,
            },
            {
                id: 3,
                img: img,
            },
            {
                id: 4,
                img: img1,
            },
        ],
        colors: [
            {
                id: 1,
                img: img,
            },
            {
                id: 2,
                img: img,
            },
            {
                id: 3,
                img: img,
            },
            {
                id: 4,
                img: img,
            },
        ],
        name: "Loaf",
        price: 855000,
        size: "130x70x76h",
        frame: "Сталь",
        material: "ЛДСП",
        paintType: "порошковая",
    },
]

const Detail = () => {
    const { lan, cart, setCart, setMessage, messageType, setMessageType, messageText, setMessageText } = React.useContext(Context);
    const [link] = React.useState({ en: 'Back', ru: 'Назад', uz: 'Orqaga' });
    const [size] = React.useState({ en: 'Sizes', ru: 'Размеры', uz: "O'lchamlari" });
    const [frame] = React.useState({ en: 'Frame', ru: 'Каркас', uz: "Ramka" });
    const [material] = React.useState({ en: 'Material', ru: 'Материал', uz: "Material" });
    const [paintType] = React.useState({ en: 'Paint type', ru: 'Тип краски', uz: "Bo'yoq turi" });
    const [btn] = React.useState({ en: 'ADD TO CART', ru: 'ДОБАВИТЬ В КОРЗИНУ', uz: "SAVATCHAGA QO'SHISH" });
    const [count] = React.useState({ en: 'Quantity', ru: 'Количество', uz: "Miqdori" });
    const [color] = React.useState({ en: 'Color', ru: 'Цвет', uz: "Rangi" });
    let [counter, setCounter] = React.useState(1)
    const [thumbsSwiper, setThumbsSwiper] = React.useState(null);
    const [selectedImage, setSelectedImage] = React.useState(0);

    const handleSlideChange = (swiper) => {
        setSelectedImage(swiper.activeIndex);
    };

    return (
        <section className={styles.detail}>
            <MyContainer>
                <div className={styles.detail__items}>
                    <Link href={'/catalog'}>
                        <i className="fa-solid fa-arrow-left"></i>
                        <p>
                            {link[lan]}
                        </p>
                    </Link>
                    <Ellipse />
                    {
                        data?.map((item) => (
                            <div key={item.id} className={styles.detail__items__product}>

                                <div className={styles.left}>
                                    <div className={styles.left__img}>
                                        <Swiper
                                            style={{
                                                '--swiper-navigation-color': '#959595',
                                            }}
                                            spaceBetween={10}
                                            navigation={true}
                                            thumbs={{ swiper: thumbsSwiper }}
                                            modules={[FreeMode, Navigation, Thumbs]}
                                            className="mySwiper2"
                                            onSlideChange={handleSlideChange}
                                        >
                                            {item.images?.map((item, index) => (
                                                <SwiperSlide key={index}>
                                                    <Image
                                                        src={item.img}
                                                        alt='product'
                                                    />
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                    </div>

                                    <div className={styles.left__list}>
                                        <Swiper
                                            onSwiper={setThumbsSwiper}
                                            spaceBetween={10}
                                            slidesPerView={4}
                                            freeMode={true}
                                            watchSlidesProgress={true}
                                            modules={[FreeMode, Navigation, Thumbs]}
                                            className="mySwiper"
                                        >
                                            {item.images?.map((item, index) => (
                                                <SwiperSlide key={index}>
                                                    <div className={`${styles.left__list__item} ${index === selectedImage ? styles.selected : ''}`}>
                                                        <Image
                                                            src={item.img}
                                                            alt='product'
                                                        />
                                                    </div>
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                    </div>
                                </div>

                                <div className={styles.right}>
                                    <b className={styles.right__title}>{item.name}</b>
                                    <p className={styles.right__price}>{item.price.toLocaleString("en-US").replace(/,/g, " ")} сум</p>
                                    <ul className={styles.right__list}>
                                        <li className={styles.right__list__item}>
                                            <span>
                                                <p>{size[lan]}</p>
                                            </span>
                                            <p>{item.size}</p>
                                        </li>
                                        <li className={styles.right__list__item}>
                                            <span>
                                                <p>{frame[lan]}</p>
                                            </span>
                                            <p>{item.frame}</p>
                                        </li>
                                        <li className={styles.right__list__item}>
                                            <span>
                                                <p>{material[lan]}</p>
                                            </span>
                                            <p>{item.material}</p>
                                        </li>
                                        <li className={styles.right__list__item}>
                                            <span>
                                                <p>{paintType[lan]}</p>
                                            </span>
                                            <p>{item.paintType}</p>
                                        </li>
                                    </ul>
                                    <div className={styles.right__items}>
                                        <label>
                                            <p>{count[lan]}</p>
                                            <div className={styles.right__items__counter}>
                                                <button onClick={() => { if (counter > 1) setCounter(counter -= 1) }}>
                                                    <i className="fa-solid fa-minus"></i>
                                                </button>
                                                <p>{counter}</p>
                                                <button onClick={() => setCounter(counter += 1)}>
                                                    <i className="fa-solid fa-plus"></i>
                                                </button>
                                            </div>
                                        </label>
                                        <label>
                                            <p>{color[lan]}</p>
                                            <ul className={styles.right__items__color}>
                                                {
                                                    item.colors?.map((item) => (
                                                        <li key={item.id}>
                                                            <Image
                                                                src={item.img}
                                                                alt='color'
                                                            />
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </label>
                                    </div>
                                    <button

                                        onClick={() => {
                                            if (!cart.some(cartItem => cartItem.id === item.id)) {
                                                setCart([...cart, { ...item, quantity: counter }]);
                                                setMessage(true);
                                                setMessageType('success');
                                                setMessageText("Mahsulot savatga qo'shildi");
                                            }
                                        }}
                                        className={styles.right__btn}>{btn[lan]}</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </MyContainer>
        </section>
    )
}

export default Detail;