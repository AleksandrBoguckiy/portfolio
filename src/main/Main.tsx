import React from 'react';
import s from './Main.module.css'
import sContainer from '../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={sContainer.container}>
                <div className={s.text}>
                    <h3>Привет!</h3>
                    <h1>Меня зовут Александр Богуцкий</h1>
                    <h2>Я front-end разработчик</h2>
                </div>
                <div className={s.photo}>
                </div>
            </div>
        </div>
    );
}