import React from 'react'
import axios from 'axios'
import {Table, Header} from 'semantic-ui-react'


class Planet extends React.Component{
    state = { planets: []}

    componentDidMount() {
        axios.get("https://swapi.co/api/planets")
        .then(res => {    
            this.setState({planets: res.data.results})
    
        
        })
    }

    seePlanets = () => {
        return this.state.planets.map(planet => (
                <>
                <Table.Row key={planet.name} >
                    <Table.Cell>
                        {planet.name}
                    </Table.Cell>
                    <Table.Cell>{planet.terrain}</Table.Cell>
                    <Table.Cell>
                        {planet.orbital_period}
                    </Table.Cell>
                    <Table.Cell>{planet.population}</Table.Cell>
                </Table.Row>
         
                </>

        ))
    }

    render() {
        return(
            <>
             <div>
                <Header textAlign='center'>Planet Table</Header>
            </div>
            <Table>
                <Table.Header>
                <Table.Row>
                <Table.HeaderCell>Planet Name</Table.HeaderCell>
                <Table.HeaderCell>Terrain</Table.HeaderCell>
                <Table.HeaderCell>Orbit</Table.HeaderCell>
                <Table.HeaderCell>Population</Table.HeaderCell>
                </Table.Row>
                </Table.Header>
                {this.seePlanets()}
            </Table>
            </>
        )
    }
}

export default Planet