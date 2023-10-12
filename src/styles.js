import { makeStyles } from '@mui/styles'

export default makeStyles(() => ({
	root: {
		display: 'flex',
		height: '100%',
		paddingTop: '50px',
	},
	toolbar: {
		height: '20px',
	},
	content: {
		flexGrow: 1,
		padding: '2em',
	},
}))
