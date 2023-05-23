import { useState, useEffect } from "react";
import profile from "../data/profile.json";
import { motion, AnimatePresence } from "framer-motion";

const Occupations: React.FC = () => {
  const [occupationIndex, setOccupationIndex] = useState(0);

  const currIdx = occupationIndex % profile.occupations.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setOccupationIndex((curr) => curr + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {profile.occupations.map(
        (occ, idx) =>
          currIdx === idx && (
            <motion.span
              key={idx}
              initial={{ y: -20, opacity: 0 }}
              animate={
                currIdx === idx && { y: [-20, 0, 0, 40], opacity: [0, 1, 1, 0] }
              }
              transition={{
                duration: 1.75,
                ease: "easeIn",
                times: [0, 0.25, 0.75, 1],
              }}
              className="absolute w-full font-bold text-lg text-lime-500 sm:text-2xl sm:font-medium lg:text-xl xl:text-2xl"
            >
              {occ}
            </motion.span>
          )
      )}
    </AnimatePresence>
  );
};

export default Occupations;
