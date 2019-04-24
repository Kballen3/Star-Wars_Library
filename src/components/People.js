import React from 'react'
import axios from 'axios'
import { Card, Header, Container } from 'semantic-ui-react';
import {Link} from 'react-router-dom'

class People extends React.Component {
    state = {people: [], }

    componentDidMount() {
        axios.get('https://swapi.co/api/people/?page=2')
        .then(res => {    
        console.log((res.data))
        this.setState({people: res.data.results})
        })
    }



    render() {
        return (
            this.state.people.map(results => (
                <>
                <Container
                style=
                {{ 
                    display: 'flex',
                    justifyContent: 'left',
                    flexDirection: 'column',
                    alignItems: 'flex-start'
                         
                }}
                >
            
                <Card.Group 
                    itemsPerRow={1}
                    style=
                    {{ 
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start'
                    }}  
                >
                <Card 
                    fluid 
                    color='blue'
                    style=
                    {{
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: 'blue'
        
                    }}
                >
                <Header>Star Wars Character Library</Header>
                    <Card.Content>
                        <Card.Header>{results.name}</Card.Header>
                        <Card.Description>
                        Mass: {results.mass}
                        </Card.Description>
                        <Card.Description>
                        Eye-Color: {results.eye_color}
                        </Card.Description>
                        <Card.Description>
                        Hair-Color: {results.hair_color}
                        </Card.Description>
                        <Card.Description>
                        Height: {results.height}
                        </Card.Description>
                        <Link to='/planet'>
                        <Card.Description>
                        Home World: {results.homeworld}
                        </Card.Description>
                        </Link>
                    </Card.Content>
                </Card>
                <Card>
                
                </Card>
               
            </Card.Group>
            </Container>
            </>
        
            ))
        )
    }

}

export default People