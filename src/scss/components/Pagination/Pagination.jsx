import React from 'react';
import ReactPaginate from "react-paginate";
import s from './Pagination.module.scss';
const Pagination = ({ onChangePage }) => {
  return (
    <div>
      <ReactPaginate 
        className={s.root}
          breakLabel="..." 
          nextLabel=">" 
          previousLabel="<" 
          onPageChange={event => onChangePage(event.selected + 1)}
          pageRangeDisplayed={3}
          pageCount={3} 
          renderOnZeroPageCount={null} />
    </div>
  )
}

export default Pagination