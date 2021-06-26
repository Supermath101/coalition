import { Box, Heading, Text, HStack } from "@chakra-ui/react";
import { Wrapper } from "../components/Wrapper";

function Feature({ title, desc, ...rest }) {
  return (
    <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" {...rest}>
      <Heading fontSize="xl">{title}</Heading>
      <Text mt={4}>{desc}</Text>
    </Box>
  );
}

export default function Home() {
  return (
    <Wrapper>
      <HStack spacing={8}>
        <Feature
          title="Plan Money"
          desc="The future can be even brighter but a goal without a plan is just a wish"
          flex="6"
        />
        <Feature
          title="Save Money"
          desc="You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings."
          flex="9"
        />
        <Feature
          title="Plan Money"
          desc="The future can be even brighter but a goal without a plan is just a wish"
          flex="6"
        />
      </HStack>
    </Wrapper>
  );
}
