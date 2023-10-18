import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const tmdbApiKey = process.env.REACT_APP_TMDB_KEY
// const page = 1
export const tmdbApi = createApi({
	reducerPath: 'tmdbApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.themoviedb.org/3',
	}),
	endpoints: (builder) => ({
		getGenres: builder.query({
			query: () => `genre/movie/list?api_key=${tmdbApiKey}`,
		}),
		getMovies: builder.query({
			query: ({ generIdOrCategoryName, page }) => {
				console.log(generIdOrCategoryName, 'name')
				console.log(page, 'page')
				// Get Movies by category
				if (
					generIdOrCategoryName &&
					typeof generIdOrCategoryName === 'string'
				) {
					return `movie/${generIdOrCategoryName}&page=${page}&api_key=${tmdbApiKey}`
				}
				// Get Movies by genre
				if (
					generIdOrCategoryName &&
					typeof generIdOrCategoryName === 'number'
				) {
					return `discover/movie?with_genres=${generIdOrCategoryName}&page=${page}&api_key=${tmdbApiKey}`
				}
				// Get Popular Movies
				return `movie/popular?page=${page}&api_key=${tmdbApiKey}`
			},
		}),
	}),
})

export const { useGetGenresQuery, useGetMoviesQuery } = tmdbApi
