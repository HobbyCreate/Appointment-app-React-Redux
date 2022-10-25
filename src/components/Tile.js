import React from 'react'

function Tile({ state, name }) {
    return (
        <div>
            { name === 'contacts'
            ? state.map(({ id, name, phone, email }) => (
                <div className='Tile-container' key={id}>
                    <p>Name     : {name}</p>
                    <p>Phone    : {phone}</p>
                    <p>Email    : {email}</p>
                </div>
            ))
        : state.map(({id, title, contact, date, time}) => (
            <div className='Tile-container' key={id}>
                    <p>Title    : {title}</p>
                    <p>Contact  : {contact}</p>
                    <p>Date     : {date}</p>
                    <p>Time     : {time}</p>
                </div>
        ))}
        </div>
    )
}

export default Tile