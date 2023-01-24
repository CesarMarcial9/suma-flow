import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartData, scales } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Link from "next/link";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Expenses", "Investments", "Income"],
  datasets: [
    {
      data: [180, 50, 300],
      backgroundColor: ["#FF6384", "rgb(78, 178,205)", "rgb(246,193,70)"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
    },
  ]
};

const DashboardPage = () => {
  return (
    <div className="flex min-h-screen flex-col gap-8 bg-well-red-500 p-6 text-white">
      <header>
        <Link href={'/'} passHref className="text-xl font-semibold">Home</Link>
        <h2 className="text-4xl font-bold">Suma Wealth</h2>
      </header>

      <div className="flex flex-col gap-4">
        <h2 className="font-semibold text-2xl">Summary</h2>

        <div className="p-2 bg-well-red-300 rounded-md flex flex-col gap-6 justify-center items-center">
          <Doughnut data={data} options={{color: 'white', font: {size: 32}}} />

          <Link href={'/dashboard/summary'} className='bg-well-red-500 rounded-md py-2 text-center w-full' passHref>
            learn more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
