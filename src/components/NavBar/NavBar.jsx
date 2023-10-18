import React, { useState } from 'react'
import {
	AppBar,
	IconButton,
	Toolbar,
	Drawer,
	Button,
	Avatar,
	useMediaQuery,
} from '@mui/material'
import {
	Menu,
	AccountCircle,
	Brightness4,
	Brightness7,
} from '@mui/icons-material'
import { Link } from 'react-router-dom'
import UseStyles from './styles'
import { useTheme } from '@mui/material/styles'
import { SideBar } from '../../components'

const NavBar = () => {
	const classes = UseStyles()
	const [mobileOpen, setMobileOpen] = useState(false)
	const isMobile = useMediaQuery('(max-width:600px)')
	const theme = useTheme()
	const isAuthenticated = true

	return (
		<>
			<AppBar position="fixed">
				<Toolbar className={classes.toolbar}>
					{isMobile && (
						<IconButton
							color="inherit"
							aria-label="menu"
							style={{ outline: 'none' }}
							onClick={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
						>
							<Menu />
						</IconButton>
					)}
					<IconButton
						color="inherit"
						sx={{ ml: 1 }}
						onClick={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
					>
						{theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
					</IconButton>

					<div>
						{!isAuthenticated ? (
							<Button color="inhert" onClick={() => {}}>
								<>
									{' '}
									Login &nbsp; <AccountCircle />
								</>
							</Button>
						) : (
							<Button
								color="primary"
								component={Link}
								to={`/profile/:id`}
								className={classes.linkButton}
							>
								{!isMobile && 'My Movies'}
								<Avatar
									style={{ width: 30, height: 30 }}
									alt="Profile"
									src="https://avatars.githubusercontent.com/u/55863239?v=4"
								/>
							</Button>
						)}
					</div>
					{!isMobile && 'Search...'}
				</Toolbar>
			</AppBar>
			<div>
				<nav className={classes.drawer}>
					{isMobile ? (
						<Drawer
							varient="temporary"
							anchor="right"
							open={mobileOpen}
							onClose={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
							className={classes.drawerBackground}
							classes={{ paper: classes.drawerPaper }}
							modelprops={{ keepMounted: true }}
						>
							<SideBar setMobileOpen={setMobileOpen} />
						</Drawer>
					) : (
						<Drawer
							classes={{ paper: classes.drawerPaper }}
							variant="permanent"
							open
						>
							<SideBar setMobileOpen={setMobileOpen} />
						</Drawer>
					)}
				</nav>
			</div>
		</>
	)
}

export default NavBar
