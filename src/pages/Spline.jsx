import "./Spline.css";
import { motion } from "framer-motion";

export default function SplineSection() {
	const cardAnim = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
	};

	return (
		<div className="spline-container">

			{/* TITEL */}
			<motion.h2
				className="spline-title"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
			>
				0.2.1 Spline
			</motion.h2>

			{/* 4 KAARTEN */}
			<motion.div
				className="spline-grid"
				initial="hidden"
				whileInView="visible"
				variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
			>
				{["spline1.png", "spline2.png", "spline3.png", "spline4.png"].map((img, index) => (
					<motion.div
						key={index}
						className="spline-card"
						variants={cardAnim}
						whileHover={{ scale: 1.03 }}
					>
						<img src={`/${img}`} alt={`Spline ${index + 1}`} />
					</motion.div>
				))}
			</motion.div>

			{/* PROBLEEM + OPLOSSING */}
			<div className="spline-text-grid">

				<motion.div
					className="spline-textblock"
					initial="hidden"
					whileInView="visible"
					variants={cardAnim}
				>
					<h3>Probleem</h3>
					<p>
						De oorspronkelijke animaties boden weinig interactie en waren visueel beperkt.
						Daardoor voelde de hero section minder dynamisch en minder aansprekend aan voor gebruikers.
					</p>
				</motion.div>

				<motion.div
					className="spline-textblock"
					initial="hidden"
					whileInView="visible"
					variants={cardAnim}
				>
					<h3>Oplossing</h3>
					<p>
						Met Spline kan de interface verrijkt worden met real-time 3D-animaties die de gebruiker
						een intuïtieve, interactieve ervaring bieden. Dit maakt de hero section visueel sterker,
						innovatief en aantrekkelijker.
					</p>
				</motion.div>

			</div>

			{/* SPLINE ANIMATIE */}
			<motion.div
				className="spline-player"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
			>
				<iframe
					src="https://my.spline.design/untitled-LcqrK4wXgsqoPkXWSveGss4U/"
					frameBorder="0"
					width="100%"
					height="100%"
					style={{ border: "none" }}
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				></iframe>
			</motion.div>

		</div>
	);
}
