import React from 'react';

const socialMediaIcons = [
  {
    el: (<svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>),
    link: 'https://www.facebook.com/bisvarup.mukherjee.9/',
  },
  {
    el: (<svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
         </svg>),
    link: 'https://twitter.com/BisvarupMukher1',
  },
  {
    el: (<svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
      <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" stroke="none" />
         </svg>),
    link: 'https://www.linkedin.com/in/bisvarup-mukherjee-78865a131/',
  },
];

export default function Hero() {
  return (
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
            {' '}
            I am an UI engineer at
            <a href="https://www.flipkart.com/" className="text-red-500" target="_blank" rel="noreferrer nofollow"> @flipkart</a>
            , hacking away with
            {' '}
            <b>React</b>
            ,
            {' '}
            <b>typescript</b>
            ,
            {' '}
            <b>scss</b>
            ,
            {' '}
            <b>cypress</b>
            {' '}
            and whole bunch of other tools.
          </p>
          <p className="mb-4 leading-relaxed">
            At night
            {' '}
            <span role="img" aria-label="moon">🌚</span>
            {' '}
            I am a fullstack developer bashing my keyboard typing away
            {' '}
            <b>nodejs</b>
            ,
            {' '}
            <b>gatsby</b>
            ,
            {' '}
            <b>nextjs</b>
            ,
            {' '}
            <b>MySQL</b>
            {' '}
            and occasional
            {' '}
            <b>bash</b>
            {' '}
            scripts.
          </p>
          <p className="mb-4 leading-relaxed">
            I also write a lot on by
            {' '}
            <a className="text-red-500" href="https://blog.bisvarup.me/" target="_blank" rel="noreferrer nofollow">blog</a>
            , it is created using
            {' '}
            <b>gatsbyjs</b>
            {' '}
            and hosted on
            {' '}
            <b>Vercel</b>
            .
          </p>
          <span className="inline-flex sm:mt-0 mt-4 justify-center sm:justify-start">
            {socialMediaIcons.map(({ link, el }) => <a className="ml-3 text-gray-500" href={link} target="_blank" rel="noreferrer nofollow">{el}</a>)}
          </span>
        </div>

      </div>
    </section>
  );
}
