

import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/KevinRushProfile.png";
 import { delay, motion } from 'framer-motion';


 const container = (delay) =>({
  hidden:{x: -100, opacity: 0},
  visible:{
    x:0,
    opacity:1,
    transition:{duration: 0.5, delay:delay},
  },
 });


const Hmn = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-20">
      <div className="flex flex-wrap">
        {/* Left Column */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            {/* Name */}
            <motion.h1 
            variants={container(0)}
            initial="hidden"
            animate="visible"

             
              className="pb-8 text-5xl font-thin tracking-tight lg:mt-16 lg:text-7xl"
              >
              Abdul Rehman
            </motion.h1>

            {/* Role */}
            <motion.span  
            variants={container(0.5)}
            initial="hidden"
            animate="visible"

             
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl lg:text-3xl tracking-tight text-transparent">
              Full Stack Developer
            </motion.span>

            {/* Paragraph */}
            <motion.p 
             variants={container(1)}
             initial="hidden"
             animate="visible"
            
            className="my-4 max-w-xl py-2 text-lg leading-relaxed font-light tracking-tighter text-neutral-400">
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        {/* Right Column - Profile Picture */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img initial={{x:100, opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:1, delay:1.2}}
              src={profilePic}
              alt="Abdul Rehman"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hmn;
