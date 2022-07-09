import dataset from '../data'
import EventCard from '../components/EventCard';
import { useState } from 'react';
import './Events.css'

const Events = () => {


    const [data, setData] = useState(dataset)
    const [bezirk, setBezirk] = useState('All')

    let filteredList = []

    if (bezirk !== 'All') {
        filteredList = data.filter(item => bezirk === item.bezirk)
    } else if (bezirk === 'All') {
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
                    <h1 className="event-title-large"> Berlin street events: </h1>

                    <label htmlFor="bezirk">Sort by neighborhood:</label>
                    <select name="bezirk" id="bezirk" onChange={handleBezirkChange}>
                        <option value="All">All</option>
                        <option value="Mitte">Mitte</option>
                        <option value="Friedrichshain-Kreuzberg">Friedrichshain-Kreuzberg</option>
                        <option value="Steglitz-Zehlendorf">Steglitz-Zehlendorf</option>
                        <option value="Spandau">Spandau</option>
                        <option value="Tempelhof-Schöneberg">Tempelhof-Schöneberg</option>
                        <option value="Treptow-Köpenick">Treptow-Köpenick</option>
                        <option value="Marzahn-Hellersdorf">Marzahn-Hellersdorf</option>
                        <option value="Reinickendorf">Reinickendorf</option>
                        <option value="Marzahn-Hellersdorf">Marzahn-Hellersdorf</option>

                        <option value="Charlottenburg-Wilmersdorf">Charlottenburg-Wilmersdorf</option>
                    </select>

                    {filteredList.map(item =>

                        <EventCard key={item.id} item={item} />)}
                </div>
            </div>
        </>
    )
}

export default Events;