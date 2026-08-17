import "./Persona.css";
import { motion } from "framer-motion";

export default function Persona() {
	const base = import.meta.env.BASE_URL;

	return (
		<div className="persona-container">
			<motion.h2
				className="persona-title"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.2 }}
				transition={{
					duration: 0.6,
					ease: "easeOut",
				}}
			>
				User Personas & Journey Map
			</motion.h2>

			<div className="persona-layout">
				{/* BLOK 1: persona-afbeelding met info eronder */}

				<motion.article
					className="persona-card persona-profile-card"
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.2 }}
					transition={{
						duration: 0.6,
						ease: "easeOut",
						delay: 0.1,
					}}
				>
					<div className="persona-profile-image-wrapper">
						<img
							className="persona-profile-image"
							src={`${base}marte-persona.jpg`}
							alt="Persona van Marte Vermeulen"
						/>
					</div>

					<div className="persona-text">
						<p className="persona-label">
							Primary persona
						</p>

						<h3 className="persona-name">
							Marte Vermeulen
						</h3>

						<p className="persona-info">
							Kinderopvangmedewerkster
							<br />
							Leeftijd: 30 jaar
							<br />
							Locatie: Holsbeek
						</p>

						<p className="persona-description">
							Marte is een zorgzame vrouw die haar
							tijd verdeelt tussen haar werk in de
							kinderopvang en het opvoeden van haar
							éénjarige kind.
						</p>

						<p className="persona-description">
							Ze houdt van dieren en heeft thuis een
							kat, maar wist aanvankelijk weinig over
							wat een opvanggezin precies doet. Ze
							zoekt vooral duidelijke en beknopte
							informatie.
						</p>
					</div>
				</motion.article>

				{/* BLOK 2: grotere persona- of journey-afbeelding */}

				<motion.article
					className="persona-card persona-visual-card"
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.2 }}
					transition={{
						duration: 0.6,
						ease: "easeOut",
						delay: 0.2,
					}}
				>
					<div className="persona-card-heading">
						<p className="persona-label">
							Research visual
						</p>

						<h3>Persona overview</h3>
					</div>

					<img
						className="persona-overview-image"
						src={`${base}persona.png`}
						alt="Uitgebreid persona-overzicht van Marte"
					/>
				</motion.article>

				{/* BLOK 3: Figma journey map */}

				<motion.article
					className="persona-card persona-journey-card"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.1 }}
					transition={{
						duration: 0.7,
						ease: "easeOut",
						delay: 0.15,
					}}
				>
					<div className="persona-journey-heading">
						<div>
							<p className="persona-label">
								Customer journey
							</p>

							<h3>Marte’s foster-care journey</h3>
						</div>

						<p className="persona-journey-note">
							Interactive Figma board
						</p>
					</div>

					<iframe
						className="persona-figma"
						src="https://embed.figma.com/board/kfzLbn4zLP12hIqjNg3PBp/Customer-Journey-Map--Copy-?node-id=0-1&embed-host=share"
						title="Customer journey map van Marte Vermeulen"
						allowFullScreen
					/>
				</motion.article>
			</div>
		</div>
	);
}