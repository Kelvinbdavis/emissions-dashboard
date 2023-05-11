import React, { useState } from 'react';
import {
  AppBar as MuiAppBar,
  Toolbar,
  IconButton,
  Typography,
  Avatar,
  Menu,
  MenuItem,
  InputAdornment,
  TextField,
  Button,
  ListItemText,
  ListItemIcon,
  Popover,
  Stack,
} from '@mui/material';
import {
  AccountCircle as AccountCircleIcon,
  Search as SearchIcon,
} from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';

interface AppBarProps {
  onMenuButtonClick: () => void;
}

const AppBar: React.FC<AppBarProps> = ({ onMenuButtonClick }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const [searchAnchorEl, setSearchAnchorEl] = useState<null | HTMLElement>(
    null
  );

  const [searchOpen, setSearchOpen] = useState<boolean>(false);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSearchOpen = (event: React.MouseEvent<HTMLElement>) => {
    setSearchAnchorEl(event.currentTarget);
  };

  const handleSearchClose = () => {
    setSearchAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProfileClick = () => {
    // Navigate to the profile page or perform some other action
    handleMenuClose();
  };

  const handleLogoutClick = () => {
    // Perform the logout action
    handleMenuClose();
  };

  return (
    <MuiAppBar
      position="fixed"
      sx={{ zIndex: theme => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={onMenuButtonClick}
          sx={{ marginRight: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Dashboard
        </Typography>
        <Stack direction="row" spacing={10}>
          <IconButton color="inherit" onClick={handleSearchOpen}>
            <SearchIcon />
          </IconButton>
          <Popover
            id="search-popover"
            open={Boolean(searchAnchorEl)}
            anchorEl={searchAnchorEl}
            onClose={handleSearchClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <TextField
              autoFocus
              margin="dense"
              id="search"
              type="search"
              fullWidth
              variant="standard"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Popover>
          <Avatar
            onClick={handleMenuOpen}
            sx={{
              cursor: 'pointer',
              backgroundColor: theme => theme.palette.primary.main,
              '&:hover': {
                backgroundColor: theme => theme.palette.primary.dark,
                transform: 'scale(1.2)',
                transition: 'all 0.3s ease-in-out',
              },
            }}
          >
            K
          </Avatar>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            onClick={handleMenuClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem onClick={handleProfileClick}>
              <Avatar />
              <ListItemText primary="Your profile" />
            </MenuItem>
            <MenuItem onClick={handleLogoutClick}>
              <ListItemIcon>
                <AccountCircleIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </MenuItem>
          </Menu>
        </Stack>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
