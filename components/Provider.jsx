"use client";

import { SessionProvider } from "next-auth/react";

// Import with next's dynamic import
import dynamic from 'next/dynamic';

const Provider = ({ children, session }) => {
  const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
    ssr: false,
  });
  return (
    <SessionProvider session={session}>
      <AnimatedCursor />
      {children}
    </SessionProvider>
  )
}

export default Provider
