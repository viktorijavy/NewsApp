import './EventCard.css'

const EventCard = ({ item }) => {
    return (
        <div className="event-container">
            <div className="event-text">
                <h1 className="event-title">{item.bezeichnung}</h1>
                <p className="bezirk">{item.bezirk}</p>
                <p className="event-date">{item.von} - {item.bis} {item.zeit}</p>
                <p>Organiser: {item.veranstalter}</p>
                <p>{item.strasse}, {item.plz} Berlin</p>
                <a className="event-btn" href={item.www.startsWith('http') ? item.www : "http://" + item.www} target="_blank" rel="noreferrer noopener"> Website</a>
            </div>
        </div>
    )
}

export default EventCard