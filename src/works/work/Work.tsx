import React from 'react';
import s from './Work.module.css'

export type WorkPropsType ={
    title: string
    description: string
}

export const Work: React.FC<WorkPropsType> = (props) => {
    return (
        <div className={s.work}>
            <div className={s.icon}>
                <button className={s.watchButton}>
                    <h3 className={s.button}>Смотреть</h3>
                </button>
            </div>
            <h3 className={s.title}>{props.title}</h3>
            <span className={s.description}>{props.description}</span>
        </div>
    );
}