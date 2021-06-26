import { Box, Heading, Text, Button, Flex } from "@chakra-ui/react";

export default function Home() {
  const protests = [
    {isHighlighted: true, name: "BLM1"},
    {isHighlighted: true, name: "BLM2"},
    {isHighlighted: false, name: "BLM3"},
    {isHighlighted: false, name: "BLM4"},
    {isHighlighted: false, name: "BLM5"}
  ]

  return (
    <>
      <Heading>
        Name | Logo
      </Heading>
      <Flex h="100%" my="10px">
        <Flex flexDir="column" h="100%" mr="10px" mb="10px">
          <Flex flexDir="column" bg="gray.300" mb="10px">
            <Button fontSize="lg">Create Event</Button>
            <Button fontSize="lg">Create Post</Button>
          </Flex>
          <Flex flexDir="column" my="10px">
            {
              protests.map(({name}) => <Text m="10px" p="10px" bg="gray.500">{name}</Text>)
            }
          </Flex>
        </Flex>
        <Flex mx="10px" my="10px" flexDir="column" h="100%" align="flex-start">
          {
            protests.filter(({isHighlighted}) => isHighlighted).map(({name}) => <Box bg="gray.400" p="10px" my="10px" h="80px" fontSize="2xl">{name}</Box>)
          }
        </Flex>
      </Flex>
      </>
  );
}
