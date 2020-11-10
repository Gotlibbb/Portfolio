import React from 'react'
import style from './Project.module.css';

function Project(props) {
    return (
        <div className={style.project}>
            <img className={style.imgProject} src={props.src} alt="project" />
            <h3>{props.title}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>

        </div>
    );
}

export default Project;
