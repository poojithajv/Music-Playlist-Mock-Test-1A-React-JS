import {AiOutlineDelete} from 'react-icons/ai'

import './index.css'

const PlaylistItem = props => {
  const {playlistDetails, onDeleteSong} = props
  const {id, imageUrl, name, genre, duration} = playlistDetails
  const onClickDeleteBtn = () => {
    onDeleteSong(id)
  }
  return (
    <li className="playlist-item">
      <div className="playlist-img-container">
        <img className="playList-img" src={imageUrl} alt="track" />
        <div>
          <p className="song-name">{name}</p>
          <p className="song-type">{genre}</p>
        </div>
      </div>
      <div className="duration-and-button-container">
        <p className="duration">{duration}</p>
        <button
          className="delete-button"
          type="button"
          onClick={onClickDeleteBtn}
          data-testid="delete"
        >
          <AiOutlineDelete size="20" />
        </button>
      </div>
    </li>
  )
}
export default PlaylistItem
