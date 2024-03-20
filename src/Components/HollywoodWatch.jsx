import { useState } from "react"
import { movies } from "../data/data"

function Movies() {
	
	const [searchTerm, setSearchTerm] = useState("")
	// TODO: usestate för att uppdatera listan när man söker
	// onchange på inputfält
	//funktion för onchangeevent

	const filteredMovies = movies.filter(movie => {
		return movie.titel.toLowerCase().includes(searchTerm.toLowerCase())
		
	})
	console.log(filteredMovies);
	return (
		<>
			<header>
				<h1>Filmer från Hollywood</h1>
			</header>
			<main>
				<input className="search-movie" type="text" placeholder={"Sök film..."} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
				<div className="movies-container">
					{filteredMovies.map((movie) => (
						<div key={movie.titel}>
							<h3 className="movie-title">{movie.titel}</h3>
							<p>Regissör: <br/>{movie.regissor}</p>
							<p>Premiär: <br/>{movie.år}</p>
							<p>Genre: <br/>{movie.genre}</p>
							<p>Betyg: <br/>{movie.betyg}</p>
						</div>
					))}
				</div>
			</main>
		</>
	)
}

export default Movies