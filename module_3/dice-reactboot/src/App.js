import React from "react"
import DiceBox from "./components/DiceContainer"

function App () {
    
    return(
        <div>
            <h1>Dice Roller</h1>
            <p>Welcome to dice roller where you can roll 5 dice at the same time. </p> 
            <p> You can lock a number in using the checkbox, but after every third roll the dice will reset back to 0 and remove any locks applied.</p>
            <DiceBox />
        </div>
    )
}

export default App