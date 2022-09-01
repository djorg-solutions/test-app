import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

const GraficoReportType = ({data}) => {
    
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
      );
      
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top' as const,
          },
          title: {
            display: true,
            text: 'Gráfico',
          },
        },
      };
      
         
      const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
      
      const data1 = {
        labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: [2,3,7,11,20,15,13],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Dataset 2',
            data: [12,13,4,15,10,1,9],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      };

    return (
        <>
           <Bar options={options} data={data1} />
        </>
    );
};

export default GraficoReportType;