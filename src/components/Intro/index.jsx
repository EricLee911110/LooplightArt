'use client';
import React, { useLayoutEffect, useRef } from 'react'
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function Index() {

    const background = useRef(null);
    const introImage = useRef(null);

    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger);

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: true,
                start: "top",
                end: "+=500px",
            },
        })

        timeline
            .to(background.current, {clipPath: `inset(15%)`})
            .to(introImage.current, {height: "200px"}, 0)
    }, [])

    return (
        <div className="homeHeader">
            <div className="backgroundImage" ref={background}>
                <Image 
                    src={'/images/artdesk5.jpg'}
                    fill={true}
                    alt="background image"
                    priority={true}
                />
            </div>
            <div className="intro">
                    <div ref={introImage} data-scroll data-scroll-speed="0.3" className="introImage">
                        <Image
                            src={'/images/me4.jpeg'}
                            alt="intro image"
                            fill={true} 
                            priority={true}
                        />
                    </div>
                    {/* <h1 data-scroll data-scroll-speed="0.7">Let&apos;s make it happen.</h1> */}
                    <div className='introText'>
                        <h1 data-scroll data-scroll-speed="0.7" style={{ fontFamily: 'JfOpenHuninn, sans-serif' }}>李杰宇</h1>
                        <h2 data-scroll data-scroll-speed="0.7" style={{ fontFamily: 'JfOpenHuninn, sans-serif' }}>(Scroll Down For More)</h2>
                    </div>
             </div>
        </div>
    )
}