import React from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from '../src/styles/theme';
import { Provider } from 'react-redux';
import { store } from '../src/store/store'
import { Routes } from '../src/routes';
import { GlobalStyle } from './theme/globalStyles';


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
