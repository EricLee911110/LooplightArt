import Image from 'next/image';
import Rounded from '../../common/RoundedButton';
import { useRef } from 'react';
import { useScroll, motion, useTransform, useSpring } from 'framer-motion';
import Magnetic from '../../common/Magnetic';

export default function Index() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    })
    const x = useTransform(scrollYProgress, [0, 1], [0, 100])
    const y = useTransform(scrollYProgress, [0, 1], [-500, 0])
    const rotate = useTransform(scrollYProgress, [0, 1], [120, 90])
    return (
        <motion.div style={{y}} ref={container} className="contact">
            <div className="body">
                <div className="title">
                    <span>
                        <div className="imageContainer">
                            <Image 
                            fill={true}
                            alt={"image"}
                            src={`/images/me.jpg`}
                            />
                        </div>
                        <h2>Let&apos;s work</h2>
                    </span>
                    <h2>together</h2>
                    <motion.div style={{x}} className="buttonContainer">
                        <Rounded  backgroundColor={"#334BD3"} className="button" link="https://drive.google.com/drive/folders/148HWbYf7wYaaVX4_tVUWfC_T7O_StHUo?usp=sharing">
                            <p>Get Full Resume</p>
                        </Rounded>
                    </motion.div>
                </div>
                <div className="nav">
                        <Rounded>
                            <p>ericlee911110@gmail.com</p>
                        </Rounded>
                        {/* <Rounded>
                            <p>Discord</p>
                        </Rounded> */}
                </div>
                <div className="info">
                    <div>
                        <span>
                            <h3>Version</h3>
                            <p>2024 © Eric Lee</p>
                        </span>
                    </div>
                    <div>
                        <span>
                            <h3>socials</h3>
                            <Magnetic>
                                <p></p>
                            </Magnetic>
                        </span>
                        <Magnetic>
                            <p>Instagram</p>
                        </Magnetic>
                        <Magnetic>
                            <p>X</p>
                        </Magnetic>
                        <Magnetic>
                            <p>Linkedin</p>
                        </Magnetic>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}