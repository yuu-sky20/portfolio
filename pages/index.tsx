import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { FaGithub } from "react-icons/fa"

import Products from './contents/products'
import Skills from './contents/skills'

const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p className={styles.description}>
          My Profile
        </p>

        <div className={styles.myprofile}>
          <Image className={styles.myprofile_icon} src="/crypko.jpg" alt="profile icon" width={150} height={150} />
          <div className={styles.myprofile_comment}>
            <p>Yuusuke Koitabashi</p>
            <label className={styles.url_techful}>
              <a
                href="https://techful-programming.com/account/user/portfolio/30168"
                target="_blank" rel="noopener noreferrer"
              >
                <p>TechFUL Portfolio</p>
              </a>
            </label>
            <div>
              Github:
              <label className={styles.url_github}>
                <a
                  href="https://github.com/yuu-sky20"
                  target="_blank" rel="noopener noreferrer"
                >
                  <FaGithub size={22} color={"#ccc"} />
                </a>
              </label>
            </div>
          </div>
        </div>

        <p className={styles.description}>
          Products
        </p>

        <Products />

        <p className={styles.description}>
          Skills
        </p>
        
        <Skills />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
