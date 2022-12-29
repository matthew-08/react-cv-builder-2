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
    console.log(workExperience)


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
                        deleteButton={index === educationExperience.length - 1}
                    />
                }
                )
            }
            <ButtonsContainer
                dispatch={dispatch}
                dispatchArg={ACTIONS.CREATE_EDUCATIONINPUT}
                dispatchDelete={ACTIONS.DELETE_EDUCATION_EXPERIENCE_LAST}
            />
            <h2>Work Experience: </h2>
            {
                workExperience.map((input, index) => {
                    return <WorkExperience
                        id={input.id}
                        key={input.id}
                        dispatch={dispatch}
                        state={workExperience[index]}
                        deleteButton={index === workExperience.length - 1}
                    />
                }
                )
            }
            <ButtonsContainer
                dispatch={dispatch}
                dispatchArg={ACTIONS.CREATE_WORKINPUT}
                dispatchDelete={ACTIONS.DELETE_WORK_EXPERIENCE_LAST}
            />

        </div>
    )
}
