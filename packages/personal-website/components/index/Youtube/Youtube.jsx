import React from 'react';

export default function Youtube() {
  return (
    <section className="text-gray-700 body-font">
      <h1 className="mt-10 mb-16 text-center sm:text-4xl text-3xl mb-4 font-medium text-gray-900">And add some YouTube as well...</h1>
      <div className="container px-5 pb-24 mx-auto flex flex-wrap">
        <div style={{ height: 350 }} className="w-full md:w-1/2 ">
          <iframe className="w-full h-full" title="gatsby search post part 1" src="https://www.youtube.com/embed/4CLdNeetVHw" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </div>
        <div className="w-full md:w-1/2 md:pl-6">
          <p className="leading-relaxed text-base">
            Occassionally I contribute back to the community in the form of videos. I have been doing this for a long time, and I still plan to upload at times. This time I plan on putting out higher quality content 😎
          </p>
          <div className="flex md:mt-4 mt-6">
            <a className="m-auto md:ml-0" href="https://www.youtube.com/channel/UCi8aTCUtzuJ1U7jjzPZiC7g/videos" target="_blank" rel="noreferrer nofollow"><button type="button" className="flex mx-auto mt-6 text-white bg-red-500 border-0 py-2 px-5 focus:outline-none hover:bg-red-600 rounded">Watch more videos</button></a>
          </div>
        </div>
      </div>
    </section>
  );
}
