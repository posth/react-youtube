import { Home }  from './Containers/Home/Home';
import Room  from './Containers/Room/Room';

import React from 'react'
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'

const Routing = () => (
    <Router>
        <div className="bg-image">
            <Route exact path="/" component={Home} />
			<Route path="/:roomid" component={Room} />
        </div>
    </Router>
)


export default Routing
