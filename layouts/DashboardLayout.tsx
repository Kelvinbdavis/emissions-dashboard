// layouts/DashboardLayout.tsx

import { ReactNode, useState } from 'react';
import {
  Box,
  Toolbar,
  Typography,
  Container,
  Avatar,
  Menu,
  MenuItem,
} from '@mui/material';
import { AccountCircle as AccountCircleIcon } from '@mui/icons-material';

import Sidebar from '../components/Sidebar';
import AppBar from '../components/AppBar';
import { useSidebarContext } from '../contexts/SidebarContext';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const { drawerOpen, setDrawerOpen } = useSidebarContext();


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
