import React from 'react';
import ReactPaginate from "react-paginate";
import s from '../../scss/components/Pagination.module.scss';

type PaginationProps = {
  currentPage: number;
  onChangePage: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({ currentPage, onChangePage }) => 
      <ReactPaginate 
        className={s.root}
          breakLabel="..." 
          nextLabel=">" 
          previousLabel="<" 
          onPageChange={event => onChangePage(event.selected + 1)}
          pageRangeDisplayed={3}
          pageCount={3}
          forcePage={currentPage - 1} 
          renderOnZeroPageCount={null} />

export default Pagination;