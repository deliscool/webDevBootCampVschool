import React from "react"

function Pet(props) {
    return (
        <div className="pet">
            <h5>Name: {props.petName}</h5>
            <h5>Breed: {props.petBreed}</h5>
        </div>
    )
}

export default Pet