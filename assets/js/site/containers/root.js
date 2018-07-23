import { Route } from 'react-router-dom'
import React from 'react'
import Home from '../containers/Home'

const Root = () => {
    return (
        <div>
            <Route path={'/'} exact component={Home}/>
        </div>
    )
}

export default Root
