import { athletes } from '../data/data.js'
import AthleteRow from './AthleteRow';

function Athletes() {
	

	return (
		<>
		<table className='athletes-table'>
			<caption>Övning 4.5</caption>
			<thead>
				<tr>
					<th scope="col">Namn</th>
					<th scope="col">Ålder</th>
					<th scope="col">Sport</th>
					<th scope="col">Hemstad</th>
				</tr>
			</thead>
			<tbody>
			{athletes.map((athlete) => (
				<AthleteRow key={athlete.id} athlete={athlete}/>
			))}
			</tbody>
		</table>
		
		</>
	  );
}

export default Athletes