import { motion } from "framer-motion";

// variants
const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

// calculate the reverse index of stagerred delay
const reverseIndex = (index: number, length: number) => {
  return length - index - 1;
};

const Stairs = () => {
  return (
    <>
      {/* 
      Render 6 motion divs, each representing a step of stairs.
      Each div have the same animation defined by the stairAnimation object.
      The delay for each dev is caluculated dynimcally by the reverseIndex function,
      Creating a staggered effect with decreasing delay for each subsequent step.
    */}
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={stairAnimation}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: 0.1 * reverseIndex(index, 6),
          }}
          className="h-full w-full bg-white/60 relative"
        />
      ))}
    </>
  );
};

export default Stairs;
