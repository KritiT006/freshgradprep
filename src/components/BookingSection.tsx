import { Box, Typography } from '@mui/material';

const BookingSection = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" color="text.primary">
        BookingSection.tsx
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Booking CTA block
      </Typography>
    </Box>
  );
};

export default BookingSection;
