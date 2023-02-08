import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getAlbums = createAsyncThunk('albums', async function () {
  return await (
    await fetch('https://jsonplaceholder.typicode.com/albums')
  ).json()
})

export const getPhotos = createAsyncThunk('photos', async function (albumId) {
  return await (
    await fetch(
      `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
    )
  ).json()
})

const initialState = {
  albums: [],
  photos: [],
  searchText: '',
}

const app = createSlice({
  name: 'app',
  initialState,
  reducers: {
    clearPhotos(state) {
      state.photos = []
    },
    setSearchText(state, action) {
      state.searchText = action.payload
    },
  },
  extraReducers: {
    [getAlbums.fulfilled]: (state, action) => {
      state.albums = [...action.payload]
    },
    [getPhotos.fulfilled]: (state, action) => {
      state.photos = [...action.payload]
    },
  },
})

export const { setSearchText, clearPhotos } = app.actions
export default app.reducer
