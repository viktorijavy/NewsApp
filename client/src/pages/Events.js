import data from '../data'
import EventCard from '../components/EventCard';
import './Events.css'

const Events = () => {

 
    return (
        <>
            <h1> Berlin street events</h1>

            <div className="event-flex">
            
            {data.map(item => <EventCard key={item.id} item={item}/>)}
            </div>
          
        </>
    )
}

export default Events;