import React from 'react'
import { Box, CircularProgress, useMediaQuery, Typography } from '@mui/material'
import { useGetMoviesQuery } from '../../services/TMDB'
// import { useSelector } from 'react-redux'
import { MovieList } from '../'

const Movies = () => {
	const { data, error, isFeching } = useGetMoviesQuery()
	if (isFeching) {
		return (
			<Box display="flex" justifyContent="center">
				<CircularProgress size="4rem" />
			</Box>
		)
	}
	if (!data?.results.length) {
		return (
			<Box display="flex" justifyContent="center">
				<Typography variant="h3" color="textSecondary">
					No movies that match that name were found
					<br />
					Please search for something else.
				</Typography>
			</Box>
		)
	}
	if (error) return 'An error has occurred: ' + error.message
	return (
		<div>
			<MovieList movies={data} />
		</div>
	)
}

export default Movies
