import React from "react";
import { motion, useAnimationControls } from "framer-motion";

const AnimationControls = () => {
    const controls = useAnimationControls();//control animations
    const handleClick = () => {
        controls.start('flip');//toggled, animation stated in control will all happen when button is clicked used '.start'
        //There are plenty other animation controls
    }
  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }}
    >
      <button onClick={handleClick} className="example-button">Flip It</button>
      <motion.div
        style={{
          width: 150,
          height: 150,
          background: "black",
        }}
        //From previous examples we made animations inline, but we can store compound animations in string variants
        variants= {{
            initial: {
                rotate:'0deg',
            },
            flip: {
                rotate: '360deg',
            },
        }}
        initial= 'initial' //calling string variant
        animate= {controls} //calling controls from animation controls
      ></motion.div>
    </div>
  );
};

export default AnimationControls;
