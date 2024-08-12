import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const PhoneUsageChart = () => {
  const hours = Array.from(
    { length: 24 },
    (_, i) => i.toString().padStart(2, "0") + ":00"
  );
  const usageData = [
    1000, 700, 0, 0, 0, 0, 0, 30, 100, 900, 700, 800, 1200, 300, 1500, 1900,
    100, 150, 600, 1200, 900, 1600, 1800, 1200,
  ]; // Har soat uchun sekundlarda foydalanish vaqti

  const data = {
    labels: hours,
    datasets: [
      {
        label: "Phone Usage (seconds)",
        data: usageData,
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Seconds",
        },
      },
      x: {
        title: {
          display: true,
          text: "Time of Day",
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default PhoneUsageChart;
