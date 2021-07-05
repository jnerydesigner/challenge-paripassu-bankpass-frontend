import React, { createContext } from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from '../src/styles/theme';
import { Provider } from 'react-redux';
import { store } from '../src/store/store'
import { Routes } from '../src/routes';
import { GlobalStyle } from './theme/globalStyles';


export const UserContext = createContext<number>(1);

export function App() {
  return (
    <>
      <UserContext.Provider value={3}>
        <Provider store={store}>
          <ChakraProvider theme={theme}>
            <Routes />
          </ChakraProvider>
        </Provider>
        <GlobalStyle />
      </UserContext.Provider>
    </>
  );
}
