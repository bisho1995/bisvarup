/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Hero from '../components/index/Hero/Hero'
import Career from '../components/index/Career/Career'
import Divider from '../components/commons/Divider'

const Youtube = dynamic(() => import('../components/index/Youtube/Youtube'))
const Npm = dynamic(() => import('../components/index/Npm/npm'))
const Stats = dynamic(() => import('../components/index/Stats/Stats'))
const Footer = dynamic(() => import('../components/index/Footer/Footer'))

const Home = () => (
  <div>
    <Head>
      <title>Bisvarup Mukherjee</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Hero />

    <Divider />

    <Career />

    <Divider />

    <Youtube />

    <Divider />

    <Npm />

    <Divider />

    <Stats />

    <Footer />
  </div>
)

export default Home
