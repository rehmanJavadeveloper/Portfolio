// // import { EXPERIENCES } from "../constants";

// // const Experience = () => {
// //   return (
// //     <div className="border-b border-neutral-900 pb-4">
// //       {/* Section Title */}
// //       <h2 className="my-20 text-center text-4xl">Experience</h2>

// //       {/* Experiences List */}
// //       <div>
// //         {EXPERIENCES.map((experience, index) => (
// //           <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
// //             {/* Left Column */}
// //             <div className="w-full lg:w-1/2">
// //               <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
// //             </div>

// //             {/* Right Column */}
// //             <div className="w-full max-w-xl lg:w-3/4">
// //               <h6 className="mb-2 font-semibold">
// //                 {experience.role} -{" "}
// //                 <span className="text-sm text-purple-100">
// //                   {experience.company}
// //                 </span>
// //               </h6>
// //               <p className="mb-4 text-neutral-400">{experience.description}</p>
// //               <div className="flex flex-wrap gap-2">
// //                 {experience.technologies.map((tech, index) => (
// //                   <span
// //                     key={index}
// //                     className="mr-2mmt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
// //                   >
// //                     {tech}
// //                   </span>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Experience;



import { motion } from 'framer-motion';
import { EXPERIENCES } from "../constants";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      {/* Section Title */}
      <motion.h2 
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y:-100}}
      transition={{duration:0.5}}

      
      className="my-20 text-center text-4xl">Experience</motion.h2>

      {/* Experiences List */}
      <div>
        {EXPERIENCES.map((experience, index) => (

          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">

            {/* Left Column with Image */}
            <motion.div 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, y:-100}}
            transition={{duration:1}}
            
            className="w-full lg:w-1/4">
              <img
                src={experience.image}
                width={300}  // Updated width
                height={230} // Updated height
                alt={experience.role}
                className="mb-6 rounded"
              />
              <p className="mb-2 text-base text-neutral-400">{experience.year}</p>
            </motion.div>

            {/* Right Column */}
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 text-xl font-semibold">
                {experience.role} -{" "}
                <span className="text-base text-purple-100">
                  {experience.company}
                </span>
              </h6>
              <p className="mb-4 text-lg text-neutral-400">{experience.description}</p>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
