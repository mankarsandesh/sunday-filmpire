import React, { useState, useEffect } from 'react'
import { TextField, InputAdornment } from '@mui/material'
import { Search as SearchIcon } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { searchMovie } from '../../features/currentGenreOrCategory'

import useStyles from './styles'

const Search = () => {
	const classes = useStyles()
	const [query, setQuery] = useState('')
	const dispatch = useDispatch()

	const handleKeyPress = (event) => {
		console.log(event.key)
		if (event.key === 'Enter') {
			dispatch(searchMovie(query))
		}
	}
	return (
		<div className={classes.searchContainer}>
			<TextField
				onKeyPress={handleKeyPress}
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				varient="standard"
				InputProps={{
					className: classes.input,
					startAdornment: (
						<InputAdornment position="start">
							<SearchIcon />
						</InputAdornment>
					),
				}}
			></TextField>
		</div>
	)
}

export default Search
