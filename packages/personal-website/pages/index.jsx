/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Head from 'next/head';
import styles from '../styles/index.scss';

const Home = () => (
  <div>
    <Head>
      <title>Bisvarup Mukherjee</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <section className="text-gray-700 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img className="object-cover object-center rounded-full" alt="bisvarup mukherjee" src="/images/profile_photo.jpg" />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Bisvarup Mukherjee (
            <a className="inline-block text-red-500" href="https://twitter.com/BisvarupMukher1" target="_blank" rel="noreferrer nofollow">@BisvarupMukher1</a>
            )
          </h1>
          <p className="mb-4 leading-relaxed">
            Hi, during day
            <span role="img" aria-label="sun">☀️</span>
            I am an UI engineer at
            <a href="https://www.flipkart.com/" className="text-red-500" target="_blank" rel="noreferrer nofollow"> @flipkart</a>
            , hacking away with React, typescript, scss, cypress and whole bunch of other tools.
          </p>
          <p className="mb-4 leading-relaxed">
            At night
            {' '}
            <span role="img" aria-label="moon">🌚</span>
            {' '}
            I am a fullstack developer bashing my keyboard typing away nodejs, gatsby, nextjs, MySQL and occasional bash scripts.
          </p>
          <p className="mb-4 leading-relaxed">
            I also write a lot on by blog,
            {' '}
            <a className="text-red-500" href="https://blog.bisvarup.me/" target="_blank" rel="noreferrer nofollow">https://blog.bisvarup.me/</a>
            , it is created using gatsbyjs and hosted on Vercel.
          </p>
          <span className="inline-flex sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-gray-500" href="https://www.facebook.com/bisvarup.mukherjee.9/" target="_blank" rel="noreferrer nofollow">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a className="ml-3 text-gray-500" href="https://twitter.com/BisvarupMukher1" target="_blank" rel="noreferrer nofollow">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a className="ml-3 text-gray-500" href="https://www.linkedin.com/in/bisvarup-mukherjee-78865a131/" target="_blank" rel="noreferrer nofollow">
              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" stroke="none" />
              </svg>
            </a>
          </span>
        </div>

      </div>
    </section>

    <div class="container w-2/4 h-1 bg-red-500 m-auto"></div>

    <section className="text-gray-700 body-font">
      <h1 className="mt-10 mb-16 text-center sm:text-4xl text-3xl mb-4 font-medium text-gray-900">And add some YouTube as well...</h1>
      <div className="container px-5 pb-24 mx-auto">
        <div className="flex flex-wrap -mx-4 -mb-10 text-center">
          <div className="w-full sm:w-1/2 mb-10 px-4">
            <div className="rounded-lg overflow-hidden">
              <iframe className="w-full" title="gatsby search post part 1" src="https://www.youtube.com/embed/XoKPFOPaoIk" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
            <p className="leading-relaxed text-base mt-6 mb-3">Gatsbyjs | adding a search post functionality | part 1</p>
          </div>
          <div className="w-full sm:w-1/2 mb-10 px-4">
            <div className="rounded-lg  overflow-hidden">
              <iframe className="w-full" title="gatsby search post part 2" width="560" height="315" src="https://www.youtube.com/embed/7vofO7capUo" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
            <p className="leading-relaxed text-base mt-6 mb-3">Gatsbyjs | adding a search post functionality | part 2</p>
          </div>
        </div>
        <a href="https://www.youtube.com/channel/UCi8aTCUtzuJ1U7jjzPZiC7g" target="_blank" rel="noreferrer nofollow"><button type="button" className="flex mx-auto mt-6 text-white bg-red-500 border-0 py-2 px-5 focus:outline-none hover:bg-red-600 rounded">Subscribe to my Channel 😛</button></a>
      </div>
    </section>

    <div class="container w-2/4 h-1 bg-red-500 m-auto"></div>

    <section class="text-gray-700 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col">
      <div class="bg-gray-200 rounded overflow-hidden">
        <div class="w-24 h-full bg-red-500"></div>
      </div>
      <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
        <h1 class="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Add in some npm publications as well</h1>
        <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0 text-right">Occassionally I publish some npm projects as well 😎</p>
      </div>
    </div>
    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1203x503" />
        </div>
        <h2 class="text-xl font-medium title-font text-gray-900 mt-5">waituntil2</h2>
        <p class="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
        <a href="https://www.npmjs.com/package/waituntil2" target="_blank" rel="noreferrer nofollow" class="text-red-500 inline-flex items-center mt-3">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1204x504" />
        </div>
        <h2 class="text-xl font-medium title-font text-gray-900 mt-5">asymmetric-encryption</h2>
        <p class="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
        <a href="https://www.npmjs.com/package/asymmetric-encryption" target="_blank" rel="noreferrer nofollow" class="text-red-500 inline-flex items-center mt-3">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1205x505" />
        </div>
        <h2 class="text-xl font-medium title-font text-gray-900 mt-5">@bisvarup/react-read-more</h2>
        <p class="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
        <a href="https://www.npmjs.com/package/@bisvarup/react-read-more" target="_blank" rel="noreferrer nofollow" class="text-red-500 inline-flex items-center mt-3">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>

  </div>
);

export default Home;
