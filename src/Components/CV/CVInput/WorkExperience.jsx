import React from 'react'
import styles from './CVinput.module.css'
import { ACTIONS } from '../CV'

export default function WorkExperience({ id, dispatch, state, deleteButton }) {
    console.log(deleteButton)
    return (
        (
            <div className={styles['work-input-container']}>
                <div className={styles.fields}>
                    <input type="text" placeholder='Company'
                        value={state.company}
                        onChange={(e) =>
                            dispatch({ type: ACTIONS.WORK_CHANGE_COMPANY, payload: { value: e.target.value, id: id } })
                        }
                    />
                    <input type="text" placeholder='Position '
                        value={state.position}
                        onChange={(e) =>
                            dispatch({ type: ACTIONS.WORK_CHANGE_POSITION, payload: { value: e.target.value, id: id } })
                        }
                    />
                    <input type="text" placeholder='Location'
                        value={state.location}
                        onChange={(e) =>
                            dispatch({ type: ACTIONS.WORK_CHANGE_LOCATION, payload: { value: e.target.value, id: id } })
                        }
                    />
                    <div
                        className={styles.doublefield}
                    >
                        <input type="text" placeholder='From'
                            value={state.from}
                            onChange={(e) =>
                                dispatch({ type: ACTIONS.WORK_CHANGE_FROM, payload: { value: e.target.value, id: id } })
                            }
                        />
                        <input type="text" placeholder='To'
                            value={state.to}
                            onChange={(e) =>
                                dispatch({ type: ACTIONS.WORK_CHANGE_TO, payload: { value: e.target.value, id: id } })
                            }
                        />
                    </div>
                </div>
                {!deleteButton &&
                    <button
                        className={styles['add-delete-button']}
                        onClick={() => dispatch({ type: ACTIONS.DELETE_WORK_EXPERIENCE, payload: { id } })}
                    >
                        Delete
                    </button>}
            </div>

        )
    )
}
