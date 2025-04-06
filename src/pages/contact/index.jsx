import Curve from "../../components/Layout/Curve";
import Header from "../../components/Header";
import Contact from '../../components/Contact';
import Magnetic from "../../common/Magnetic";
import Footer from "../../components/Footer";
import Image from "next/image"
import { useRouter } from "next/router";

export default function Index(){
    const backgroundColor = "#141516"

    const router = useRouter();

    return(
        <div style={{backgroundColor}}>
            <Curve>
                <Header useBlackHeader={true}/>
                <h1 className="contactTitle">Let&apos;s Create Something Together</h1>
                <div className="contactMain">
                    <div className="contactQuestions">
                        <div className="questionForm">
                            <div className="contactDivider"/>
                            <div className="question">
                                <p className="number">01</p>
                                <p>What&apos;s your name?</p>
                            </div>
                            <input className="userInput" placeholder="John Doe"></input>
                        </div>

                        <div className="questionForm">
                            <div className="contactDivider"/>
                            <div className="question">
                                <p className="number">02</p>
                                <p>What&apos;s your email?</p>
                            </div>
                            <input className="userInput" placeholder="john@doe.com"></input>
                        </div>

                        <div className="questionForm">
                            <div className="contactDivider"/>
                            <div className="question">
                                <p className="number">03</p>
                                <p>What&apos;s the name of your organization?</p>
                            </div>
                            <input className="userInput" placeholder="John & Doe"></input>
                        </div>

                        {/* <div className="questionForm">
                            <div className="contactDivider"/>
                            <div className="question">
                                <p className="number">04</p>
                                <p>What services are you looking for?</p>
                            </div>
                            <input className="userInput" placeholder="Background Illustration, Logo Design, Concept Art ..."></input>
                        </div> */}

                        <div className="questionForm">
                            <div className="contactDivider"/>
                            <div className="question">
                                <p className="number">05</p>
                                <p>Your message</p>
                            </div>
                            <input className="userInput" placeholder="Hello Eric, can you help me with ..."></input>
                        </div>
                        {/* <Magnetic>
                            <div className="sendButton">Send it!</div>
                        </Magnetic> */}
                    </div>
                    <div className="contactInfos">
                        <div className="contactImageContainer">
                            <Image 
                            fill={true}
                            alt={"image"}
                            src={`/images/me.jpg`}
                            />
                        </div>
                        <div className="contactSection">
                            <p className="infoMeta">CONTACT DETAILS</p>
                            <Magnetic>
                                <p className="infoData">ericlee911110@gmail.com</p>
                            </Magnetic>
                        </div>
                        <div className="contactSection">
                            <p className="infoMeta">BUSINESS DETAILS</p>
                            <Magnetic>
                                <p className="infoData">No. 43, Section 4, Keelung Rd, Da&apos;an District, Taipei City, Taiwan</p>
                            </Magnetic>
                        </div>
                        {/* <div className="contactSection">
                            <p className="infoMeta">SOCIALS</p>
                            <Magnetic>
                                <p className="infoData">Instagram</p>
                            </Magnetic>
                            <Magnetic>
                                <p className="infoData">X</p>
                            </Magnetic>
                            <Magnetic>
                                <p className="infoData">LinkedIn</p>
                            </Magnetic>
                        </div> */}
                    </div>
                </div>
                <Footer/>
            </Curve>
        </div>
    )
}