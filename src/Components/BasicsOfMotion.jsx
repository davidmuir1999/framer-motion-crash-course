import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; //This is the atomic unit of how framer motion works

const BasicsOfMotion = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }}
    >
      <motion.button
        onClick={() => setIsVisible(!isVisible)}
        className="example-button"
        layout //This animated the button when it is being push when box mounts and unmounts
      >
        Show/Hide
      </motion.button>
      {/* If you want to use the exit prop you need to wrap component in AnimationPresence */}
      {/*Within Animation Presence, we have 'mode' controls how entering and exiting children are handled*/}
      {/*In this example 'popLayout the button will be pushed when box mounts*/}
      <AnimatePresence mode="popLayout">
      {isVisible && (
        <motion.div //To apply motion animation to elements you amend 'motion' to html tags
          //To give this div life, we need to include a couple of props which defines the different states out animation will have:
          //these are called variants
          initial={{
            //This takes in the same props normal style tag will take
            //Initial is the initial state we want upon mounting
            rotate: "0deg",
            scale: 0,
            y: 0,
          }}
          animate={{
            //Animate is the state we want to animate to whenever we want
            rotate: "180deg",
            scale: 1,
            y: [0, 150, -150, -150, 0],
          }}
          exit={{
            //Exit prop is the state we want when the component unmounts
            rotate: "0deg",
            scale: 0,
            y: 0,
          }}
          transition={{
            //The transition prop allows more customization on transition of out initial to animation states
            duration: 1,
            ease: "backInOut",
            times: [0, 0.25, 0.5, 0.85, 1], //must be same array entries as specified above and should be inline with specifies duration
          }}
          style={{
            width: 150,
            height: 150,
            background: "black",
          }}
        ></motion.div>
      )}
      </AnimatePresence>
    </div>
  );
};

export default BasicsOfMotion;
