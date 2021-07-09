import React from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from '../src/styles/theme';
import { Provider } from 'react-redux';
import { Routes } from '../src/routes';
import { GlobalStyle } from './theme/globalStyles';
import store from '../src/redux/store';




export function App() {
  return (
    <>
      <Provider store={store}>
        <ChakraProvider theme={theme}>
          <Routes />
        </ChakraProvider>
      </Provider>
      <GlobalStyle />
    </>
  );
}
