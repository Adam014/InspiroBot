import '@styles/globals.css';

export const metadata = {
    title: 'InspiroBot',
    description: 'Discover & share AI Prompts',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
        <body>
            <div className='main'>
                <div className='gradient'></div>
            </div>
            <main>
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout;