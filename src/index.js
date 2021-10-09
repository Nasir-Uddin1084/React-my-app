import React from 'react';
import ReactDOM from 'react-dom';
// add index.css
// import './index.css';

// JSX = JavaScript XML

const myName = 'Nasir Uddin Khan';
const fName = 'Abul Khair Khan';
const mName = 'Nasima Khanom';

ReactDOM.render(
	<div>
		<h1 className="headStyle anotherClass">Hi Nasir!</h1>
		<h3>Name: </h3>
		<p>{myName}</p>
		<p>Father name: {fName}</p>
		<p>Mother Name: {mName}</p>
	</div>,

	document.getElementById('root')
);
