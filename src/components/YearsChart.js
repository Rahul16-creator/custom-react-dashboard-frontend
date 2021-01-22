import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import fetchData from '../service/api_request';

class YearsChart extends Component {
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
            if (item.Crop === "All Agriculture") {
                Object.entries(item).forEach((t, i) => {
                    if (t[0] !== "Crop") {
                        yAxis.push(t[0])
                        result_data.push(t[1])
                    }
                })
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
                            backgroundColor:"grey",
                            borderColor: "black"
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
                            text: "Last 8 Year Report",
                            fontSize: 25
                        },
                        legend: {
                            display: false
                        }
                    }}
                />
            </div>

        );
    }
}

export default YearsChart;