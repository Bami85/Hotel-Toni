import Head from 'next/head';
import Image from 'next/image';
// import Hero from '../components/Hero';
// import MapComponent from '../components/MapComponent';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  //change languages function
  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div>
      <Head>
        <title>Hotel Toni Llogora</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className='relative'>
        <video autoPlay loop muted className='w-full h-auto'>
          <source src='/llogoravideo.mp4' type='video/mp4' /> 
        </video>
        <div className='absolute inset-0 bg-black/70 z-10'>
        <h1>{t('welcome')}</h1>
        <p>{t('description')}</p>
        </div>
      </div>
    </div>
  );
}

