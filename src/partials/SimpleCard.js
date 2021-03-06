import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const styles = {
	card: {
		minWidth: 275,
	},
	title: {
		fontSize: 14,
	},
	subtitle: {
		lineHeight: 1.2,
		marginBottom: 15
	},
	pos: {
		marginBottom: 12,
	},
	phone: {
		marginBottom: 12,
	}
}

function SimpleCard(props) {
	const { classes, name, start, end, day, time, phone, details } = props

	return (
		<Card className={classes.card}>
			<CardContent>
				<Typography className={classes.title} color="textSecondary" gutterBottom>
					{name}
				</Typography>
				<Typography variant="h6" component="h2" className={classes.subtitle}>
					{start} - {end}
				</Typography>
				<Typography className={classes.pos} color="textSecondary">
					{day} в {time}
				</Typography>
				{phone ? <Typography className={classes.phone} color="textSecondary"><a href={"tel:" + phone}>{phone}</a></Typography> : ""}
				{details ? <Typography component="p">{details}</Typography> : ""}
			</CardContent>
		</Card>
	)
}

SimpleCard.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SimpleCard)