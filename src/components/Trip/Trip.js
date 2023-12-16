import React from 'react'
import "./trip.css"
import TripData from './TripData'
import trip1 from "../../assets/5.jpg"
import trip2 from "../../assets/8.jpg"
import trip3 from "../../assets/6.jpg"

const Trip = () => {
  return (
    <div className='trip'>
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>
        <div className='tripcard'>
            <TripData image={trip1} heading="Trip in Indonesia"
            text="Indonesia,
            officially the
            Republic of Indonesia,
            is a
            country in Southeast Asia and
            Oceania between the Indian and
            Pacific oceans. It consists of
            over 17,000 islands,
            including
            Sumatra, Java,
            Sulawesi,
            and
            parts of Borneo and New Guinea." />
            <TripData image={trip2} heading="Trip in Malaysia"
            text="Mo kiysio is a Scutheast asian country
            and the island of Borneo. It's known for its
            beaches, rainforests and mix of Malgy.
            Chirise, Indian and European culturol
            influences" />
            <TripData image={trip3} heading="Trip in France"
            text="France, in Western Europe, encompasses
            medieval cities, olpine viliages ond
            Mediterranean beaches. Paris, its capital, is
            famed for its fashion houses, classical art
            museums including the Louvre and
            monuments ike the Eiffel Tower." />
        </div>
    </div>
  )
}

export default Trip
