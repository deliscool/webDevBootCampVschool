import React, {Component}  from "react"
import Badge from "./components/Badge"
import "bootstrap/dist/css/bootstrap.min.css";
import {Card, CardGroup, Container} from 'react-bootstrap'

class App extends Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        birthPlace: "",
        phoneNumber: "",
        favFood: "",
        info: "",
        badges: []
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        
        const num = this.state.phoneNumber
        console.log(this.state.badges)
        
        if(num.length === 10) {
            const current = this.state.badges.slice()
            current.push(this.state)
            console.log(current)
            this.setState({
                firstName: "",
                lastName: "",
                email: "",
                birthPlace: "",
                phoneNumber: "",
                favFood: "",
                info: "",
                badges: current
            })
        } else {
            alert(`Enter number with no space Ex 00000000`)
        }

        
    }

    render(){

        const badgeForm = this.state.badges.map((badge, index) => <Badge key={index} firstName={badge.firstName} lastName={badge.lastName} email={badge.email} birthPlace={badge.birthPlace} phoneNumber={badge.phoneNumber} favFood={badge.favFood} info={badge.info} />)



        return (
          <Container>
                <CardGroup>
                <Card bg='warning'
                      text='white'
                      style={{width: '10 rem'}}
                      className="mb-2">
                      <Card.Header> Fill Form </Card.Header>
                      <Card.Body>
                      <form onSubmit={this.handleSubmit}>
                        <input 
                            type="text" 
                            placeholder="First Name"  
                            name="firstName" 
                            value={this.state.firstName} 
                            onChange={this.handleChange}
                            minLength="3"
                            required
                        />
                        <input
                            type="text" 
                            placeholder="Last Name"  
                            name="lastName" 
                            value={this.state.lastName} 
                            onChange={this.handleChange}
                            minLength="3"
                            required
                        />
                        <br></br>
                        <input
                            type="email" 
                            placeholder="Email"  
                            name="email" 
                            value={this.state.email} 
                            onChange={this.handleChange}
                            minLength="3"
                            required
                        />
                        <input
                            type="text" 
                            placeholder="Birth Place"  
                            name="birthPlace" 
                            value={this.state.birthPlace} 
                            onChange={this.handleChange}
                            minLength="3"
                            required
                        />
                        <br></br>
                        <input
                            type="number" 
                            placeholder="Phone Number"  
                            name="phoneNumber" 
                            value={this.state.phoneNumber} 
                            onChange={this.handleChange}
                            minLength="3"
                            required
                        />
                        <input
                            type="text" 
                            placeholder="Favorite Food"  
                            name="favFood" 
                            value={this.state.favFood} 
                            onChange={this.handleChange}
                            minLength="3"
                            required
                        />
                        <br></br>
                        <textarea
                            placeholder="Tell us about yourself"  
                            name="info" 
                            value={this.state.info} 
                            onChange={this.handleChange}
                            minLength="3"
                            required
                        />
                        <h1>{this.state.name}</h1>
                        <button>Submit</button>
                    </form>
                  </Card.Body>
                </Card>
              </CardGroup>
            <ul>
                {badgeForm}
            </ul>
        </Container>
        )
    }
}

export default App

