import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

function random_rgba() {
  var o = Math.round, r = Math.random, s = 255;
  return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
}

const GraficoReportType = ({content}) => {
    
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        PointElement,
        LineElement,
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
      
         
      const labels = content[0].profits.map(item => item.period);
      
      function getData(){
        let dataset = [];
        let salario = content.reduce((a, c) => (a + c.profits[0].custoFixo), 0);
        let custoFixoMedio = salario / content.length;
        dataset.push({
          type: 'line' as const,
          label: 'Custo Fixo Médio',
          data: content[0].profits.map(() => custoFixoMedio),
          borderColor: 'rgb(255, 99, 132)',
          borderWidth: 2,
          fill: false,
        })
        content.map(item => {
          dataset.push({
            type: 'bar' as const,
            label: item.consultant,
            data: item.profits.map(item => item.receitaLiquida),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: random_rgba(),
          })
        })
        return dataset;
      }
    
      const data = {
        labels,
        datasets: getData(),
      };

    return (
        <>
           <Bar options={options} data={data} />
        </>
    );
};

export default GraficoReportType;