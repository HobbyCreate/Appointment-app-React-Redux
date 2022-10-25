import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addAppointment } from '../features/AppointmentSlice';
import TileList from './TileList';

export const Appointment = () => {
    const appointmentArray = useSelector(state => state.appointments.array);
    const contactArray = useSelector((state) => state.contacts.array);
    const dispatch = useDispatch();

    const [appointment, setAppointment] = useState({
        id: appointmentArray.length,
        title: '',
        contact: '',
        date: '',
        time: '',
    });

    const { title, contact, date, time } = appointment;

    const handleSubmit = (e) => {
        e.preventDefault();
        const index = appointmentArray.findIndex((e) => e.title === title);

        if (index === -1) {
            dispatch(addAppointment({ ...appointment, id: appointmentArray.length + 1 }));
            setAppointment({ ...appointment, title: "", contact: "", date: "", time: "" });
        }
        console.log(contact);
    };

    const handleChange = (value) => (e) => {
        setAppointment({ ...appointment, [value]: e.target.value });
    };

    return (
        <div className='appointment-container'>
            <h1>Appointment  Form</h1>
            <form className="appointment-Form" onSubmit={handleSubmit}>
                <div className="title">
                    <label>Title :  </label>
                    <input
                        required 
                        type="text"
                        placeholder="Enter Title"
                        onChange={handleChange('title')}
                        value={title} />
                </div>
                <div className="contact">
                    <label>Contact :  </label>
                    <select required onChange={handleChange('contact')}>
                        <option value={contact}>Unselected</option>
                        {contactArray.map(({ id, name }) => (
                            <option key={id} value={name}>
                                {name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="date">
                    <label>Date :  </label>
                    <input
                        type="date"
                        placeholder="Enter Date"
                        required
                        onChange={handleChange('date')}
                        value={date} />
                </div>
                <div className="time">
                    <label>Time :  </label>
                    <input
                        type="time"
                        placeholder="Enter Time"
                        required
                        onChange={handleChange('time')}
                        value={time} />
                </div>

                <button type="submit">Add - Appointment</button>
            </form>
            <TileList whichState="appointments" />
        </div>
    )
}

export default Appointment
