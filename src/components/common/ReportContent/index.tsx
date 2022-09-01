import React from 'react';
import RelatorioReportType from './RelatorioReportType';
import GraficoReportType from './GraficoReportType';
import PizzaReportType from './PizzaReportType';


const ReportContent = ({selected, data}) => {
    return (
        <>
            {selected === 0 && <RelatorioReportType data={data} />}
            {selected === 1 && <GraficoReportType data={data}/>}
            {selected === 2 && <PizzaReportType data={data}/>}
        </>
    );
};

export default ReportContent;