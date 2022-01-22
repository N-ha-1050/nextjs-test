import { Flex, Heading } from '@chakra-ui/react';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Flex
      w="90%"
      h="100vh"
      align="center"
      direction="column"
      justify="center"
      mx="auto"
    >
      <Heading>Stady</Heading>
    </Flex>
  );
};

export default Home;
