import React from "react";
import { Tilt } from "react-tilt";
import { Button, ButtonAlternate } from "../shared/Button/Button";
import DevIcons from "../shared/DevIcons/DevIcons";
import LinkToNewTab from "../shared/LinkToNewTab/LinkToNewTab";
import styles from "./ProjectCard.module.css";

function ProjectCard({
    title,
    content,
    link,
    image,
    direction,
    stack,
    github,
}) {
    return (
        <div className={styles.main} style={{ flexDirection: direction }}>
            <div className={styles.description}>
                <div className={styles.cardText}>
                    <h1>{title}</h1>
                    <h3>{content}</h3>
                    <DevIcons className={styles.devicon} stacks={stack} />
                    <br />
                    {link && (<LinkToNewTab href={link}>
                        <Button>See Live</Button>
                    </LinkToNewTab>)}
                    {github && (
                        <LinkToNewTab href={github}>
                            <ButtonAlternate>View Code</ButtonAlternate>
                        </LinkToNewTab>
                    )}
                </div>
            </div>
            <div className={styles.image}>
                <Tilt className="Tilt" options={{ max: 10, scale: 1 }}>
                    <div className="Tilt-inner">
                        <div className={styles.cardImageDiv}>
                            <img style={{ border: 'none', borderRadius: '10px' }} src={`images/${image}`} alt="" />
                        </div>
                    </div>
                </Tilt>
            </div>
        </div>
    );
}

export default ProjectCard;
