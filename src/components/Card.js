// const myName = 'Nasir Uddin Khan';
// const fName = 'Abul Khair Khan';
// const mName = 'Nasima Khanom';

function Card(props) {
	// uses of object Destructing
	const { CountryName, Capital, City } = props;
	return (
		<div className="card">
			<h3 className="title">{CountryName}</h3>
			<p className="cardTitle2">{Capital}</p>
			<p className="cardTitle3">{City}</p>
		</div>
	);
}

export default Card;
