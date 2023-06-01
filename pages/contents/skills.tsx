import type { NextPage } from 'next'
import { Card, CardContent, Grid, Typography } from '@mui/material'
import { css } from '@emotion/css'

const proficientSkills: Array<string> = [
    "C",
    "C++",
    "Rust",
    "Javascript (Typescript)",
    "Vim"
];
const usableSkills: Array<string> = [
    "C#",
    "Python",
    "Haskell",
    "Go",
    "Docker",
    "Git",
    "React",
    "Vue",
    "Unity",
    "Java",
    "R",
    "Blazor",
    "AWS"
]
const touchedSkills: Array<string> = [
    "Ruby",
    "Elm",
    "Common Lisp",
    "kubernetes",
    "GraphQL",
    "Spring boot",
    "Azure",
]

type skillsType = Array<[string, Array<string>]>
const allSkills: skillsType = [
    ["Proficient", proficientSkills],
    ["Be usable", usableSkills],
    ["Touched it", touchedSkills]
]

const styleLocalGrid = css`
  margin: 1em 0;
`

const styleCard = css`
  margin: 0.5rem;
  &:hover, &:focus, &:active {
    color:rgb(0, 131, 85);
    border-color: rgb(0, 131, 85);
    background-color: rgb(175, 255, 215);
  }
`

const styleSkillName = css`
  margin: 0;
  font-size: 1.25rem;
  line-height: 1.5;
`

const Skills: NextPage = () => {
    const skillsComponent = allSkills.map(([tagName, skills]) => (
        <Grid key={"tag-" + tagName}>
            <Typography variant="h5">
                {tagName}
            </Typography>
            <Grid container className={styleLocalGrid}>
                {skills.map((skill) => (
                    <Card key={"skill-" + skill} className={styleCard}>
                        <CardContent>
                            <Typography className={styleSkillName}>
                                {skill}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Grid>
        </Grid>
    ))
    return (
        <div>
            {skillsComponent}
        </div>
    )
}

export default Skills