import React, {Component} from "react"
import HitList from "./Components/HitList"
import  "./App.css"

class App extends Component {
    constructor() {
        super()
        this.state={
            testing:"is working"
        }
    }

    render() {
        return(
            <div>
                <HitList />
            </div>
        )
    }
}

export default App