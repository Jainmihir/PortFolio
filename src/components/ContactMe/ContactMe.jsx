import { SocialMediaLinks } from "../../data/SocialMediaLinks";
import LinkToNewTab from "../shared/LinkToNewTab/LinkToNewTab";
import styles from "./ContactMe.module.css";

function ContactMe() {
    return (
        <div className={styles.contactCard}>
            <h1 className={styles.header}>Contact Me</h1>
            <div className={styles.social}>
                {SocialMediaLinks.map((obj) => (
                    <LinkToNewTab key={obj.url} className={styles.link} href={obj.url}>
                        <obj.icon className={styles.icon} fill='var(--button-text-color)' />
                    </LinkToNewTab>
                ))}
            </div>
        </div>
    );
}

export default ContactMe;
