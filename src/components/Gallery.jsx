import './Gallery.css'
import { TitleCard } from './TitleCard';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Pages } from './Pages';
import { Modal } from './Modal';
import { Year } from './Year';



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
          if (entry.programType === type && entry.releaseYear >= 1900) {
            return entry.releaseYear
          }
          return null
        })

        const uniqueYears = [...new Set(years)].sort((a, b) => b - a).filter(year => year !== null)
        setAllYears(uniqueYears)

        if(selectedYear){
          data.entries = data.entries.filter((entry) => entry.programType === type && entry.releaseYear == selectedYear).sort((a, b) => a.title.localeCompare(b.title)).slice(0, 20)
          setTypeData(data.entries)
        } else {
          data.entries = data.entries.filter((entry) => entry.programType === type && entry.releaseYear >= 2010).sort((a, b) => a.title.localeCompare(b.title))
          setTypeData(data.entries)
        }
      })
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false))
  }
  
  useEffect(() => {
    getData();
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

  return (
    
    <section className='gallery'>
      <Year 
        allYears={allYears} s
        electedYear={selectedYear} 
        setSelectedYear={setSelectedYear} 
        setCurrentPage={setCurrentPage} 
        type={type} 
      />
      <div className='titles-gallery' onClick={ handleCloseModal } >
        
        {
          modalData && <Modal modalData={ modalData } />
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
        !isLoading && <Pages
                        itemsPerPage={itemsPerPage}
                        setItemsPerPage={setItemsPerPage}
                        typeData={typeData}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        type={type}
                      />
      }
    </section>
  )
}

