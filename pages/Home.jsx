import Head from 'next/head';
import Image from 'next/image';
// import Hero from '../components/Hero';
// import MapComponent from '../components/MapComponent';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hotel Toni Llogora</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className='relative'>
        <video autoPlay loop muted className='w-full h-auto'>
          <source src='/llogoravideo.mp4' type='video/mp4' /> {/* Replace with the path to your video file */}
        </video>
        <div className='absolute inset-0 bg-black/70 z-10'></div>
      </div>
    </div>
  );
}

