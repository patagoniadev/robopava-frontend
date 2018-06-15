import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import "./css/boton-infusion.css";

const styles = {
  button: {
    height:"105%",
    width:"40%",
    borderRadius:30,
    backgroundColor:"#d52a04" 
  },


};

class MateButton extends Component{

  constructor(props) {
    super(props);
    this.state = {
      temp:"75"
    }
    this.handleTemperatura = this.handleTemperatura.bind(this)
  }

  handleTemperatura(){
    this.props.temperatura(this.state.temp)
  }

  render(){
    return (
        <Button 
          size="medium"
          variant="raised"
          style={styles.button}
          className="boton-infusion"
          onClick = {()=> this.handleTemperatura() }
        >
          <img style={styles.icono} src="imagenes/mate.svg"/>
        </Button> 
    );
  }
}

export default MateButton;