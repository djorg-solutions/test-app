import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Grid } from '@mui/material';

ChartJS.register(ArcElement, Tooltip, Legend);

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
}

  
const PizzaReportType = ({content}) => {

    const total = content.reduce((a, c) => (a + c.profits.reduce((a, c) => (a + c.receitaLiquida), 0)), 0)

    function getData(){
        let dataset = [{
            label: "",
            data: content.map(item => parseFloat(item.profits.reduce((a, c) => (a + c.receitaLiquida), 0)*100/total).toFixed(2) ),
            borderColor: content.map(()=>random_rgba()),
            backgroundColor:  content.map(()=>random_rgba()),
            borderWidth: 1,
        }];
        return dataset;
      }

    const data = {
        labels: content.map(item => item.consultant),
        datasets: getData(),
    };

    console.log(getData())

    return (
        <Grid container justifyContent={'center'}>
            <Grid item xs={6}>
                <Pie data={data} />
            </Grid>
        </Grid>

    );
};

export default PizzaReportType;