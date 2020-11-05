import React, { useContext, useEffect } from 'react'
import { Context } from '../context'
import Title from './Title'

const getUniqueValues = (list, values) => {
    return [...new Set(list.map(item => item[values]))]
}

export default function RoomsFilter({ rooms }) {

    const { handleChange, filterInfo } = useContext(Context)
    let {
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets } = filterInfo
    console.log(filterInfo)

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
                <div className="form-group">
                    <label htmlFor="price">room price ${price}</label>
                    <input
                        type="range"
                        name="price"
                        min={minPrice}
                        max={maxPrice}
                        id="price"
                        value={price}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="size">room size</label>
                    <div className="size-inputs">
                        <input
                            type="number"
                            name="minSize"
                            id="size"
                            value={minSize}
                            className="size-input"
                            onChange={handleChange}
                        />
                        <input
                            type="number"
                            name="maxSize"
                            id="size"
                            value={maxSize}
                            className="size-input"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="single-extra">
                        <input
                            type="checkbox"
                            name="breakfast"
                            id="breakfast"
                            checked={breakfast}
                            onChange={handleChange}
                        />
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input
                            type="checkbox"
                            name="pets"
                            id="pets"
                            checked={pets}
                            onChange={handleChange}
                        />
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
            </form>
        </section>
    )
}