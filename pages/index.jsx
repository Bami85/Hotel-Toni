import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
// import Instagram from '../components/Offers';
import Footer from '../components/Footer'
import useSWR from 'swr'
import { useTranslation } from 'react-i18next'
import i18n from './ i18n'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Home({ text, p }) {
  const { t } = useTranslation()

  const router = useRouter()
  const id = router.query.id

  return (
    <>
      <div>
        <Head>
          <title>Hotel Toni Llogora</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div></div>
        <Hero
          heading={t('welcome')}
          message={t('description')}
          description=""
        />
        <div className="mx-auto max-w-2xl lg:max-w-4xl"></div>
        <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
          <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <figure className="mt-10">
              <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                <p>{t('welcome')}</p>
                <p>{t('description')}</p>
              </blockquote>
            </figure>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
