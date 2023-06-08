import './Titlecard.css'


export const TitleCard = ({ title, image, onClick }) => {
  return (
    <div className="titlecard">
      <img src={image} alt={title} />
      <h3 onClick={ (e) => {
        e.stopPropagation();
        onClick();
      }}>{title}</h3>
    </div>
  )
}

