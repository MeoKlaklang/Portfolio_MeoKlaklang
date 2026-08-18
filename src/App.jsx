import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

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
import End from "./pages/End";
function PortfolioHome() {
	return (
		<>
			<section id="home">
				<Home />
			</section>

			<section id="about">
				<Introduction />
			</section>

			<section id="skills">
				<Skills />
			</section>

			<section id="projects">
				<Projects />
			</section>

			<section id="contact">
				<End />
			</section>
		</>
	);
}

function App() {
	return (
		<>
			<Navbar />

			<Routes>
				<Route path="/" element={<PortfolioHome />} />

				<Route path="/het-mandje" element={<HetMandje />} />

				<Route path="/thumbelina" element={<Thumbelina />} />

				<Route path="/petbridge" element={<PetBridge />} />

				<Route path="/AnimalFestival" element={<AnimalFestival />} />

				<Route path="/Aeronix" element={<Areonix />} />

				<Route path="/Gistda" element={<Gistda />} />
			</Routes>
		</>
	);
}

export default App;
