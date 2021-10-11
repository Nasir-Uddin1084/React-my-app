// const myName = 'Nasir Uddin Khan';
// const fName = 'Abul Khair Khan';
// const mName = 'Nasima Khanom';

function Card(props) {
	// uses of object Destructing
	const { title, fName, mName, Address } = props;
	return (
		<div className="card">
			<h3 className="title">{title}</h3>
			<p className="cardTitle2">Father name: {fName}</p>
			<p className="cardTitle3">Mother Name: {mName}</p>
			<p className="cardTitle3">Address: {Address}</p>
		</div>
	);
}

export default Card;
