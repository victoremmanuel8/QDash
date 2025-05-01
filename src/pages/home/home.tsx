import { FC } from 'react'
import { Button, Container, Title } from './home.style'
import Link from 'next/link'

const Home: FC = () => {
  return (
    <Container>
      <Title>Home</Title>
      <Button>
        <Link href="/about">About</Link>
      </Button>
    </Container>
  )
}

export default Home
