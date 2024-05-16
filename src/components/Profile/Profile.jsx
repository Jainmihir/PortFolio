import { FaDownload } from "react-icons/fa";
import Tilt from 'react-parallax-tilt';
// import TextLoop from "react-text-loop";
import Logo from '../Logo/Logo';
import styles from "./Profile.module.css";

function Profile() {
    return (
        <div className={styles.profileCard}>
            <div className={styles.profileText}>
                <h1>
                        <span className={styles.greeting}>Hello</span>
{/*                     <TextLoop>
                        <span className={styles.greeting}>Hola!</span>
                        <span className={styles.greeting}>Namaste!</span>

                    </TextLoop> */}
                    <br />
                    My name is Mihir...
                </h1>
                <h2>I'm a student at SKIT, Jaipur</h2>
                {/* <h2>
                    and a{" "}
                    <span style={{ color: "var(--button-color)" }}>Web Developer</span>

                </h2> */}
                <a href='/Mihir_Jain_Resume.pdf' target='_blank' rel='noopener noreferrer'>
                    Resume <FaDownload className='tooltip-svg' />
                </a>
            </div>
            <Tilt className="parallaxTilt">
                <Logo />
            </Tilt>
        </div>
    );
}

export default Profile;
