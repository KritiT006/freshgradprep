import { Box, Typography } from '@mui/material';

const AboutSection = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" color="text.primary">
        AboutSection.tsx
      </Typography>
      <Typography variant="body2" color="text.secondary">
        About FreshGradPrep description
      </Typography>
    </Box>
  );
};

export default AboutSection;
