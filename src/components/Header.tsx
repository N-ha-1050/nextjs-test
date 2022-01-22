import {
  Link,
  Button,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Flex,
  Spacer,
  DrawerFooter,
  useColorMode,
} from '@chakra-ui/react';
import NextLink from 'next/link';

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      alignItems="center"
      as="header"
      py="10px"
      px="20px"
      maxW="container.xl"
      mx="auto"
    >
      <NextLink href="/" passHref>
        <Link
          py="10px"
          px="20px"
          bg="#26d0c9"
          borderRadius="35px"
          color="#092D2B"
          fontSize="36px"
        >
          Stady
        </Link>
      </NextLink>
      <Spacer />
      <Button py="20px" px="10px" colorScheme="teal" onClick={onOpen}>
        Menu
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Stady Menu</DrawerHeader>
          <DrawerBody>
            <NextLink href="/" passHref>
              <Link onClick={onClose}>Top</Link>
            </NextLink><br />
            <NextLink href="test/" passHref>
              <Link onClick={onClose}>API Connection Test</Link>
            </NextLink>
          </DrawerBody>
          <DrawerFooter>
            <Button onClick={toggleColorMode}>
              Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};
