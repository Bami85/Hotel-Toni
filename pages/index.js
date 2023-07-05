import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
// import Instagram from '../components/Instagram';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hotel Toni Llogora</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        heading="Welcome to Llogora - Albania"
        message="Pushimet më të mira fillojnë këtu te Hotel Toni!"
      />
    </div>
  )
}
