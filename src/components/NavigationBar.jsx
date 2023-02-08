import { Link, useMatch } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchText } from '../store/app'
import { MdArrowBack, MdSearch } from 'react-icons/md'

export default function NavigationBar() {
  const dispatch = useDispatch()
  const searchText = useSelector((state) => state.app.searchText)

  const isHome = useMatch('/')

  return (
    <div
      className={`flex items-center mb-4 py-4 ${
        !isHome ? 'justify-between' : 'justify-end'
      } sticky top-0 bg-white border-b border-solid border-gray`}
    >
      {!isHome && (
        <Link to="/" className="text-black" aria-current="page">
          <MdArrowBack />
        </Link>
      )}

      <div className="flex items-center h-12 rounded-xl focus-within:shadow-lg border border-solid text-gray-700">
        <MdSearch className="mx-2" />
        <input
          className="w-80 outline-none text-sm"
          type="text"
          id="search"
          placeholder="Search something..."
          value={searchText}
          onChange={(e) => dispatch(setSearchText(e.target.value))}
        />
      </div>
    </div>
  )
}
