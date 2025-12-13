import "./End.css";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";

export default function End() {
	const constraintsRef = useRef(null);

	const x = useMotionValue(0);
	const background = useTransform(x, [-300, 0, 300], ["#f5f5ff", "#ffffff", "#f5f5ff"]);

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
				{/* ====== Grote "Dankjewel" ====== */}
				<h1 className="thankyou">Dankjewel</h1>

				{/* ====== Vlieger rechtsboven ====== */}
				<img
					className="kite"
					src={`${import.meta.env.BASE_URL}vlieger.png`}
					alt="vlieger"
					aria-hidden="true"
				/>

				{/* ====== Molen linksonder ====== */}
				<div className="mill-wrapper">
					<img
						className="mill"
						src={`${import.meta.env.BASE_URL}molen.png`}
						alt="molen"
						aria-hidden="true"
					/>
					<img
						className="mill-steel"
						src={`${import.meta.env.BASE_URL}molen-steel.png`}
						alt="molen steel"
						aria-hidden="true"
					/>
				</div>
			</main>

			{/* Footer */}
			<footer className="foot">klaklang.m@outlook.com</footer>
		</motion.div>
	);
}
