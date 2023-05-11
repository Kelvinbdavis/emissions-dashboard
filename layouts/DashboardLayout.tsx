// layouts/DashboardLayout.tsx

import { ReactNode, useState } from 'react';
import { Box, Toolbar, Typography, Container } from '@mui/material';

import Sidebar from '../components/Sidebar';
import AppBar from '../components/AppBar';
import { useAppStore } from '../store';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const { drawerOpen, setDrawerOpen } = useAppStore(state => state.drawer);

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar onMenuButtonClick={() => setDrawerOpen(!drawerOpen)} />
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Container maxWidth="lg">{children}</Container>
      </Box>
      <Box component="footer" sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="body2" color="textSecondary" align="center">
          Your Footer Content Here
        </Typography>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
