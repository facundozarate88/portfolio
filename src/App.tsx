import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import Carousel from './components/carousel/carousel';
import Button from './components/button/button';

function App() {
  const logger = () => {
    alert('Click atendido desde App Component');
  }

  return (
  <ThemeProvider theme={theme}>
    <Carousel
      pagination
      navigation
    ></Carousel>
    <Button
      label="Example button"
      primary={true}
      onClick={logger}
    ></Button>
  </ThemeProvider>
  );
}

export default App;
