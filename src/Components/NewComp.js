import React, { useState, useEffect } from 'react';

// Имитация запроса к серверу, просто получаем число асинхронно
const fetchRandomNumber = () => Promise.resolve(Math.random());

const NewComp = () => {
    const [number, setNumber] = useState(null); // Лучше инициализировать с null
    const [scroll, setScroll] = useState(0); // Можно начать с 0

    useEffect(() => {
        const fetchNumber = async () => {
            const randomNumber = await fetchRandomNumber();
            setNumber(randomNumber);
        };

        fetchNumber();
    }, []);  // Запуск только один раз

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll); // Удаляем правильный слушатель
        };
    }, []); // Зависимости пустые для добавления слушателя один раз

    return (
        <div>
            <div>Number: {number}</div>
            <div>Scroll: {scroll}</div>
        </div>
    )
}

export default NewComp;