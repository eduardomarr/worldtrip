import { Flex, Heading, Text, Image } from '@chakra-ui/react';

export function BannerContinent() {
  return (
    <Flex
      h={["10rem", "31rem"]}
      w="100%"
      px="1rem"
      py="5rem"
      bgImage="url('./images/continentBanner.png')"
      bgPosition={["100% 20%", "100% 20%", "100% 30%"]}
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex
        justify={["center", 'flex-start']}
        align={["center", "flex-end"]}
        w="100%"
        mx="auto"
        px={["4", "10", "15", "20", "36"]}
      >
        <Heading
          color="gray.100"
          fontWeight="500"
          fontSize={["xl", "4xl"]}
        >
          Europa
        </Heading>
      </Flex>

    </Flex>
  )
}