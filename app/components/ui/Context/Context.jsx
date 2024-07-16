import { createContext, useEffect, useLayoutEffect, useState } from 'react';

const Context = createContext();

function Provider({ children }) {
    const [url] = useState("http://localhost:3000/api");
    const [close, setClose] = useState(false);
    const [lan, setLan] = useState(() => {
        const storedLanguage = typeof window !== 'undefined' ? window.localStorage.getItem('lan') : null;
        return storedLanguage || 'ru';
    });

    useLayoutEffect(() => {
        window.localStorage.setItem('lan', lan);
    }, [lan]);

    const [message, setMessage] = useState(false)
    const [messageType, setMessageType] = useState('')
    const [messageText, setMessageText] = useState('')
    const [auth_token] = useState('b010ae28bdd0b0ce81e4bbcae88ad2db4a1dc406')

    const [cart, setCart] = useState(() => {
        if (typeof window !== 'undefined') {
            const savedCart = window.localStorage.getItem('cart');
            return savedCart ? JSON.parse(savedCart) : [];
        }
        return [];
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.localStorage.setItem('cart', JSON.stringify(cart));
        }
    }, [cart]);
    return (
        <Context.Provider value={{
            message, setMessage, messageType,
            setMessageType, messageText, setMessageText,
            auth_token, cart, setCart,
            lan, setLan, url,
            close, setClose

        }}>
            {children}
        </Context.Provider>
    );
}

export { Context, Provider };
