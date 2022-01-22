import { Box, Button, Flex, Heading, Link, Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import { useState } from 'react';

const Test: NextPage = () => {
  const [isLoading, setLoading] = useState(false);
  const [isConnected, setConnected] = useState(false);
  const handleClick = async () => {
    setLoading(true);
    if (!process.env.NEXT_PUBLIC_API_URL) {
      setConnected(false);
      setLoading(false);
      return;
    }
    await fetch(process.env.NEXT_PUBLIC_API_URL, {
      method: 'GET',
      mode: 'cors',
    })
      .then((d) => {
        setConnected(true);
        setLoading(false);
      })
      .catch((e) => {
        setConnected(false);
        setLoading(false);
      });
  };
  return (
    <Flex
      w="90%"
      h="100vh"
      align="center"
      direction="column"
      justify="center"
      mx="auto"
    >
      <Heading as="h1" m="50px">
        API Connection Test
      </Heading>
      <Button
        p="10px"
        isDisabled={isLoading}
        isLoading={isLoading}
        loadingText="Loading ..."
        colorScheme="teal"
        type="submit"
        onClick={handleClick}
      >
        Connect API
      </Button>
      <Box
        m="10px"
        p="10px"
        borderRadius="5px"
        bg={isConnected ? 'green' : 'red'}
        color="white"
      >
        {isConnected ? 'Connected' : 'Disconnected'}
      </Box>
    </Flex>
  );
};

export default Test;
