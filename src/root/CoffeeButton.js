import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';

const styles = {
  button: {
    height:"105%",
    width:"40%",
    borderRadius:30,
    backgroundColor:"#d52a04"
  },

};

function CoffeeButton(props) {
  return (
      <Button 
        size="medium"
        variant="raised"
        color="primary"
        style={styles.button}
      >
        <img style={styles.icono} src="imagenes/coffee.svg"/>
      </Button> 
  );
}



export default CoffeeButton;