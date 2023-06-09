import { useNavigate } from "react-router-dom";
import './Year.css'

export const Year = ({ allYears, selectedYear, setSelectedYear, type, setCurrentPage }) => {

  const navigate = useNavigate();

  const onYearChange = (e) => {
    setSelectedYear(e.target.value);
    setCurrentPage(1);
    navigate(`/${type}/1`)
  };

  return (
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
  )
}

