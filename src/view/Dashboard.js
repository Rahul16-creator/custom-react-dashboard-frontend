import React, { Component } from 'react';
import './App.css';
import MainChart from '../components/MainChart';
import RevenueChart from '../components/revenueChart';
import YearsChart from '../components/YearsChart';
import Base from '../base';

class DashBoard extends Component {
  render() {
    return (
      <Base>
        <div className="App">
          <MainChart />
        </div>
        <br />
        <br />
        <div className="mid">
          <div className="card">
            <RevenueChart />
          </div>
          <div>
            <YearsChart />
          </div>
        </div>
      </Base>
    );
  }
}

export default DashBoard;
