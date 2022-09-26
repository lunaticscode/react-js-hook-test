import React, { useCallback, useMemo } from "react";
import usePaginator from "../../hooks/usePagination";
import "./index.css";
const Paginator = ({ dataCnt }) => {
  const {
    pageNumber: nowPageNumber,
    isFirstPage,
    isLastPage,
    onClickNavButton,
    onClickPageNumber,
    pageIndexList,
  } = usePaginator(dataCnt);

  const navPrevCls = useMemo(
    () =>
      isFirstPage
        ? "hw-paginator-nav-button prev disable"
        : "hw-paginator-nav-button prev",
    [isFirstPage]
  );

  const navNextCls = useMemo(
    () =>
      isLastPage
        ? "hw-paginator-nav-button next disable"
        : "hw-paginator-nav-button next",
    [isLastPage]
  );

  const handleClickNavButton = useCallback(
    (direction) => {
      if (direction === "prev" && !isFirstPage) {
        onClickNavButton(-1);
      }
      if (direction === "next" && !isLastPage) {
        onClickNavButton(1);
      }
    },
    [isFirstPage, isLastPage, onClickNavButton]
  );

  const handleClickPageButton = useCallback(
    (page) => {
      if (page === nowPageNumber) return;
      onClickPageNumber(page);
    },
    [nowPageNumber, onClickPageNumber]
  );

  return (
    <div className={"hw-paginator-wrapper"}>
      <div className={navPrevCls} onClick={() => handleClickNavButton("prev")}>
        prev
      </div>
      <div className={"hw-paginator-page-button-wrapper"}>
        {pageIndexList.map((val, index) => (
          <div
            key={index}
            className={
              nowPageNumber === val
                ? "hw-paginator-page-button active"
                : "hw-paginator-page-button"
            }
            onClick={() => handleClickPageButton(val)}
          >
            {val.toString()}
          </div>
        ))}
      </div>
      <div className={navNextCls} onClick={() => handleClickNavButton("next")}>
        next
      </div>
    </div>
  );
};

export default Paginator;
Paginator.defaultProps = {
  dataCnt: 492,
};
