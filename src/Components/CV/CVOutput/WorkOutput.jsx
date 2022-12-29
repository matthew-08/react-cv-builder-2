import React from 'react'
import styles from './output.module.css'


export default function WorkOutput({ position, location, from, to, company }) {
    return (
        <div
            className={styles['edu-container']}
        >
            <div
                className={styles['edu-left']}
            >
                <p>{position}</p>
                <p>{company}</p>
            </div>
            <div
                className={styles['edu-right']}
            >
                <p>{location}</p>
                <div
                    className={styles['from-to']}
                >
                    <p>{from}</p>
                    <p>{to}</p>
                </div>
            </div>
        </div>
    )
}