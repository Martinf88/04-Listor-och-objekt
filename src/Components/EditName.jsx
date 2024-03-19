import React, { useState } from 'react'

export default function EditUser() {
	const [defaultUser, setDefaultUser] = useState({
		name : "Tim",
		color: "Blå"
	})

	const [nameInput, setNameInput] = useState(defaultUser.name)
	const [colorInput, setColorInput] = useState(defaultUser.color)
	const [edit, setEdit] = useState(true)

	function handleClick() {
		setEdit(false)
	}

	function handleSave() {
		setDefaultUser({
			name: nameInput,
			color: colorInput
		})
		setEdit(true)
	}

	return (
		<section>
			{
				edit ?
					<div>
						<p>Namn: {defaultUser.name}</p>
						<p>Favoritfärg: {defaultUser.color}</p>
						<button onClick={handleClick}>Ändra</button>
					</div>
					:
					<div>
						<input value={nameInput} onChange={(e) => setNameInput(e.target.value)} />
						<input value={colorInput} onChange={(e) => setColorInput(e.target.value)}/>
						<button onClick={handleSave}>Spara</button>
					</div>
			}
		</section>
		)

}
