import React from 'react'
import styles from './CVinput.module.css'
import { ACTIONS } from '../CV'

export default function EducationExperience({ id, dispatch }) {
    return (
        <div className={styles['work-input-container']}>
            <div className={styles.fields}>
                <input type="text" placeholder='College/University'
                    onChange={(e) =>
                        dispatch({ type: ACTIONS.CHANGE_COLLEGE, payload: { value: e.target.value, id: id } })
                    }
                />
                <input type="text" placeholder='Location ' />
                <input type="text" placeholder='Degree' />
                <input type="text" placeholder='GPA' />
                <div className={styles.doublefield}>
                    <input type="text" placeholder='From' />
                    <input type="text" placeholder='To' />
                </div>
            </div>

        </div>
    )
}
