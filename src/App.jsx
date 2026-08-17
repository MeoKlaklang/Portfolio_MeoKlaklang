import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Introduction from "./pages/Introduction";
import Skills from "./pages/Skills";
import Projects from "./pages/Project";
import HetMandje from "./pages/HetMandje";
import Thumbelina from "./pages/Thumbelina";
import PetBridge from "./pages/PetBridge";
import AnimalFestival from "./pages/AnimalFestival";
import Areonix from "./pages/Aeronix";
import Gistda from "./pages/Gistda";

function PortfolioHome() {
	return (
		<>
			<Home />
			<Introduction />
			<Skills />
			<Projects />
		</>
	);
}

function App() {
	return (
		<Routes>
			<Route path="/" element={<PortfolioHome />} />
			<Route path="/het-mandje" element={<HetMandje />} />
			<Route path="/thumbelina" element={<Thumbelina />} />
			<Route path="/petbridge" element={<PetBridge />} />
			<Route path="/AnimalFestival" element={<AnimalFestival />} />
			<Route path="/Aeronix" element={<Areonix />} />
			<Route path="/Gistda" element={<Gistda />} />
		</Routes>
	);
}

export default App;
