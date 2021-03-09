import React, { Component } from 'react';

export default class Matrix extends Component {
  
  genRow = (vals) => {
    return vals.map(val => <div className="cell"></div>) // replace me and render a cell component instead!
  }
  
  genMatrix = () => {
    return this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  }
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
}

const pattern2 = []
for (let i = 0; i < 10; i++) {
  pattern2[i] = [];
  for (let j = 0; j < 10; j++) {
    pattern2[i][j] = "#F00";
  }
}

Matrix.defaultProps = { values: pattern2 };