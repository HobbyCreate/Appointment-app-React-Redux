import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../features/ContactSlice';
// import { contacts } from '../app/store';
import  TileList  from './TileList';

export const Contact = () => {

    const contactArray = useSelector((state) => state.contacts.array);
    const dispatch = useDispatch();
    const [contact, setContact] = useState({
        id: contactArray.length,
        name: "",
        phone: "",
        email: "",
    });

    const { name, phone, email } = contact;

    const handleSubmit = (e) => {
        e.preventDefault();
        const index = contactArray.findIndex((e) => e.name === name);
        if (index === -1) {
            dispatch(addContact({ ...contact, id: contactArray.length + 1 }));
            setContact({ ...contact, id: contactArray.length + 1, name: "", phone: "", email: "" });
        }
        console.log(contact);
    };

    const handleChange = (value) => (e) => {
        setContact({ ...contact, [value]: e.target.value });
    };

    return (
        <div className='contact-container'>
            <h1>Contact  Form</h1>
            <form className="contact-Form" onSubmit={handleSubmit}>
                <div className="name">
                    <label>Name :  </label>
                    <input
                        type="text"
                        placeholder="Enter Name"
                        value={name}
                        name="name"
                        onChange={handleChange('name')}
                        required />
                </div>
                <div className="phone">
                    <label>Phone number :  </label>
                    <input
                        type="tel"
                        placeholder="Enter Phone number"
                        value={phone}
                        name="phone"
                        onChange={handleChange('phone')}
                        required />
                </div>
                <div className="email">
                    <label>Email :  </label>
                    <input
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        name="email"
                        onChange={handleChange('email')}
                        required />
                </div>
                <button type="submit">Add - Contact</button>
            </form>
            <TileList whichState="contacts" />
        </div>
    )
}
