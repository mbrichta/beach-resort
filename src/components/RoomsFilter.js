import React, { useContext } from 'react'
import { Context } from '../context'
import Title from './Title'

const getUniqueValues = (list, values) => {
    return [...new Set(list.map(item => item[values]))]
}

export default function RoomsFilter({ rooms }) {

    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets } = useContext(Context)

    let types = getUniqueValues(rooms, 'type')
    types = ['all', ...types]
    types = types.map((item, indx) => (
        <option key={indx} value={item}>{item}</option>
    ))

    let people = getUniqueValues(rooms, 'capacity')
    people = people.map((item, indx) => (
        <option key={indx} value={item}>{item}</option>
    ))
    return (
        <section className="filter-container">
            <Title>Search Rooms</Title>
            <form className="filter-form">
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select
                        name="type"
                        id="type"
                        value={type}
                        className="form-control"
                        onChange={handleChange}
                    >
                        {types}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select
                        name="capacity"
                        id="capacity"
                        value={capacity}
                        className="form-control"
                        onChange={handleChange}
                    >
                        {people}
                    </select>
                </div>
            </form>
        </section>
    )
}