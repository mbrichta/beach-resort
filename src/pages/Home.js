import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero/Hero'
import Banner from '../components/Banner'
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRooms'

export default function Home() {

    return (
        <div>
            <Hero hero="defaultHero" >
                <Banner
                    title="Luxurious rooms"
                    subtitle="deluxe rooms starting at $299"
                >
                    <Link to="/rooms" className="btn-primary"> Our Rooms</Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms />
        </div>
    )
}