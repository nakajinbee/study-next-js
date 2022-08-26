import Hero from 'components/Hero'
import Container from 'components/container'
import PostBody from 'components/post-body'
import Contact from 'components/contact'

export default function About() {
  return (
    <Container>
      <Hero
        title="About"
        subtitle="Abßout development activities"
      />
      <PostBody>
        <p>~説明文1~</p>
        <h2>タイトル２</h2>
        <p>~説明文2~</p>
        <h3>タイトル3</h3>
        <p>~説明文3~</p>
      </PostBody>

      <Contact />
    </Container>
  )
}
