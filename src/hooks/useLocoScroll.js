import { useEffect } from "react"
import LocomotiveScroll from 'locomotive-scroll'


export default function useLocoScroll(start){
    //useEfect run when start parameter change
    useEffect(() =>{
        if (!start) return;

        const scrollEl = document.querySelector('#main-container');
// eslint-disable-next-line 
        const locoScroll = new LocomotiveScroll({
            el: scrollEl,
            smooth: true,
            multiplier: 1,
            class: 'is-reveal'

        })
    }, [start])
    
}