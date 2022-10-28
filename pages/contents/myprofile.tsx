import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import { FaGithub } from "react-icons/fa"

const MyProfile: NextPage = () => {
    return (
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
    )
}

export default MyProfile