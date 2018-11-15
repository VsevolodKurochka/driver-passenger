import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

// Bootstrap
import { Col } from 'reactstrap'

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
  const phone = props.data.phone
  const details = props.data.details

  return (
    

    <Col sm="6" md="4" className="item-column">
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Имя: {props.data.name}
          </Typography>
          <Typography variant="h6" component="h2" className={classes.subtitle}>
            {props.data.start} - {props.data.end}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Дата: {props.data.time}
          </Typography>
          {phone ? <Typography className={classes.phone} color="textSecondary">Телефон: <a href={"tel:" + props.data.phone}>{props.data.phone}</a></Typography> : ""}
          {details ? <Typography component="p">Примечания: {props.data.details}</Typography> : ""}
        </CardContent>
      </Card>
    </Col>
  )
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SimpleCard)