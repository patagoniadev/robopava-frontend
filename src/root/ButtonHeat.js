import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

function ButtonHeat(props) {
  const { classes } = props;
  return (
    <div>
      <Grid container >
        <Grid item ms={12}>
         <Button size="medium" variant="fab" className={classes.button}><i class="fas fa-thermometer-quarter"></i></Button> 
        </Grid>
      </Grid>
    </div>
  );
}

ButtonHeat.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles) (ButtonHeat);