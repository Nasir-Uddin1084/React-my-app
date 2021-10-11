import React from 'react';
import Card from './components/Card';
import Data from './data.json';

function App() {
	let myElements = [];
	/*
// for loop uses
for (let x = 0; x < Data.length; x++) {
		myElements.push(
			<Card
				CountryName={Data[x].CountryName}
				Capital={Data[x].Capital}
				City={Data[x].City}
			/>
		);
	}
	*/
	// maping uses
	myElements = Data.map((item, nasir) => 
		<Card key={nasir}
			CountryName={item.CountryName}
			Capital={item.Capital}
			City={item.City}
		/>);

	return (
		<div>
			<h1 className="headStyle">My App!</h1>
			{myElements}
		</div>
	);
}
export default App;
