import { Flex, Image, Grid, Link } from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router'

interface HeaderProps {
  isBackButton?: boolean
}

export function Header({ isBackButton }: HeaderProps) {
  const router = useRouter();

  return (
    <Flex
      as="header"
      align="center"
      justify="center"
      h={["3rem", "6.25rem"]}
      w="100%"
      bg="gray.100"
      px="1rem"
      mx="auto"
    >
      <Grid
        h="100%"
        mx="auto"
        w="100%"
        maxW="1160px"
        alignItems="center"
        templateColumns="repeat(3, 1fr)"
        justifyContent="center"
      >
        {isBackButton && (
          <Link onClick={() => router.back()}>
            <a>
              <ChevronLeftIcon
                w={[5, 8]}
                h={[5, 8]}
                color="gray.700"
                gridColumn="1"
              />
            </a>
          </Link>

        )}

        <Image
          src="/images/logo.svg"
          alt="logo"
          w={['5rem', '11.5rem']}
          justifySelf="center"
          gridColumn="2"
        />
      </Grid>

    </Flex>
  )
}