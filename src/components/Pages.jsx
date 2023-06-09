import { useNavigate } from "react-router-dom";
import './Pages.css'

export const Pages = ({ itemsPerPage, typeData, currentPage, setCurrentPage, setItemsPerPage, type }) => {

  const navigate = useNavigate()

  const getTotalPages = () => {
    return Math.ceil(typeData.length / itemsPerPage);
  };

  const handleChangePage = (newPage) => {
    setCurrentPage(newPage);
    navigate(`/${type}/${newPage}`)
  };

  const handleChangeItemsPerPage = (e) => {
    setItemsPerPage(e.target.value);
    setCurrentPage(1); 
  };

  return (
    <div className='gallery-pages'>
      <div className='gallery-pages-none'></div>
      <div className='gallery-pages-nav'>
        <button onClick={() => handleChangePage(currentPage - 1)} disabled={currentPage === 1}>
          Prev
        </button>
        <span> Page { currentPage} of {getTotalPages() } </span>
        <button onClick={() => handleChangePage(currentPage + 1)} disabled={currentPage === getTotalPages()}>
          Next
        </button>
      </div>
      <div className='gallery-pages-pp'>
        <label>Items per page: </label>
        <select value={itemsPerPage} onChange={handleChangeItemsPerPage}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>
  )
}

