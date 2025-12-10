import "./LaserLady.css";
import { motion } from "framer-motion";

export default function LaserLady() {
	const fadeUp = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
	};

	return (
		<div className="laserlady-container">
			{/* HOOFDTITEL */}
			<motion.h2 className="laserlady-title" initial="hidden" whileInView="visible" variants={fadeUp}>
				0.3 LaserLady
			</motion.h2>

			{/* SUBTITEL + TEKST */}
			<div className="laserlady-intro">
				<motion.h3 initial="hidden" whileInView="visible" variants={fadeUp}>
					Wat is dierenbescherming Mechelen?
				</motion.h3>

				<motion.p initial="hidden" whileInView="visible" variants={fadeUp}>
					Dierenbescherming Mechelen is een organisatie die zich inzet voor het opvangen, verzorgen en herplaatsen van dieren (zoals honden en katten) in en rond Mechelen. Ze beheren onder andere een opvang- en adoptieservice voor viervoeters die op
					zoek zijn naar een nieuw huis.
				</motion.p>
			</div>

			{/* AFBEELDING */}
			<motion.div className="laserlady-image-wrapper" initial="hidden" whileInView="visible" variants={fadeUp}>
				<img src="/mechelen-home.gif" alt="Laptop voorbeeld" className="laserlady-image" />
			</motion.div>

			{/* CONCURRENTIE ANALYSE */}
			<div className="laserlady-analysis">
				<motion.h3 initial="hidden" whileInView="visible" variants={fadeUp}>
					Concurentie analyse
				</motion.h3>

				<motion.p initial="hidden" whileInView="visible" variants={fadeUp}>
					Bij veel Vlaamse dierenasielen ligt de focus online vooral op adoptie en vrijwilligerswerk, terwijl opvanggezinnen vaak minder zichtbaar of versnipperd terug te vinden zijn. De info staat meestal in grote tekstblokken, zonder duidelijke
					flow of opvallende call-to-action om opvanggezin te worden. Daardoor is het voor geïnteresseerde mensen moeilijk om snel te begrijpen wat een opvanggezin precies doet, wat er van hen verwacht wordt en hoe ze zich kunnen aanmelden.
				</motion.p>
			</div>
			<div className="persona-container">
				{/* TITEL */}
				<motion.h2 className="persona-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}>
					User Personas & Journey map
				</motion.h2>

				{/* GRID */}
				<div className="persona-grid">
					{/* ——— LINKERKOLOM ——— */}
					<motion.div className="persona-text" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}>
						<h3 className="persona-name">Marte Vermeulen</h3>

						<p className="persona-info">
							Kinderopvang medewerkster
							<br />
							Leeftijd: 30 jaar
							<br />
							Locatie: Holsbeek
						</p>

						<p className="persona-description">
							Marte is een zorgzame vrouw die haar tijd verdeelt tussen haar werk in de kinderopvang en het opvoeden van haar éénjarig kind. Ze houdt van dieren en heeft thuis een kat, maar wist tot voor kort weinig over wat een opvanggezin precies
							doet.
						</p>

						<p className="persona-description">Ze zoekt vooral duidelijke en beknopte informatie wanneer ze online opzoekt hoe dit werkt.</p>
					</motion.div>

					{/* ——— RECHTERKOLOM: IMAGE + FIGMA HOVER REVEAL ——— */}
					<div className="persona-image-wrapper">
						{/* NORMALE AFBEELDING */}
						<motion.img
							className="persona-image"
							src="/persona.png" // <— jouw image
							alt="Persona Journey Illustration"
							initial={{ opacity: 0, scale: 0.95 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
						/>

						{/* FIGMA EMBED OP HOVER */}
						<iframe
							className="persona-figma"
							style={{ border: "1px solid rgba(0,0,0,0.1)" }}
							width="800"
							height="450"
							src="https://embed.figma.com/board/kfzLbn4zLP12hIqjNg3PBp/Customer-Journey-Map--Copy-?node-id=0-1&embed-host=share"
							allowFullScreen
						></iframe>
					</div>
				</div>
			</div>
			{/* ----------------------------------------------------- */}
			{/* LASERLADY SKETCH WIREFRAME SECTION                     */}
			{/* ----------------------------------------------------- */}

			<div className="laserlady-sketch">
				{/* Titel */}
				<motion.h3 className="laserlady-sketch-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}>
					Sketch wireframe
				</motion.h3>

				{/* GRID VAN 4 */}
				<div className="laserlady-sketch-grid">
					{["laser-1.png", "laser-2.png", "laser-3.png", "laser-4.png"].map((img, i) => (
						<motion.div key={i} className="laserlady-sketch-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}>
							<img src={`/${img}`} alt="LaserLady sketch" />
						</motion.div>
					))}
				</div>

				{/* Probleem + Oplossing */}
				<div className="laserlady-sketch-bottom">
					<div className="laserlady-sketch-textblock">
						<h3>Probleem</h3>
						<p>
							De oorspronkelijke hero section van de opvanggezin-pagina is tekstzwaar en mist visuele hiërarchie. De belangrijkste boodschap en call-to-action vallen weg door de drukke lay-out, waardoor gebruikers niet meteen begrijpen wat er van hen
							verwacht wordt.
						</p>
					</div>

					<div className="laserlady-sketch-textblock">
						<h3>Oplossing</h3>
						<p>
							In mijn redesign breng ik focus, eenvoud en emotie terug in de hero‐sectie. Een krachtige titel, warme dierenbeelden en een opvallende call-to-action maken meteen duidelijk wat de bedoeling is. Dankzij de moderne lay-out vindt de
							gebruiker in één oogopslag de juiste informatie en voelt hij zich sneller aangespoord om zich aan te melden als opvanggezin.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
