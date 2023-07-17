import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
// import Instagram from '../components/Offers';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hotel Toni Llogora</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        heading="MIRESEVINI"
        message="Pushimet më të mira fillojnë ne Hotel Toni, aty ku mali perqafon detin."
      />
    </div>
  )
}
