import React from 'react'
import styles from './CVinput.module.css'
import { useReducer } from 'react'
import { ACTIONS } from '../CV'


export default function PersonalInformation({ dispatch }) {

    return (
        <div className={styles.expcontainer}>
            <h2>Personal Information:
            </h2>
            <div className={styles.doublefield}>
                <input type="text"
                    onChange={(e) =>
                        dispatch({ type: ACTIONS.CHANGE_FIRSTNAME, payload: e.target.value })
                    }
                    placeholder='First Name'
                />
                <input type="text"
                    onChange={(e) =>
                        dispatch({ type: ACTIONS.CHANGE_LASTNAME, payload: e.target.value })
                    }
                    placeholder='Last Name'
                />
            </div>
            <div className={styles.fields}>
                <input type="text"
                    onChange={(e) =>
                        dispatch({ type: ACTIONS.CHANGE_JOB, payload: e.target.value })
                    }
                    placeholder='Job Title'

                />
                <input type="text"
                    onChange={(e) =>
                        dispatch({ type: ACTIONS.CHANGE_PHONE, payload: e.target.value })
                    }
                    placeholder='Phone Number'

                />
                <input type="text"
                    onChange={(e) =>
                        dispatch({ type: ACTIONS.CHANGE_EMAIL, payload: e.target.value })
                    }

                    placeholder='Email'

                />
                <input type="text"
                    onChange={(e) =>
                        dispatch({ type: ACTIONS.CHANGE_ADDRESS, payload: e.target.value })
                    }
                    placeholder='Address'

                />
                <textarea
                    onChange={(e) =>
                        dispatch({ type: ACTIONS.CHANGE_DESCRIPTION, payload: e.target.value })
                    }
                    placeholder='Describe yourself in 200-300 words.'

                />

            </div>

        </div>




    )
}
