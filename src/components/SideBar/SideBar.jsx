import React, { useEffect } from 'react'
import {
	Divider,
	List,
	ListItemText,
	ListItem,
	ListSubheader,
	ListItemButton,
	Avatar,
	Typography,
	Box,
	IconButton,
	Drawer,
	useMediaQuery,
} from '@mui/material'
import { Link } from 'react-router-dom'
import { useTheme } from '@mui/material/styles'
import useStyles from './styles'
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
		name: 'UpComming',
		value: 'upcoming',
	},
]
const genres = [
	{
		name: 'Comedy',
		value: 'comedy',
	},
	{
		name: 'Action',
		value: 'action',
	},
	{
		name: 'Horror',
		value: 'horror',
	},
	{
		name: 'Animation',
		value: 'animation',
	},
]

const SideBar = () => {
	const theme = useTheme()
	const classes = useStyles()

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
				{category.map((item) => (
					<ListItem disablePadding>
						<ListItemButton>
							<ListItemText primary={item.name} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
			<Divider />
			<List
				component="nav"
				aria-labelledby="nested-list-subheader"
				subheader={
					<ListSubheader component="div" id="nested-list-subheader">
						Genres
					</ListSubheader>
				}
			>
				{genres.map((item) => (
					<ListItem disablePadding>
						<ListItemButton>
							<ListItemText primary={item.name} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</>
	)
}

export default SideBar
