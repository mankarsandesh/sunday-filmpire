import { makeStyles } from '@mui/styles'

export default makeStyles((theme) => ({
	movie: {
		padding: '10px',
	},
	title: {
		color: theme.palette.text.primary,
		textOverflow: 'ellipsis',
		width: '230px',
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		marginTop: '10px',
		marginBottom: '0px',
		textAlign: 'center',
	},
	image: {
		borderRadius: '20px',
		height: '300px',
		marginBottom: '10px',
		'&:hover': {
			transform: 'scale(1.05)',
		},
	},
	links: {
		textDecoration: 'none',
		alignItems: 'center',
		textAlign: 'center',
		fontWeight: 'bold',
		[theme.breakpoints.down('sm')]: {
			display: 'flex',
			flexDirection: 'column',
		},
		'&:hover': {
			cursor: 'pointer',
		},
	},
}))
