import * as React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import styles from './Cart.module.scss'
import { Context } from '@/app/components/ui/Context/Context';
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'
import { useRouter } from 'next/router';
import Message from '../../ui/Message/Message';


const Cart = () => {
    const [formData, setFormData] = React.useState({ name: '', telephone: '' });
    const [backText] = React.useState({ en: 'Back', ru: 'Назад', uz: 'Orqaga' })
    const [sendText] = React.useState({ en: 'SEND', ru: 'ОТПРАВИТЬ', uz: 'YUBORISH' })
    const [back, setBack] = React.useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        // Здесь можно добавить код для отправки данных на сервер
    };
    const router = useRouter();
    const { lan, cart, setCart, setMessage, messageType, setMessageType,
        messageText, setMessageText } = React.useContext(Context);
    const hanndlerDelCart = () => {
        setCart([])
    }

    const calculateTotalSum = () => {
        return cart.reduce((sum, item) => {
            const price = parseFloat(item.price);
            return sum + (isNaN(price) ? 0 : price);
        }, 0);
    };


    const handleQuantityChange = (id, delta) => {
        setCart(cart.map(item =>
            item.id === id ? { ...item, quantity: Math.max(item.quantity + delta, 1) } : item
        ));
    };

    const totalSum = calculateTotalSum();
    return (
        <section className={styles.cart}>
            <MyContainer>
                <Message messages={messageText} type={messageType} />
                <div className={styles.cart__item}>
                    <div className={styles.cart__item__left}>
                        <div className={styles.cart__item__left__content}>
                            <div className={styles.cart__item__left__content__header}>
                                <p>Savatchaga olingan tovarlar</p>
                                <button type='button' onClick={() => hanndlerDelCart()}>Savatchani tozalash <i className="fa-solid fa-trash-can"></i></button>
                            </div>
                            <ul className={styles.cart__item__left__content__list}>
                                {
                                    cart.length > 0
                                        ? cart.map((item) => (
                                            <li className={styles.cart__item__left__content__list__item} key={item.id}>
                                                <div className={styles.title}>
                                                    <Image
                                                        src={item.images[0]?.image}
                                                        alt='slayd1'
                                                        width={100}
                                                        height={90}
                                                    />
                                                    <p>{item.title}</p>
                                                </div>
                                                <div className={styles.ost}>
                                                    <div className={styles.count}>
                                                        <button type='button' onClick={() => handleQuantityChange(item.id, -1)}>
                                                            <i className="fa-solid fa-minus"></i>
                                                        </button>
                                                        <span>{item.quantity}</span>
                                                        <button type='button' onClick={() => handleQuantityChange(item.id, 1)}>
                                                            <i className="fa-solid fa-plus"></i>
                                                        </button>
                                                    </div>
                                                    <p>{parseInt(item.price).toLocaleString('en-US').replace(/,/g, ' ')}</p>
                                                    <button
                                                        type='button'
                                                        className={styles.btn}
                                                        onClick={() => {
                                                            setCart(cart.filter(cartItem => cartItem.id !== item.id));
                                                        }}
                                                    >
                                                        <i className="fa-solid fa-trash-can"></i>
                                                    </button>
                                                </div>
                                            </li>
                                        ))
                                        : <p className={styles.empty}>Savatchangiz bo’sh</p>
                                }
                            </ul>
                        </div>
                    </div>
                    <div className={styles.cart__item__right}>
                        {
                            back ? (
                                <div className={styles.cart__item__right__content}>
                                    <h3>Buyurtmangiz</h3>
                                    <span>Tovarlar soni <b>{cart.length}</b></span>
                                    <span>Jami narxi <b>{totalSum.toLocaleString('en-US').replace(/,/g, ' ')}</b></span>
                                    <button
                                        type='button'
                                        onClick={() => setBack(!back)}
                                        className={styles.btn}
                                    >
                                        Buyurtma berish
                                    </button>
                                </div>
                            ) : (
                                <form className={styles.formContainer} onSubmit={handleSubmit}>
                                    <div onClick={() => setBack(true)} className={styles.formContainer__back}>
                                        <i className="fa-solid fa-arrow-left"></i>
                                        <p>{backText[lan]}</p>
                                    </div>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={styles.inputField}
                                    />
                                    <input
                                        type="text"
                                        name="telephone"
                                        placeholder="telephone"
                                        value={formData.telephone}
                                        onChange={handleChange}
                                        className={styles.inputField}
                                    />
                                    <button type="submit" className={styles.submitButton}>
                                        {sendText[lan]}
                                    </button>
                                </form>
                            )
                        }
                    </div>
                </div>
            </MyContainer>
        </section >
    )
}

export default Cart;