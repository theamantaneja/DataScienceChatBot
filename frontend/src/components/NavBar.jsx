import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.div
      className="bg-gray-600 text-white p-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-xl font-bold"></h1>
      <p>Founded by Aman Taneja</p>
    </motion.div>
  );
};

export default Navbar;