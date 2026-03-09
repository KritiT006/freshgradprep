import { Box, Typography } from '@mui/material';

const HeroSection = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" color="text.primary">
        HeroSection.tsx
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Hero banner with headline + CTAs
      </Typography>
    </Box>
  );
};

export default HeroSection;
