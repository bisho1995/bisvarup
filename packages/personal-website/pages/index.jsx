/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Head from 'next/head';
import Hero from '../components/index/Hero/Hero';
import Career from '../components/index/Career/Career';
import Youtube from '../components/index/Youtube/Youtube';
import Npm from '../components/index/Npm/npm';
import Stats from '../components/index/Stats/Stats';
import Footer from '../components/index/Footer/Footer';
import Divider from '../components/commons/Divider';

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
);

export default Home;
