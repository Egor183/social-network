import React, { useState } from "react";
import { PageStyled } from "../../../styledComponents/Paginator";
import { InputFileStyledGray } from "../../../styledComponents/ProfileInfo";
import { FlexContainerStyled } from "../../../styledComponents/Dialogs";

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
    <FlexContainerStyled align="center" >
      {portionNumber > 1 && (
        <InputFileStyledGray
          className="noMargin"
          width="50"
          as="button"
          onClick={() => setPortionNumber(portionNumber - 1)}
        >
          prev
        </InputFileStyledGray>
      )}
      {pages
        .filter((p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map((p) => {
          return (
            <PageStyled p={p} currentPage={currentPage} onClick={() => onPageChanged(p)} key={p}>
              {p}
            </PageStyled>
          );
        })}
      {portionNumber < portionCount && (
        <InputFileStyledGray
          className="noMargin"
          width="50"
          as="button"
          onClick={() => setPortionNumber(portionNumber + 1)}
        >
          next
        </InputFileStyledGray>
      )}
    </FlexContainerStyled>
  );
};

export default Paginator;
