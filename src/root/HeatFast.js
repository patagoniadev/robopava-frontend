import React, { Component } from 'react';
import './css/heatFast.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import InputTemperature from './InputTemperature';
import ButtonHeat from './ButtonHeat';

const styles = theme => ({
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    }
  });
class HeatFast extends Component {
    constructor(props){
        super(props);
        this.state={
            temperatura:"0"
        }
    }
    render() {
    const { classes } = this.props;
    return (
        <Grid container spacing={16}>
            <Grid item xs={12}>
                <div className="heatFast">
                    <h1> RoboPava rápida </h1>
                </div>
            </Grid>
            <Grid item xs={12}>
                <InputTemperature value={this.state.temperatura}/>
              
                <ButtonHeat/>
            </Grid>
        </Grid>
        );
    }
}
HeatFast.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles) (HeatFast);
