import React from "react";
import { PaginationElement, PaginationButton } from "../styles/custom.styled";
import "../App.css";

const Pagination = (props: any) => {
  const { currentPage, nPages, setCurrentPage } = props;
  const onNext = () => {
    if (currentPage < nPages) setCurrentPage(currentPage + 1);
  };
  const onPrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const pages: React.ReactNode[] = [];
  for (let i = 1; i <= nPages; i++) {
    pages.push(
      <PaginationButton
        key={i}
        type="button"
        $active={currentPage === i}
        onClick={() => setCurrentPage(i)}
        aria-current={currentPage === i ? "page" : undefined}
      >
        {i}
      </PaginationButton>
    );
  }

  if (nPages <= 1) return null;

  return (
    <div className="App-container">
      <PaginationElement>
        <PaginationButton
          type="button"
          onClick={onPrev}
          disabled={currentPage <= 1}
          aria-label="Previous page"
        >
          Previous
        </PaginationButton>
        {pages}
        <PaginationButton
          type="button"
          onClick={onNext}
          disabled={currentPage >= nPages}
          aria-label="Next page"
        >
          Next
        </PaginationButton>
      </PaginationElement>
    </div>
  );
};

export default Pagination;
