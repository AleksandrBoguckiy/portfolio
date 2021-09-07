import React from 'react';
import s from './Contacts.module.css'
import sContainer from "../common/styles/Container.module.css";

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${sContainer.container} ${s.contactsContainer}`}>
                <div className={s.contacts}>
                    <h2 className={s.contactsTitle}>Контакты</h2>
                    <form className={s.contactsForm}>
                        <input/>
                        <input/>
                        <textarea/>
                    </form>
                    <button className={s.contactsButton}>
                        <h3>Отправить</h3>
                    </button>
                </div>
            </div>
        </div>
    );
}