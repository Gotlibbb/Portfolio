import React from 'react'
import style from "./../main/Main.module.css";
import styleContainer from "./../../src/common/styles/Container.module.css";

function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Hi There</span>
                    <h1>I am Gleb Andryuhin</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={style.photo}></div>
            </div>
        </div>
    );
}

export default Main;
