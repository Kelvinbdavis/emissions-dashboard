import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Box,
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
  Toolbar,
  ListItemButton,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  BarChart as BarChartIcon,
  PieChart as PieChartIcon,
  ScatterPlot as ScatterPlotIcon,
  Info as InfoIcon,
} from '@mui/icons-material';

import { useAppStore } from '../store';

const drawerWidth = 240;

const menuItems = [
  { text: 'Home', icon: <HomeIcon />, href: '/' },
  { text: 'Emissions', icon: <BarChartIcon />, href: '/emissions' },
  { text: 'Charts', icon: <PieChartIcon />, href: '/charts' },
  { text: 'Graphs', icon: <ScatterPlotIcon />, href: '/graphs' },
  { text: 'Other', icon: <InfoIcon />, href: '/other' },
];

const Sidebar = () => {
  const router = useRouter();
  const { drawerOpen, setDrawerOpen } = useAppStore((state) => state.drawer);

  return (
    <Box>
      <Drawer
        variant="temporary"
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{
          width: drawerOpen ? drawerWidth : 56,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerOpen ? drawerWidth : 56,
            boxSizing: 'border-box',
            transition: 'width 225ms',
          },
        }}
      >
        <Toolbar />
        <List>
          {menuItems.map((item, index) => (
            <Link
              href={item.href}
              key={item.text}
              passHref
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <ListItemButton
                selected={router.pathname === item.href}
                sx={{
                  textDecoration: 'none',
                  color: 'inherit',
                  borderRadius: '12px',
                  '&:hover': {
                    backgroundColor: theme => theme.palette.action.hover,
                  },
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{ noWrap: true }}
                />
              </ListItemButton>
            </Link>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
