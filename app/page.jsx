"use client";

import Feed from '@components/Feed';
import { useSession } from 'next-auth/react';

const Home = () => {
  const {data: session} = useSession();
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">Discover & Share</h1><br className="max-hd:hidden"/>
      <span className="head_text orange_gradient text-center">AI-Powered Prompts</span>
      <p className="desc text-center">
        InspiroBot is an open-source AI prompting tool for modern world to discover, create and share creative prompts.
      </p>
      
      {/* showing the feed */}
      {session?.user.id !== undefined ? <Feed /> : <p className='blue_gradient font-bold'>You are not logged in!</p>}
  
    </section>
  )
}

export default Home
