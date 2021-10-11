import React from 'react';
import Card from './components/Card';

function App() {
	return (
		<div>
			<h1 className="headStyle">My App!</h1>
			<Card
				title="Nasir Uddin"
				fName="Abul Khair"
				mName="Nasima Khanom"
				Address="BD"
			/>
			<Card
				title="Sajjad"
				fName="Name jani na"
				mName="Name jani na"
				Address="BD"
			/>
			<Card
				title="Ansu"
				fName="Name jani na"
				mName="Name jani na"
				Address="BD"
			/>
		</div>
	);
}
export default App;
