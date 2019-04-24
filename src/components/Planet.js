import React from 'react'
import axios from 'axios'


class Planet extends React.Component{
    state = { planets: []}

    componentDidMount() {
        axios.get('https://swapi.co/api/people/?page=2')
        .then(res => {    
            this.setState({planets: res.data.results})
        axios.get(planets.homeworld)
        .then(res => {
            
        })
        })
    }

    render() {
        return(
            <div>

            </div>
        )
    }
}

export default Planet