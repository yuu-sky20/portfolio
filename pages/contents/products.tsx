import type { NextPage } from 'next'
import { Card, CardContent, CardActions, Typography, Grid, Link } from '@mui/material'
import { FaGithub, FaLaptop, FaYoutube } from 'react-icons/fa'
import { MdOutlineArchitecture } from 'react-icons/md'
import { AiFillFileZip } from "react-icons/ai"
import { css } from '@emotion/css'

type AnyFunction = (...args: any[]) => any;

type KeysOfType<T, S> = {
    [key in keyof T]: S extends T[key] ? key : never;
}[keyof T];

type UndefinedToOptional<T> =
    Omit<T, KeysOfType<T, undefined>> &
    Partial<Pick<T, KeysOfType<T, undefined>>>;

type Fields<T> = UndefinedToOptional<Omit<T, KeysOfType<T, AnyFunction>>>;

class Product {
    public readonly productUrl? : string
    public readonly githubUrl? : string
    public readonly youtubeUrl? : string
    public readonly architectureUrl? : string
    public readonly zipFileUrl? : string
    public readonly title! : string
    public readonly comment! : string
    public readonly duration? : string
    constructor(props: Fields<Product>) {
        Object.assign(this, props)
    }
}

const allProducts: Array<Product> = [
    new Product({
        githubUrl: "https://github.com/yuu-sky20/Zantetsu",
        youtubeUrl: "https://youtu.be/TTnWmv8JFks",
        zipFileUrl: "https://github.com/yuu-sky20/Zantetsu/releases/tag/v1.0",
        title: "Zantetsu",
        comment: "The game is to knock down mannequins in a straight line.",
        duration: "1 day"
    }),
    new Product({
        githubUrl: "https://github.com/yuu-sky20/HighAndLow",
        youtubeUrl: "https://youtu.be/Jx-XjE1gB-E",
        title: "High and Low",
        comment: "High and Low trump game reproduced.",
        duration: "2 day"
        }),
    new Product({
        productUrl: "https://unityroom.com/games/seiton_tenchu",
        githubUrl: "https://github.com/yuu-sky20/Tenchu",
        title: "Tenchu",
        comment: "Reproduction of ff14 crystal conflict Ninja action.",
        duration: "3 week"
        }),
    new Product({
        githubUrl: "https://github.com/yuu-sky20/whack-a-gopher",
        architectureUrl: "https://drive.google.com/drive/folders/1_10vK-wVWpIXurhR_rZ6UOY3wc6o7rLG?usp=sharing",
        title: "whack-a-gopher",
        comment: "Fun game to play whack-a-mole with cute characters.",
    }),
    new Product({
        productUrl: "https://quiet-praline-e7ca33.netlify.app/",
        githubUrl: "https://github.com/yuu-sky20/gabugabu",
        title: "gabugabu",
        comment: "Preview Abyssos: The Fifth Circle (Savage) gabugabu action.",
        duration: "2 week"
    }),
    new Product({
        githubUrl: "https://github.com/yuu-sky20/actix-space-remover",
        title: "actix-space-remover",
        comment: "Remove superfluous line breaks and white space from text.",
        duration: "2 day"
    }),
    new Product({
        productUrl: "https://tender-darwin-23a989.netlify.app/",
        githubUrl: "https://github.com/yuu-sky20/slot-machine-app",
        title: "slot-machine-app",
        comment: "Experience a slot machine game.",
        duration: "1 month"
    }),
    new Product({
        productUrl: "https://yuu-sky20.github.io/simple-web-piano/dist/",
        githubUrl: "https://github.com/yuu-sky20/simple-web-piano",
        title: "Simple Web Piano",
        comment: "That can be played on the web.",
        duration: "1 month"
    }),
]

const styleLink = css`
    &:hover svg, &:focus svg, &:active svg {
        fill: black;
    }
`

const Products: NextPage = () => {
    const productsComponent = allProducts.map((product) => (
        <Grid item xs={12} sm={4} md={4} key={"product-" + product.title}>
            <Card>
                <CardContent>
                    <Typography variant="h5">
                        {product.title}
                    </Typography>
                    <Typography variant="subtitle1">
                        {product.comment}
                    </Typography>
                    <Typography variant="h6" textAlign="right" color="cadetblue">
                        {product.duration}
                    </Typography>
                </CardContent>
                <CardActions>
                    {product.githubUrl != null &&
                        <Link href={product.githubUrl} target="_blank" className={styleLink}>
                            <FaGithub color={"ccc"} size={"1.5rem"}></FaGithub>
                        </Link>
                    }
                    {product.productUrl != null &&
                        <Link href={product.productUrl} target="_blank" className={styleLink}>
                            <FaLaptop color={"ccc"} size={"1.5rem"}></FaLaptop>
                        </Link>
                    }
                    {product.youtubeUrl != null &&
                        <Link href={product.youtubeUrl} target="_blank" className={styleLink}>
                            <FaYoutube color={"ccc"} size={"1.5rem"}></FaYoutube>
                        </Link>
                    }
                    {product.architectureUrl != null &&
                        <Link href={product.architectureUrl} target="_blank" className={styleLink}>
                            <MdOutlineArchitecture color={"ccc"} size={"1.5rem"}></MdOutlineArchitecture>
                        </Link>
                    }
                    {product.zipFileUrl != null &&
                        <Link href={product.zipFileUrl} target="_blank" className={styleLink}>
                            <AiFillFileZip color={"ccc"} size={"1.5rem"}></AiFillFileZip>
                        </Link>
                    }
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