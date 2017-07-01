import styled from 'styled-components'

// We can store our Vars here
const darkGreen = `#137752`
const borderColor = `rgba(0,0,0,.2)`;


// We can store some of our components here

export const H1 = styled.h1`
	font-size: 2.5em;
	text-align: center;
	color: ${darkGreen};
`;

export const H2 = styled.h2`
	font-size: 2em;
	color: ${darkGreen};
`;

export const H3 = styled.h3`
	font-size: 1.5em;
	color: ${darkGreen};
`;

export const body = styled.p`
	font-size: 14px;
	text-align: center;
	color: ${darkGreen};
`;

export const Button = styled.button`
	background: ${props => props.primary ? 'palevioletred' : 'none'};
	color: ${props => props.primary ? 'white' : 'palevioletred'};
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid palevioletred;
	border-radius: 3px;
`;

export const Input = styled.input`
	border-color: ${borderColor};
	border-style: solid;
	border-width: 1px;
	font-family: sans-serif;
	font-size: 100%;
	line-height: 1.15;
	margin: 0;
`;
