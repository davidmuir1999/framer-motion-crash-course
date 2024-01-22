import React from "react";
import { motion } from "framer-motion";//This is the atomic unit of how framer motion works

const BasicsOfMotion = () => {
    return (
        <div style={{
            display: "grid",
            placeContent: "center",
            height: "100vh",
            gap: "0.8rem",
        }}>
            <div
            style={{
                width: 150,
                height: 150,
                background: "black",
            }}>

            </div>
        </div>
    )
}

export default BasicsOfMotion;