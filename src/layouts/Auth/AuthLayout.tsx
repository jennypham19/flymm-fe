import { createTheme, ThemeProvider } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import video_login from '@/assets/images/users/màn hình chính.mp4';

export default function AuthLayout() {
  const theme = createTheme({
    components: {
      MuiButton: {
        defaultProps: {
          size: 'large',
        },
      },
    },
  });

  return (
    <Box position="relative" width="100%" height="100vh" overflow="hidden" display="flex" alignItems="center" justifyContent="start">
      
      {/* VIDEO BACKGROUND */}
      <Box
        component="video"
        autoPlay
        loop
        muted
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'fill',
          zIndex: 0,
        }}
      >
        <source src={video_login} type="video/mp4" />
      </Box>

      {/* OVERLAY (dark blur nhẹ cho dễ nhìn text) */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: { xs: 'rgba(0,0,0,0.4)', md: 'transparent' },
          zIndex: 1,
        }}
      />

      {/* CONTENT */}
      <Box
        sx={{
          position: 'absolute',
          zIndex: 2,
          display: 'flex',
          px: 8,
          flexDirection: 'column',
        }}
      >
        <ThemeProvider theme={theme}>
          <Outlet />
        </ThemeProvider>
      </Box>
    </Box>
  );
}