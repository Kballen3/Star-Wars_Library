import React from 'react'
import axios from 'axios'
import { Card, Header, Container } from 'semantic-ui-react';

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
                style={{  }}
                >
                <Card.Group items itemsPerRow={4} stackable >
                <Card>
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
                        <Card.Description>
                        Home World: {results.homeworld}
                        </Card.Description>
                    </Card.Content>
                </Card>
            </Card.Group>
            </Container>
            </>
        
            ))
        )
    }

}

export default People