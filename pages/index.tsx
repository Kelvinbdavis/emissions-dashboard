import type { NextPage } from 'next';
import { Grid, Paper } from '@mui/material';
import { styled } from '@mui/system';
import DashboardLayout from '../layouts/DashboardLayout';
import DataViewLayout from '../layouts/DataViewLayout';

const RoundedPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  height: '250px',
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderRadius: 16, // adjust this value to change the roundness of corners
}));

const Home: NextPage = () => {
  return (
    <DashboardLayout>
      <DataViewLayout title="Dashboard">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <RoundedPaper>Placeholder for component 1</RoundedPaper>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <RoundedPaper>Placeholder for component 2</RoundedPaper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <RoundedPaper>Placeholder for component 3</RoundedPaper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <RoundedPaper>Placeholder for component 4</RoundedPaper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <RoundedPaper>Placeholder for component 5</RoundedPaper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <RoundedPaper>Placeholder for component 6</RoundedPaper>
          </Grid>
        </Grid>
      </DataViewLayout>
    </DashboardLayout>
  );
};

export default Home;
