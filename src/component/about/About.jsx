import {  motion } from "framer-motion";
import { useRef } from "react";


//animation
const variants = {
  initial: {
    y: 100, 
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8, 
      ease: "easeOut", 
      staggerChildren: 0.2,
    },
  },
  exit: {
    y: -100,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  },
};

const About = () => {
  const ref = useRef();


  return (
    <section className="bg-black pt-10">

      {/* give animation that div */}
      <motion.div
        ref={ref}
        variants={variants}
        initial="initial"
        whileInView="animate"
        exit="exit"
        className="md:flex flex-row mx-10 md:space-x-40"
      >
        <div className="flex flex-col space-y-5">
          <h1 className="text-white">•Who are we</h1>
          <motion.div className="w-48 h-20 bg-blue-600 rounded-full"></motion.div>
        </div>
        <div className="space-y-10">
          <p className="text-2xl font-semibold leading-relaxed max-w-2xl text-white">
            We are a close-knit team of experts <br /> dedicated to crafting
            memorable and <br /> emotionally engaging websites, digital <br />
            experiences, and native apps.
          </p>
          <motion.div className="w-40 h-10 bg-blue-600 rounded-full flex items-center justify-center">
            learn more
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
