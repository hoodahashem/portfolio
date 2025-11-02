import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import "./index.css";
import { useState } from "react";
import { projects } from "../../constants";

const PortfolioCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState();
  const [isAnimating, setIsAnimating] = useState();

  const handleTransition = (direction) => {
    if (isAnimating) return;

    setIsAnimating(true);
    setDirection(direction);

    setTimeout(() => {
      if (direction === "right") {
        setCurrentIndex((prev) =>
          prev === projects.length - 1 ? 0 : prev + 1,
        );
      } else {
        setCurrentIndex((prev) =>
          prev === 0 ? projects.length - 1 : prev - 1,
        );
      }
    }, 300);

    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  };
  const nextCard = () => handleTransition("right");
  const prevCard = () => handleTransition("left");

  const getCardNumber = (place) => {
    return ((place % 7) + 7) % 7;
  };
  return (
    <div className="portfolioContainer">
      <div className="leftCards">
        <button
          onClick={prevCard}
          disabled={isAnimating}
          className={`nav-button ${isAnimating ? "disabled" : ""}`}
          aria-label="previous card"
        >
          <FaArrowLeftLong />
        </button>
        <div
          className={`peripheralCard firstCard ${isAnimating ? `sliding-${direction}` : ""}`}
        >
          <div className={`cardImg ${isAnimating ? "zoomIn" : ""}`}>
            <img
              src={projects[getCardNumber(currentIndex)].image}
              alt="Project Info"
            />
          </div>
        </div>
        <div
          className={`peripheralCard secondCard ${isAnimating ? `sliding-${direction}` : ""}`}
        >
          <div className={`cardImg ${isAnimating ? "zoomIn" : ""}`}>
            <img
              src={projects[getCardNumber(currentIndex + 1)].image}
              alt="Project Info"
            />
          </div>
        </div>
        <div
          className={`peripheralCard thirdCard ${isAnimating ? `sliding-${direction}` : ""}`}
        >
          <div className={`cardImg ${isAnimating ? "zoomIn" : ""}`}>
            <img
              src={projects[getCardNumber(currentIndex + 2)].image}
              alt="Project Info"
            />
          </div>
        </div>
      </div>
      {/*############centerCard############*/}
      <div
        className={`centerCard ${isAnimating ? `sliding-${direction}` : ""}`}
      >
        <div className={`cardImg ${isAnimating ? "zoomIn" : ""}`}>
          <img
            src={projects[getCardNumber(currentIndex + 3)].image}
            alt="Project Info"
          />
        </div>
        <div className={`cardContent ${isAnimating ? "fadeIn" : ""}`}>
          <h2>{projects[getCardNumber(currentIndex + 3)].title}</h2>
          <h3>{projects[getCardNumber(currentIndex + 3)].subtitle}</h3>
          <p>{projects[getCardNumber(currentIndex + 3)].description}</p>
        </div>
      </div>
      {/*############centerCard############*/}
      <div className="rightCards">
        <div
          className={`peripheralCard fifthCard ${isAnimating ? `sliding-${direction}` : ""}`}
        >
          <div className={`cardImg ${isAnimating ? "zoomIn" : ""}`}>
            <img
              src={projects[getCardNumber(currentIndex + 4)].image}
              alt="Project Info"
            />
          </div>
        </div>
        <div
          className={`peripheralCard sixthCard ${isAnimating ? `sliding-${direction}` : ""}`}
        >
          <div className={`cardImg ${isAnimating ? "zoomIn" : ""}`}>
            <img
              src={projects[getCardNumber(currentIndex + 5)].image}
              alt="Project Info"
            />
          </div>
        </div>
        <div
          className={`peripheralCard seventhCard ${isAnimating ? `sliding-${direction}` : ""}`}
        >
          <div className={`cardImg ${isAnimating ? "zoomIn" : ""}`}>
            <img
              src={projects[getCardNumber(currentIndex + 6)].image}
              alt="Project Info"
            />
          </div>
        </div>
        <button
          onClick={nextCard}
          disabled={isAnimating}
          className={`nav-button ${isAnimating ? "disabled" : ""}`}
          aria-label="next card"
        >
          <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
};

export default PortfolioCards;
