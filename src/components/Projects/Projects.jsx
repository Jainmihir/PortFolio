import { projects } from "../../data/Projects";
import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./Projects.module.css";

function Projects() {
    let dir_counter = 0;
    return (
        <div className={styles.container}>
            <h1>My Projects</h1>
            {projects.map((project) => {
                dir_counter++;
                return (
                    <ProjectCard {...project} direction={dir_counter % 2 === 0 ? "row-reverse" : "row"} key={dir_counter} />
                );
            })}
        </div>
    );
}

export default Projects;
