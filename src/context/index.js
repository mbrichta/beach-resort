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

    return (
        <Context.Provider value="hello">
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }