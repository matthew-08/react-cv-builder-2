import React from 'react'
import EduOutput from './EduOutput'
import styles from '../cv.module.css'


export default function CVOutput({ state }) {
    return (
        <div className={styles['cv-output']}>
            <header className={styles['cv-output-header']}>
                <div className={styles['cv-output-header-left']}>
                    <div>{state.personalDetails.firstname}</div>
                    <div>{state.personalDetails.lastname}</div>
                    <div>{state.personalDetails.job}</div>
                </div>
                <div className={styles['cv-output-header-right']}>
                    <div>{state.personalDetails.email}</div>
                    <div>{state.personalDetails.phone}</div>
                    <div>{state.personalDetails.address}</div>
                </div>
            </header>
            <main>
                <section>
                    <p className={styles.description}>{state.personalDetails.description}</p>
                </section>
                <div className="work-info output">
                    <h2>Education:</h2>
                    {state.educationExperience.map((exp) => <EduOutput
                        college={exp.college}
                        degree={exp.degree}
                        GPA={exp.GPA}
                        from={exp.from}
                        to={exp.to}
                    />)}
                </div>
            </main>
        </div>
    )
}