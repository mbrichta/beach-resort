import React, { createContext, useEffect, useState } from 'react'
import data from '../data'

const Context = createContext()

function ContextProvider({ children }) {

    const [rooms, setRooms] = useState([])
    const [sortedRooms, setSortedRooms] = useState([])
    const [featuredRooms, setFeaturedRooms] = useState([])
    const [loading, setLoading] = useState(true)
    const [type, setType] = useState('all')
    const [capacity, setCapacity] = useState(1)
    const [price, setPrice] = useState(0)
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(0)
    const [minSize, setMinSize] = useState(0)
    const [maxSize, setMaxSize] = useState(0)
    const [breakfast, setBreakfast] = useState(false)
    const [pets, setPets] = useState(false)

    useEffect(() => {
        let rooms = formatData(data)
        setRooms(rooms)
        setSortedRooms(rooms)
        let featuredRooms = rooms.filter(room => room.featured === true)
        let maxPrice = Math.max(...rooms.map(room => room.price))
        let maxSize = Math.max(...rooms.map(room => room.size))
        setFeaturedRooms(featuredRooms)
        setLoading(false)
        setMaxPrice(maxPrice)
        setMaxSize(maxSize)

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
        const { name } = event.target
        const value = event.type === 'checkbox' ? event.target.checked : event.target.value

        switch (name) {
            case 'type':
                console.log(value)
                setType(value)
                console.log(type)
                break;
            case 'capacity':
                setCapacity(parseInt(value))
                console.log(parseInt(value))
                break;
            case 'price':
                setPrice(value)
                break;
            case 'minPrice':
                setMinPrice(value)
                break;
            case 'maxPrice':
                setMaxPrice(value)
                break;
            case 'minSize':
                setMinSize(value)
                break;
            case 'maxSize':
                setMaxSize(value)
                break;
            case 'breakfast':
                setBreakfast(value)
                break;
            case 'pets':
                setPets(value)
                break;
            default:
                break;
        }
        filterRooms()
    }

    const filterRooms = () => {
        let tempRooms = [...rooms]
        console.log('type is: ' + type)
        if (type !== 'all') {
            tempRooms = tempRooms.filter(room => room.type === type)
        }

        if (capacity !== 1) {
            tempRooms = tempRooms.filter(room => room.capacity >= capacity)
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
                type,
                capacity,
                price,
                minPrice,
                maxPrice,
                minSize,
                maxSize,
                breakfast,
                pets
            }}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }