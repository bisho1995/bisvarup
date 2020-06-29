import React from 'react';

export default function Npm() {
  return (
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
            <p className="text-base leading-relaxed mt-2">
              Execute a task now and wait until a time interval to execute another task.

              Suppose you need to show a snackbar message to a user after getting the API response from the server. After 5 seconds you need to redirect the user to the target route given by the API. You can solve this problem easily using this module.
            </p>
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
            <p className="text-base leading-relaxed mt-2">
              Wrap any component with this component to show a read more text. On clicking the read more text user will be able to see the full content. On full content is shown it cannot be reverted back.
              <br />
              There is also a withReadMore HOC wrapper along with this file. They do the same thing and usage depends on the choice of the user.
            </p>
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
  );
}
