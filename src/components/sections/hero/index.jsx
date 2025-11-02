import "./index.css";
import Sidebar from "../../sidebar";
import BackText from "../../backText";
import BackLight from "../../backlight";
import PrimaryBtn from "../../primaryBtn";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="hero" className="heroSection">
      <div className="heroContainer">
        <div className="heroSidebar">
          <Sidebar />
        </div>

        <div className="heroContent">
          <BackText
            topText={"HI, MY NAME IS"}
            backText={"FULL STACK DEVELOPER"}
          />

          {/* Animated Name */}
          <motion.h1
            className="heroName"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          >
            MAHMOUD HASHEM
          </motion.h1>

          <div className="imgBox">
            {/* Left Button */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
            >
              <PrimaryBtn
                onClick={() => {
                  document
                    .getElementById("portfolio")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <div className="heroBtnContentViewPortfolio">
                  <FaArrowLeft />
                  <p>View Portfolio</p>
                </div>
              </PrimaryBtn>
            </motion.div>

            {/* Hero Image */}
            <motion.img
              className="heroImg"
              src="./me.png"
              alt="Mahmoud Hashem"
              initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{
                duration: 1.5,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 1,
              }}
            />

            {/* Right Button */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 1.4 }}
            >
              <PrimaryBtn
                onClick={() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <div className="heroBtnGetInTouch">
                  <FaArrowRight />
                  <p>Get In Touch</p>
                </div>
              </PrimaryBtn>
            </motion.div>
          </div>

          <div className="heroBackground">
            <BackLight />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
