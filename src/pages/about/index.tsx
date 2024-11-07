import styles from "./style.module.scss"
import Curve from "../../components/Layout/Curve";
import WhiteHeader from "../../components/WhiteHeader";
import Contact from "../../components/Contact";

import { slideUp, opacity } from '../../components/Description/animation';
import { useInView, motion } from 'framer-motion';
import { useRef } from "react";
import Image from "next/image";




export default function About(){

    const phrase = "Helping brands thrive in the digital world Helping brands thrive in the digital world Helping brands thrive in the digital world Helping brands thrive in the digital world Helping brands thrive in the digital world"
    const aboutMe = useRef(null)
    const isInView = useInView(aboutMe)


    return(
        <Curve>
            <WhiteHeader />
            <div className={styles.aboutMain}>
                <h1 className={styles.aboutTitle}>Helping you tell your story with digital art that resonates.</h1>
                <div className={styles.divider}></div>

                <div className={styles.container}>
                    <p className={styles.aboutText}>I work with clients globally to craft tailor-made art, bringing their visions to life with a dedication to quality and originality.</p>
                    <div className={styles.imageContainer}>
                        <Image 
                        fill={true}
                        alt={"image"}
                        src={`/images/me.jpg`}
                        />
                    </div>
                </div>

                <h1 className={styles.helpYouWith}>I can help you with ...</h1>
                <div className={styles.projects}>
                    <div className={styles.projectContainer}>
                        <p className={styles.number}>01</p>
                        <div className={styles.projectDivider}></div>
                        <p className={styles.projectTitle}>Background Illustration</p>
                        <p className={styles.projectText}>I craft vivid backgrounds that bring depth to your scenes, making characters and stories feel fully realized. These immersive settings captivate viewers and elevate your project’s visual impact.</p>
                    </div>
                    <div className={styles.projectContainer}>
                        <p className={styles.number}>02</p>
                        <div className={styles.projectDivider}></div>
                        <p className={styles.projectTitle}>Logo Design</p>
                        <p className={styles.projectText}>With a focus on style and precision, I create logos that become an iconic part of your brand, leaving a memorable mark that resonates with your audience.</p>
                    </div>
                    <div className={styles.projectContainer}>
                        <p className={styles.number}>03</p>
                        <div className={styles.projectDivider}></div>
                        <p className={styles.projectTitle}>Chibi Art</p>
                        <p className={styles.projectText}>Adorable, expressive chibi art that captures personality in a playful way, perfect for avatars or social media. My chibi designs add a fun, memorable touch to your brand.</p>
                    </div>
                </div>
            </div>
            <Contact />
        </Curve>
    )
}