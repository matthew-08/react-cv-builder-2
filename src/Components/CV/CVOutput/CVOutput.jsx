import React from 'react'

export default function CVOutput({ state }) {
    return (
        <div className="div">
            <div>{state.personalDetails.firstname}</div>
            <div>{state.personalDetails.lastname}</div>
            <div>{state.personalDetails.job}</div>
            <div>{state.personalDetails.email}</div>
            <div>{state.personalDetails.phone}</div>
            <div>{state.personalDetails.address}</div>
            <div>{state.personalDetails.description}</div>

            <div className="work-info output">

            </div>
        </div>
    )
}