import { useEffect, useState } from "react";

const RandomNumber = () => {

	const [slumpedNumbers, setSlumpedNumbers] = useState([])

	useEffect(() => {
		generateSlumpedNumbers();
	}, []);

	const generateSlumpedNumbers = () => {
		const newNumbers = [];
		for (let i = 0; i < 10; i++) {
			newNumbers.push({ id: i, value: Math.floor(Math.random() * 100)});
		}

		setSlumpedNumbers(newNumbers);
	}

	const addSlumpedNumber = () => {
		const copy = [...slumpedNumbers]
		copy.push({ id: slumpedNumbers.length, value: Math.floor(Math.random() * 100)});

		setSlumpedNumbers(copy)
	}

	// ALTERNATIV LÖSNING OBS!! FRÅN ChatGPT

	// const addSlumpedNumber = () => {
	// 	const newNumber = Math.floor(Math.random() * 100);
	// 	setSlumpedNumbers([...slumpedNumbers, newNumber]);
	// };


	return (
		<div>
			<h2>Slumpade Tal</h2>
			<button onClick={addSlumpedNumber}>Lägg till ett tal</button>
			<ul>
				{slumpedNumbers.map((number) => (
					<li key={number.id}>{number.value}</li>
				))}
			</ul>
		</div>
	)
}

export default RandomNumber