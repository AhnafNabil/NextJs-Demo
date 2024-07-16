import '../globals.css';
import Head from 'next/head';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="container">
        {children}
      </div>
    </>
  );
};

export default Layout;
