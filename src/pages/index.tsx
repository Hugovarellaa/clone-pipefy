import styles from "../styles/global.module.scss";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Ignews</title>
      </Head>
      <h1 className={styles.title}>Ola mundo!!</h1>
    </>
  );
}
