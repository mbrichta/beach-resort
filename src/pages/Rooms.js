import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../components/Banner'
import Hero from '../components/Hero/Hero'

export default function Rooms() {
    return (
        <div>
            <Hero hero="roomsHero" >
                <Banner title="Our Rooms" >
                    <Link to="/" className="btn-primary"> Return Home</Link>
                </Banner>
            </Hero>
        </div>
    )
}