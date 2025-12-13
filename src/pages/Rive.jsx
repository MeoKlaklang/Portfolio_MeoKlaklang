import "./Rive.css";
import { motion } from "framer-motion";
import Cat from "./Cat";

export default function Rive() {
	const cardAnim = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
	};

	return (
		<div className="rive-container">
			{/* TITEL */}
			<motion.h2 className="rive-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
				0.2 Rive
			</motion.h2>

			{/* 2 KAARTEN */}
			<motion.div className="rive-grid" initial="hidden" whileInView="visible" variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>
				<motion.div className="rive-card" variants={cardAnim} whileHover={{ scale: 1.03 }}>
					<video src="/rive-kat.mp4" autoPlay loop muted playsInline className="rive-video" />
				</motion.div>

					<motion.div className="rive-card" variants={cardAnim} whileHover={{ scale: 1.03 }}>
					<video src="/rive kat 2.mp4" autoPlay loop muted playsInline className="rive-video" />
				</motion.div>
			</motion.div>

			{/* TEKST BLOKKEN */}
			<div className="rive-text-grid">
				<motion.div className="rive-textblock" initial="hidden" whileInView="visible" variants={cardAnim}>
					<h3>Probleem</h3>
					<p>Een issue dat ik bij rive had is dat je je files niet kan exporteren naar figma of een ander platform omdat dit betalend is.</p>
				</motion.div>

				<motion.div className="rive-textblock" initial="hidden" whileInView="visible" variants={cardAnim}>
					<h3>Oplossing</h3>
					<p>Connecties gebruikt en gevraagd of de persoon mijn file kan exporteren.</p>
				</motion.div>
			</div>
			{/* RIVE CAT ANIMATIE */}
			<div className="rive-cat-wrapper">
				<Cat />
			</div>
		</div>
	);
}
