import { useState } from 'react';
import type { NextPage } from 'next';
import { ButtonGroup, Button, Grid, Box, TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker, DateRange } from '@mui/x-date-pickers-pro/DateRangePicker';
import TranferList from 'src/components/common/TranferList';
import ReportButtons from 'src/components/common/ReportButtons';
import ReportContent from 'src/components/common/ReportContent';
import {Consultant} from 'src/models/Consultant';


const list: Consultant[] = [{co_usuario: "jorge.pozo"},{co_usuario: "pedro.castillo"}, {co_usuario: "javy.lopez"}];

const Home: NextPage = () => {

  const [value, setValue] = useState<DateRange<Dayjs>>([null, null]);
  const [tabSelected, setTabSelected] = useState(0);
  const [reportTypeSelected, setReportTypeSelected] = useState(0);

  const handleReportType = value => setReportTypeSelected(value);

  return (
    <Grid container>
      <Grid xs={12} item>
        <Grid container justifyContent={'space-between'}>
          <ButtonGroup size="small" aria-label="small button group">
            <Button onClick={() => setTabSelected(0)} variant={tabSelected === 0 ? 'contained' : 'outlined'}>{'Por consultor'}</Button>
            <Button onClick={() => setTabSelected(1)} variant={tabSelected === 1 ? 'contained' : 'outlined'}>{'Por cliente'}</Button>
          </ButtonGroup>
          <LocalizationProvider
            dateAdapter={AdapterDayjs}
            localeText={{ start: 'Desde', end: 'Hasta' }}
          >
            <DateRangePicker
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(startProps, endProps) => (
                <>
                  <TextField {...startProps} size={'small'} />
                  <Box sx={{ mx: 2 }}> a </Box>
                  <TextField {...endProps} size={'small'} />
                </>
              )}
            />
          </LocalizationProvider>
        </Grid>
      </Grid>
      <Grid xs={12} item mt={3}>
        <Grid container justifyContent={'space-between'}>
          <Grid xs={9} item>
            <TranferList label={tabSelected === 0 ? 'Consultores' : 'Clientes'} list={list} />
          </Grid>
          <Grid xs={3} item>
            <ReportButtons selected={reportTypeSelected} handleReport={handleReportType} />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} mt={4}>
          <ReportContent selected={reportTypeSelected} />      
      </Grid>
    </Grid>
  );
};

export default Home;