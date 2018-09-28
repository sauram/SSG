import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
  render() {
    return(
      <Grid>
        <Cell col={4}>
          <h2>{this.props.startYear} - {this.props.endYear}</h2>
        </Cell>
        <Cell col={8}>
          <h3 style={{marginTop:'0px'}}>{this.props.Description}</h3>
          <h4>{this.props.schoolName}</h4>
          <h4> CGPA /Percentage : {this.props.CG}</h4>
        </Cell>
      </Grid>
    )
  }
}

export default Education;
