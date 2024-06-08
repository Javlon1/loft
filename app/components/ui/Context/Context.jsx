import { createContext, useEffect, useLayoutEffect, useState } from 'react';

const Context = createContext();

function Provider({ children }) {
    const [url] = useState("http://localhost:3000/api");
    const [close, setClose] = useState(false);
    const [lan, setLan] = useState(() => {
        const storedLanguage = typeof window !== 'undefined' ? window.localStorage.getItem('lan') : null;
        return storedLanguage || 'ru';
    });

    // Этот эффект будет вызван только на клиентской стороне
    useLayoutEffect(() => {
        window.localStorage.setItem('lan', lan);
    }, [lan]);

    return (
        <Context.Provider value={{ lan, setLan, url, close, setClose }}>
            {children}
        </Context.Provider>
    );
}

export { Context, Provider };
