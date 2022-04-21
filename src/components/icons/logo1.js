import React from 'react';
import Image from 'next/image'
import logoUrl from '../assets/images/logo-white.png'

const Logo1 = ({ white, ...props }) => {
  return (
 // getting one
 <Image
 loader={myLoader}
 src={logoUrl}
 alt="logo"
 width={128}
 height={70}
/>
  );
};

export default Logo1;
