import React from 'react';
import { Flex, Image, List, ListItem, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';



export function HeaderGerencial() {
  return (
    <>
      <Flex
        as="header"
        w={1000}
        maxWidth={1480}
        h="70px"
        mx="auto"
        px="6"
        mb="2"
        align="center"
        justifyContent="space-between"
        bg="#6c5ce7"
        borderRadius="5"
      >
        <Image
          boxSize="150px"
          objectFit="contain"
          src={Logo} alt="Logo do Banco"
        />
        <List display="flex" flexDirection="row">
          <ListItem pr="4">
            <Link to="/">
              <Text color="gray.50">Home</Text>
            </Link>
          </ListItem>
          <ListItem pr="4">
            <Link to="/atendimento">
              <Text color="gray.50">Atendimento</Text>
            </Link>
          </ListItem>
          <ListItem pr="4">
            <Link to="/gerencial">
              <Text color="gray.50">Gerencial</Text>
            </Link>
          </ListItem>
        </List>
      </Flex>
    </>
  );
}