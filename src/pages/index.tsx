import { Flex, Heading } from '@chakra-ui/react';
import { Banner } from '../components/Banner';
import { Header } from '../components/Header';
import { Qualities } from '../components/Qualities';
import { Slider } from '../components/Slider';

export default function Home() {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <Qualities />

      <Heading
        textAlign="center"
        fontWeight="500"
        mb={["5", "14"]}
        fontSize={["lg",
          "3xl",
          "4xl"]}
      >
        Vamos nessa?<br /> Então escolha seu continete
      </Heading>

      <Slider />
    </Flex>
  )
}

