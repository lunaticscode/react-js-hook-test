import { useState, useCallback, useMemo } from "react";
const usePaginator = (itemCnt, defaultPage = 1, divider = 10) => {
  const [pageNumber, setPageNumber] = useState(defaultPage);

  // const pageLength = Math.ceil(itemCnt / divider);
  const pageLength = useMemo(
    () => Math.ceil(itemCnt / divider),
    [itemCnt, divider]
  );

  const onClickNavButton = useCallback(
    (direction) => {
      const resultPageNumber = direction + pageNumber;
      setPageNumber(resultPageNumber);
    },
    [pageNumber, setPageNumber]
  );
  const onClickPageNumber = useCallback(
    (targetNumber) => {
      setPageNumber(targetNumber);
    },
    [setPageNumber]
  );

  const isFirstPage = useMemo(() => pageNumber === 1, [pageNumber]);
  const isLastPage = useMemo(
    () => pageNumber === pageLength,
    [pageNumber, pageLength]
  );

  const pageIndexList = useMemo(() => {
    const _firstIndex = (Math.ceil(pageNumber / divider) - 1) * divider + 1;
    const _tmpPageIndexList = Array(divider)
      .fill(0)
      .map((_, index) => {
        return _firstIndex + index <= pageLength ? _firstIndex + index : null;
      });
    return _tmpPageIndexList.filter((index) => Number.isInteger(index));
  }, [divider, pageLength, pageNumber]);

  return {
    pageNumber,
    isFirstPage,
    isLastPage,
    onClickNavButton,
    onClickPageNumber,
    pageIndexList,
  };
};

export default usePaginator;
