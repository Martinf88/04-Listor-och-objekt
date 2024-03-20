function AthleteRow({ athlete }) {
	
	return (
		<>
			<tr key={athlete.id}>
				<th scope="row">{athlete.name}</th>
				<td>{athlete.age}</td>
				<td>{athlete.sport}</td>
				<td>{athlete.hometown}</td>
			</tr>
		</>
	)
}

export default AthleteRow;