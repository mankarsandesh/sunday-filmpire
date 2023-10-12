import React from 'react'
import { CssBaseline } from '@mui/material'
import { Switch, Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import {
	Actors,
	MovieInformation,
	Movies,
	NavBar,
	Profile,
} from '../components'
import useStyles from '../styles'

const App = () => {
	const classes = useStyles()
	return (
		<div className={classes.root}>
			<CssBaseline />
			<NavBar />
			<main className={classes.content}>
				<div className={classes.toolbar} />
				<BrowserRouter>
					<Switch>
						<Route exact path="/">
							<h1>Home</h1>
						</Route>
						<Route exact path="/movies/:id">
							Movies
						</Route>
						<Route exact path="/actors/:id">
							<h1>actors</h1>
						</Route>

						<Route exact path="/profile/:id">
							Profile
						</Route>
					</Switch>
				</BrowserRouter>
			</main>
		</div>
	)
}

export default App
