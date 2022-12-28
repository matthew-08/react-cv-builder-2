import React from 'react'
import styles from './CVinput.module.css'
import PersonalInformation from './PersonalInformation'
import { useState } from 'react'
import EducationExperience from './EducationExperience'
import WorkExperience from './WorkExperience'
import ButtonsContainer from './ButtonsContainer.jsx/ButtonsContainer'

import { ACTIONS } from '../CV'

export default function CVInput({ dispatch, state, }) {
    const [workInput, newWorkInput] = useState(['',])
    const educationExperience = state.educationExperience
    const workExperience = state.workExperience


    return (
        <div className={styles.container}>
            <PersonalInformation
                state={state}
                dispatch={dispatch}
            />
            <h2>Education Information:</h2>
            {
                educationExperience.map((input, index) => {
                    return <EducationExperience
                        id={input.id}
                        key={input.id}
                        dispatch={dispatch}
                        state={educationExperience[index]}
                    />
                }
                )
            }
            <ButtonsContainer
                dispatch={dispatch}
                dispatchArg={ACTIONS.CREATE_EDUCATIONINPUT}
            />
            <h2>Work Experience: </h2>
            {
                workExperience.map((input, index) => {
                    return <WorkExperience
                        id={input.id}
                        key={input.id}
                        dispatch={dispatch}
                        state={workExperience[index]}
                    />
                }
                )
            }
            <ButtonsContainer
                dispatch={dispatch}
            /* dispatchArg={ACTIONS.} */
            />
            <div className={styles['buttons-container']}>
                <button
                    className={styles['add-delete-button']}
                    onClick={() => { dispatch({ type: ACTIONS.CREATE_WORKINPUT }) }}>
                    Add
                </button>
                <button
                    className={styles['add-delete-button']}
                >
                    Delete
                </button>
            </div>

        </div>
    )
}
