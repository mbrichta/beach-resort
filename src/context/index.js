import React, { createContext, useEffect, useState } from 'react'
import data from '../data'

const Context = createContext()

function ContextProvider({ children }) {

    const [rooms, setRooms] = useState([])
    const [sortedRooms, setSortedRooms] = useState([])
    const [featuredRooms, setFeaturedRooms] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let rooms = formatData(data)
        setRooms(rooms)
        let featuredRooms = rooms.filter(room => room.featured === true)
        setFeaturedRooms(featuredRooms)
        setLoading(false)
    }, [])

    const formatData = (data) => {
        let formatedData = data.map(item => {
            let id = item.sys.id
            let images = item.fields.images.map(img => img.fields.file.url)
            let room = { ...item.fields, images, id }

            return room
        })

        return formatedData
    }

    const getRoom = (slug) => {
        const room = rooms.find(room => room.slug === slug)
        return room;
    }

    return (
        <Context.Provider value={{ featuredRooms, loading, getRoom }}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }