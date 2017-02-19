import { Home }  from './Containers/Home/Home';

import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

const Routing = () => (
    <Router>
        <div>
            <Route exact path="/" component={Home} />
        </div>
    </Router>
)


export default Routing