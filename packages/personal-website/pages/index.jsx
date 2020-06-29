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
            <a className="inline-block text-red-500" href="https://twitter.com/BisvarupMukher1" target="_blank" rel="noreferrer nofollow">@Bisvarup Mukherjee </a>
            
          </h1>
          <p className="mb-4 leading-relaxed">
            Hi, during day
            <span role="img" aria-label="sun">☀️</span>
{' '}I am an UI engineer at
            <a href="https://www.flipkart.com/" className="text-red-500" target="_blank" rel="noreferrer nofollow"> @flipkart</a>
            , hacking away with <b>React</b>, <b>typescript</b>, <b>scss</b>, <b>cypress</b> and whole bunch of other tools.
          </p>
          <p className="mb-4 leading-relaxed">
            At night
            {' '}
            <span role="img" aria-label="moon">🌚</span>
            {' '}
            I am a fullstack developer bashing my keyboard typing away <b>nodejs</b>, <b>gatsby</b>, <b>nextjs</b>, <b>MySQL</b> and occasional <b>bash</b> scripts.
          </p>
          <p className="mb-4 leading-relaxed">
            I also write a lot on by
            {' '}
            <a className="text-red-500" href="https://blog.bisvarup.me/" target="_blank" rel="noreferrer nofollow">blog</a>
            , it is created using <b>gatsbyjs</b> and hosted on <b>Vercel</b>.
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
            <a>
              
            </a>
          </span>
        </div>

      </div>
    </section>

    <div className="container w-2/4 h-1 bg-red-500 m-auto" />


    <section className="text-gray-700 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
  <h1 className="title-font text-center w-full sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
      Until now...
    </h1>
    <div className="flex flex-wrap w-full">
      <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 1</h2>
            <p className="leading-relaxed">Joined as a full-stack developer at <a className="text-red-500" href="https://www.tcs.com/research-and-innovation" target="_blank" rel="noreferrer nofollow">@TCS Innovation Lab, Chennai</a></p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 2</h2>
            <p className="leading-relaxed">Joined the frontend infra team <a className="text-red-500" href="https://tracxn.com/" rel="noreferrer nofollow" target="_blank">@tracxn</a></p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <circle cx="12" cy="5" r="3"></circle>
              <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 3</h2>
            <p className="leading-relaxed">Joined as a UI engineer <a className="text-red-500" href="https://www.flipkart.com/" rel="nofollow noreferrer" target="_blank">@flipkart</a></p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
        </div>
        <div className="flex relative">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">FINISH</h2>
            <p className="leading-relaxed">It's not yet finished...</p>
          </div>
        </div>
      </div>
      <img className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12" src="https://source.unsplash.com/AndE50aaHn4/800x700" alt="step" />
    </div>
  </div>
</section>


<div className="container w-2/4 h-1 bg-red-500 m-auto" />


    <section className="text-gray-700 body-font">
    <h1 className="mt-10 mb-16 text-center sm:text-4xl text-3xl mb-4 font-medium text-gray-900">And add some YouTube as well...</h1>
  <div className="container px-5 pb-24 mx-auto flex flex-wrap">
  <div style={{height: 350}}  className="w-full md:w-1/2 ">
  <iframe className="w-full h-full" title="gatsby search post part 1" src="https://www.youtube.com/embed/XoKPFOPaoIk" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
    </div>
    <div className="w-full md:w-1/2 md:pl-6">
      <p className="leading-relaxed text-base">
        Occassionally I contribute back to the community in the form of videos. I have been doing this for a long time, and I still plan to upload at times. This time I plan on putting out higher quality content 😎</p>
      <div className="flex md:mt-4 mt-6">
        <a className="m-auto md:ml-0" href="https://www.youtube.com/channel/UCi8aTCUtzuJ1U7jjzPZiC7g/videos" target="_blank" rel="noreferrer nofollow"><button type="button" className="flex mx-auto mt-6 text-white bg-red-500 border-0 py-2 px-5 focus:outline-none hover:bg-red-600 rounded">Watch more videos</button></a>
      </div>
    </div>
  </div>
</section>

    <div className="container w-2/4 h-1 bg-red-500 m-auto" />

    <section className="text-gray-700 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col">
          <div className="bg-gray-200 rounded overflow-hidden">
            <div className="w-24 h-full bg-red-500" />
          </div>
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Add in some npm publications as well</h1>
            <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0 text-right">
              Occassionally I publish some npm projects as well
              <span role="img" aria-label="sunglasses">😎</span>
            </p>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
            <img alt="content" className="object-cover object-center h-full w-full" src="https://source.unsplash.com/KE0nC8-58MQ/500x500" />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">waituntil2</h2>
            <p className="text-base leading-relaxed mt-2">Execute a task now and wait until a time interval to execute another task.

Suppose you need to show a snackbar message to a user after getting the API response from the server. After 5 seconds you need to redirect the user to the target route given by the API. You can solve this problem easily using this module.</p>
            <a href="https://www.npmjs.com/package/waituntil2" target="_blank" rel="noreferrer nofollow" className="text-red-500 inline-flex items-center mt-3">
              Checkout
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
            <img alt="content" className="object-cover object-center h-full w-full" src="https://source.unsplash.com/KE0nC8-58MQ/500x500" />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">asymmetric-encryption</h2>
            <p className="text-base leading-relaxed mt-2">Generate Public-Private keypair on your server for asymmetric encryption and decryption</p>
            <a href="https://www.npmjs.com/package/asymmetric-encryption" target="_blank" rel="noreferrer nofollow" className="text-red-500 inline-flex items-center mt-3">
              Checkout
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
            <img alt="content" className="object-cover object-center h-full w-full" src="https://source.unsplash.com/KE0nC8-58MQ/500x500" />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">@bisvarup/react-read-more</h2>
            <p className="text-base leading-relaxed mt-2">Wrap any component with this component to show a read more text. On clicking the read more text user will be able to see the full content. On full content is shown it cannot be reverted back.
<br/>
There is also a withReadMore HOC wrapper along with this file. They do the same thing and usage depends on the choice of the user.</p>
            <a href="https://www.npmjs.com/package/@bisvarup/react-read-more" target="_blank" rel="noreferrer nofollow" className="text-red-500 inline-flex items-center mt-3">
              Checkout
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <div className="container w-2/4 h-1 bg-red-500 m-auto" />

    <section className="text-gray-700 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4 text-center">
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">3</h2>
        <p className="leading-relaxed">npm packages</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">1K</h2>
        <p className="leading-relaxed">Youtube Subscribes</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">40+</h2>
        <p className="leading-relaxed">GitHub repos</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">2</h2>
        <p className="leading-relaxed">Products</p>
      </div>
    </div>
  </div>
</section>

    <footer className="bg-gray-200 text-center py-10">
      Site powered by
      {' '}
      <a className="text-red-500" href="https://nextjs.org/" target="_blank" rel="noreferrer nofollow">NextJs</a>
      {' '}
      &
      {' '}
      <a className="text-red-500" href="https://vercel.com" target="_blank" rel="noreferrer nofollow">Vercel</a>
    </footer>

  </div>
);

export default Home;
