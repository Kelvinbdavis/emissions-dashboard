import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Paper, Box, Typography, styled } from '@mui/material';
import Link from 'next/link';

const EmissionsByActivity = () => {
  const rows = [
    { id: 1, activity: 'Transportation', emission: 200 },
    { id: 2, activity: 'Industrial', emission: 400 },
    { id: 3, activity: 'Residential', emission: 100 },
  ];

  const columns = [
    { field: 'activity', headerName: 'Activity', flex: 1 },
    { field: 'emission', headerName: 'Emissions', flex: 1 },
  ];

  const StyledLink = styled(Link)({
    textDecoration: 'none',
    fontWeight: 'bold',
    color: 'teal',
    padding: '6px 16px',
    borderRadius: '12px',
    transition: 'background-color 0.3s',
    '&:hover': {
      textDecoration: 'none',
      backgroundColor: 'rgba(0, 128, 128, 0.1)',
    },
  });

  return (
    <Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Emissions By Activity
        </Typography>
        <StyledLink href="/emissions">View all</StyledLink>
      </Box>
      <Paper style={{ height: '100%', width: '100%' }}>
        <DataGrid rows={rows} columns={columns} />
      </Paper>
    </Box>
  );
};

export default EmissionsByActivity;
