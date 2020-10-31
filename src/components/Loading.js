import React, { useContext } from 'react'
import spinnerGif from '../images/gif/loading-arrow.gif'

export default function Loading() {

    return (
        <div className="loading">
            <h4>rooms data loading</h4>
            <img src={spinnerGif} alt="loading" />
        </div>
    )
}