import { fruitList } from '../data/data.js'

const Fruits = () => {

	return (
		<ul>
			{fruitList.map(fruit =>(
				<li key={fruit}>{fruit}</li>
			))}	
		</ul>

	)
}

export default Fruits