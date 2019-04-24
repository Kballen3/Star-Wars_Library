import React from 'react'
import {Link} from 'react-router-dom'
import {Menu} from 'semantic-ui-react'

class Navbar extends React.Component{
    render() {
        return(
        <Menu inverted color='pink'>
            <Link to='/people'>
            <Menu.Item>People</Menu.Item>
            </Link>
        </Menu>

        )
    }
}


export default Navbar