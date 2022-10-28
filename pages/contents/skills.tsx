import type { NextPage } from 'next'
import styles from '../../styles/Home.module.css'

const proficientSkills: Array<string> = [
    "C",
    "C++",
    "Rust",
    "Javascript (Typescript)"
];
const usableSkills: Array<string> = [
    "C#",
    "Python",
    "Haskell",
    "Go",
    "Docker",
    "Git",
    "React",
    "Vue"
]
const touchedSkills: Array<string> = [
    "Ruby",
    "Java",
    "Elm",
    "Common Lisp",
    "kubernetes"
]

type skillsType = Array<[string, Array<string>]>
const allSkills: skillsType = [
    ["Proficient", proficientSkills],
    ["Be usable", usableSkills],
    ["Touched it", touchedSkills]
]

const Skills: NextPage = () => {
    const skillsComponent = allSkills.map(([tagName, skills]) => (
        <section key={"tag-" + tagName} className={styles.grid_skill}>
            <h3 className={styles.description_skill}>
                {tagName}
            </h3>
            <div className={styles.grid_card_skill}>
                {skills.map((skill) => (
                    <p key={"skill-" + skill} className={styles.card_skill}>
                        {skill}
                    </p>
                ))}
            </div>
        </section>
    ))
    return (
        <div>
            {skillsComponent}
        </div>
    )
}

export default Skills