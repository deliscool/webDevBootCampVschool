import React from "react"
import "../App.css"
import {Carousel} from "react-bootstrap"

function HitItem(props) {
    
    
    return (
            <Carousel>
            <Carousel.Item>
                <img 
                className="d-block w-100"
                src={props.target.image} />
                    <Carousel.Caption>
                        <h3>{props.target.name}</h3>
                    </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    )
}
export default HitItem