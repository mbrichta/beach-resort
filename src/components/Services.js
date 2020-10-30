import React from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'

export default function Services() {

    const services = [
        {
            icon: <FaCocktail />,
            title: 'Free Cocktails',
            info: 'We include free cocktails with each Deluxe Room'
        },
        {
            icon: <FaHiking />,
            title: 'Awsome Hicking tracks',
            info: 'Explore the best hicking spots in the country'
        },
        {
            icon: <FaShuttleVan />,
            title: 'Free Shuttle to near mountains',
            info: 'We have free shuttle vans every morning'
        },
        {
            icon: <FaBeer />,
            title: 'Local Beers',
            info: 'Try the locals beer at the near restaurants'
        }
    ]

    return (
        <section className="services">
            <Title title="services" />
            <div className="services-center">
                {services.map((service, indx) => (
                    <article key={indx} className="service">
                        <span>{service.icon}</span>
                        <h6>{service.title}</h6>
                        <p>{service.info}</p>
                    </article>
                ))}
            </div>
        </section>
    )
}
