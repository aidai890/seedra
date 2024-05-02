
import { useState } from "react";
import { motion} from "framer-motion";
// import {Variants} from "framer-motion"

// const itemVariants: Variants = {
//   open: {
//     opacity: 1,
//     y: 0,
//     transition: { type: "spring", stiffness: 300, damping: 24 }
//   },
//   closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
// };

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="menu"
    >
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex px-9 items-center gap-28 w-[258px] h-[63px] border border-gray-300 rounded-full text-blue-gray-800 font-lexend text-base font-medium leading-6 tracking-tighter text-left"
      >
        Sort by <br/>
        Recently
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 }
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
        >
            <div className="border border-gray-500 border-dashed w-[24px] h-[24px] flex justify-center items-center">
                <svg  width="15" height="15" viewBox="0 0 20 20">
                    <path d="M0 7 L 20 7 L 10 16" />
                </svg>
            </div>
        </motion.div>
      </motion.button>
      <motion.ul
      className="border-2 "
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05
            }
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3
            }
          }
        }}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        <motion.li className="ml-[100px]" >Item 1 </motion.li>
        <motion.li className="ml-[100px]" >Item 2 </motion.li>
        <motion.li className="ml-[100px]" >Item 3 </motion.li>
        <motion.li className="ml-[100px]" >Item 4 </motion.li>
        <motion.li className="ml-[100px]" >Item 5 </motion.li>
      </motion.ul>
    </motion.nav>
  );
}
