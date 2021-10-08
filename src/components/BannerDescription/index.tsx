import { Flex, Text, Box, Heading, Spacer } from '@chakra-ui/react';

export function BannerDescription() {

  const continentData = [
    {
      id: String(Math.random()),
      number: 50,
      type: 'países'
    },
    {
      id: String(Math.random()),
      number: 60,
      type: 'línguas'
    },
    {
      id: String(Math.random()),
      number: 27,
      type: 'cidades +100'
    },
  ]


  return (
    <Flex
      h={["10rem", "31rem"]}
      w="100%"
      px="1rem"
      py="5rem"
      mx="auto"
      my="auto"
    >
      <Flex
        direction={['column', 'row']}
        justify={["center", 'space-between']}
        align="center"
        w="100%"
        mx="auto"
        px={["4", "10", "15", "20", "36"]}
        mt={['5rem', '5rem', '0']}
      >
        <Text
          color="gray.700"
          fontWeight="400"
          fontSize={["16px", "20px"]}
          maxW={['100%', '50%']}
        >
          A Europa é, por convenção, um dos seis continentes do mundo.
          Compreendendo a península ocidental da Eurásia, a Europa geralmente
          divide-se da Ásia a leste pela divisória de águas dos montes Urais,
          o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Text>
        <Flex
          p="1rem"
          justify="space-between"
          align="center"
          w="100%"
        >
          {continentData.map(item => (
            <>
              <Flex
                minW={['auto', '4rem', '8rem', '10rem']}
                key={item.id}
                direction="column"
                align="center"
                justify="center"
                mr={["0", "1rem"]}
              >
                <Heading
                  color="yellow.400"
                  fontWeight="700"
                  fontSize={["20px", "40px"]}
                >
                  {item.number}
                </Heading>
                <Text
                  color="gray.700"
                  fontWeight="700"
                  fontSize={["16px", "20px"]}
                >
                  {item.type}
                </Text>
              </Flex>
            </>
          ))}
        </Flex>
      </Flex>
    </Flex>
  )
}