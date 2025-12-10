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
					<img src="/rive1.png" alt="Rive voorbeeld 1" />
				</motion.div>

				<motion.div className="rive-card" variants={cardAnim} whileHover={{ scale: 1.03 }}>
					<img src="/rive2.png" alt="Rive voorbeeld 2" />
				</motion.div>
			</motion.div>

			{/* TEKST BLOKKEN */}
			<div className="rive-text-grid">
				<motion.div className="rive-textblock" initial="hidden" whileInView="visible" variants={cardAnim}>
					<h3>Probleem</h3>
					<p>De oorspronkelijke hero section van de opvangpagina was tekstzwaar en miste visuele hiërarchie. Hierdoor begrepen gebruikers niet meteen wat er van hen verwacht werd, waardoor ze sneller afhaakten.</p>
				</motion.div>

				<motion.div className="rive-textblock" initial="hidden" whileInView="visible" variants={cardAnim}>
					<h3>Oplossing</h3>
					<p>Met een Rive-animatie wordt de hero section dynamisch en visueel sterker. De animatie trekt de aandacht en ondersteunt de boodschap, waardoor de gebruiker sneller begrijpt wat de bedoeling is.</p>
				</motion.div>
			</div>
			{/* RIVE CAT ANIMATIE */}
			<div className="rive-cat-wrapper">
				<Cat />
			</div>
		</div>
	);
}
