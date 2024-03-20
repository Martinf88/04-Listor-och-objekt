import { athletes } from '../data/data.js'

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
					<th scope="col">Hometown</th>
				</tr>
			</thead>
			<tbody>
				{athletes.map((athlete) => (
					<tr key={athlete.id}>
						<th scope="row">{athlete.name}</th>
						<td>{athlete.age}</td>
						<td>{athlete.sport}</td>
						<td>{athlete.hometown}</td>
					</tr>
				))}
			</tbody>
		</table>
		
		</>
	  );
}

export default Athletes