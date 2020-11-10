import React from 'react'
import style from './Skills.module.css';
import styleContainer from "./../../src/common/styles/Container.module.css";
import Skill from "./skill/Skill";

function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={styleContainer.container + " " +  style.skillsContainer}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={"Js"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, rerum!"} />
                    <Skill title={"css"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, rerum!"} />
                    <Skill title={"react"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, rerum!"} />
                </div>
            </div>

        </div>
    );
}

export default Skills;
