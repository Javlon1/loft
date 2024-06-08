import * as React from 'react';
import styles from './Language.module.scss';
import { Context } from '../Context/Context';

const Language = () => {
    const [Lang] = React.useState([{ id: 1, lang: 'ru' }, { id: 2, lang: 'en' }, { id: 3, lang: 'uz' }]);
    const { lan, setLan } = React.useContext(Context);

    const handleChange = (event) => {
        setLan(event.target.value);
    };

    React.useEffect(() => {
        window.localStorage.setItem('lan', lan);
    }, [lan]);

    return (
        <select className={styles.select} value={lan} onChange={handleChange}>
            {Lang.map((e) => (
                <option key={e.id} value={e.lang}>{e.lang}</option>
            ))}
        </select>
    );
};

export default Language;
