import './Home.css'
import { Card } from './Card'

export const Home = () => {
  return (
    <div className='card-container'>
      <Card title='Movies' />
      <Card title='Series' />
    </div>
  )
}

