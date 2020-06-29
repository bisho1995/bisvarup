import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-200 text-center py-10">
      Site powered by
      {' '}
      <a className="text-red-500" href="https://nextjs.org/" target="_blank" rel="noreferrer nofollow">NextJs</a>
      {' '}
      &
      {' '}
      <a className="text-red-500" href="https://vercel.com" target="_blank" rel="noreferrer nofollow">Vercel</a>
    </footer>
  );
}
