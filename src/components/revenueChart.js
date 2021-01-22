import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import fetchData from '../service/api_request';

class RevenueChart extends Component {
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
            if (item.Crop !== "All Agriculture" && item.Crop !== "") {
                let sum = 0;
                Object.entries(item).forEach((t, i) => {
                    if (t[0] === "Crop") {
                        yAxis.push(t[1]);
                    } else {
                        sum += t[1];
                    }
                })
                result_data.push(sum);
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
                            borderColor:"rgba(0, 0, 0, 0.699)",
                            backgroundColor: " rgba(255, 0, 106, 0.5)"
                        }
                    ]
                }
            });

        })
    }

    render() {
        return (
            <div>
                <Line
                    data={this.state.chartData}
                    options={{
                        title: {
                            display: true,
                            text: "All Product Year Revenue",
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

export default RevenueChart;