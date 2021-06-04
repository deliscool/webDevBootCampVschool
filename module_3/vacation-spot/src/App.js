import React from "react"
import SpotCard from "./SpotCard"
import vacationData from "./vacationData"

function App() {
    const vacationSpot = vacationData.map(spot => <SpotCard vacationData= {spot}/>)

    return (
        <div className="contacts">
            {vacationSpot}
        </div>
    )
}

export default App 