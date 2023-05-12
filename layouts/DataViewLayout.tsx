import { Box, Typography } from '@mui/material';

interface DataViewLayoutProps {
  title: string;
  children: React.ReactNode;
}

const DataViewLayout: React.FC<DataViewLayoutProps> = ({ title, children }) => {
  return (
    <Box>
      <Typography variant="h4" component="h2" gutterBottom>
        {title}
      </Typography>
      <Box width="100%">{children}</Box>
    </Box>
  );
};

export default DataViewLayout;
