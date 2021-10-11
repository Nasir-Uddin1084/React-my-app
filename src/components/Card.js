// const myName = 'Nasir Uddin Khan';
// const fName = 'Abul Khair Khan';
// const mName = 'Nasima Khanom';

function Card(props) {
	return (
		<div className="card">
			<h3 className="title">{props.title}</h3>
			<p className="cardTitle2">Father name: {props.fName}</p>
			<p className="cardTitle3">Mother Name: {props.mName}</p>
			<p className="cardTitle3">Address: {props.Address}</p>
		</div>
	);
}

export default Card;
