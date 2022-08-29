import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const rows = [{period: 'Janeiro de 2007', rl: 'R$ 1.500,00', cf: '- R$ 2.000,00', com: '- R$ 1.000,00', lu: '- R$ 1.000,00'}]

const RelatorioReportType = () => {
    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
            {rows.map((row) => (
              <TableRow
                key={row.period}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="left">
                  {row.period}
                </TableCell>
                <TableCell component="th" scope="row" align="right">
                  {row.rl}
                </TableCell>
                <TableCell align="right">{row.cf}</TableCell>
                <TableCell align="right">{row.com}</TableCell>
                <TableCell align="right">{row.lu}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
};

export default RelatorioReportType;