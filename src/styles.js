import { makeStyles } from '@mui/styles'

export default makeStyles(() => ({
	root: {
		display: 'flex',
		height: '100%',
	},
	toolbar: {
		height: '20px',
	},
	content: {
		flexGrow: 1,
		padding: '2em',
	},
}))
