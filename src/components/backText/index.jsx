import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import PropTypes from "prop-types";
import "./index.css";

const BackText = ({ backText, topText }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const letterVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const containerVariant = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.05, ease: "easeOut" },
    },
  };

  // Split by words instead of characters
  const animateByWords = (text) => {
    return text.split(" ").map((word, wordIndex) => (
      <span key={wordIndex} style={{ display: "inline-block", whiteSpace: "nowrap" }}>
        {word.split("").map((char, charIndex) => (
          <motion.span
            key={`${wordIndex}-${charIndex}`}
            variants={letterVariant}
            style={{ display: "inline-block" }}
          >
            {char}
          </motion.span>
        ))}
        {wordIndex < text.split(" ").length - 1 && (
          <span style={{ display: "inline-block", width: "0.25em" }}>&nbsp;</span>
        )}
      </span>
    ));
  };

  return (
    <motion.div
      ref={ref}
      className="backText"
      variants={containerVariant}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.p
        variants={containerVariant}
      >
        {animateByWords(backText)}
      </motion.p>

      <motion.h1
        variants={containerVariant}
      >
        {animateByWords(topText)}
      </motion.h1>
    </motion.div>
  );
};

BackText.propTypes = {
  backText: PropTypes.string,
  topText: PropTypes.string,
};

export default BackText;
