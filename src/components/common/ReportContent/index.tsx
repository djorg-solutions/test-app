import React from 'react';
import RelatorioReportType from './RelatorioReportType';
import GraficoReportType from './GraficoReportType';
import PizzaReportType from './PizzaReportType';


const ReportContent = ({selected}) => {
    return (
        <>
            {selected === 0 && <RelatorioReportType />}
            {selected === 1 && <GraficoReportType />}
            {selected === 2 && <PizzaReportType />}
        </>
    );
};

export default ReportContent;