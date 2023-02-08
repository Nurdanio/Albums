import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getPhotos } from '../store/app'

import Preloader from '../components/Preloader'

export default function ImageList() {
  const { id } = useParams()
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const images = useSelector((state) => state.app.photos)
  const searchText = useSelector((state) => state.app.searchText)

  useEffect(() => {
    dispatch(getPhotos(id)).then((data) => {
      if (data.payload.length === 0) {
        navigate('/')
      }
    })
  }, [dispatch])

  if (!id || isNaN(+id)) {
    return <Navigate to="/" />
  }

  return images.length ? (
    <div className="grid grid-cols-3 gap-6">
      {images
        .filter((image) => image.title.includes(searchText))
        .map(({ id, title, url }) => (
          <div key={id} className="p-2">
            <img src={url} alt={title} className="rounded-lg" />
            <p className="text-center">
              {id}. {title}
            </p>
          </div>
        ))}
    </div>
  ) : (
    <Preloader />
  )
}
