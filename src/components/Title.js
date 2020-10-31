import React from 'react'

export default function Title({ children }) {
    return (
        <div className="section-title">
            <h4>{children}</h4>
            <div />
        </div>
    )
}