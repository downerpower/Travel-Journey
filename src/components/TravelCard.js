
const TravelCard = ({ item }) => {
   return (
      <div className="travel-card">
         <div className="card-picture">
            <img src={item.imageUrl} alt={item.title} />
         </div>
         <div>
            <div className="location">
               <img src='./img/location.svg' alt='location' />
               <p>{item.location}</p>
               <a href={item.googleMapsUrl} target="_blank" rel="noreferrer">View on Google Maps</a>
            </div>
            <h2>{item.title}</h2>
            <p className="date">{item.startDate} - {item.endDate}</p>
            <p className="description">{item.description}</p>
         </div>
      </div>
   );
}

export default TravelCard;