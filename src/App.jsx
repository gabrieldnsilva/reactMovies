import { useState } from "react";
import "./App.css";

const Card = ({ title }) => {
	const [hasLiked, setHasLiked] = useState(false);

	return (
		<div className="card">
			<h2>{title}</h2>

			<button
				onClick={() => {
					setHasLiked(!hasLiked);
				}}
			>
				{hasLiked ? "❤️" : "🤍"}
			</button>
		</div>
	);
};

const App = () => {
	return (
		<div className="card-container">
			<Card
				title="Star Wars"
				rating={5}
				isCool={true}
				actors={[
					{ name: "Mark Hamill" },
					{ name: "Harrison Ford" },
					{ name: "Carrie Fisher" },
				]}
			/>
			<Card
				title="Avatar"
				rating={4}
				isCool={true}
				actors={[
					{ name: "Sam Worthington" },
					{ name: "Zoe Saldana" },
					{ name: "Sigourney Weaver" },
				]}
			/>
			<Card
				title="The Lion King"
				rating={5}
				isCool={true}
				actors={[
					{ name: "Matthew Broderick" },
					{ name: "James Earl Jones" },
					{ name: "Jeremy Irons" },
				]}
			/>
		</div>
	);
};

export default App;
