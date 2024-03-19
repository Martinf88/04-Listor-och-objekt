import { athletes } from '../data/data.js'

function Athletes() {
	

	return (
		<>
		<h1>Samlarkort</h1>
		<section className='athletes-display'>
			{athletes.map((athlete) => (
				<div key={athlete.id}>
					<p>{athlete.name}</p>
					<p>{athlete.age}</p>
					<p>{athlete.sport}</p>
					<p>{athlete.hometown}</p>
				</div>
			))}
		</section>
		</>
	  );
}

export default Athletes