import { citys } from "../data/data";
import { useState } from "react";


export function RenderCitys(props) {
	const [citysList, setCitysList] = useState(citys)
	// const [updateList, setUpdateList] = useState(true)

	const handleRemoveCity = (cityName) => {
		const updatedList = citysList.filter(city => city.name !== cityName);
		setCitysList(updatedList)
	};

	const handleEdit = () => {
		// setUpdateList(false)
	}
	const handleSave = () => {
		setUpdateList(true)
	}

	return (
		<div>
			<h2>Övning 4.1</h2>
			<ul>
				
					{citysList.map((city) => (
						<li onClick={handleEdit} key={city.name}>
							<strong>{city.name}</strong> - {city.population.toLocaleString(undefined, {maximumFractionDigits: 2})} invånare
							<button style={{marginLeft: '5px'}} onClick={() => handleRemoveCity(city.name)}>🗑️</button>
						</li>
					))}
			</ul>
		</div>
	)
	
}
