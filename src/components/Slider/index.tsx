import { Flex, Link, Heading, Text } from '@chakra-ui/react';

import SwiperCore, { Pagination, A11y, Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// SwiperCore.use([Navigation, Pagination, A11y]);

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

export function Slider() {
  return (
    <Flex
      w="100%"
      maxW="1240px"
      mx="auto"
      mb={["5", "10"]}
      h={["250px", "450px"]}
    >
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
        }}
        style={{ width: '100%', flex: '1' }}
      >

        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
            direction="column"
            bgImage={'url(/images/europe.png)'}
            bgPosition="100% 30%"
            bgRepeat="no-repeat"
            bgSize="cover"
            textAlign="center"
          >
            <Link href={'/continent'}>
              <a>
                <Heading fontSize={["3xl", "4xl", "5xl"]} color="gray.100" fontWeight="bold">Europa</Heading>
                <Text fontWeight="bold" color="gray.300" fontSize={["0.8rem", "1xl", "2xl"]} mt={["2", "4"]}>O continente mais velho do mundo</Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>

        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
            direction="column"
            bgImage={'url(/images/europe.png)'}
            bgPosition="100% 30%"
            bgRepeat="no-repeat"
            bgSize="cover"
            textAlign="center"
          >
            <Link href={'/continent'}>
              <a>
                <Heading fontSize={["3xl", "4xl", "5xl"]} color="gray.100" fontWeight="bold">Europa</Heading>
                <Text fontWeight="bold" color="gray.300" fontSize={["0.8rem", "1xl", "2xl"]} mt={["2", "4"]}>O continente mais velho do mundo</Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>

      </Swiper>

    </Flex>
  )
}