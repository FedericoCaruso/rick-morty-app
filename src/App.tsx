import React from 'react';
import { ThemeProvider } from 'styled-components';
import Charachter from './components/Character';
import theme from './constants/settings';
import ContextProvider from './context/ThemeContext';

function App() {
  return (
    <ContextProvider>
      <ThemeProvider theme={theme}>
        <Charachter />
      </ThemeProvider>
    </ContextProvider>
  );
}

export default App;
