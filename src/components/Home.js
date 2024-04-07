import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

function Home() {
  return (
    <Box maxW="800px" mx="auto" p="20px">
      <Heading as="h1" fontSize="2xl" mb="20px">
        Welcome to the Home page
      </Heading>
      <Text fontSize="lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan nulla a nisi faucibus, vitae faucibus odio rhoncus. Integer sollicitudin nulla id purus condimentum vehicula. Vivamus aliquet vitae libero a accumsan. Mauris vestibulum, felis sed consequat tincidunt, purus arcu consectetur ex, nec euismod risus ipsum a nisi. Fusce et efficitur enim. Praesent dignissim sapien velit, vel consequat mi dapibus ut. Cras venenatis volutpat vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec condimentum quam at est accumsan, a aliquam tortor bibendum. Duis eget quam vel ex lacinia efficitur. In hac habitasse platea dictumst. Etiam vestibulum vitae orci vel ullamcorper. Nullam auctor, nulla vel sollicitudin posuere, lorem orci convallis urna, ut ultricies eros magna nec lorem.
      </Text>
    </Box>
  );
}

export default Home;
