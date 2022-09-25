import { useState, useCallback, useRef } from "react";

const useSwiper = (itemCnt = 1) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const swipeWrapperRef = useRef(null);

  const handleClickNavButton = useCallback(
    (direction) => {
      const scrollDistance = swipeWrapperRef.current.offsetWidth;
      let resultSlideIndex = slideIndex + direction;
      if (resultSlideIndex >= itemCnt) {
        resultSlideIndex = 0;
      }
      if (resultSlideIndex < 0) {
        resultSlideIndex = itemCnt - 1;
      }
      setSlideIndex(resultSlideIndex);
      swipeWrapperRef.current.scrollTo({
        top: 0,
        left: resultSlideIndex * scrollDistance,
        behavior: "smooth",
      });
    },
    [itemCnt, slideIndex]
  );

  return {
    swipeWrapperRef,
    handleClickNavButton,
    slideIndex,
  };
};
export default useSwiper;
