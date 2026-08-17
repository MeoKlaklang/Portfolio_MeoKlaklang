import "./AnimalFestival.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const base = import.meta.env.BASE_URL;

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

export default function AnimalFestival() {
	return (
		<main className="festival-page">

			{/* =========================================
			    HERO
			========================================= */}

			<section className="festival-hero">

				<motion.div
					className="festival-hero-copy"
					initial="hidden"
					animate="show"
					variants={staggerContainer}
				>
					<motion.p
						className="festival-project-number"
						variants={fadeUp}
					>
						04 — UI Design
					</motion.p>

					<motion.h1
						className="festival-main-title"
						variants={fadeUp}
					>
						Animal
						<br />
						Festival
					</motion.h1>

					<motion.div
						className="festival-meta"
						variants={fadeUp}
					>
						<p>UI Design · Mobile application · Adobe XD</p>
						<p>2024</p>
					</motion.div>

					<motion.p
						className="festival-intro"
						variants={fadeUp}
					>
						A mobile application designed to make the festival
						experience simple, accessible and easy to navigate.
					</motion.p>
				</motion.div>


				{/* PHONE SHOWCASE */}

				<motion.div
					className="festival-hero-media"
					initial={{
						opacity: 0,
						scale: 0.96,
					}}
					animate={{
						opacity: 1,
						scale: 1,
					}}
					transition={{
						duration: 0.85,
						delay: 0.2,
						ease: "easeOut",
					}}
				>
					<div className="festival-phone-showcase">

						<img
							src={`${base}festi1.png`}
							alt="Animal Festival mobile interface"
							className="festival-phone festival-phone-1"
						/>

						<img
							src={`${base}festi2.png`}
							alt="Animal Festival mobile timetable"
							className="festival-phone festival-phone-2"
						/>

						<img
							src={`${base}festi3.png`}
							alt="Animal Festival mobile application"
							className="festival-phone festival-phone-3"
						/>

					</div>
				</motion.div>

			</section>


			{/* =========================================
			    OVERVIEW
			========================================= */}

			<motion.section
				className="festival-section festival-overview"
				initial="hidden"
				whileInView="show"
				viewport={{
					once: true,
					amount: 0.2,
				}}
				variants={staggerContainer}
			>

				<motion.div
					className="festival-section-heading"
					variants={fadeUp}
				>
					<span>01</span>

					<h2>overview</h2>
				</motion.div>


				<motion.div
					className="festival-overview-grid"
					variants={fadeUp}
				>

					{/* TEXT */}

					<div className="festival-overview-copy">

						<p>
							Animal Festival is a mobile application designed
							to help visitors quickly find everything they need
							during the festival.
						</p>

						<p>
							The interface brings the festival timetable,
							activities, tickets and essential information
							together in one convenient place, with a focus on
							simple navigation and a clear user experience.
						</p>

					</div>


					{/* DETAILS */}

					<div className="festival-details">

						<div>
							<h3>Role</h3>

							<p>
								UI Designer
							</p>
						</div>


						<div>
							<h3>Tool</h3>

							<p>
								Adobe XD
							</p>
						</div>


						<div>
							<h3>Project type</h3>

							<p>
								Mobile application
							</p>
						</div>


						<div>
							<h3>Focus</h3>

							<p>
								Navigation · Timetable
								<br />
								Ticketing · Activities
							</p>
						</div>

					</div>

				</motion.div>

			</motion.section>


			{/* =========================================
			    PROTOTYPE
			========================================= */}

			<motion.section
				className="festival-section festival-prototype"
				initial="hidden"
				whileInView="show"
				viewport={{
					once: true,
					amount: 0.2,
				}}
				variants={staggerContainer}
			>

				<motion.div
					className="festival-section-heading"
					variants={fadeUp}
				>
					<span>02</span>

					<h2>prototype</h2>
				</motion.div>


				<motion.div
					className="festival-prototype-content"
					variants={fadeUp}
				>

					<div className="festival-prototype-copy">

						<p className="festival-large-text">
							Explore the interactive Animal Festival experience.
						</p>

						<p>
							The interactive Adobe XD prototype demonstrates
							the navigation, festival schedule and key flows
							of the mobile application.
						</p>

					</div>


					<a
						href="https://xd.adobe.com/view/24edcd3e-9a73-4165-bbd0-5f1fa40cc158-71be/?fullscreen"
						target="_blank"
						rel="noopener noreferrer"
						className="festival-prototype-link"
					>
						<span>Interactive prototype</span>

						<strong>
							View Adobe XD prototype ↗
						</strong>
					</a>

				</motion.div>

			</motion.section>


			{/* =========================================
			    NAVIGATION
			========================================= */}

			<section className="festival-navigation">

				<Link
					to="/#projects"
					className="festival-back-link"
				>
					← Back to selected projects
				</Link>


				<Link
					to="/Aeronix"
					className="festival-next-project"
					onClick={() => window.scrollTo(0, 0)}
				>
					<span>Next project</span>

					<strong>
						Areonix →
					</strong>
				</Link>

			</section>

		</main>
	);
}