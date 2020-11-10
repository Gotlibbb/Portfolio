import React from 'react'
import style from './Contact.module.css';
import styleContainer from "./../../src/common/styles/Container.module.css";

function Contact() {
    return (
        <div className={style.contactBlock}>
            <div className={styleContainer.container + " " + style.contactContainer}>
                <h2 className={style.title}>Сontacts</h2>
                <form action="" className={style.form}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </form>
                <button className={style.btnCollab}>Send</button>

             </div>
        </div>
    );
}

export default Contact;