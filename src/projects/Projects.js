import React from 'react'
import style from './Projects.module.css';
import styleContainer from "./../../src/common/styles/Container.module.css";
import Project from "./project/Project";

function Projects() {
    return (
        <div className={style.projectsBlock}>
            <div className={styleContainer.container + " " + style.projectsContainer}>
                <h2 className={style.title}>My project</h2>
                <div className={style.projects}>
                    <Project title={"Social network"} src={"https://sun9-48.userapi.com/c11081/v11081448/8d7/DyUaAq2azuE.jpg"} />
                    <Project title={"Counter"} src={"https://sun9-48.userapi.com/c11081/v11081448/8d7/DyUaAq2azuE.jpg"}/>
                </div>
            </div>

        </div>
    );
}

export default Projects;
