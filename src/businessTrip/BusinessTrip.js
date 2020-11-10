import React from 'react'
import style from './BusinessTrip.module.css';
import styleContainer from "./../../src/common/styles/Container.module.css";

function BusinessTrip() {
    return (
        <div className={style.tripBlock}>
            <div className={styleContainer.container + " " + style.tripContainer}>
                <h2 className={style.title}>I'm considering moving and working remotely.</h2>
                <button className={style.btnCollab}>Collaborate</button>

             </div>
        </div>
    );
}

export default BusinessTrip;