import './Titlecard.css'


export const TitleCard = ({ title, image }) => {
  return (
    <div className="titlecard">
      <img src={image} alt={title} />
      <h3>{title}</h3>
    </div>
  )
}

