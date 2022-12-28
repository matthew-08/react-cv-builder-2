import React from 'react'
import styles from './CVinput.module.css'

export default function WorkExperience({ id, dispatch, state }) {
    return (
        (
            <div className={styles['work-input-container']}>
                <div className={styles.fields}>
                    <input type="text" placeholder='College/University'
                        value={state.college}
                        onChange={(e) =>
                            dispatch({ type: ACTIONS.CHANGE_COLLEGE, payload: { value: e.target.value, id: id } })
                        }
                    />
                    <input type="text" placeholder='Location '
                        value={state.location}
                        onChange={(e) =>
                            dispatch({ type: ACTIONS.CHANGE_LOCATION, payload: { value: e.target.value, id: id } })
                        }
                    />
                    <input type="text" placeholder='Degree'
                        value={state.degree}
                        onChange={(e) =>
                            dispatch({ type: ACTIONS.CHANGE_DEGREE, payload: { value: e.target.value, id: id } })
                        }
                    />
                    <input type="text" placeholder='GPA'
                        value={state.GPA}
                        onChange={(e) =>
                            dispatch({ type: ACTIONS.CHANGE_GPA, payload: { value: e.target.value, id: id } })
                        }
                    />
                    <div className={styles.doublefield}>
                        <input type="text" placeholder='From'
                            value={state.from}
                            onChange={(e) =>
                                dispatch({ type: ACTIONS.CHANGE_FROM, payload: { value: e.target.value, id: id } })
                            }
                        />
                        <input type="text" placeholder='To'
                            value={state.to}
                            onChange={(e) =>
                                dispatch({ type: ACTIONS.CHANGE_TO, payload: { value: e.target.value, id: id } })
                            }
                        />
                    </div>
                </div>

            </div>
        )
    )
}
