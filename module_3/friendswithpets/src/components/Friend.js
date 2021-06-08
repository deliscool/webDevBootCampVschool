import React from "react"
import Pet from "./Pet"


function Friend(props){
    
    const petsData = props.friendData.pets.map((pet, index) => <Pet key={index + pet.name} petName={pet.name} petBreed={pet.breed} />)

    return (
        <div className="friend">
            <h2>{props.friendData.name}</h2>
            <h3>Age: {props.friendData.age}</h3>
            <div className="petList">
            <h3>Pet/s:</h3>
            {petsData}
            </div>
        </div>
    )
}

export default Friend