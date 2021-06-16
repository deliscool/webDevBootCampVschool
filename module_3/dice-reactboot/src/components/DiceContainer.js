import React from "react"
import Dice from "./dice"
import diceData from "../api"

let count = 0

class DiceBox extends React.Component {

    state = {
        diceArr: diceData
    }

    checkDice = (id) => {
        this.setState(prevState => {
            const checkedDice = prevState.diceArr.map(dice => {
                if(dice.id === id){
                    return {
                        ...dice,
                        isChecked: !dice.isChecked
                    }
                } else {
                    return {
                        ...dice
                    }
                }
            })

            return {
                diceArr: checkedDice
            }
        })

    }

    rollDice = () => {
        count++
        this.setState(prevState => {

            if(count % 4 === 0) {
                return {
                    diceArr: prevState.diceArr.map(dice => {
                        return {
                            ...dice,
                            num: 0,
                            isChecked: false
                        }
                    })
                }
            } else {
                const updatedState = prevState.diceArr.map(dice => {
                    if(!dice.isChecked) {
                        return {
                            ...dice,
                            num: Math.ceil(Math.random() * 6)
                        }
                    } else {
                        return {
                            ...dice
                        }
                    }
                })

                console.log(prevState)
                console.log(updatedState)
                
                return {
                    diceArr: updatedState
                }
            }
        })
    }
    
    render(){

        const diceBoxStyle = {
            display: "flex",
        }

        const buttonStyle = {

        width: "50px",
        height: "50px",
        margin: "auto 0px",
        }

        const diceComponents = this.state.diceArr.map(dice => {
            return <Dice key={dice.id} num={dice.num} isChecked={dice.isChecked} method={this.checkDice} id={dice.id}/>
        })

        return(
            <div className="diceBox" style={diceBoxStyle}>
                {diceComponents}
                <button onClick={this.rollDice} style={buttonStyle}>Roll!</button>
            </div>
        )
    }
}

export default DiceBox