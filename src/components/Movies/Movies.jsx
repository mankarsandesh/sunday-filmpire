import React from 'react'
// import { Box, CircleProgress, useMediaQuery, Typography } from '@mui/material'
import { useGetMoviesQuery } from '../../services/TMDB'
// import { useSelector } from 'react-redux'
const Movies = () => {
	const { data } = useGetMoviesQuery()
	console.log(data)
	return <div>Movies</div>
}

export default Movies
