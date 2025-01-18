import React, { useState, useEffect } from 'react';



// имитация запроса к серверу. просто получаем число асинхронно
const fetchRandomNumber = (resolve, reject) => Promise.resolve(Math.random());

const NewComp = () => {
    const [number, setNumber] = useState();
    const [scroll, setScroll] = useState();

    useEffect(async () => {
        setNumber(await fetchRandomNumber());
    }, []);  //запуск первый раз


    useEffect(() => {
        window.addEventListener('scroll', (event) => setScroll(window.scrollY)); // замена window 
        return () => window.removeEventListener('scroll', (event) => setScroll(window.scrollY));
    }, [setScroll])


    return (
        <div>
            <div> Number: {number} </div>
            <div> Scroll: {scroll} </div>
        </div>
    )
}


export default NewComp;