import * as React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import styles from './Intro.module.scss'
import { Context } from '@/app/components/ui/Context/Context';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import slayd1 from '../../../../../public/img/slayd1.jpg'
import slayd2 from '../../../../../public/img/slayd2.png'
import modalImg from '../../../../../public/img/slayd2.png'

const Intro = () => {
    const { lan } = React.useContext(Context);
    const [introTitle] = React.useState([{ id: 1, nav_en: 'FURNITURE IN LOFT STYLE', nav_ru: 'МЕБЕЛЬ В СТИЛЕ ЛОФТ', nav_uz: 'LOFT STILDAGI MEBELAR', }]);
    const [modalTitle] = React.useState([{ id: 1, nav_en: 'MAKE AN ORDER VIA OUR WEBSITE AND RECEIVE A 5% DISCOUNT', nav_ru: 'СДЕЛАЙТЕ ЗАКАЗ ЧЕРЕЗ НАШ САЙТ И ПОЛУЧИТЕ 5% СКИДКУ', nav_uz: 'SAYTIMIZ ORQALI BUYURTMA BERING VA 5% CHEGIRMA OLING', }]);
    const [modalLink] = React.useState([{ id: 1, nav_en: '', nav_ru: 'Перейти к каталогу', nav_uz: '', }]);
    const [modalBtn] = React.useState([{ id: 1, nav_en: 'Leave a request', nav_ru: 'Оставьте заявку', nav_uz: "So'rov qoldirish", }]);
    const [modalFormBtn] = React.useState([{ id: 1, nav_en: 'Send', nav_ru: 'Отправить', nav_uz: "Yuborish", }]);
    const [modal, setModal] = React.useState(false)
    const [modalForm, setModalForm] = React.useState(false)
    const [inputValue1, setInputValue1] = React.useState('');
    const [inputValue2, setInputValue2] = React.useState('');

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setModal(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);


    const handleInputChange1 = (event) => {
        setInputValue1(event.target.value);
    };

    const handleInputChange2 = (event) => {
        setInputValue2(event.target.value);
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {
            field1: inputValue1,
            field2: inputValue2
        };
        console.log(formData);
    };

    return (
        <section className={styles.intro}>

            <div
                className={`${styles.modalOpacity} ${modal ? styles.actModal : ""}`}
                onClick={() => {
                    setModal(false)
                }}
            ></div>

            <div className={`${styles.modal} ${modal ? styles.actModal : ""}`}>
                <div className={styles.modal__header}>
                    <p onClick={() => { setModal(false) }}>
                        <i className="fa-solid fa-x"></i>
                    </p>
                </div>
                <div className={`${styles.modal__body} ${modalForm ? styles.modalNone : ""}`}>
                    {modalTitle?.map((item) => (
                        <p className={styles.modal__body__title} key={item.id}>
                            {item[`nav_${lan}`]}
                        </p>
                    ))}
                    <Image
                        src={modalImg}
                        alt='modal-img'
                    />
                    {modalLink?.map((item) => (
                        <Link
                            href={'/'}
                            className={styles.modal__body__link}
                            key={item.id}
                        >
                            {item[`nav_${lan}`]}
                            <i className="fa-solid fa-angle-right"></i>
                        </Link>
                    ))}
                    {modalBtn?.map((item) => (
                        <button onClick={() => setModalForm(true)} className={styles.modal__body__btn} key={item.id}>
                            {item[`nav_${lan}`]}
                        </button>
                    ))}
                </div>
                <form className={`${styles.modal__form} ${modalForm ? styles.formAct : ""}`} onSubmit={handleSubmit}>
                    <p className={styles.modal__form__icon} onClick={() => { setModalForm(false) }}>
                        <i className="fa-solid fa-arrow-left"></i>
                    </p>

                    {modalBtn?.map((item) => (
                        <p key={item.id}>
                            {item[`nav_${lan}`]}
                        </p>
                    ))}
                    <input type="text" value={inputValue1} onChange={handleInputChange1} />
                    <input type="text" value={inputValue2} onChange={handleInputChange2} />
                    {modalFormBtn?.map((item) => (
                        <button type='submit' className={styles.modal__body__link} key={item.id}>
                            {item[`nav_${lan}`]}
                        </button>
                    ))}
                </form>
            </div>

            <div className={styles['swiper-container']}>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation={{
                        nextEl: `.${styles['swiper-button-next-custom']}`,
                        prevEl: `.${styles['swiper-button-prev-custom']}`
                    }}
                    pagination={{ clickable: true, el: `.${styles['swiper-pagination-custom']}` }}
                    loop={true}
                >
                    <SwiperSlide>
                        <Image
                            src={slayd1}
                            alt='slayd'
                        />
                        {introTitle?.map((item) => (
                            <strong className={styles.intro__title} key={item.id}>
                                {item[`nav_${lan}`]}
                            </strong>
                        ))}
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            src={slayd2}
                            alt='slayd'
                        />
                        {introTitle?.map((item) => (
                            <strong className={styles.intro__title} key={item.id}>
                                {item[`nav_${lan}`]}
                            </strong>
                        ))}
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            src={slayd1}
                            alt='slayd'
                        />
                        {introTitle?.map((item) => (
                            <strong className={styles.intro__title} key={item.id}>
                                {item[`nav_${lan}`]}
                            </strong>
                        ))}
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            src={slayd2}
                            alt='slayd'
                        />
                        {introTitle?.map((item) => (
                            <strong className={styles.intro__title} key={item.id}>
                                {item[`nav_${lan}`]}
                            </strong>
                        ))}
                    </SwiperSlide>
                </Swiper>
                <div className={styles['swiper-button-prev-custom']}>
                    <i className="fa-solid fa-angle-left"></i>
                </div>
                <div className={styles['swiper-button-next-custom']}>
                    <i className="fa-solid fa-angle-right"></i>
                </div>
                <div className={styles['swiper-pagination-custom']}></div>
            </div>

        </section>
    )
}

export default Intro;