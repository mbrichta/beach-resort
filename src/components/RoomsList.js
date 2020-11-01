import React, { useContext } from 'react'
import { Context } from '../context'
import RoomCard from './RoomCard'


export default function RoomsList() {
    const { sortedRooms } = useContext(Context)
    console.log(sortedRooms)
    return (
        <>
            {sortedRooms ? (
                <div className="roomslist">
                    <div className="roomslist-center">
                        {sortedRooms.map(room => <RoomCard key={room.id} room={room} />)}
                    </div>
                </div>
            ) : (
                    <div className="empty-search">
                        <h3>no rooms matched your search</h3>
                    </div>
                )}
        </>
    )
}