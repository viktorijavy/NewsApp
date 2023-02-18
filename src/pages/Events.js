import data from '../data'
import EventCard from '../components/EventCard';
import { useState } from 'react';
import './Events.css'

const Events = () => {

    const [bezirk, setBezirk] = useState('All')

    const options = ['All', "Mitte", "Spandau", "Friedrichshain-Kreuzberg", "Steglitz-Zehlendorf", "Tempelhof-Schöneberg", "Marzahn-Hellersdorf", "Reinickendorf", "Charlottenburg-Wilmersdorf"];

    let filteredList = []

    if (bezirk !== 'All') {
        filteredList = data.filter(item => bezirk === item.bezirk)
    } else {
        filteredList = data
    }

    const handleBezirkChange = (e) => {
        e.preventDefault()
        setBezirk(e.target.value)
    }

    return (
        <>
            <div className="event-background">

                <div className="event-flex">
                    <h1 className="event-title-large"> Berlin street events </h1>

                    <label htmlFor="bezirk">Sort by neighborhood:</label>
                    <select name="bezirk" id="bezirk" onChange={handleBezirkChange}>

                        {options.map(option => <option value={option}>{option}</option>)}

                    </select>

                    {filteredList.map(item =>

                        <EventCard key={item.id} item={item} />)}
                </div>
            </div>
        </>
    )
}

export default Events;