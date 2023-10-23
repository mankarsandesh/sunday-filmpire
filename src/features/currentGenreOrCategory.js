import { createSlice } from '@reduxjs/toolkit'

export const generOrCategory = createSlice({
	name: 'generOrCategory',
	initialState: {
		generIdOrCategoryName: '',
		page: '',
		serarchQuery: '',
	},
	reducers: {
		selectGenerOrCategory: (state, action) => {
			state.generIdOrCategoryName = action.payload
			state.serarchQuery = ''
		},
		searchMovie: (state, action) => {
			state.serarchQuery = action.payload
		},
	},
})
export const { selectGenerOrCategory, searchMovie } = generOrCategory.actions
export default generOrCategory.reducer
