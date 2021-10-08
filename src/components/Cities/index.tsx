import { Grid, Heading, Flex } from "@chakra-ui/react";
import City from "./City";

const cities = [
  {
    id: String(Math.random()),
    city: 'Londres',
    country: 'Reino Unido',
    flag: './images/reinoFlag.png',
    image: './images/london.jpg'
  },
  {
    id: String(Math.random()),
    city: 'Paris',
    country: 'França',
    flag: './images/francaFlag.png',
    image: './images/paris.jpg'
  },
  {
    id: String(Math.random()),
    city: 'Roma',
    country: 'Itália',
    flag: './images/italiaFlag.png',
    image: './images/roma.jpg'
  },
  {
    id: String(Math.random()),
    city: 'Praga',
    country: 'República Tcheca',
    flag: './images/tchecaFlag.png',
    image: './images/praga.jpg'
  },
  {
    id: String(Math.random()),
    city: 'Amsterdã',
    country: 'Holanda',
    flag: './images/holandaFlag.png',
    image: './images/amsterdan.jpg'
  },
]

export function Cities() {
  return (
    <Flex
      direction="column"
      alignItems="center"
      w="100%"
      px={["4", "10", "15", "20", "36"]}
      py={["8rem", "1rem"]}
      mx="auto"
      my="auto"
    >
      <Heading fontWeight="500" fontSize={["2xl", "4xl"]} mb="10">Cidades +100</Heading>
      <Grid templateColumns={["1fr", "1fr 1fr", "repeat(3, 1fr)", "repeat(4, 1fr)"]} gap={['20px', '45px']} alignItems="center" justifyContent="center" px={["30px", "0"]}>
        {cities.map(city => (
          <City
            key={city.id}
            name={city.city}
            country={city.country}
            flag={city.flag}
            image={city.image}
          />
        ))}

      </Grid>
    </Flex>
  )
}