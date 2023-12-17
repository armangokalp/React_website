import { createTheme } from '@mui/material/styles';

// Define the custom color palette
const theme = createTheme({
  palette: {
    primary: {
      main: '#228B22', // Forest Green
    },
    secondary: {
      main: '#87CEEB', // Sky Blue
    },
    accent: {
      main: '#FFDA03', // Sunflower Yellow
    },
    text: {
      primary: '#2F4F4F', // Dark Slate Gray
    },
    background: {
      default: '#F5F5F5', // Off-White
    },
  },
});

export default theme;