import React from 'react'
import { useState } from 'react'
import CVInput from './CVInput/CVInput'
import CVOutput from './CVOutput/CVOutput'
import styles from './cv.module.css'

export default function CV({ inputStatus }) {
    console.log(inputStatus)
    return (
        <div className={styles.container}>
            {inputStatus ? <CVInput /> : <CVOutput />}
        </div>
    )
}
