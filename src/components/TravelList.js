import TravelCard from "./TravelCard";
import data from "../data";

const TravelList = () => {
   const travelItems = data.map(item => (
      <TravelCard 
        key={item}
        item={item}
      />
   ))

   return (
      <div className="travel-list">
         {travelItems}
      </div>
   );
}

export default TravelList;