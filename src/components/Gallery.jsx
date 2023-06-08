import { TitleCard } from './TitleCard';
import './Gallery.css'
import { useEffect, useState } from 'react';



export const Gallery = ({ type }) => {

  const [modalData, setModalData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [typeData, setTypeData] = useState([]);
  const [error, setError] = useState(false);
  const [allYears, setAllYears] = useState([])
  const [selectedYear, setSelectedYear] = useState("");
  
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
        const uniqueYears = [...new Set(years)]
        setAllYears(uniqueYears)
        data.entries = data.entries.filter((entry) => entry.programType === type && entry.releaseYear >= 2010).sort((a, b) => a.title.localeCompare(b.title)).slice(0, 20)
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
  };


  useEffect(() => {
    if (selectedYear) {
      getYears();
    } else {
      getData();
    }
  }, [selectedYear]);


  const handleOpenModal = (movie) => {
    setModalData(movie);
  }
  
  const handleCloseModal = () => {
    setModalData(null);
  }
  

  return (
    <div>
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
          error && <h1>Oops, something went wrong...</h1>
        }
        {
          isLoading ? <h1>Loading...</h1>
          : (
            typeData?.map((movie, index) => {
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
    </div>
  )
}

