import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const ScrollAnimations = () => {
    const {scrollYProgress} = useScroll();//progress down page when scrolling
    
    const scaleX = useSpring(scrollYProgress);//applies a springy feel

    const background = useTransform(scrollYProgress,[0,1], ["rgb(86, 1, 245", "rgb(1, 245, 13"]); //transitions bar from one colour to another during progress down page

  return (
    <div>
        <motion.div
        style={{
            // scaleX: scrollYProgress, creating the progress bar
            scaleX,
            transformOrigin: 'left',
            position: 'sticky',
            top: 0,
            width: '100%',
            height: '20px',
            // background: 'blue'
            background,
        }}/>
      <div
        style={{
          maxWidth: "700px",
          margin: "auto",
          padding: "1.2rem",
          fontSize: '24px',
        }}
      >
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid impedit, fugiat vel nihil eaque quod dolorem a consequatur harum quidem iste commodi deleniti sunt natus, ipsam eum corporis fugit mollitia.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, dolor. Molestias quisquam veritatis accusamus deserunt enim iste et mollitia maiores earum vero cum, eius possimus est, iusto minima nulla aspernatur!
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid impedit, fugiat vel nihil eaque quod dolorem a consequatur harum quidem iste commodi deleniti sunt natus, ipsam eum corporis fugit mollitia.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, dolor. Molestias quisquam veritatis accusamus deserunt enim iste et mollitia maiores earum vero cum, eius possimus est, iusto minima nulla aspernatur!
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid impedit, fugiat vel nihil eaque quod dolorem a consequatur harum quidem iste commodi deleniti sunt natus, ipsam eum corporis fugit mollitia.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, dolor. Molestias quisquam veritatis accusamus deserunt enim iste et mollitia maiores earum vero cum, eius possimus est, iusto minima nulla aspernatur!
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid impedit, fugiat vel nihil eaque quod dolorem a consequatur harum quidem iste commodi deleniti sunt natus, ipsam eum corporis fugit mollitia.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, dolor. Molestias quisquam veritatis accusamus deserunt enim iste et mollitia maiores earum vero cum, eius possimus est, iusto minima nulla aspernatur!
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid impedit, fugiat vel nihil eaque quod dolorem a consequatur harum quidem iste commodi deleniti sunt natus, ipsam eum corporis fugit mollitia.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, dolor. Molestias quisquam veritatis accusamus deserunt enim iste et mollitia maiores earum vero cum, eius possimus est, iusto minima nulla aspernatur!
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid impedit, fugiat vel nihil eaque quod dolorem a consequatur harum quidem iste commodi deleniti sunt natus, ipsam eum corporis fugit mollitia.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, dolor. Molestias quisquam veritatis accusamus deserunt enim iste et mollitia maiores earum vero cum, eius possimus est, iusto minima nulla aspernatur!
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid impedit, fugiat vel nihil eaque quod dolorem a consequatur harum quidem iste commodi deleniti sunt natus, ipsam eum corporis fugit mollitia.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, dolor. Molestias quisquam veritatis accusamus deserunt enim iste et mollitia maiores earum vero cum, eius possimus est, iusto minima nulla aspernatur!
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid impedit, fugiat vel nihil eaque quod dolorem a consequatur harum quidem iste commodi deleniti sunt natus, ipsam eum corporis fugit mollitia.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, dolor. Molestias quisquam veritatis accusamus deserunt enim iste et mollitia maiores earum vero cum, eius possimus est, iusto minima nulla aspernatur!
        </p>
      </div>
    </div>
  );
};

export default ScrollAnimations;
