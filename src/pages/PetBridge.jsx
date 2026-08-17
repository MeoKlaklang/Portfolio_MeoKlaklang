import "./PetBridge.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUp = {
	hidden: {
		opacity: 0,
		y: 35,
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.65,
			ease: "easeOut",
		},
	},
};

const staggerContainer = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.12,
		},
	},
};

function MediaPlaceholder({ label, type = "image" }) {
	return (
		<div className={`petbridge-placeholder ${type === "video" ? "petbridge-video-placeholder" : ""}`}>
			<span>{type === "video" ? "▶" : "+"}</span>
			<p>{label}</p>
		</div>
	);
}

export default function PetBridge() {
	return (
		<main className="petbridge-page">
			<section className="petbridge-hero">
				<motion.div className="petbridge-hero-copy" initial="hidden" animate="show" variants={staggerContainer}>
					<motion.p className="petbridge-project-number" variants={fadeUp}>
						03 — iOS development
					</motion.p>

					<motion.h1 className="petbridge-main-title" variants={fadeUp}>
						PetBridge
					</motion.h1>

					<motion.div className="petbridge-meta" variants={fadeUp}>
						<p>UX/UI · SwiftUI · iOS application</p>
						<p>2025</p>
					</motion.div>

					<motion.p className="petbridge-intro" variants={fadeUp}>
						An iOS application that helps users become temporary foster homes for cats and dogs in need of care.
					</motion.p>
				</motion.div>

				<motion.div
					className="petbridge-hero-media"
					initial={{ opacity: 0, scale: 0.96 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						duration: 0.85,
						delay: 0.2,
						ease: "easeOut",
					}}
				>
					<div className="petbridge-phone-showcase">
						<img src="ios1.png" alt="PetBridge iOS screen 1" className="petbridge-phone petbridge-phone-1" />

						<img src="ios2.png" alt="PetBridge iOS screen 2" className="petbridge-phone petbridge-phone-2" />

						<img src="ios3.png" alt="PetBridge iOS screen 3" className="petbridge-phone petbridge-phone-3" />
					</div>{" "}
				</motion.div>
			</section>

			<motion.section className="petbridge-section petbridge-overview" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}>
				<motion.div className="petbridge-section-heading" variants={fadeUp}>
					<span>01</span>
					<h2>overview</h2>
				</motion.div>

				<motion.div className="petbridge-overview-grid" variants={fadeUp}>
					<div className="petbridge-overview-copy">
						<p>For my iOS course, I designed and developed an app that shows nearby animal shelters based on the user’s location.</p>

						<p>Users can save animals, add notes and track medication. The app was built using SwiftUI and follows the MVVM architecture.</p>
					</div>

					<div className="petbridge-details">
						<div>
							<h3>Role</h3>
							<p>
								UX/UI Designer
								<br />
								iOS Developer
							</p>
						</div>

						<div>
							<h3>Tools</h3>
							<p>Figma, SwiftUI and Xcode</p>
						</div>

						<div>
							<h3>Technology</h3>
							<p>MVVM, Core Data, MapKit and Core Location</p>
						</div>

						<div>
							<h3>Deliverables</h3>
							<p>Figma prototype and functional iOS app</p>
						</div>
					</div>
				</motion.div>
			</motion.section>

			<motion.section className="petbridge-section petbridge-video-section" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}>
				<motion.div className="petbridge-section-heading" variants={fadeUp}>
					<span>03</span>
					<h2>app demo</h2>
				</motion.div>

				<motion.div variants={fadeUp}>
					<motion.div className="petbridge-video-wrapper" variants={fadeUp}>
						<video className="petbridge-demo-video" controls playsInline preload="metadata">
							<source src="ios-vid.mp4" type="video/mp4" />
							Your browser does not support the video tag.
						</video>
					</motion.div>
				</motion.div>
			</motion.section>

			<section className="petbridge-navigation">
				<Link to="/#projects" className="petbridge-back-link">
					← Back to selected projects
				</Link>

				<Link to="/AnimalFestival" className="petbridge-next-project" onClick={() => window.scrollTo(0, 0)}>
					<span>Next project</span>
					<strong>Animal Festival →</strong>
				</Link>
			</section>
		</main>
	);
}
