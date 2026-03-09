import { Box, Typography } from '@mui/material';

const ThemePreviewWidget = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" color="text.primary">
        ThemePreviewWidget.tsx
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Review-only theme switcher (removable)
      </Typography>
    </Box>
  );
};

export default ThemePreviewWidget;
