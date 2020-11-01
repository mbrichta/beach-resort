import React, { useContext } from 'react'
import RoomsFilter from '../components/RoomsFilter'
import RoomsList from '../components/RoomsList'
import Loading from '../components/Loading'
import { Context } from '../context'


export default function RoomsContainer() {

    const { loading, rooms } = useContext(Context)

    return (
        <>
            {loading ? <Loading /> :
                (
                    <>
                        <RoomsFilter rooms={rooms} />
                        <RoomsList />
                    </>
                )}
        </>
    )
}

