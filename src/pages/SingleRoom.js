import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import defaultBckg from '../images/room-1.jpeg'
import Hero from '../components/Hero/Hero'
import Banner from '../components/Banner'
import { Context } from '../context'
import { StyledHero } from '../components/Hero/styles/StyledHero'

export default function SingleRoom(props) {

    const { getRoom } = useContext(Context)
    const room = getRoom(props.match.params.slug)
    const { name,
        description,
        capacity,
        size,
        price,
        extras,
        breakfast,
        pets,
        images } = room

    const [mainImg, ...restImg] = images

    const noRoom = () => {
        return (
            <div className="error">
                <h3>Room not found!</h3>
                <Link to='/rooms' className='btn-primary'>Back to all Rooms</Link>
            </div>
        )
    }
    return (
        room ?
            (<>
                <StyledHero img={mainImg}>
                    <Banner title={`${name} room`}>
                        <Link to="/rooms" className="btn-primary">Back to rooms</Link>
                    </Banner>
                </StyledHero>
                <section className="single-room">
                    <div className="single-room-images">
                        {restImg.map((item, indx) => (
                            <img key={indx} src={item} alt={name} />
                        ))}
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>Description</h3>
                            <p>{description}</p>
                        </article>
                        <article className="info">
                            <h3>infor</h3>
                            <h6>price: ${price}</h6>
                            <h6>size: {size} ft²</h6>
                            <h6>
                                max capicity: {
                                    capacity > 1 ? `${capacity} people` :
                                        `${capacity} person`
                                }
                            </h6>
                            <h6>{pets ? 'pets allowed' : 'no pets allowed'}</h6>
                            <h6>{breakfast && 'free breakfast included'}</h6>
                        </article>
                    </div>
                </section>
                <section className="room-extras">
                    <h6>Extras</h6>
                    <ul className="extras">
                        {extras.map((extra, indx) => <li key={indx}>-{extra}</li>)}
                    </ul>
                </section>
            </>) : noRoom()
    )
}