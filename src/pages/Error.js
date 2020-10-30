import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../components/Banner'
import Hero from '../components/Hero'

export default function Error() {
    return (
        <div>
            <Hero>
                <Banner title="404" subtitle="page not found">
                    <Link to="/" className="btn-primary">Return Home</Link>
                </Banner>
            </Hero>
        </div>
    )
}