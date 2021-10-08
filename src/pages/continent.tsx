import { Flex } from '@chakra-ui/react';
import { BannerContinent } from '../components/BannerContinent';
import { BannerDescription } from '../components/BannerDescription';
import { Cities } from '../components/Cities';
import { Header } from '../components/Header';

export default function Continent() {
  return (
    <Flex direction="column">
      <Header isBackButton={true} />
      <BannerContinent />
      <BannerDescription />
      <Cities />
    </Flex>
  )
}