import { Box, Typography } from '@mui/material';

const ProblemSection = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" color="text.primary">
        ProblemSection.tsx
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Problem statement cards
      </Typography>
    </Box>
  );
};

export default ProblemSection;
