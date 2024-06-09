import * as React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import styles from './Benefit.module.scss'
import { Context } from '@/app/components/ui/Context/Context';
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'
import leave from '../../../../../public/img/leave.svg'
import candle from '../../../../../public/img/candle.svg'
import checked from '../../../../../public/img/checked.svg'
import sofa from '../../../../../public/img/sofa.svg'

const Benefit = () => {
    const { lan } = React.useContext(Context);
    const [benefitData] = React.useState([{ id: 1, nav_uz: 'BIZNING AVZIYATLARIMIZ', nav_ru: 'НАШИ ПРЕИМУЩЕСТВА', nav_en: 'OUR BENEFIT' }]);
    const [data] = React.useState(
        [
            {
                id: 1,
                image: leave,
                text_ru: "Экологически чистые и безопасные материалы",
                text_en: "Eco-friendly and safe materials",
                text_uz: "Ekologik toza va xavfsiz materiallar"
            },
            {
                id: 2,
                image: candle,
                text_ru: "Европейские поставщики тканей и фурнитур",
                text_en: "European suppliers of fabrics and accessories",
                text_uz: "Yevropa mato va aksessuarlar yetkazib beruvchilar"
            },
            {
                id: 3,
                image: checked,
                text_ru: "Контроль качества на каждом этапе производства",
                text_en: "Quality control at every stage of production",
                text_uz: "Ishlab chiqarishning har bir bosqichida sifat nazorati"
            },
            {
                id: 4,
                image: sofa,
                text_ru: "Эксклюзивная мебель для уникального интерьера",
                text_en: "Exclusive furniture for a unique interior",
                text_uz: "Noyob interyer uchun eksklyuziv mebel"
            },
        ]
    );

    return (
        <section className={styles.benefit}>
            <MyContainer>
                {
                    benefitData?.map((item) => (
                        <p data-aos="fade-up" className={styles.benefit__title} key={item.id}>
                            {item[`nav_${lan}`]}
                        </p>
                    ))
                }
                <ul className={styles.benefit__list}>
                    {
                        data?.map((item) => (
                            <li data-aos="fade-up" className={styles.benefit__list__item} key={item.id}>
                                <Image
                                    src={item.image}
                                    alt='img'
                                />
                                <p>{item[`text_${lan}`]}</p>
                            </li>
                        ))
                    }
                </ul>
            </MyContainer>
        </section>
    )
}

export default Benefit;