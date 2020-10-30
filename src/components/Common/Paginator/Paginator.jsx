import React, { useState } from "react";
import styles from "./Paginator.module.css";
import cx from "classnames/bind";
import rightArrow from "./../../../assets/images/right.png";
import leftArrow from "./../../../assets/images/left.png";

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
    <div className={styles.paginator}>
      {portionNumber > 1 && (
        <button className={styles.arrowButton} onClick={() => setPortionNumber(portionNumber - 1)}>
          <img className={styles.arrow} src={leftArrow} alt="next" /> prev
        </button>
      )}
      {pages
        .filter((p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map((p) => {
          return (
            <span
              className={cx({ [styles.selectedPage]: currentPage === p }, styles.page)}
              onClick={() => onPageChanged(p)}
              key={p}
            >
              {p}
            </span>
          );
        })}
      {portionNumber < portionCount && (
        <button className={styles.arrowButton} onClick={() => setPortionNumber(portionNumber + 1)}>
          next
          <img className={styles.arrow} src={rightArrow} alt="next" />{" "}
        </button>
      )}
    </div>
  );
};

export default Paginator;
