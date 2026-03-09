import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" color="text.primary">
        Footer.tsx
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Site footer
      </Typography>
    </Box>
  );
};

export default Footer;
