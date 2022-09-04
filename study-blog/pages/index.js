import Hero from 'components/Hero'
import Container from 'components/container'
import Meta from 'components/Meta'

export default function Home() {
  return (
    <Container>
      <Meta />
      <Hero
        title="CUBE"
        subtitle="アウトプットするサイト"
        imageOn
      />
    </Container>
  )
}
