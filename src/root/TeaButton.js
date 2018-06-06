import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import "./css/boton-infusion.css"

const styles = {
  button: {
    // margin:,
    height:"105%",
    width:"40%",
    borderRadius:30,
    backgroundColor:"#d52a04"
    // padding:50,
  },
  // icono:{
  //   marginLeft:"15%",
  //   padding:"10%" ,
  // }

};

function TeaButton(props) {
  // const { classes } = props;
  return (
    // <div>
      <Button 
        size="medium"
        variant="raised"
        color="primary"
        style={styles.button}
        className="boton-infusion"
      >
        <img style={styles.icono} src="imagenes/tea.svg"/>
      </Button> 
    // </div>
  );
}

// TeaButton.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default TeaButton;