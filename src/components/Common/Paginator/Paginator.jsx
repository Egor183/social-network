import React, { useState } from "react";
import styles from "./Paginator.module.css";
import classnames from "classnames/bind";




let Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize }) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let rightPortionPageNumber = portionNumber * portionSize;
  let leftPortionPageNumber = rightPortionPageNumber - portionSize + 1;




  return (
    <div>
      {portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)}>prev</button>}
      {pages
        .filter((p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map((p) => {
          return (
            <span
              className={classnames({ [styles.selectedPage] : currentPage === p} ,styles.page)}
              onClick={() => onPageChanged(p)}
              key={p}
            >
              {p}
            </span>
          );
        })}
      {portionNumber < portionCount && <button onClick={() => setPortionNumber(portionNumber + 1)}>next</button>}
    </div>
  );
};

export default Paginator;
