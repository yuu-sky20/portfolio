import type { NextPage } from 'next'
import styles from '../../styles/Home.module.css'

type url = string
type title = string
type comment = string


const allProducts: Array<[url, title, comment]> = [
    [
        "https://github.com/yuu-sky20/whack-a-gopher",
        "whack-a-gopher",
        "Fun game to play whack-a-mole with cute characters."
    ],
    [
        "https://quiet-praline-e7ca33.netlify.app",
        "gabugabu",
        "Abyssos: The Fifth Circle (Savage)'s gabugabu in action."
    ],
    [
        "https://github.com/yuu-sky20/actix-space-remover",
        "actix-space-remover",
        "Remove superfluous line breaks and white space from text."
    ],
    [
        "https://github.com/yuu-sky20/slot-machine-app",
        "slot-machine-app",
        "Experience a slot machine game."
    ],
    [
        "https://github.com/yuu-sky20/simple-web-piano",
        "Simple Web Piano",
        "That can be played on the web."
    ]
]

const Products: NextPage = () => {
    const productsComponent = allProducts.map(([url, title, comment]) => (
        <a  key={"product-" + title}
            href={url}
            className={styles.card}
            target="_blank" rel="noopener noreferrer"
        >
            <h2>{title} &rarr;</h2>
            <p>{comment}</p>
        </a>
    ))
    
    return (
        <div className={styles.grid}>
            {productsComponent}
        </div>
    )
}

export default Products