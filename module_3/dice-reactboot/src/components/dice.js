import React from "react"

const styleDice = {
    width: "200px",
    height: "200px",
    border: "2 px solid black",
    margin: "auto",
    textAlign: "justify"
}

const styles = {
    margin: "10 px",
    border: "2 px solid black",
}

function Dice (props) {
    return (
        <div className="dice" style={styles}>
            <h2 style={styleDice}>{props.num}</h2>
            <input type="checkbox" checked={props.ischecked} onChange={() => {props.method(props.id)}} />

        </div>
    )
}

export default Dice