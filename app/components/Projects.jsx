import React from "react";
import { motion } from "framer-motion";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Projects = ({ title, description, image, liveLink, codeLink }) => {
  return (
    <motion.div
      className="flex flex-col items-center text-center gap-6 my-12 
                 border border-gray-300 rounded-2xl shadow-lg p-6 bg-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Project Info */}
      <motion.div
        className="space-y-4 max-w-xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 className="text-2xl font-bold text-black" variants={itemVariants}>
          {title}
        </motion.h2>

        <motion.p className="text-gray-500" variants={itemVariants}>
          {description}
        </motion.p>
      </motion.div>

      {/* Project Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex justify-center"
      >
        <div className="max-w-sm w-full">
          <img
            src={image}
            alt={title}
            className="w-full h-auto object-cover rounded-xl shadow-md"
          />
        </div>
      </motion.div>

      {/* Buttons */}
      <motion.div
        className="flex gap-4 justify-center"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-black text-white rounded-lg shadow-md"
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 8px 20px rgba(0,0,0,0.3)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Live Demo
        </motion.a>

        <motion.a
          href={codeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-gray-200 text-black rounded-lg shadow-md"
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 8px 20px rgba(100,100,100,0.4)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Source Code
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
