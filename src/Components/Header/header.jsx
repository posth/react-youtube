import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
	<header className="fl w-100 pa2 tc">
		<Link to={'/'} className="f1 no-underline" >
			<h1>OurTube</h1>
		</Link>
	</header>
)

export default Header;
