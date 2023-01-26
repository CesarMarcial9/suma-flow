import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  ChartOptions,
  ChartData,
} from "chart.js";
import { Doughnut, Line } from "react-chartjs-2";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LineController,
  LineElement,
  PointElement,
  LinearScale
);

const data = {
  labels: ["Expenses", "Investments", "Income"],
  datasets: [
    {
      data: [180, 50, 300],
      backgroundColor: ["#FF6384", "rgb(78, 178,205)", "rgb(246,193,70)"],
      hoverBackgroundColor: ["#FF6384", "rgb(78, 178,205)", "rgb(246,193,70)"],
    },
  ],
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const lineData: ChartData<"line"> = {
  labels,
  datasets: [
    {
      label: "2022",
      data: [100, 200, 300, 900, 130, 140, 500],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "2023",
      data: [120, 400, 250, 800, 1530, 740, 200],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export const options: ChartOptions<"line"> = {
  color: "white",
  responsive: true,
  scales: {
    x: {
      title: {
        color: "white",
      },
    },
  },
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const DemoAppPage = () => {
  return (
    <div className="flex min-h-screen flex-col gap-8 bg-well-red-500 p-6 text-white">
      <header>
        <Link href={"/"} passHref className="text-xl font-semibold">
          <div className="flex items-center gap-2">
            <FaChevronLeft className="text-sm" />
            <p>Home</p>
          </div>
        </Link>

        <h2 className="text-4xl font-bold">Dashboard</h2>
      </header>

      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">Summary</h2>

        <div className="flex flex-col items-center justify-center gap-6 rounded-md bg-well-red-300 p-2">
          <Doughnut
            data={data}
            options={{ color: "white", font: { size: 32 } }}
          />

          <Link
            href={"/dashboard/summary"}
            className="w-full rounded-md bg-well-red-500 py-2 text-center"
            passHref
          >
            learn more
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">Saving history</h2>

        <div className="flex flex-col items-center justify-center gap-6 rounded-md bg-well-red-300 p-2">
          <Line data={lineData} options={options} />

          <Link
            href={"/dashboard/summary"}
            className="w-full rounded-md bg-well-red-500 py-2 text-center"
            passHref
          >
            learn more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DemoAppPage;
