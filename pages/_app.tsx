import { ThemeProvider, createTheme } from '@mui/material/styles';

import type { AppProps } from 'next/app';
import { SidebarProvider } from '../contexts/SidebarContext';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <SidebarProvider>
        <Component {...pageProps} />
      </SidebarProvider>
    </ThemeProvider>
  );
}

export default MyApp;
