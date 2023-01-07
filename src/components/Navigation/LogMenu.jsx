import { Link, useLocation } from 'react-router-dom';
import { Box, Tab, Tabs } from '@mui/material';
import { useState, useEffect } from 'react';

export const LogMenu = () => {
  const location = useLocation();
  const pathLocation = location.pathname;
  const [value, setValue] = useState('/login');

  useEffect(() => {
    if (pathLocation === '/register') {
      setValue('/register');
    } else if (pathLocation === '/login') {
      setValue('/login');
    }
  }, [pathLocation]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <nav>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          margin: '0 auto',
          pt: '10px',
          borderBottom: 2,
          borderColor: 'divider',
        }}
      >
        <Tabs onChange={handleChange} value={value}>
          <Tab
            component={Link}
            to="/register"
            label="Register"
            value="/register"
          />
          <Tab component={Link} to="/login" label="Log In" value="/login" />
        </Tabs>
      </Box>
    </nav>
  );
};
