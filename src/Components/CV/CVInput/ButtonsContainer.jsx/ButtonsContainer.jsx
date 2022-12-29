import React from 'react'
import styles from '../CVinput.module.css'

export default function ButtonsContainer({ dispatch, dispatchArg, dispatchDelete }) {
    return (
        <div className={styles['buttons-container']}>
            <button
                className={styles['add-delete-button']}
                onClick={() => dispatch({ type: dispatchArg })}>
                Add
            </button>
            <button
                className={styles['add-delete-button']}
                onClick={() => dispatch({ type: dispatchDelete })}
            >
                Delete
            </button>
        </div>
    )
}
