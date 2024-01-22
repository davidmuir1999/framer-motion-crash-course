import React from "react";
import { motion, MotionConfig } from "framer-motion";

const Gestures = () => {
  //Unlike 'Basics of Motions' Gestures are more true to life, whereby when the user interacts with a given element something will happen
  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }}
    >
        {/* If you have components in the same container that have the same animation you can you MotionConfig */}
      <MotionConfig
        transition={{
          duration: 0.125,
          ease: "easeInOut",
        }}
      >
        <motion.button
          //variants for gestures we use the 'While' prop, in this example this is when the user hovers the element
          whileHover={{
            scale: 1.05,
          }}
          //When the user clicks the element
          whileTap={{
            scale: 0.95,
            rotate: "2.5deg",
          }}
          className="example-button"
        >
          Click Me!
        </motion.button>
        <motion.button
          //variants for gestures we use the 'While' prop, in this example this is when the user hovers the element
          whileHover={{
            scale: 1.15,
          }}
          //When the user clicks the element
          whileTap={{
            scale: 0.85,
            rotate: "-2.5deg",
          }}
          className="example-button"
          style={{ backgroundColor: "red" }}
        >
          Click Me!
        </motion.button>
      </MotionConfig>
    </div>
  );
};

export default Gestures;
