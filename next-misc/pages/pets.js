import React from 'react';
// import Image from 'next/image';
import img from '../public/1.jpg';

export default function Pets() {
  return (
    <div>
      Pets Page
      {/* <Image
        src={img}
        alt="img1"
        width={280}
        height={420}
        placeholder="blur"
        blurDataURL=""
      />
      {['1', '2', '3', '4', '5'].map((path) => (
        <div key={path}>
          <Image
            src={`/${path}.jpg`}
            alt={`img${path}`}
            width={280}
            height={420}
          />
        </div>
      ))} */}
    </div>
  );
}
