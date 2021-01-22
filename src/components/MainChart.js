import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import fetchData from '../service/api_request';

class MainChart extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {}
    }
  }

  componentWillMount() {
    this.getChartData();
  }

  dashboardPanelChartData(data) {

    let result_data = [];
    let yAxis = [];

    data.forEach((item) => {
      if (item.Crop !== "" && item.Crop !== "All Agriculture") {
        result_data.push(item["2011-12"])
        yAxis.push(item.Crop)
      }
    })
    return {
      result_data,
      yAxis
    }


  }

  getChartData() {
    fetchData().then((response) => {
      const d = this.dashboardPanelChartData(response)
      this.setState({
        chartData: {
          labels: d.yAxis,
          datasets: [
            {
              label: 'status',
              data: d.result_data,
              backgroundColor: "wheat",
              color:"white"
            }
          ]
        }
      });

    })
  }

  render() {
    return (
      <div>
        <Bar
          data={this.state.chartData}
          options={{
            title: {
              display: true,
              text: "Agriculture crop production",
              fontSize: 25
            },
            legend: {
              display: false
            },
            layout: {
              padding: {
                left: 0,
                right: 0
              }
            },
          }}
        />
      </div>

    );
  }
}

export default MainChart;
