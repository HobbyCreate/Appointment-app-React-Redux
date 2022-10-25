import React from 'react'
import { useSelector } from 'react-redux';
import Tile from './Tile';

function TileList({ whichState }) {
    const contactArray = useSelector(state => state.contacts);
    const appointmentArray = useSelector(state => state.appointments);

    const returnState = () => whichState === "contacts" ? contactArray.array : appointmentArray.array;

    return (
        <div>
            <Tile state={returnState()} name={whichState} />
        </div>
    )
}

export default TileList