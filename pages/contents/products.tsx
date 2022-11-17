import type { NextPage } from 'next'
import { Card, CardContent, CardActions, Typography, Grid, Link } from '@mui/material'
import { FaGithub, FaLaptop } from 'react-icons/fa'
import { css } from '@emotion/css'

type productUrl = string
type githubUrl = string
type title = string
type comment = string

const allProducts: Array<[productUrl, githubUrl, title, comment]> = [
    [
        "",
        "https://github.com/yuu-sky20/whack-a-gopher",
        "whack-a-gopher",
        "Fun game to play whack-a-mole with cute characters."
    ],
    [
        "https://quiet-praline-e7ca33.netlify.app/",
        "https://github.com/yuu-sky20/gabugabu",
        "gabugabu",
        "Abyssos: The Fifth Circle (Savage) gabugabu action."
    ],
    [
        "",
        "https://github.com/yuu-sky20/actix-space-remover",
        "actix-space-remover",
        "Remove superfluous line breaks and white space from text."
    ],
    [
        "https://tender-darwin-23a989.netlify.app/",
        "https://github.com/yuu-sky20/slot-machine-app",
        "slot-machine-app",
        "Experience a slot machine game."
    ],
    [
        "https://yuu-sky20.github.io/simple-web-piano/dist/",
        "https://github.com/yuu-sky20/simple-web-piano",
        "Simple Web Piano",
        "That can be played on the web."
    ]
]

const styleLink = css`
    &:hover svg, &:focus svg, &:active svg {
        fill: black;
    }
`

const Products: NextPage = () => {
    const productsComponent = allProducts.map(([productUrl, githubUrl, title, comment]) => (
        <Grid item xs={2} sm={4} md={4} key={"product-" + title}>
            <Card sx={{maxWidth: 500}}>
                <CardContent>
                    <Typography variant="h5">
                        {title}
                    </Typography>
                    <Typography variant="subtitle1">
                        {comment}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link href={githubUrl} target="_blank" className={styleLink}>
                        {githubUrl != "" && <FaGithub color={"ccc"} size={"1.5rem"}></FaGithub>}
                    </Link>
                    <Link href={productUrl} target="_blank" className={styleLink}>
                        {productUrl != "" && <FaLaptop color={"ccc"} size={"1.5rem"}></FaLaptop>}
                    </Link>
                </CardActions>
            </Card>
        </Grid>
    ))

    return (
        <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
            {productsComponent}
        </Grid>
    )
}

export default Products