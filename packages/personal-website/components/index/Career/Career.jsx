import React from 'react';

const careerAr = [
  {
    image: (<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>),
    textEl: (<p className="leading-relaxed">
      Joined as a full-stack developer at
      <a className="text-red-500" href="https://www.tcs.com/research-and-innovation" target="_blank" rel="noreferrer nofollow">@TCS Innovation Lab, Chennai</a>
             </p>),
  },
  {
    image: (<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>),
    textEl: (<p className="leading-relaxed">
      Joined the frontend infra team
      <a className="text-red-500" href="https://tracxn.com/" rel="noreferrer nofollow" target="_blank">@tracxn</a>
             </p>),
  },
  {
    image: (<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
      <circle cx="12" cy="5" r="3" />
      <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3" />
    </svg>),
    textEl: (<p className="leading-relaxed">
      Joined as a UI engineer
      <a className="text-red-500" href="https://www.flipkart.com/" rel="nofollow noreferrer" target="_blank">@flipkart</a>
             </p>),
  },
];

export default function Career() {
  return (
    <section className="text-gray-700 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <h1 className="title-font text-center w-full sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          Until now...
        </h1>
        <div className="flex flex-wrap w-full">
          <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
            {careerAr.map(({ image, textEl }, idx) => (
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500 inline-flex items-center justify-center text-white relative z-10">
                  {image}
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                    STEP
                    {' '}
                    {' '}
                    {idx + 1}
                  </h2>
                  {textEl}
                </div>
              </div>
            ))}

            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none" />
              </div>
            </div>
            <div className="flex relative">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500 inline-flex items-center justify-center text-white relative z-10">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
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
  );
}
