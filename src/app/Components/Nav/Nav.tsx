"use client";

import Link from "next/link";
import navStyles from './Nav.module.scss';
import { Play } from 'next/font/google';
import { useMediaQuery } from "react-responsive";
import MenuSVG from "../MenuSVG/MenuSVG" 

import { motion, spring } from "framer-motion";
import { useState } from "react";


const play = Play({
  subsets: ["cyrillic"],
  weight: '400'
});

const Nav = () => {

  const navBreakpoint = useMediaQuery({ maxWidth: 729 });
  const [isOpent, setIsOpen] = useState(false);

  const menuClickHandle = () => {
    setIsOpen(!isOpent);
  }

  return ( 
    <div className={navStyles.container}>
      <div className={`${navStyles.navHolder} ${play.className}`}>
        <p>Артем Зинкин FD</p>

        {navBreakpoint ? (
        <>
          <div onClick={menuClickHandle} className={navStyles.menuSVG}><MenuSVG></MenuSVG></div>
          <motion.div
            className={navStyles.dropdownMenu}
            initial= {{
              borderBottom: "0px solid rgb(217, 217, 217)",
              height: 0,
              opacity: 0,
            }}
            animate={isOpent ? {
              borderBottom: "1px solid rgb(217, 217, 217)",
              height: 135,
              opacity: 1,
            } : {

            }}
            transition={{
              duration: 0.4,
              staggerChildren: 0.2,
            }}
            >
              <motion.div className={navStyles.flexElement}>
                <motion.a href="@">на главную</motion.a>
                <motion.a href="@">обо мне </motion.a>
              </motion.div>
              <motion.div className={navStyles.flexElement}>
                <motion.a href="@">контакты </motion.a>
                <motion.a href="@">работы </motion.a>
              </motion.div>

          </motion.div>
        </>
        ) : (
          <nav className={navStyles.navigation}>
          <Link target="_blank" href='https://www.youtube.com/watch?v=Gcj9-iF_lTw&list=RD9lLK-kiTVW8&index=10'>обо мне</Link>
          <Link href='@'>работы</Link>
          <Link href='@'>контакты</Link>
         </nav>
        )}

      </div>
    </div>
   );
}
 
export default Nav;