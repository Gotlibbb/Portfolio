import React from 'react'
import style from './Footer.module.css';
import styleContainer from "./../../src/common/styles/Container.module.css";

function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={styleContainer.container + " " + style.footerContainer}>
                <h2 className={style.title}>Gleb Andryuhin</h2>
                <div className={style.iconBlock}>
                    <span className={style.icon}></span>
                    <span className={style.icon}></span>
                    <span className={style.icon}></span>
                    <span className={style.icon}></span>
                </div>
                <h3 className={style.title}>©Todos los derechos reservados</h3>
             </div>
        </div>
    );
}

export default Footer;