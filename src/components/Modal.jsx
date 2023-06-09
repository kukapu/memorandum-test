import './Modal.css'

export const Modal = ({ modalData }) => {
  return (
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

