import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const ViewBasedAnimation = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true}); //only fires once

    // useEffect(() => {
    //     console.log('Is in view', isInView);
    // }, [isInView]); Used to test if elements are being called
    
    return(
        <>
        <div style={{height: '150vh'}}/> {/*Making page larger than view */}
        <motion.div
        style={{height: '100vh', background: 'black'}}
        initial={{ opacity: 0}}
        whileInView={{opacity: 1}} // once initial state page is pasted the screen section turns black
        transition={{ duration: 1}}
        />
        <div
        ref={ref}
        style={{
            height: '100vh',
            background: isInView ? 'blue' : 'red',
            transition: '1s background',
        }}/>
        </>
    )
}

export default ViewBasedAnimation;