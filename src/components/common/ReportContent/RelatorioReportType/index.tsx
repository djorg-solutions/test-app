import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { TableFooter } from '@mui/material';

const formatCurrency = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 2
})

function setFormat(money){
  return formatCurrency.format(money);
}

const RelatorioReportType = ({ data }) => {
  return (
    <>
      {
        data && data.map((item, index) =>
          <TableContainer component={Paper} key={index} sx={{ mt: 3 }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead><Typography padding={3} variant='body1'>{item.consultant}</Typography></TableHead>
              <TableHead>
                <TableRow>
                  <TableCell align="center">{'Período'}</TableCell>
                  <TableCell align="center">{'Receita Líquida'}</TableCell>
                  <TableCell align="center">{'Custo Fixo'}</TableCell>
                  <TableCell align="center">{'Comissão'}</TableCell>
                  <TableCell align="center">{'Lucro'}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {item.profits.map((row) => (
                  <TableRow
                    key={row.period}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" align="left">
                      {row.period}
                    </TableCell>
                    <TableCell component="th" scope="row" align="right">
                      {setFormat(row.receitaLiquida)}
                    </TableCell>
                    <TableCell align="right">{setFormat(row.custoFixo)}</TableCell>
                    <TableCell align="right">{setFormat(row.commissao)}</TableCell>
                    <TableCell align="right"><span style={{ color: parseFloat(row.lucro) < 0 ? 'red' : '' }}>{setFormat(row.lucro)}</span></TableCell>
                  </TableRow>
                ))}
                  <TableRow>
                    <TableCell component="th" scope="row" align="left">
                    <b> {'SALDO'}</b>
                    </TableCell>
                    <TableCell component="th" scope="row" align="right">
                     <b> {setFormat(item.profits.reduce((a, c) => (a + c.receitaLiquida), 0))}</b>
                    </TableCell>
                    <TableCell align="right"> <b>{setFormat(item.profits.reduce((a, c) => (a + c.custoFixo), 0))}</b></TableCell>
                    <TableCell align="right"> <b>{setFormat(item.profits.reduce((a, c) => (a + c.commissao), 0))}</b></TableCell>
                    <TableCell align="right"> <b style={{ color: parseFloat(item.profits.reduce((a, c) => (a + c.lucro), 0)) < 0 ? 'red' : '' }}>{setFormat(item.profits.reduce((a, c) => (a + c.lucro), 0))}</b></TableCell>
                  </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        )
      }
    </>
  );
};

export default RelatorioReportType;