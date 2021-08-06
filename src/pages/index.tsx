import styles from '../styles/global.module.scss';
import Head from 'next/head'

export default function Home() {
  return (
     <h1 className={styles.title}> 
     <Head>
       <title>Home | Ignews</title>
     </Head>
     Ola mundo!!</h1>
  )
}
