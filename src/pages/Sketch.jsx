import "./Sketch.css";
import { motion } from "framer-motion";

export default function Sketch() {
	
	const cardAnim = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
	};

	return (
		<div className="sketch-container">

			{/* TITEL */}
			<motion.h2
				className="sketch-title"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
			>
				Sketch wireframe
			</motion.h2>

			{/* 4 WIREFRAMES */}
			<motion.div
				className="sketch-grid"
				initial="hidden"
				whileInView="visible"
				variants={{
					visible: { transition: { staggerChildren: 0.12 } }
				}}
				viewport={{ once: false }}
			>
				{["sketch-1.png", "sketch-2.png", "sketch-3.png", "sketch-4.png"].map((img, index) => (
					<motion.div
						key={index}
						className={`sketch-card ${index === 3 ? "green" : ""}`}
						variants={cardAnim}
						whileHover={{ scale: 1.03 }}
						transition={{ duration: 0.4 }}
					>
						<img src={`/${img}`} className="sketch-img" alt={`Sketch ${index + 1}`} />
					</motion.div>
				))}
			</motion.div>

			{/* PROBLEEM + OPLOSSING */}
			<div className="sketch-bottom">
				<motion.div
					className="sketch-textblock"
					initial="hidden"
					whileInView="visible"
					variants={cardAnim}
				>
					<h3>Probleem</h3>
					<p>
						De oorspronkelijke hero section van de opvanggezin-pagina is tekstzwaar en mist visuele hiërarchie. De belangrijkste boodschap en call-to-action vallen weg door de drukke lay-out, waardoor gebruikers niet meteen begrijpen wat van hen verwacht wordt. Hierdoor haken veel geïnteresseerden al af vóór ze ontdekken hoe ze opvanggezin kunnen worden.
					</p>
				</motion.div>

				<motion.div
					className="sketch-textblock"
					initial="hidden"
					whileInView="visible"
					variants={cardAnim}
				>
					<h3>Oplossing</h3>
					<p>
						In mijn redesign breng ik focus, eenvoud en emotie terug in de hero section. Een krachtige titel, warme dierenbeelden en één opvallende call-to-action maken meteen duidelijk wat de bedoeling is. Dankzij de moderne, overzichtelijke lay-out vindt de gebruiker in één oogopslag de juiste informatie én voelt hij zich sneller aangespoord om zich aan te melden als opvanggezin.
					</p>
				</motion.div>
			</div>

			{/* —————————————————————— */}
			{/* NIEUWE SECTIE — RIJ 1   */}
			{/* —————————————————————— */}

			<motion.div
				className="sketch-two-grid"
				initial="hidden"
				whileInView="visible"
				variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
			>
				{/* dbm → grijs */}
				<motion.div
					className="sketch-large-card gray"
					variants={cardAnim}
					whileHover={{ scale: 1.03 }}
				>
					<img src="/dbm.png" alt="dbm" />
				</motion.div>

				{/* mechelen-home → groen */}
				<motion.div
					className="sketch-large-card green"
					variants={cardAnim}
					whileHover={{ scale: 1.03 }}
				>
					<img src="/mechelen-home.gif" alt="mechelen" />
				</motion.div>
			</motion.div>

			{/* PROBLEEM - OPLOSSING (2e tekstblok)*/}
			<div className="sketch-two-text">

				<motion.div
					initial="hidden"
					whileInView="visible"
					variants={cardAnim}
				>
					<h3>Probleem</h3>
					<p>
						De oorspronkelijke informatiepagina voor opvanggezinnen bevatte lange tekstblokken, weinig visuele ondersteuning en een onduidelijke structuur. Hierdoor was de informatie moeilijk scanbaar en moesten bezoekers veel moeite doen om te begrijpen wat er van hen verwacht werd. De pagina gaf geen visuele rust en bood weinig houvast voor mensen die snel een overzicht zochten.
					</p>
				</motion.div>

				<motion.div
					initial="hidden"
					whileInView="visible"
					variants={cardAnim}
				>
					<h3>Oplossing</h3>
					<p>
					In mijn redesign is de inhoud overzichtelijk opgedeeld in duidelijke blokken met heldere titels, bullet points en ondersteunende beelden. De gebruiker krijgt in één oogopslag inzicht in wat er van hem verwacht wordt én welke ondersteuning het asiel biedt. Dankzij de moderne lay-out, visuele hiërarchie en luchtige opmaak voelt de informatie toegankelijker, sneller te begrijpen en aangenamer om door te nemen. Daarnaast zorgt een opvallende CTA-blok ervoor dat gebruikers meteen weten waar ze terechtkunnen om zich aan te melden of vragen te stellen, waardoor de volgende stap duidelijk en laagdrempelig wordt.
					</p>
				</motion.div>

			</div>

			{/* —————————————————————— */}
			{/* NIEUWE SECTIE — RIJ 2   */}
			{/* —————————————————————— */}

			<motion.div
				className="sketch-two-grid second-row"
				initial="hidden"
				whileInView="visible"
				variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
			>
				{/* dbm → grijs */}
				<motion.div
					className="sketch-large-card gray"
					variants={cardAnim}
					whileHover={{ scale: 1.03 }}
				>
					<img src="/dbm 2.png" alt="dbm 2" />
				</motion.div>

				{/* meo → groen */}
				<motion.div
					className="sketch-large-card green"
					variants={cardAnim}
					whileHover={{ scale: 1.03 }}
				>
					<img src="/meo 2.png" alt="meo" />
				</motion.div>
			</motion.div>

		</div>
	);
}
