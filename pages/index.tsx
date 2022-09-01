import { useState } from 'react';
import type { NextPage } from 'next';
import { ButtonGroup, Button, Grid, Box, TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import TranferList from 'src/components/common/TranferList';
import ReportButtons from 'src/components/common/ReportButtons';
import ReportContent from 'src/components/common/ReportContent';
import { Consultant } from 'src/models/Consultant';
import { getConsultants } from 'src/services/consultants.service';
import { useMutation } from 'react-query';
import { sendConsultants } from 'src/services/consultants.service';


interface HomePageProps {
  consultants: Consultant[];
}

const Home = ({ consultants }: HomePageProps) => {

  const [startDate, setStartDate] = useState<Dayjs>([null, null]);
  const [endDate, setEndDate] = useState<Dayjs>([null, null]);
  const [tabSelected, setTabSelected] = useState(0);
  const [reportTypeSelected, setReportTypeSelected] = useState(-1);

  const [consultantsSelected, setConsultantsSelected] = useState<readonly string[]>([]);

  const { mutate: send } = useMutation(sendConsultants, {
    onSuccess: (data) => {

    },
    onError: (error) => {
      alert('An error occurred on the server!');
    }
  });

  const handleStarDate = (newValue: Dayjs | null) => {
    setStartDate(newValue);
  };

  const handleEndDate = (newValue: Dayjs | null) => {
    setEndDate(newValue);
  };

  const handleReportType = value => {
    if (consultantsSelected.length > 0 && startDate.$d && endDate.$d) {
      setReportTypeSelected(value);
      send({
        consultants: consultantsSelected,
        reportType: value,
        startDate: new Date(startDate.$d),
        endDate: new Date(endDate.$d)
      })
    }
  }

  return (
    <Grid container>
      <Grid xs={12} item>
        <Grid container justifyContent={'space-between'}>
          <Grid item>
            <ButtonGroup size="small" aria-label="small button group">
              <Button onClick={() => setTabSelected(0)} variant={tabSelected === 0 ? 'contained' : 'outlined'}>{'Por consultor'}</Button>
              <Button onClick={() => setTabSelected(1)} variant={tabSelected === 1 ? 'contained' : 'outlined'}>{'Por cliente'}</Button>
            </ButtonGroup>
          </Grid>
          <LocalizationProvider
            dateAdapter={AdapterDayjs}
            localeText={{ start: 'Desde', end: 'Hasta' }}
          >
            <Grid item>
              <DesktopDatePicker
                label="Começo"
                views={['year', 'month']}
                inputFormat={'MM/YYYY'}
                value={startDate}
                onChange={handleStarDate}
                renderInput={(params) => <TextField {...params} size={'small'} />}
              />
              <DesktopDatePicker
                views={['year', 'month']}
                label="Finalizar"
                inputFormat={'MM/YYYY'}
                value={endDate}
                onChange={handleEndDate}
                renderInput={(params) => <TextField {...params} size={'small'} />}
              />
            </Grid>

          </LocalizationProvider>
        </Grid>
      </Grid>
      <Grid xs={12} item mt={3}>
        <Grid container justifyContent={'space-between'}>
          <Grid xs={9} item>
            <TranferList
              label={tabSelected === 0 ? 'Consultores' : 'Clientes'}
              list={consultants}
              selected={consultantsSelected}
              setSelected={setConsultantsSelected}
            />
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

export async function getServerSideProps() {

  let consultants: Consultant[] = await getConsultants();

  return { props: { consultants } }
}

export default Home;