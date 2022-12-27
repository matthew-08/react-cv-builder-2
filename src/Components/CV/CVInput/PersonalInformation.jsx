import React from 'react'
import styles from './CVinput.module.css'

export default function PersonalInformation() {
    return (
        <div className={expcontainer}>
            <h2>Personal Information:
            </h2>
            <div className={styles.doublefield}>
                <input type="text"
                    placeholder='First Name'
                />
                <input type="text"
                    placeholder='Last Name'
                />
            </div>
            <div className={styles.fields}>
                <input type="text" placeholder='Job Title' />
                <input type="text" placeholder='Job Title' />
                <input type="text" placeholder='Phone Number' />
                <input type="text" placeholder='Email' />
                <input type="text" placeholder='Address' />
                <textarea placeholder='Describe yourself in 200-300 words.' />

            </div>

        </div>




    )
}
