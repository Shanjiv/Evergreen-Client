import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

class SimpleLineChart extends Component {

  componentDidMount() {}

  render() {
    return (
      <ResponsiveContainer minWidth={600} minHeight={300}>
        <LineChart width={600} height={300} data={this.props.data} isAnimationActive={false} margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}>
          <XAxis dataKey="ms"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Line type="monotone" dataKey="val" stroke="#8884d8" isAnimationActive={false}/>
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

export default SimpleLineChart;
