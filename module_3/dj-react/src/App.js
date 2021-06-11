import './App.css';
import React from 'react';
import Square from "./components/Square";

class App extends React.Component {
  state = {
    colors:["white","white", "white", "white"]
  }
  smallDj = () => {
    this.setState(prevState => {
      return {
        colors: prevState.colors.map((color) => {
          if(color !== "white") {
            return "white"
          } else {
            return "pink"
          }
        }
        )}
    })
}
  partyDj = () => {
    this.setState(prevState => {
      return {
        colors: prevState.colors.map((color, index) => {
          if (index < 2) {
            return "black"
          } else {
            return color
          }
        })
      }
    })
  }
  proDjLeft = () => {
    this.setState(prevState => {
        return {
            colors: prevState.colors.map((color, index) => {
                if (index === 2) {
                    return "blue"
                } else {
                    return color
                }
            })
        }
    })
}
proDjRight = () => {
    this.setState(prevState => {
        return {
            colors: prevState.colors.map((color, index) => {
                if(index === 3){
                    return "green"
                } else {
                    return color
                }
            })
        }
    })
}
bigDj1 = () => {
    this.setState(prevState => {
        return {
            colors: prevState.colors.map((color, index) => {
                if (index === 0 ) {
                    return "yellow"
                } else {
                    return color
                }
            })
        }
    })
}
bigDj2 = () => {
    this.setState(prevState => {
        return {
            colors: prevState.colors.map((color, index) => {
                if (index === 1 ) {
                    return "orange"
                } else {
                    return color
                }
            })
        }
    })
}
bigDj3 = () => {
    this.setState(prevState => {
        return {
            colors: prevState.colors.map((color, index) => {
                if (index === 2 ) {
                    return "red"
                } else {
                    return color
                }
            })
        }
    })
}
bigDj4 = () => {
    this.setState(prevState => {
        return {
            colors: prevState.colors.map((color, index) => {
                if (index === 3 ) {
                    return "yellow"
                } else {
                    return color
                }
            })
        }
    })
}
render() {
  const squareComp = this.state.colors.map((color) => <Square backgroundColor={color} />)
  return (
     
      <div className="container">
      {squareComp}
      <button onClick={this.smallDj}>Small Dj</button>
      <button onClick={this.partyDj}>Party DJ</button>
      <button onClick={this.proDjLeft}>Pro DJ L</button>
      <button onClick={this.proDjRight}>Pro DJ R</button>
      <button onClick={this.bigDj1}>Big Time 1</button>
      <button onClick={this.bigDj2}>Big Time 2</button>
      <button onClick={this.bigDj3}>Big Time 3</button>
      <button onClick={this.bigDj4}>Big Time 4</button>
      </div>
  )
}
}

export default App