import '@styles/globals.css';

import Navbar from "@components/Navbar";
import Provider from "@components/Provider";

import AnimatedCursor from "react-animated-cursor";

export const metadata = {
  title: "InspiroBot",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <body>
      <AnimatedCursor />
      <Provider>
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          <Navbar />
          {children}
        </main>
      </Provider>
    </body>
  </html>
);

export default RootLayout;