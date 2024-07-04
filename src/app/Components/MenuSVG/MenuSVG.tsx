"use client"
import * as React from "react";
import { SVGProps } from "react";
import { motion } from "framer-motion";
import { useState } from "react";

import { Play } from 'next/font/google';
const play = Play({
  subsets: ["cyrillic"],
  weight: '400'
});



const MenuSvg = (props: SVGProps<SVGSVGElement>) => {

  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = () => {
    setIsOpen(!isOpen);
  }



  return (
      <svg
        onClick={handleOpen}
        viewBox="0 0 32 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        >
        <g id="FramePM">
          <motion.g id="move"
            animate={{
              x: isOpen ? -7 : 0
            }}
            transition={{ 
              duration: 0.3
            }}
            
          >
            <path
              id="VerLine2"
              d="M12 9L19.5 9L27 9"
              stroke="#E5E6E4"
              strokeLinecap="round"
            />
            <path
              id="HorLine1"
              d="M9 1L9 17"
              stroke="#E5E6E4"
              strokeLinecap="round"
            />
          </motion.g>
          <g id="unmove">
            <path
              id="VerLine1"
              d="M12 2L19.5 2L27 2"
              stroke="#E5E6E4"
              strokeLinecap="round"
            />
            <path
              id="VerLine3"
              d="M12 16L19.5 16L27 16"
              stroke="#E5E6E4"
              strokeLinecap="round"
            />
            <path
              id="HorLine2"
              d="M30 1V17"
              stroke="#E5E6E4"
              strokeLinecap="round"
            />
          </g>
        </g>
      </svg>
  )
}
export default MenuSvg 


