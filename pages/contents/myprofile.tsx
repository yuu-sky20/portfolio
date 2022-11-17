import type { NextPage } from 'next'
import Image from 'next/image'
import { Typography, Link } from '@mui/material'
import { FaGithub } from "react-icons/fa"
import { css } from '@emotion/css'

const styleProfile = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  max-width: 800px;
`

const styleProfileIcon = css`
  margin-right: 20px;
`

const styleProfileComment = css`
  text-align: center;
`

const styleTechfulLink = css`
  text-align: left;
  text-decoration: none;
  font-size: 1.25em;
  max-width: 300px;
  border-radius: 5px;
`

const styleIconLink = css`
    padding-left: 0.5em;
    &:hover svg, &:focus svg, &:active svg {
        fill: black;
    }
`

const MyProfile: NextPage = () => {
    return (
        <div className={styleProfile}>
          <Image className={styleProfileIcon} src="/crypko.jpg" alt="profile icon" width={150} height={150} />
          <div className={styleProfileComment}>
            <p>Yuusuke Koitabashi</p>
            <Link href="https://techful-programming.com/account/user/portfolio/30168" target="_blank" className={styleTechfulLink}>
              <p>TechFUL Portfolio</p>
            </Link>
            <Typography>
              Github:
              <Link href="https://github.com/yuu-sky20" target="_blank" className={styleIconLink}>
                <FaGithub size={22} color={"#ccc"} />
              </Link>
            </Typography>
          </div>
        </div>
    )
}

export default MyProfile