"use client";

import Feed from '@components/Feed';
import { useSession } from 'next-auth/react';
import GitHubButton from "react-github-btn";

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
      {session?.user.id !== undefined ? <Feed /> : <p className='blue_gradient font-bold mt-20'>You are not logged in!</p>}
      <div className="fixed bottom-0 p-5 z-50 left-0">
        <GitHubButton href="https://github.com/buttons/github-buttons" data-color-scheme="no-preference: dark_dimmed; light: dark_dimmed; dark: dark_dimmed;" data-size="large" data-show-count="true" aria-label="Star buttons/github-buttons on GitHub">Star this project on GitHub</GitHubButton>
      </div>
    </section>
  )
}

export default Home
