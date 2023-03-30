import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const MusicTrackItem = props => {
  const {trackDetails, onDeleteTrack} = props
  const {name, id, genre, duration, imageUrl} = trackDetails

  const onClickDelete = () => {
    onDeleteTrack(id)
  }

  return (
    <li className="each-item">
      <div className="cont-1">
        <img src={imageUrl} alt="track" className="image" />
        <div className="cont-2">
          <p className="name">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="cont-3">
        <p className="new">{duration}</p>
        <button
          onClick={onClickDelete}
          data-testid="delete"
          className="button"
          type="button"
        >
          <AiOutlineDelete className="delete" />
        </button>
      </div>
    </li>
  )
}

export default MusicTrackItem
