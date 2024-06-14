import * as React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import styles from './Detail.module.scss'
import { Context } from '@/app/components/ui/Context/Context';
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'
import Ellipse from '@/app/components/ui/Ellipse/Ellipse';


const Detail = () => {
    const { lan } = React.useContext(Context);
    const [title] = React.useState({ en: 'Leave feedback', ru: 'Оставить отзыв', uz: 'Fikr qoldiring' });
    const [link] = React.useState({ en: 'Back', ru: 'Назад', uz: 'Orqaga' });
    const [btn] = React.useState({ en: 'SEND', ru: 'ОТПРАВИТЬ', uz: 'YUBORISH' });
    const [name] = React.useState({ en: 'First name and last name*', ru: 'Ваше имя и фамилия*', uz: 'Ism va familiyangiz*' });
    const [companyName] = React.useState({ en: 'Your company*', ru: 'Ваша компания*', uz: 'Sizning kompaniyangiz*' });
    const [message] = React.useState({ en: 'Your feedback*', ru: 'Ваш отзыв*', uz: 'Fikringiz*' });

    const [formData, setFormData] = React.useState({
        name: '',
        companyName: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <section className={styles.detail}>
            <MyContainer>
                <div className={styles.detail__item}>
                    <Link href={'/reviews'}>
                        <i className="fa-solid fa-arrow-left"></i>
                        <p>
                            {link[lan]}
                        </p>
                    </Link>
                    <Ellipse />
                    <h1 className={styles.detail__item__title}>{title[lan]}</h1>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder={name[lan]}
                            required
                        />

                        <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            placeholder={companyName[lan]}
                            required
                        />

                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            cols="30"
                            rows="10"
                            placeholder={message[lan]}
                            required
                        ></textarea>

                        <button type="submit">{btn[lan]}</button>
                    </form>
                </div>
            </MyContainer>
        </section>
    )
}

export default Detail;