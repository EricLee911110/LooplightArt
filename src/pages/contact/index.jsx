import Curve from "../../components/Layout/Curve";
import Header from "../../components/Header";
import styles from "./style.module.scss";
import Contact from '../../components/Contact';
import Magnetic from "../../common/Magnetic";
import Footer from "../../components/Footer";
import Image from "next/image"

export default function Index(){
    const backgroundColor = "#141516"
    return(
        <div style={{backgroundColor}}>
            <Curve>
                <Header useBlackHeader={true}/>
                <h1 className={styles.contactTitle}>Let&apos;s start a sketch together</h1>
                <div className={styles.contactMain}>
                    <div className={styles.contactQuestions}>
                        <div className={styles.questionForm}>
                            <div className={styles.divider}/>
                            <div className={styles.question}>
                                <p className={styles.number}>01</p>
                                <p>What&apos;s your name?</p>
                            </div>
                            <input className={styles.userInput} placeholder="John Doe"></input>
                        </div>

                        <div className={styles.questionForm}>
                            <div className={styles.divider}/>
                            <div className={styles.question}>
                                <p className={styles.number}>02</p>
                                <p>What&apos;s your email?</p>
                            </div>
                            <input className={styles.userInput} placeholder="john@doe.com"></input>
                        </div>

                        <div className={styles.questionForm}>
                            <div className={styles.divider}/>
                            <div className={styles.question}>
                                <p className={styles.number}>03</p>
                                <p>What&apos;s the name of your organization?</p>
                            </div>
                            <input className={styles.userInput} placeholder="John & Doe"></input>
                        </div>

                        <div className={styles.questionForm}>
                            <div className={styles.divider}/>
                            <div className={styles.question}>
                                <p className={styles.number}>04</p>
                                <p>What services are you looking for?</p>
                            </div>
                            <input className={styles.userInput} placeholder="Background Illustration, Logo Design, Concept Art ..."></input>
                        </div>

                        <div className={styles.questionForm}>
                            <div className={styles.divider}/>
                            <div className={styles.question}>
                                <p className={styles.number}>05</p>
                                <p>Your message</p>
                            </div>
                            <input className={styles.userInput} placeholder="Hello Eric, can you help me with ..."></input>
                        </div>
                        <Magnetic>
                            <div className={styles.sendButton}>Send it!</div>
                        </Magnetic>
                    </div>
                    <div className={styles.contactInfos}>
                        <div className={styles.imageContainer}>
                            <Image 
                            fill={true}
                            alt={"image"}
                            src={`/images/me.jpg`}
                            />
                        </div>
                        <div className={styles.contactSection}>
                            <p className={styles.infoMeta}>CONTACT DETAILS</p>
                            <Magnetic>
                                <p className={styles.infoData}>ericlee911110@gmail.com</p>
                            </Magnetic>
                        </div>
                        <div className={styles.contactSection}>
                            <p className={styles.infoMeta}>BUSINESS DETAILS</p>
                            <Magnetic>
                                <p className={styles.infoData}>No. 43, Section 4, Keelung Rd, Da&apos;an District, Taipei City, Taiwan</p>
                            </Magnetic>
                        </div>
                        <div className={styles.contactSection}>
                            <p className={styles.infoMeta}>SOCIALS</p>
                            <Magnetic>
                                <p className={styles.infoData}>Instagram</p>
                            </Magnetic>
                            <Magnetic>
                                <p className={styles.infoData}>X</p>
                            </Magnetic>
                            <Magnetic>
                                <p className={styles.infoData}>LinkedIn</p>
                            </Magnetic>
                        </div>
                    </div>
                </div>
                <Footer/>
            </Curve>
        </div>
    )
}