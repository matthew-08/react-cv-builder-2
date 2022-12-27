import React from 'react'
import styles from './navbar.module.css'

export default function Navbar({ changeView }) {
    return (
        <nav>
            <h2>CV Builder!</h2>
            <button
                onClick={changeView}
            ><img src="/img/refresh.svg" /></button>
        </nav>
    )
}
