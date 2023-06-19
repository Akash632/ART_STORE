import { motion } from "framer-motion";

const animations = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};
function Motion() {
  return (
    <motion.div
      variants={animations}
      inital="initial"
      animate="animate"
      exit="exit"
    >
      <div>
        Hello
      </div>
    </motion.div>
  );
}

export default Motion;
