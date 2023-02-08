import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { clearPhotos, getAlbums } from '../store/app'
import Preloader from '../components/Preloader'

export default function AlbumList() {
  const dispatch = useDispatch()
  const albums = useSelector((state) => state.app.albums)
  const searchText = useSelector((state) => state.app.searchText)

  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getAlbums())
    dispatch(clearPhotos())
  }, [])

  return albums ? (
    <div className="grid grid-cols-3 gap-6">
      {albums
        .filter((album) => album.title.includes(searchText))
        .map(({ id, title }) => (
          <div
            key={id}
            onClick={() => {
              navigate(`/${id}`)
            }}
            className="flex capitalize h-20 justify-center items-center text-center border-2 rounded-lg border-sky-500 hover:bg-gray-200 cursor-pointer"
          >
            <p>{title}</p>
          </div>
        ))}
    </div>
  ) : (
    <p>
      <Preloader />
    </p>
  )
}
