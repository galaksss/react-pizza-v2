import React from 'react';
import ReactPaginate from "react-paginate";

type PaginationProps = {
  currentPage: number;
  onChangePage: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({ currentPage, onChangePage }) =>
      <ReactPaginate
        className="pagination"
          breakLabel="..."
          nextLabel=">"
          previousLabel="<"
          onPageChange={event => onChangePage(event.selected + 1)}
          pageRangeDisplayed={3}
          pageCount={3}
          forcePage={currentPage - 1}
          activeClassName="selected"
          renderOnZeroPageCount={null} />

export default Pagination;