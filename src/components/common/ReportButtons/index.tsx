import React from 'react';
import { Grid, ButtonGroup, Button } from '@mui/material';

const ReportButtons = ({ selected, handleReport }) => {

    return (
        <Grid container>
            <Grid xs={12} item mt={4}>
                <ButtonGroup size="small" orientation="vertical" aria-label="small button group">
                    <Button onClick={() => handleReport(0)} variant={selected === 0 ? 'contained' : 'outlined'}>{'Relatório'}</Button>
                    <Button onClick={() => handleReport(1)} variant={selected === 1 ? 'contained' : 'outlined'}>{'Gráfico'}</Button>
                    <Button onClick={() => handleReport(2)} variant={selected === 2 ? 'contained' : 'outlined'}>{'Pizza'}</Button>
                </ButtonGroup>
            </Grid>
        </Grid>
    );
};

export default ReportButtons;