import React from "react";
import { Container, Box, Text } from "@chakra-ui/react";
import titleImage from "../../assets/flash.png";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import SignIn from "../../Components/Sign In/sign-in.component";
import SignUp from "../../Components/Sign Up/sign-up.component";

function HomePage() {
  return (
    <Container maxW="xl" centerContent>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        p={3}
        bg="#4a536b"
        color="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="5px"
        borderWidth="1px"
      >
        <Text
          fontSize="5xl"
          fontFamily="Roboto"
          fontStyle="italic"
          fontWeight="700"
        >
          Thunderbolt
        </Text>
        <img src={titleImage} width="80px" height="80px" />
      </Box>
      <Box bg="white" w="100%" p="4" borderWidth="1px">
        <Tabs isFitted variant="enclosed">
          <TabList mb="1em">
            <Tab fontSize="20px">Sign In</Tab>
            <Tab fontSize="20px">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <SignIn />
            </TabPanel>
            <TabPanel>
              <SignUp />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default HomePage;
