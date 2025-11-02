import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { SlSocialLinkedin } from "react-icons/sl";
import { motion } from "framer-motion";
import "./index.css";

const SocialMedia = () => {
  return (
    <motion.ul
      className="socialLinks"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }} // slowed down
      viewport={{ once: true }}
    >
      <motion.li
        className="socialLink"
        whileHover={{ scale: 1.3, rotate: 5 }}
        transition={{ type: "spring", stiffness: 150, damping: 8 }}
      >
        <a
          href="https://www.linkedin.com/in/hoodahashem"
          target="_blank"
          aria-label="Click here for my linkedin profile"
        >
          <SlSocialLinkedin className="activeText" />
        </a>
      </motion.li>
      <motion.li
        className="socialLink"
        whileHover={{ scale: 1.3, rotate: 5 }}
        transition={{ type: "spring", stiffness: 150, damping: 8 }}
      >
        <a
          href="https://github.com/HoodaHashem"
          target="_blank"
          aria-label="Click here for my github profile"
        >
          <FaGithub />
        </a>
      </motion.li>
      <motion.li
        className="socialLink"
        whileHover={{ scale: 1.3, rotate: 5 }}
        transition={{ type: "spring", stiffness: 150, damping: 8 }}
      >
        <a
          href="https://x.com/HoodaHashem"
          target="_blank"
          aria-label="Click here for my twitter profile"
        >
          <FaXTwitter />
        </a>
      </motion.li>
    </motion.ul>
  );
};

export default SocialMedia;
