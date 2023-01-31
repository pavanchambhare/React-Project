import React from "react";
import { motion } from "framer-motion";

const MyComponent = () => {
  return (
    <motion.div
      initial={{ x: 0 }}
      animate={{ x: 100 }}
      transition={{ duration: 1 }}
    >
      <p>Hello World</p>
    </motion.div>
  );
};

export default MyComponent;