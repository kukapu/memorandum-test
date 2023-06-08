import data from '../../data/sample.json';
import { TitleCard } from './TitleCard';
import './Movies.css'


export const Movies = () => {

  const movieData = data.entries.filter(entry => {
    return entry.programType === 'movie' && entry.releaseYear >= 2010;
  }).sort((a, b) => {
    return a.title.localeCompare(b.title);
  }).slice(0, 19);

  return (
    <div className='titles-gallery'>
      {
        movieData.map((movie, index) => {
          return (
            <TitleCard
              key={index}
              title={movie.title}
              image={movie.images['Poster Art'].url}
            />
          )
        })
      }
    </div>
  )
}

