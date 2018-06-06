import React, { Component } from 'react';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import './css/heatFast.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import SvgIcon from '@material-ui/core/SvgIcon';
import Tooltip from '@material-ui/core/Tooltip';
import SendIcon from '@material-ui/icons/Send';
import TeaButton from './TeaButton';
import CoffeeButton from './CoffeeButton';
import MateButton from './MateButton';
import "./css/boton-calentar.css"


const styles = theme => ({
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
    inputTemp:{
        width:130
    },            
    root:{
        backgroundImage: "url(imagenes/fondo.png)",
        backgroundSize: 'cover',
        overflow: 'hidden',
    }
  });
  
class HeatFast extends Component {

    constructor(props){
        super(props);
        this.state={
            temperatura:""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
    };


    render() {
    const { classes } = this.props;
    return (
        
        <Grid container justify="center" align="center" spacing={16}>
            <Grid item xs={12}>
                <div className="heatFast">
                    <h1> RoboPava </h1>
                </div>
            </Grid>
            <Grid item xs={4}>              
                <TeaButton/>
            </Grid>
            <Grid item xs={4}>
                <CoffeeButton/>
            </Grid>
            <Grid item xs={4}>
                <MateButton/>
            </Grid>
            <Grid item xs={12} >
               <div className="espacio"> 
                <ValidatorForm
                    ref="form"
                    onSubmit={this.handleSubmit}
                >
                <TextValidator
                    label="Temperatura"
                    onChange={this.handleChange('temperatura')}
                    name="temperatura"
                    value={this.state.temperatura}
                    className={classes.inputTemp}
                    validators={['required','minNumber:50','maxNumber:100', 'matchRegexp:^[0-9]{1,3}$']}
                    errorMessages={['El campo es obligatorio','La temperatura mínima es 50°C','La temperatura máxima es 100°C']}
                    InputProps={{
                        startAdornment:(
                            <InputAdornment position="start">
                                <i class="fas fa-thermometer-quarter"></i>
                            </InputAdornment>
                        ),
                        endAdornment: (
                          <InputAdornment position="end">
                            °C
                          </InputAdornment>
                        )
                  }}
                />
                <Grid item xs={12} >
                    <br/>
                    <Tooltip title="¡Calentar!">
                        <Button size="medium" className="boton-calentar" variant="fab" >
                            <i class="fab fa-hotjar fa-lg"></i>
                        </Button> 
                    </Tooltip>
                </Grid>
                </ValidatorForm>
                </div>
            </Grid>
          
        </Grid>
        );
    }
}
HeatFast.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles) (HeatFast);
