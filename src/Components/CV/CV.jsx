import React from 'react'
import { useState } from 'react'
import CVInput from './CVInput/CVInput'
import CVOutput from './CVOutput/CVOutput'
import styles from './cv.module.css'
import { useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid';

export const ACTIONS = {
    // Personal Details
    CREATE_WORKINPUT: 'create-work-input',
    CHANGE_FIRSTNAME: 'change-first-name',
    CHANGE_LASTNAME: 'change-last-name',
    CHANGE_JOB: 'change-job',
    CHANGE_PHONE: 'change-phone',
    CHANGE_EMAIL: 'change-email',
    CHANGE_ADDRESS: 'change-address',
    CHANGE_DESCRIPTION: 'change-description',
    // Education Experience
    CHANGE_COLLEGE: 'change-college',
    CHANGE_LOCATION: 'change-location',
    CHANGE_DEGREE: 'change-degree',
    CHANGE_GPA: 'change-GPA',
    CHANGE_FROM: 'change-from',
    CHANGE_TO: 'change-to',
}

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.CREATE_WORKINPUT:
            return { ...state, educationExperience: [...state.educationExperience, { id: uuidv4() }] }
        case ACTIONS.CHANGE_FIRSTNAME:
            return { ...state, personalDetails: { ...state.personalDetails, firstname: action.payload } }
        case ACTIONS.CHANGE_LASTNAME:
            return { ...state, personalDetails: { ...state.personalDetails, lastname: action.payload } }
        case ACTIONS.CHANGE_JOB:
            return { ...state, personalDetails: { ...state.personalDetails, job: action.payload } }
        case ACTIONS.CHANGE_PHONE:
            return { ...state, personalDetails: { ...state.personalDetails, phone: action.payload } }
        case ACTIONS.CHANGE_EMAIL:
            return { ...state, personalDetails: { ...state.personalDetails, email: action.payload } }
        case ACTIONS.CHANGE_ADDRESS:
            return { ...state, personalDetails: { ...state.personalDetails, address: action.payload } }
        case ACTIONS.CHANGE_DESCRIPTION:
            return { ...state, personalDetails: { ...state.personalDetails, description: action.payload } }
        case ACTIONS.CHANGE_COLLEGE:
            return {
                ...state,
                educationExperience: state.educationExperience.map(exp => {
                    if (exp.id === action.payload.id) {
                        return { ...exp, college: action.payload.value }
                    } return exp
                })

            }
        case ACTIONS.CHANGE_LOCATION:
            return
        case ACTIONS.CHANGE_DEGREE:
            return
        case ACTIONS.CHANGE_GPA:
            return
        case CHANGE_FROM:
            return
        case CHANGE_TO:
            return

    }
}

export default function CV({ inputStatus }) {
    const [state, dispatch] = useReducer(reducer, {
        personalDetails: {
            firstname: "Robby",
            lastname: "Mcbutterson",
            job: "Software Developer",
            email: "Genericemail@gmail",
            phone: '(888)-888-8888',
            address: '222 Secondy Second St.',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, excepturi voluptatem alias tempora amet delectus deleniti incidunt reprehenderit veritatis ullam.'

        },
        educationExperience: [{
            id: uuidv4(),
            college: "",

        }],
    })

    console.log(state)
    return (
        <div className={styles.container}>
            {
                inputStatus ?
                    <CVInput
                        dispatch={dispatch}
                        state={state}
                    />
                    :
                    <CVOutput
                        state={{ ...state }}
                    />
            }
        </div>
    )
}
