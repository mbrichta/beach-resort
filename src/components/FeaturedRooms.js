import React, { useContext } from 'react'
import { Context } from '../context'
import Loading from './Loading'
import Title from './Title'
import RoomCard from './RoomCard'

export default function FeaturedRooms() {

    const { featuredRooms, loading } = useContext(Context)

    return (
        <section className="featured-rooms">
            <Title>Featured Rooms</Title>
            <div className="featured-rooms-center">
                {
                    loading ? <Loading /> :
                        featuredRooms.map(room => (
                            <RoomCard key={room.id} room={room} />
                        ))
                }
            </div>
        </section>
    )
}