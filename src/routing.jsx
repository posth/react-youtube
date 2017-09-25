import React from 'react'
import {
	BrowserRouter as Router,
	Route,
} from 'react-router-dom'

import { Home }  from './Containers/Home/Home';
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';
import Room  from './Containers/Room/Room';

const Routing = () => (
	<Router>
		<div className="bg-image">
			<Header />
				<Route exact path="/" component={Home} />
				<Route path="/:roomid" component={Room} />
			<Footer />
		</div>
	</Router>
)

export default Routing
