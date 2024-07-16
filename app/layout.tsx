import './globals.css';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <div className="container">
          {children}
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
