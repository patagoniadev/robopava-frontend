import React, { Component } from 'react';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import './css/heatFast.css';
import PropTypes from 'prop-types';
import axios from 'axios';
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
            tempPersonalizada:"0",
            tempPredefinida:"0"
        }
        this.handleChange = this.handleChange.bind(this);            
        this.enviarTempPersonalizada = this.enviarTempPersonalizada.bind(this);
        this.enviarTempPredefinida = this.enviarTempPredefinida.bind(this);
        this.handleTempBoton=this.handleTempBoton.bind(this);
        this.enviar = this.enviar.bind(this);
    }


    enviar(data){
        axios({
        method: 'POST',
        url:"http://192.168.43.51/v1/pavas/calentar",
        data: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
        })
        .then(function(response){
            console.log(response);
        }).catch(()=>{
            console.log("inaccesible")
        });
    }

    enviarTempPersonalizada(){
        let data = {
            temperatura:this.state.tempPersonalizada
        }
        this.enviar(data);
    }

    enviarTempPredefinida(temp){
        let data = {
            temperatura:temp
        }
        this.enviar(data);
    }

    handleTempBoton(temp) {
        console.log(temp);
        this.setState(
            {
                tempPredefinida:temp
            }
        )
        this.enviarTempPredefinida(temp);
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
                <TeaButton temperatura={ (temp) => this.handleTempBoton(temp) }/>
            </Grid>
            <Grid item xs={4}>
                <CoffeeButton temperatura={ (temp) => this.handleTempBoton(temp) }/>
            </Grid>
            <Grid item xs={4}>
                <MateButton temperatura={ (temp) => this.handleTempBoton(temp) }/>
            </Grid>
            <Grid item xs={12} >
               <div className="espacio"> 
                <ValidatorForm
                    ref="form"
                    onSubmit={this.enviarTempPersonalizada}
                >
                <TextValidator
                    label="Temperatura"
                    onChange={this.handleChange('tempPersonalizada')}
                    name="tempPersonalizada"
                    value={this.state.tempPersonalizada}
                    className={classes.inputTemp}
                    validators={['required','minNumber:50','maxNumber:100', 'matchRegexp:^[0-9]{1,3}$']}
                    errorMessages={['El campo es obligatorio','La temperatura mínima es 50°C','La temperatura máxima es 100°C']}
                    InputProps={{
                        startAdornment:(
                            <InputAdornment position="start">
                                <i className="fas fa-thermometer-quarter"></i>
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
                        <Button 
                            size="medium"
                            className="boton-calentar"
                            type="submit"
                            variant="fab"
                        >
                            <i className="fab fa-hotjar fa-lg"></i>
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
