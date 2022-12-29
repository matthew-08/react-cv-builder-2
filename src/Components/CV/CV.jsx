import React from 'react'
import { useState } from 'react'
import CVInput from './CVInput/CVInput'
import CVOutput from './CVOutput/CVOutput'
import styles from './cv.module.css'
import { useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid';

export const ACTIONS = {
    // Create Inputs
    CREATE_EDUCATIONINPUT: 'create-education-input',
    CREATE_WORKINPUT: 'create-work-input',
    // Personal Details
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
    // Work Experience
    WORK_CHANGE_COMPANY: 'change-company',
    WORK_CHANGE_POSITION: 'change-position',
    WORK_CHANGE_LOCATION: 'change-work-location',
    WORK_CHANGE_FROM: 'change-work-from',
    WORK_CHANGE_TO: 'change-work-to',
    //Delete inputs
    DELETE_EDUCATION_EXPERIENCE: 'delete-education-exp',
    DELETE_WORK_EXPERIENCE: 'delete-work-exp',
    DELETE_EDUCATION_EXPERIENCE_LAST: 'delete-edu-exp-last',
    DELETE_WORK_EXPERIENCE_LAST: 'delete-work-exp-last',
}

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.DELETE_WORK_EXPERIENCE:
            return { ...state, workExperience: state.workExperience.filter(f => f.id !== action.payload.id) }
        case ACTIONS.DELETE_WORK_EXPERIENCE_LAST:
            return {
                ...state, workExperience: state.workExperience.filter((f, i) =>

                    i !== state.educationExperience.length - 1)
            }
        case ACTIONS.DELETE_EDUCATION_EXPERIENCE_LAST:
            return {
                ...state, educationExperience: state.educationExperience.filter((f, i) => i !== state.educationExperience.length - 1)
            }
        case ACTIONS.DELETE_EDUCATION_EXPERIENCE:
            return { ...state, educationExperience: state.educationExperience.filter(f => f.id !== action.payload.id) }
        case ACTIONS.CREATE_EDUCATIONINPUT:
            return { ...state, educationExperience: [...state.educationExperience, { id: uuidv4() }] }
        case ACTIONS.CREATE_WORKINPUT:
            return { ...state, workExperience: [...state.workExperience, { id: uuidv4() }] }
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
            return {
                ...state,
                educationExperience: state.educationExperience.map(exp => {
                    if (exp.id === action.payload.id) {
                        return { ...exp, location: action.payload.value }
                    } return exp
                })

            }
        case ACTIONS.CHANGE_DEGREE:
            return {
                ...state,
                educationExperience: state.educationExperience.map(exp => {
                    if (exp.id === action.payload.id) {
                        return { ...exp, degree: action.payload.value }
                    } return exp
                })

            }
        case ACTIONS.CHANGE_GPA:
            return {
                ...state,
                educationExperience: state.educationExperience.map(exp => {
                    if (exp.id === action.payload.id) {
                        return { ...exp, GPA: action.payload.value }
                    } return exp
                })

            }
        case ACTIONS.CHANGE_FROM:
            return {
                ...state,
                educationExperience: state.educationExperience.map(exp => {
                    if (exp.id === action.payload.id) {
                        return { ...exp, from: action.payload.value }
                    } return exp
                })

            }
        case ACTIONS.CHANGE_TO:
            return {
                ...state,
                educationExperience: state.educationExperience.map(exp => {
                    if (exp.id === action.payload.id) {
                        return { ...exp, to: action.payload.value }
                    } return exp
                })

            }
        case ACTIONS.WORK_CHANGE_COMPANY:
            return {
                ...state,
                workExperience: state.workExperience.map(exp => {
                    if (exp.id === action.payload.id) {
                        return { ...exp, company: action.payload.value }
                    }
                    return exp
                })
            }
        case ACTIONS.WORK_CHANGE_POSITION:
            return {
                ...state,
                workExperience: state.workExperience.map(exp => {
                    if (exp.id === action.payload.id) {
                        return { ...exp, position: action.payload.value }
                    }
                    return exp
                })
            }
        case ACTIONS.WORK_CHANGE_LOCATION:
            return {
                ...state,
                workExperience: state.workExperience.map(exp => {
                    if (exp.id === action.payload.id) {
                        return { ...exp, location: action.payload.value }
                    }
                    return exp
                })
            }

        case ACTIONS.WORK_CHANGE_FROM:
            return {
                ...state,
                workExperience: state.workExperience.map(exp => {
                    if (exp.id === action.payload.id) {
                        return { ...exp, from: action.payload.value }
                    }
                    return exp
                })
            }
        case ACTIONS.WORK_CHANGE_TO:
            return {
                ...state,
                workExperience: state.workExperience.map(exp => {
                    if (exp.id === action.payload.id) {
                        return { ...exp, to: action.payload.value }
                    }
                    return exp
                })
            }


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
            college: '',
            location: '',
            degree: '',
            GPA: '',
            from: '',
            to: '',
        }],
        workExperience: [{
            id: uuidv4(),
            position: '',
            company: '',
            location: '',
            from: '',
            to: '',
        }]
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
