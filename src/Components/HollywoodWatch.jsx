import { useState } from "react"
import { movies } from "../data/data"

function Movies() {
	
	const [searchTerm, setSearchTerm] = useState("")

	const filteredMovies = movies.filter(movie => {
		return movie.titel.toLowerCase().includes(searchTerm.toLowerCase())
		
	})

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
							<p className="info"><strong>Regissör:</strong> <br/>{movie.regissor}</p>
							<p className="info"><strong>Premiär:</strong> <br/>{movie.år}</p>
							<p className="info"><strong>Genre:</strong><br/>{movie.genre}</p>
							<p className="info"><strong>Betyg: </strong><br/>{movie.betyg}</p>
						</div>
					))}
				</div>
			</main>
		</>
	)
}

export default Movies