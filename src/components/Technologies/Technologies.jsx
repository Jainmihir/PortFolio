import { stacks } from "../../data/Technologies";
import DevIcons from "../shared/DevIcons/DevIcons";
import styles from "./Technologies.module.css";

const Technologies = () => {
    return (
        <div className={styles.container}>
            <div>
                <h1>Technologies I know</h1>
                <DevIcons className={styles.largeIcon} stacks={stacks} />
            </div>
        </div>
    );
};

export default Technologies;
