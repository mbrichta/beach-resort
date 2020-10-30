import React from 'react'

export default function Hero({ children, hero = "defaultHero" }) {
    return (
        <header className={hero}>
            {children}
        </header>
    )
}