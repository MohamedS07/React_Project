import React, { useState } from "react";
import Chart from "react-apexcharts";

function MarketTrendChart() {

  const [chartData] = useState({
    series: [
      {
        name: "Market Trend",
        data: [4200, 4300, 4250, 4500, 4700, 4600, 4800, 4950]
      }
    ],

    options: {
      chart: {
        type: "area",
        height: 350,
        toolbar: {
          show: false
        }
      },

      stroke: {
        curve: "smooth",
        width: 3
      },

      dataLabels: {
        enabled: false
      },

      xaxis: {
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

      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.4,
          opacityTo: 0.1,
          stops: [0, 90, 100]
        }
      },

      tooltip: {
        theme: "light"
      }
    }
  });

  return (
    <div style={{ background: "#fff", padding: "20px", borderRadius: "10px" }}>
      <p>S&P 500 Index performance (Today)</p>

      <Chart
        options={chartData.options}
        series={chartData.series}
        type="area"
        height={350}
      />
    </div>
  );
}

export default MarketTrendChart;