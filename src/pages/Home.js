import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import Services from '../components/Services'
import { Context } from '../context/index'
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