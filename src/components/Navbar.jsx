import logo from "../assets/kevinRushLogo.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className=" mb-20 flex itemd-centre justify-between py-6">
<div className="flex flex-shrink-0 item-centre">
    <img className="mx-2 w-10 h-10" src={logo} alt="logo" />

</div>

 <div className="m-8 flex item-centre justify-centre gap-4 text-2xl">

    <FaLinkedin/>
    <FaGithub/>
    <FaSquareTwitter/>
    <FaInstagram/>
 </div>
    </nav>
    
  );
};

export default Navbar



// import logo from "../assets/kevinRushLogo.png";
// import { FaLinkedin } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
// import { FaSquareTwitter } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";

// const Navbar = () => {
//   return (
//     <nav className="mb-20 flex items-center justify-between py-6">
//       <div className="flex flex-shrink-0 items-center">
//         <img className="mx-2 w-10 h-10" src={logo} alt="logo" />
//       </div>

//       <div className="m-8 flex items-center justify-center gap-4 text-2xl">
//         <a 
//           href="https://www.linkedin.com/in/your-linkedin-profile" 
//           target="_blank" 
//           rel="noopener noreferrer" 
//           className="hover:text-blue-600 transition-colors duration-300"
//         >
//           <FaLinkedin />
//         </a>
//         <a 
//           href="https://github.com/your-github-profile" 
//           target="_blank" 
//           rel="noopener noreferrer" 
//           className="hover:text-gray-800 transition-colors duration-300"
//         >
//           <FaGithub />
//         </a>
//         <a 
//           href="https://twitter.com/your-twitter-profile" 
//           target="_blank" 
//           rel="noopener noreferrer" 
//           className="hover:text-blue-400 transition-colors duration-300"
//         >
//           <FaSquareTwitter />
//         </a>
//         <a 
//           href="https://www.instagram.com/your-instagram-profile" 
//           target="_blank" 
//           rel="noopener noreferrer" 
//           className="hover:text-pink-500 transition-colors duration-300"
//         >
//           <FaInstagram />
//         </a>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

