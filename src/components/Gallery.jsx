import { TitleCard } from './TitleCard';
import './Gallery.css'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';



export const Gallery = ({ type }) => {

  const [modalData, setModalData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [typeData, setTypeData] = useState([]);
  const [error, setError] = useState(false);
  const [allYears, setAllYears] = useState([])
  const [selectedYear, setSelectedYear] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const { page } = useParams();
  const navigate = useNavigate();
  
  const getData = async () => {
    setIsLoading(true);
    await fetch('../../data/sample.json')
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        setError(true)
        throw new Error(`HTTP error! status: ${response.status}`)
      })
      .then(data => {
        const years = data.entries.map(entry => {
          if (entry.programType === type) {
            return entry.releaseYear
          }
        })
        const uniqueYears = [...new Set(years)].sort((a, b) => b - a)
        setAllYears(uniqueYears)
        data.entries = data.entries.filter((entry) => entry.programType === type && entry.releaseYear >= 2010).sort((a, b) => a.title.localeCompare(b.title))
        setTypeData(data.entries)
      })
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false))
  }

  const getYears = async () => {
    setIsLoading(true);
    await fetch('../../data/sample.json')
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        setError(true)
        throw new Error(`HTTP error! status: ${response.status}`)
      })
      .then(data => {
        data.entries = data.entries.filter((entry) => entry.programType === type && entry.releaseYear == selectedYear).sort((a, b) => a.title.localeCompare(b.title)).slice(0, 20)
        setTypeData(data.entries)
      })
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false))
  }
  
  const onYearChange = (e) => {
    setSelectedYear(e.target.value);
    setCurrentPage(1);
    navigate(`/${type}/1`)
  };


  useEffect(() => {
    if (selectedYear) {
      getYears();
    } else {
      getData();
    }
  }, [selectedYear]);

  useEffect(() => {
    setCurrentPage(Number(page) || 1);  
  }, [page]);

  const handleOpenModal = (movie) => {
    setModalData(movie);
  }
  
  const handleCloseModal = () => {
    setModalData(null);
  }

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
    
    <div className='gallery'>
      <div className='filter-year-container'>
        <label htmlFor="year">Busqueda por año:  </label>
        <select className='filter-year' name="year" value={selectedYear} onChange={ onYearChange }>
          <option value=""  disabled>Seleccione año</option>
          {allYears.map((year, index) => (
            <option key={index} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <div className='titles-gallery' onClick={ handleCloseModal } >
        
        {
          modalData && (
            <div className='modal-backdrop'>
              
              <div className='modal'>
                <div className='modal-content'>
                  <img src={modalData.images['Poster Art'].url} alt={modalData.title} />
                  <div className='modal-info'>
                    <h2>{modalData.title}<span> ({modalData.releaseYear})</span></h2>
                    <p>{modalData.description}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        }
        {
          error && <p>Oops, something went wrong...</p>
        }
        {
          isLoading ? <p>Loading...</p>
          : (
            typeData?.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((movie, index) => {
              return (
                <TitleCard
                  key={index}
                  title={movie.title}
                  image={movie.images['Poster Art'].url}
                  onClick={() => handleOpenModal(movie)}
                />
              )
            })
          )
        }
      </div>
      {
        !isLoading && (
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
    </div>
  )
}

