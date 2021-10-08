import { Flex, Image, Grid, Text, Box, GridItem, Divider } from '@chakra-ui/react';

const qualities = [
  {
    id: String(Math.random()),
    title: 'vida noturna',
    icon: './images/cocktail.svg',
    colSpan: undefined
  },
  {
    id: String(Math.random()),
    title: 'praia',
    icon: './images/surf.svg',
    colSpan: undefined
  },
  {
    id: String(Math.random()),
    title: 'moderno',
    icon: './images/building.svg',
    colSpan: undefined
  },
  {
    id: String(Math.random()),
    title: 'clássico',
    icon: './images/museum.svg',
    colSpan: undefined
  },
  {
    id: String(Math.random()),
    title: 'e mais...',
    icon: './images/earth.svg',
    colSpan: [2, 2, 2, 1]
  },
];

export function Qualities() {
  return (
    <>
      <Flex
        as="header"
        align="center"
        justify="center"
        h={["3rem", "6.25rem"]}
        w="100%"
        bg="gray.100"
        px="1rem"
        mx="auto"
        my="5rem"
      >
        <Grid
          h="100%"
          mx="auto"
          w="100%"
          maxW="1160px"
          gap={[1, 5]}
          alignItems="center"
          templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
          justifyContent="center"
        >
          {qualities.map((item, index) => (
            <GridItem key={item.id} colSpan={item.colSpan}>
              <Flex
                align="center"
                justify="center"
                direction={["row", "column"]}
              >
                <Image
                  src={item.icon}
                  alt="logo"
                  w={'5.3rem'}
                  justifySelf="center"
                  display={["none", "block"]}
                />
                <Box
                  bg="yellow.400"
                  borderRadius="50"
                  w="0.5rem"
                  h="0.5rem"
                  mr="0.5rem"
                  display={["block", "none"]}
                />
                <Text
                  fontWeight="600"
                  mt={["0rem", "1rem"]}
                  fontSize={20}
                >
                  {item.title}
                </Text>
              </Flex>
            </GridItem>
          ))}
        </Grid>
      </Flex>
      <Box
        w={['60px', '90px']}
        mx="auto"
        h='2px'
        bg='gray.700'
        my={['9', '20']}
      />
    </>
  )
}