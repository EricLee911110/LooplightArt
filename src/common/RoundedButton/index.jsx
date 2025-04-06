import React from 'react'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Magnetic from '../Magnetic';
import Link from 'next/link'
import { useRouter } from 'next/router'


export default function Index({children, backgroundColor="#455CE9", link="", ...attributes}) {

  const router = useRouter();

  const circle = useRef(null);
  let timeline = useRef(null);
  let timeoutId = null;
  useEffect( () => {
    timeline.current = gsap.timeline({paused: true})
    timeline.current
      .to(circle.current, {top: "-25%", width: "150%", duration: 0.4, ease: "power3.in"}, "enter")
      .to(circle.current, {top: "-150%", width: "125%", duration: 0.25}, "exit")
  }, [])
  
  const manageMouseEnter = () => {
    if(timeoutId) clearTimeout(timeoutId)
    timeline.current.tweenFromTo('enter', 'exit');
  }

  const manageMouseLeave = () => {
    timeoutId = setTimeout( () => {
      timeline.current.play();
    }, 300)
  }
  
  const handleClick = (link) => {
    if (typeof window !== 'undefined' && link){
        window.open(link, "_blank");
    }
}

  return (
    <Magnetic>
      <div className="roundedButton" style={{overflow: "hidden"}} onMouseEnter={() => {manageMouseEnter()}} onMouseLeave={() => {manageMouseLeave()}} onClick={() => {handleClick(link)}} {...attributes} >
          {
            children
          }
        <div ref={circle} style={{backgroundColor}} className="circle"></div>
      </div>
    </Magnetic>
  )
}