import { useLayoutEffect, useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useInView, motion } from 'framer-motion';
import { slideUp, opacity } from './animation';
import Rounded from '../../common/RoundedButton';

export default function Index() {
    //const phrase = "Transforming your ideas into standout digital art. Together, we’ll create something fresh and unforgettable. No shortcuts—just genuine, high-quality designs crafted uniquely for you.";
    const phrase = "現在是一名台科大資工系大四的學生，過去幾年都是遵循著工程師的道路一路走來，一直到上一份實習的結束，才發現視覺回饋對我來說是一種莫大的成就感，我想趁著還年輕的時候，探索數位藝術的魅力。"
    const description = useRef(null);
    const isInView = useInView(description)

    

    return (
        <div ref={description} className="description">
            <div className="body">
                <p>
                {
                    phrase.split("").map( (word, index) => {
                        return <span key={index} className='mask'><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                    })
                }
                </p>
                {/* <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>The fusion of my passion for art, creativity, and storytelling places me in a unique position to create visuals that truly stand out in the digital world.</motion.p> */}
                <motion.p variants={opacity} animate={isInView ? "open" : "closed"}> </motion.p>
                <div data-scroll data-scroll-speed={0.1}>
                    <Rounded className="button" link="https://drive.google.com/drive/folders/148HWbYf7wYaaVX4_tVUWfC_T7O_StHUo?usp=sharing">
                        <p>Get Full Resume</p>
                    </Rounded>
                </div>
            </div>
        </div>
    )
}

function AnimatedText({children}) {

    const text = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(text.current, {
            scrollTrigger:{
                trigger: text.current,
                start: "0px bottom",
                end: "bottom+=400px bottom",
                scrub: true,
            },
            left: "200px",
            opacity: 1
        })
    },[])
    return (
        <p ref={text}>{children}</p>
    )
}