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
		},
	},
})
export const { selectGenerOrCategory } = generOrCategory.actions
export default generOrCategory.reducer
