import Head from 'next/head';
import Link from 'next/link';
import RootLayout from '../layout';
import styles from '../Home.module.css';

const About = () => {
  return (
    <RootLayout>
      <Head>
        <title>About Us</title>
        <meta name="description" content="Learn more about us" />
      </Head>

      <main className={styles.main}>
        <h1>About Us</h1>
        <p>This is the about page of our simple Next.js application using TypeScript.</p>
        <Link href="/" className={styles.link}>Go back to home</Link>
      </main>

      <footer className={styles.footer}>
        <p>Powered by Next.js</p>
      </footer>
    </RootLayout>
  );
};

export default About;
