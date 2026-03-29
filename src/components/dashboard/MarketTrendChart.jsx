import React, { useState } from "react";
import Chart from "react-apexcharts";

function MarketTrendChart() {

  const [chartData] = useState({
    series: [
      {
        name: "Market Trend",
        data: [
          { x: "09:00", y: [4200, 4250, 4180, 4230] },
          { x: "10:00", y: [4230, 4310, 4220, 4300] },
          { x: "11:00", y: [4300, 4320, 4240, 4250] },
          { x: "12:00", y: [4250, 4510, 4240, 4500] },
          { x: "13:00", y: [4500, 4720, 4480, 4700] },
          { x: "14:00", y: [4700, 4710, 4590, 4600] },
          { x: "15:00", y: [4600, 4820, 4580, 4800] },
          { x: "16:00", y: [4800, 4970, 4790, 4950] }
        ]
      }
    ],

    options: {
      chart: {
        type: "candlestick",
        height: 350,
        toolbar: {
          show: false
        }
      },

      stroke: {
        width: 1
      },

      dataLabels: {
        enabled: false
      },

      xaxis: {
        type: "category",
        categories: [
          "09:00",
          "10:00",
          "11:00",
          "12:00",
          "13:00",
          "14:00",
          "15:00",
          "16:00"
        ]
      },

      grid: {
        borderColor: "#e0e0e0",
        strokeDashArray: 4
      },

      tooltip: {
        theme: "light"
      },

      plotOptions: {
        candlestick: {
          colors: {
            upward: '#22c55e',
            downward: '#ef4444'
          }
        }
      }
    }
  });

  return (
    <div style={{ background: "#fff", padding: "20px", borderRadius: "10px" }}>
      <p>S&P 500 Index performance (Today)</p>

      <Chart
        options={chartData.options}
        series={chartData.series}
        type="candlestick"
        height={350}
      />
    </div>
  );
}


export default MarketTrendChart;