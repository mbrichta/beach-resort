import React, { createContext, useEffect, useState } from 'react'
import data from '../data'
import Client from '../Contentful'

const Context = createContext()

function ContextProvider({ children }) {
    const [rooms, setRooms] = useState([])
    const [sortedRooms, setSortedRooms] = useState([])
    const [featuredRooms, setFeaturedRooms] = useState([])
    const [loading, setLoading] = useState(true)
    const [filterInfo, setFilterInfo] = useState({})

    const getData = async () => {
        try {

            let response = await Client.getEntries({
                content_type: "beachRoomExample"
            })

            let rooms = formatData(response.items)

            const roomInfo = {
                type: 'all',
                capacity: 1,
                price: 0,
                minPrice: 0,
                maxPrice: 0,
                minSize: 0,
                maxSize: 0,
                breakfast: false,
                pets: false
            }
            setRooms(rooms)
            setSortedRooms(rooms)
            let featuredRooms = rooms.filter(room => room.featured === true)
            let maxPrice = Math.max(...rooms.map(room => room.price))
            let maxSize = Math.max(...rooms.map(room => room.size))
            setFeaturedRooms(featuredRooms)
            setLoading(false)
            setFilterInfo({
                ...roomInfo,
                maxPrice,
                maxSize
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
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

    const handleChange = event => {
        const { name, checked, value, type } = event.target
        const finalValue = type === 'checkbox' ? checked : value

        setFilterInfo(prevInfo => ({
            ...prevInfo,
            [name]: finalValue
        }))
        filterRooms()
    }

    const filterRooms = () => {
        let tempRooms = [...rooms]
        const { type, capacity, price, minSize, maxSize, breakfast, pets } = filterInfo

        console.log('pets' + pets)
        if (type !== 'all') {
            tempRooms = tempRooms.filter(room => room.type === type)
        }

        if (capacity !== 1) {
            tempRooms = tempRooms.filter(room => room.capacity >= capacity)
        }

        tempRooms = tempRooms.filter(room => room.price >= price)

        tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize)

        if (breakfast) {
            tempRooms = tempRooms.filter(room => room.breakfast === true)

        }

        if (pets) {
            tempRooms = tempRooms.filter(room => room.pets === true)
        }

        setSortedRooms(tempRooms)
    }

    return (
        <Context.Provider
            value={{
                rooms,
                sortedRooms,
                featuredRooms,
                loading,
                getRoom,
                handleChange,
                filterInfo,
            }}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }