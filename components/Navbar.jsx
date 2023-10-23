"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

const Navbar = () => {
  const isUserLoggedIn = true;

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href="/" className='flex gap-2 flex-center'>
        <Image 
          src="/assets/images/inspiro-logo.svg" 
          alt='inspiro-logo'
          width={170}  
          height={170}
          className='object-contain'
        />
      </Link>

      {/* Desktop nav */}
      <div className='sm:flex hidden'>
        {isUserLoggedIn ? (
          <div className='flex gap-3 md:gap-5'>
            <Link href="/create-prompt" className='black_btn'>
              Create post
            </Link>
          </div>
        ): (
          <></>
        )}
      </div>
    </nav>
  )
}

export default Navbar
