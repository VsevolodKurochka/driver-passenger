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
  },
}

function SimpleCard(props) {
  const { classes } = props
  const phone = props.phone
  const details = props.details

  return (
    <div className="col-sm-6 item-column">
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {props.name}
          </Typography>
          <Typography variant="h6" component="h2" className={classes.subtitle}>
            {props.start} - {props.end}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Время: {props.time}
          </Typography>
          {phone ? <Typography className={classes.phone} color="textSecondary">Телефон: <a href={"tel:" + phone}>{phone}</a></Typography> : ""}
          {details ? <Typography component="p">Примечания: {details}</Typography> : ""}
        </CardContent>
      </Card>
    </div>
  )
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SimpleCard)