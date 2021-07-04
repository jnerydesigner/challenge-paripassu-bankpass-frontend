import React from 'react';
// import { Home } from './pages/Home';
// import { ManagementPass } from './pages/ManagementPass';
import { Atendimento } from './pages/Atendimento';
import { GlobalStyle } from './theme/globalStyles';
// import { ChakraProvider } from "@chakra-ui/react";
// import { themes } from './theme/style';

export function App() {
  return (
    <>
      {/* <ChakraProvider theme={themes}> */}
      {/* <Home /> */}
      {/* <ManagementPass /> */}
      <Atendimento />

      <GlobalStyle />

      {/* </ChakraProvider> */}
    </>
  );
}
