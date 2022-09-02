import Head from "next/head";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>BEB</title>
        <meta name="description" content="Anon feedback app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
