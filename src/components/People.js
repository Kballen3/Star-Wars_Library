import React from 'react'
import axios from 'axios'

class People extends React.Component {
    state = {people: [], }

    componentDidMount() {
        axios.get('https://swapi.co/api/people/?page=2')
        .then(res => {    
        console.log((res.data))
        this.setState({people: res.data})
        })
    }

    render() {
        return (
            <div>
                sup
            </div>
        )
    }

}

export default People