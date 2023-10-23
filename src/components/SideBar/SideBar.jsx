import React, { useEffect } from 'react'
import {
	Divider,
	List,
	ListItemText,
	ListItem,
	ListSubheader,
	CircularProgress,
	Box,
	ListItemIcon,
} from '@mui/material'
import { Link } from 'react-router-dom'
import { useTheme } from '@mui/material/styles'
import useStyles from './styles'
import { selectGenerOrCategory } from '../../features/currentGenreOrCategory'
import { useGetGenresQuery } from '../../services/TMDB'
import genreIcons from '../../assets/genres'
import { useDispatch, useSelector } from 'react-redux'

const redLogo =
	'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png'

const blueLogo =
	'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png'
const category = [
	{
		name: 'Popular',
		value: 'popular',
	},
	{
		name: 'Top Rated',
		value: 'top_rated',
	},
	{
		name: 'UpComing',
		value: 'upcoming',
	},
]

const SideBar = () => {
	const theme = useTheme()
	const classes = useStyles()
	const { data, isFetching } = useGetGenresQuery()
	const dispatch = useDispatch()

	return (
		<>
			<link to="/" className={classes.imageLink} />
			<img
				className={classes.image}
				src={theme.palette.mode === 'dark' ? blueLogo : redLogo}
				alt="logo"
			/>
			<Divider />
			<List
				component="nav"
				aria-labelledby="nested-list-subheader"
				subheader={
					<ListSubheader component="div" id="nested-list-subheader">
						Category
					</ListSubheader>
				}
			>
				{category.map(({ name, value }) => (
					<Link key={name} className={classes.links} to="/">
						<ListItem
							onClick={() => dispatch(selectGenerOrCategory(value))}
							button
						>
							<ListItemIcon>
								<img
									src={genreIcons[name.toLowerCase()]}
									alt={name}
									className={classes.genreIcons}
									height={30}
								/>
							</ListItemIcon>
							<ListItemText primary={name} />
						</ListItem>
					</Link>
				))}
			</List>
			<Divider />
			<List>
				<ListSubheader>Genres</ListSubheader>
				{isFetching ? (
					<Box display="flex" justifyContent="center">
						<CircularProgress />
					</Box>
				) : (
					data.genres.map(({ name, id }) => (
						<Link key={name} className={classes.links} to={`/`}>
							<ListItem onClick={() => dispatch(selectGenerOrCategory(id))}>
								<ListItemIcon>
									<img
										src={genreIcons[name.toLowerCase()]}
										alt={name}
										className={classes.genreIcons}
										height={30}
									/>
								</ListItemIcon>
								<ListItemText primary={name} />
							</ListItem>
						</Link>
					))
				)}
			</List>
		</>
	)
}

export default SideBar
