import { useState } from 'react';
import { Box } from '../../../styleConfig/Box';
import { Logo } from '../Logo/Logo';

export const NavBar: React.FC = () => {
  const [theme, setTheme] = useState('light');
  const isDarkTheme = theme === 'dark';
  const toggleTheme = () => setTheme(isDarkTheme ? 'light' : 'dark');

  return (
    <Box display="flex" justifyContent="space-between">
      <Logo />
      <button onClick={toggleTheme}>
        {isDarkTheme ? (
          <span aria-label="Light mode" role="img">
            🌞
          </span>
        ) : (
          <span aria-label="Dark mode" role="img">
            🌜
          </span>
        )}
      </button>
    </Box>
  );
};
