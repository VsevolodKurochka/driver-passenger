import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// Bootstrap
import { Col } from 'reactstrap';

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function SimpleCard(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Col sm="6" md="4">
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Имя: {props.data.name}
          </Typography>
          <Typography variant="h5" component="h2">
            {props.data.start} - {props.data.end}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Дата: {props.data.time}
          </Typography>
          <Typography component="p">
            Примечания: {props.data.details}
            <br/>
          </Typography>
        </CardContent>
      </Card>
    </Col>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);