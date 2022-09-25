import React from "react";
import useSwipe from "../../hooks/useSwipe";
import NavLeftChevron from "../../icons/NavLeftChevron";
import NavRightChevron from "../../icons/NavRightChevron";
import "./index.css";

const Swiper = ({ items }) => {
  const { swipeWrapperRef, slideIndex, handleClickNavButton } = useSwipe(
    items.length
  );
  console.log(slideIndex);
  return (
    <div className="hw-swiper-container">
      <div ref={swipeWrapperRef} className="hw-swiper-content-wrapper">
        {items.map((item, index) => (
          <div className="hw-swiper-content" key={index}>
            <img alt={item.description} src={item.image} />
            <br />
            {item.description}
          </div>
        ))}
      </div>
      <div
        className={`hw-swiper-navigator prev`}
        onClick={() => handleClickNavButton(-1)}
      >
        <NavLeftChevron />
      </div>
      <div
        className="hw-swiper-navigator next"
        onClick={() => handleClickNavButton(1)}
      >
        <NavRightChevron />
      </div>
      <div className="hw-swiper-indicator-wrapper">
        {Array(items.length)
          .fill(0)
          .map((_, index) => (
            <div
              className={`${
                index === slideIndex
                  ? "hw-swiper-indicator active"
                  : "hw-swiper-indicator"
              }`}
              key={index}
            />
          ))}
      </div>
    </div>
  );
};
export default Swiper;

Swiper.defaultProps = {
  items: [
    { description: "A-item's description." },
    { description: "B-item's description." },
    { description: "C-item's description." },
  ],
};
