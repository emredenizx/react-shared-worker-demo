import { ReactNode } from "react";
import { Box, Container } from "@chakra-ui/react";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="gray.100"
    >
      <Container
        flex={1}
        maxW="960px"
        bg="white"
        p={4}
        boxShadow="md"
        borderRadius="md"
      >
        {children}
      </Container>
    </Box>
  );
};

export default Layout;
