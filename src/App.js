import { Route, Routes } from 'react-router-dom'
import NotFound from './routes/NotFound'
import AlbumList from './routes/AlbumList'
import ImageList from './routes/ImageList'
import NavigationBar from './components/NavigationBar'

export default function App() {
  return (
    <div className="container px-8 mx-auto">
      <NavigationBar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<AlbumList />} />
        <Route path="/:id" element={<ImageList />} />
      </Routes>
    </div>
  )
}
