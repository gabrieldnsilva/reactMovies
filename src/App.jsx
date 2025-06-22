import React from "react";
import Search from "./components/Search";
import { useState } from "react";

const App = () => {
	const [searchTerm, setSearchTerm] = useState("");

	return (
		<main>
			<div className="pattern" />
			<div className="wrapper">
				<header>
					<img src="./hero.png" alt="Logo" />
					<h1>
						Find <span className="text-gradient">Movies</span>{" "}
						You'll Enjoy Without the Hassle
					</h1>
				</header>

				<Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
			</div>

			<h1 className="text-3xl font-bold underline">
				Hello Vite + React + Tailwind CSS!
			</h1>
		</main>
	);
};

export default App;
