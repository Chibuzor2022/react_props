import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PlayerList from "./components/PlayerList";

function App() {
	return (
		<div className="App">
			{/* Heading */}
			<h1 className="my-4">Football Players</h1>
			{/* Imported PLayerList */}
			<PlayerList />
		</div>
	);
}

export default App;
