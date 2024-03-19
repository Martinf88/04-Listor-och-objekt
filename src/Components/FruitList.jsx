import { fruitList } from '../data/data.js'

const Fruits = () => {

	return (
		<>
		<h2>Övning 4.1</h2>
		<ul>
			{fruitList.map(fruit =>(
				<li key={fruit}>{fruit}</li>
			))}	
		</ul>
		</>

	)
}

export default Fruits