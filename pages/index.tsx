import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { FaGithub } from "react-icons/fa"

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

        <div className={styles.grid}>
          <a
            href=""
            className={styles.card}
            target="_blank" rel="noopener noreferrer"
          >
            <h2>whack-a-gopher &rarr;</h2>
            <p>Fun game to play whack-a-mole with cute characters.</p>
          </a>

          <a href="https://github.com/yuu-sky20/actix-space-remover"
            className={styles.card}
            target="_blank" rel="noopener noreferrer"
          >
            <h2>actix-space-remover &rarr;</h2>
            <p>Remove superfluous line breaks and white space from text.</p>
          </a>

          <a
            href="https://github.com/yuu-sky20/slot-machine-app"
            className={styles.card}
            target="_blank" rel="noopener noreferrer"
          >
            <h2>slot-machine-app &rarr;</h2>
            <p>Experience a slot machine game.</p>
          </a>

          <a
            href="https://github.com/yuu-sky20/simple-web-piano"
            className={styles.card}
            target="_blank" rel="noopener noreferrer"
          >
            <h2>Simple Web Piano &rarr;</h2>
            <p>That can be played on the web.</p>
          </a>
        </div>

        <p className={styles.description}>
          Skills
        </p>

        <div>
          <section className={styles.grid_skill}>
            <h3 className={styles.description_skill}>Proficient</h3>
            <div className={styles.grid_card_skill}>
              <p className={styles.card_skill}>
                C
              </p>
              <p className={styles.card_skill}>
                C++
              </p>
              <p className={styles.card_skill}>
                Rust
              </p>
              <p className={styles.card_skill}>
                Javascript (Typescript)
              </p>
            </div>
          </section>
          <section className={styles.grid_skill}>
            <h3 className={styles.description_skill}>Be usable</h3>
            <div className={styles.grid_card_skill}>
              <p className={styles.card_skill}>
                C#
              </p>
              <p className={styles.card_skill}>
                Python
              </p>
              <p className={styles.card_skill}>
                Haskell
              </p>
              <p className={styles.card_skill}>
                Go
              </p>
              <p className={styles.card_skill}>
                Docker
              </p>
              <p className={styles.card_skill}>
                Git
              </p>
              <p className={styles.card_skill}>
                React
              </p>
              <p className={styles.card_skill}>
                Vue
              </p>
            </div>
          </section>
          <section className={styles.grid_skill}>
            <h3 className={styles.description_skill}>Touched it</h3>
            <div className={styles.grid_card_skill}>
              <p className={styles.card_skill}>
                Ruby
              </p>
              <p className={styles.card_skill}>
                Java
              </p>
              <p className={styles.card_skill}>
                Elm
              </p>
              <p className={styles.card_skill}>
                Common Lisp
              </p>
              <p className={styles.card_skill}>
                Kubernetes
              </p>
            </div>
          </section>
        </div>


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
