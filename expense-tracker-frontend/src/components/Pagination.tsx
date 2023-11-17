import {
  PaginationElement,
  PaginationNumberElement,
} from "../styles/custom.styled";
import "../App.css";

const Pagination = (props: any) => {
  const nextPage = () => {
    if (props.currentPage !== props.nPages)
      props.setCurrentPage(props.currentPage + 1);
  };
  const prevPage = () => {
    if (props.currentPage !== 1) props.setCurrentPage(props.currentPage - 1);
  };

  const pages: any = [];
  for (let i = 1; i <= props.nPages; i++) {
    pages.push(
      <PaginationNumberElement
        key={i}
        className={`page-item ${props.currentPage === i ? "active" : ""} `}
        onClick={() => props.setCurrentPage(i)}
        href="#"
      >
        {i}
      </PaginationNumberElement>
    );
  }

  return (
    <div className="App-container">
      <PaginationElement>
        <PaginationNumberElement onClick={prevPage} href="#">
          Previous
        </PaginationNumberElement>
        {pages}
        <PaginationNumberElement onClick={nextPage} href="#">
          Next
        </PaginationNumberElement>
      </PaginationElement>
    </div>
  );
};

export default Pagination;
