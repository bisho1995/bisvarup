import React from 'react';

const images = [
  {
    attribution: 'Photo by Alberto Bigoni on Unsplash',
    url: 'https://unsplash.com/photos/S25lkmUwTk8',
  },
  {
    attribution: 'Photo by Nicolas Häns on Unsplash',
    url: 'https://unsplash.com/photos/u2LV_WJdBfQ',
  },
  {
    attribution: 'Photo by Kelly Sikkema on Unsplash',
    url: 'https://unsplash.com/photos/sR1vhfoAuvY',
  },
  {
    attribution: 'Photo by Guillaume Bolduc on Unsplash',
    url: 'https://unsplash.com/photos/uBe2mknURG4',
  },
  {
    attribution: 'Photo by Daniel Fazio on Unsplash',
    url: 'https://unsplash.com/photos/JBN6FHP5VXk',
  },
  {
    attribution: 'Photo by Przemyslaw Marczynski on Unsplash',
    url: 'https://unsplash.com/photos/oCfkSnqZ0SI',
  },
  {
    attribution: 'Photo by Steve Sawusch on Unsplash',
    url: 'https://unsplash.com/photos/PLfpXxZ9r9A',
  },
  {
    attribution: 'Photo by Fynn schmidt on Unsplash',
    url: 'https://unsplash.com/photos/IYKL2uhgsnU',
  },
  {
    attribution: 'Photo by Wesley Tingey on Unsplash',
    url: 'https://unsplash.com/photos/snNHKZ-mGfE',
  },
  {
    attribution: 'Photo by Hannah Rodrigo on Unsplash',
    url: 'https://unsplash.com/photos/mf_3yZnC6ug',
  },
  {
    attribution: 'Photo by Markus Spiske on Unsplash',
    url: 'https://unsplash.com/photos/_v6mhdOK2g0',
  },
  {
    attribution: 'Photo by Camylla Battani on Unsplash',
    url: 'https://unsplash.com/photos/AoqgGAqrLpU',
  },
  {
    attribution: 'Photo by Miltiadis Fragkidis on Unsplash',
    url: 'https://unsplash.com/photos/2zGTh-S5moM',
  },
  {
    attribution: 'Photo by Samuel Foster on Unsplash',
    url: 'https://unsplash.com/photos/lWSnXGwlfMY',
  },
  {
    attribution: 'Photo by Markus Winkler on Unsplash',
    url: 'https://unsplash.com/photos/gLdJnQFcIXE',
  },
  {
    attribution: 'Icons made by Roundicons',
    url: 'https://www.flaticon.com/',
  },
  {
    attribution: 'Photo by Martin Widenka on Unsplash',
    url: 'https://unsplash.com/photos/Je6OqQ_qahs',
  },
];

export default function Thanks() {
  return (
    <>
      {images.map(({ attribution, url }) => (
        <div>
          <a href={url} target="_blank" rel="noopener noreferrer nofollow">
            {attribution}
          </a>
        </div>
      ))}
    </>
  );
}
