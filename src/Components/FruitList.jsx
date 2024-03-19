import { fruitList } from '../data/data.js'

const Fruits = () => {

	const sortedList = fruitList.sort()
	return (
		<>
		<h2>Övning 4.1</h2>
		<ul>
			{sortedList.map(fruit =>(
				<li key={fruit}>{fruit}</li>
			))}	
		</ul>
		</>

	)
}

export default Fruits