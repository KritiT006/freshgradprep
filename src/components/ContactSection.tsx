import { Box, Typography } from '@mui/material';

const ContactSection = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" color="text.primary">
        ContactSection.tsx
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Contact information cards
      </Typography>
    </Box>
  );
};

export default ContactSection;
