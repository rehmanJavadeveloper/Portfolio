import { RiComputerFill, RiCss3Fill, RiCss3Line, RiDatabase2Fill, RiGitBranchFill, RiGithubFill, RiHtml5Fill, RiJavaFill, RiJavascriptFill, RiLeafFill, RiLifebuoyFill, RiReactjsLine, RiSendPlane2Fill, RiServerFill, RiSparkling2Fill, RiSquareLine } from "react-icons/ri"
 import { animate, motion } from 'framer-motion';

 const iconVariants = (duration) => ({
  initial:{y: -10},
  animate:{
    y : [10, -10],
    transition: {
      duration:duration,
      ease: "linear",
      repeat:Infinity,
      repeatType:"reverse",
    },
    
  },

 });




const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h2 className="my-20 text-center text-4xl">Technologies</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">

            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
      
            className="rounded border-4 border-neutral-800 p-4">
            <RiJavascriptFill className="text-7xl text-yellow-400" />
            </motion.div>

            <motion.div

             variants={iconVariants(3)}
             initial="initial"
             animate="animate"


             className="rounded border-4 border-neutral-800 p-4">
            <RiHtml5Fill className="text-7xl text-orange-400" />
            </motion.div>


            <motion.div
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
            

            
            className="rounded border-4 border-neutral-800 p-4">
            <RiCss3Fill className="text-7xl text-blue-400" />
            </motion.div>



            <motion.div
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
          
            className="rounded border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-7xl text-cyan-400" />
            </motion.div>




            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            
            className="rounded border-4 border-neutral-800 p-4">
            <RiGitBranchFill className="text-7xl text-white-400" />
            </motion.div>



            <motion.div 

               variants={iconVariants(3)}
               initial="initial"
               animate="animate"
            className="rounded border-4 border-neutral-800 p-4">
            <RiGithubFill className="text-7xl text-white-400" />
            </motion.div>

            <motion.div 
               variants={iconVariants(3)}
               initial="initial"
               animate="animate"

            
            className="rounded border-4 border-neutral-800 p-4">
            <RiSendPlane2Fill className="text-7xl text-cyan-400" />
            </motion.div>


            <motion.div 

            variants={iconVariants(3)}
            initial="initial"
            animate="animate"

            className="rounded border-4 border-neutral-800 p-4">
            <RiLeafFill className="text-7xl text-green-400" />
            </motion.div>

            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded border-4 border-neutral-800 p-4">
            <RiDatabase2Fill className="text-7xl text-cyan-400" />
            </motion.div>

            

            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            
            className="rounded border-4 border-neutral-800 p-4">
            <RiJavaFill className="text-7xl text-red-400" />
            </motion.div>

           

        </div>
    </div>
  )
}

export default Technologies

