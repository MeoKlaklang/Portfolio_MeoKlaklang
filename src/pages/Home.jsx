import "./Home.css";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function Home() {
	const constraintsRef = useRef(null);

	// Katpositie (x, y)
	const x = useMotionValue(0);
	const y = useMotionValue(0);

	// Huidig actieve zone (1–4 of null)
	const [activeZone, setActiveZone] = useState(null);

	// Achtergrondkleur (optioneel subtiele tint)
	const background = useTransform(x, [-300, 0, 300], ["#f5f5ff", "#ffffff", "#f5f5ff"]);

	// Functie: bepaal in welke zone de kat zit
	useEffect(() => {
		const unsubscribeX = x.on("change", updateZone);
		const unsubscribeY = y.on("change", updateZone);
		return () => {
			unsubscribeX();
			unsubscribeY();
		};
	}, []);

	function updateZone() {
		if (!constraintsRef.current) return;

		const bounds = constraintsRef.current.getBoundingClientRect();
		const centerX = bounds.width / 2;
		const centerY = bounds.height / 2;

		const currentX = x.get();
		const currentY = y.get();

		let zone = null;
		if (currentX < 0 && currentY < 0) zone = 1; // linksboven
		else if (currentX > 0 && currentY < 0) zone = 2; // rechtsboven
		else if (currentX < 0 && currentY > 0) zone = 3; // linksonder
		else if (currentX > 0 && currentY > 0) zone = 4; // rechtsonder

		setActiveZone(zone);
	}

	return (
		<motion.div className="home" style={{ background }}>
			{/* Navigatie */}
			<header className="top">
				<nav className="tags">
					<a href="#">UX/UI</a>
				
				</nav>
			</header>

			{/* Hero */}
			<main className="hero" ref={constraintsRef}>
				<img className="portfolio" src="/port.png" alt="portfolio" />
				<div className="name">
					Meo <br /> Klaklang
				</div>

				{/* ====== Project Preview ====== */}
				<AnimatePresence>
					{activeZone && (
						<motion.img
							key={activeZone}
							className="project-preview"
							src={
								activeZone === 1
									? "/Datavisualitie_Meo_klaklang_titelblad.jpg"
									: activeZone === 2
									? "/Datavisualitie_Meo_klaklang_inspiratiebord.jpg"
									: activeZone === 3
									? "/Datavisualitie_Meo_klaklang_neerslag analyse.jpg"
									: "/Datavisualitie_Meo_klaklang_affiche.jpg"
							}
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{
								opacity: 0,
								scale: 0.9,
								transition: { duration: 0.25, ease: "easeInOut" },
							}}
							transition={{ duration: 0.6, ease: "easeOut" }}
							alt="project preview"
						/>
					)}
				</AnimatePresence>

				{/* ====== Draggable Cat ====== */}
				<motion.img
					className="cat"
					src="/cat-home.png"
					alt="draggable cat"
					drag
					dragConstraints={constraintsRef}
					dragElastic={0.4}
					dragSnapToOrigin
					style={{ x, y }}
					whileTap={{ scale: 1.1, rotate: 5 }}
					transition={{
						type: "spring",
						stiffness: 60,
						damping: 10,
						mass: 0.9,
					}}
				/>

				{/* ====== Vlieger rechtsboven ====== */}
				<img className="kite" src="/vlieger.png" alt="vlieger" aria-hidden="true" />

				<div className="mill-wrapper">
					<img className="mill" src="/molen.png" alt="molen" aria-hidden="true" />
					<img className="mill-steel" src="/molen-steel.png" alt="molen steel" aria-hidden="true" />
				</div>
			</main>

			{/* Footer */}
			<footer className="foot">klaklang.m@outlook.com</footer>
		</motion.div>
	);
}
