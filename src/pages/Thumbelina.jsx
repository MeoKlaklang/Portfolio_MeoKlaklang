import "./Thumbelina.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUp = {
	hidden: {
		opacity: 0,
		y: 40,
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.7,
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

const features = [
	{
		number: "01",
		title: "One-page storytelling",
		text: "A continuous scrolling experience presents the story of Thumbelina through interactive scenes and visual transitions.",
	},
	{
		number: "02",
		title: "Dynamic React content",
		text: "Content is rendered dynamically from structured JSON data using reusable React components and map().",
	},
	{
		number: "03",
		title: "Interactive animations",
		text: "Parallax effects, smooth transitions and hover interactions make the experience playful and immersive.",
	},
	{
		number: "04",
		title: "Central class portal",
		text: "I also designed and developed the class portal that connected all student projects in one central environment.",
	},
];

function MediaPlaceholder({ label, type = "image", className = "" }) {
	return (
		<div className={`thumbelina-placeholder ${type === "video" ? "thumbelina-video-placeholder" : ""} ${className}`}>
			<span>{type === "video" ? "▶" : "+"}</span>
			<p>{label}</p>
		</div>
	);
}

export default function Thumbelina() {
	return (
		<main className="thumbelina-page">
			{/* HERO */}

			<section className="thumbelina-hero">
				<motion.div className="thumbelina-hero-copy" initial="hidden" animate="show" variants={staggerContainer}>
					<motion.p className="thumbelina-project-number" variants={fadeUp}>
						02 — Front-end development
					</motion.p>

					<motion.h1 className="thumbelina-main-title" variants={fadeUp}>
						Thumbelina
					</motion.h1>

					<motion.div className="thumbelina-meta" variants={fadeUp}>
						<p>UI Design · React · Interactive Web Experience</p>
						<p>2024</p>
					</motion.div>

					<motion.p className="thumbelina-intro" variants={fadeUp}>
						An interactive one-page website based on the fairytale Thumbelina, combining visual storytelling, React development and playful motion design.
					</motion.p>

					<motion.a href="https://ehb-mct.github.io/cp-frontend-MeoKlaklang/#/making-of/siriyakorn-klaklang-duimelijntje" target="_blank" rel="noopener noreferrer" className="thumbelina-live-link" variants={fadeUp}>
						View live project ↗
					</motion.a>
				</motion.div>

				<motion.div
					className="thumbelina-hero-media"
					initial={{ opacity: 0, scale: 0.96 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						duration: 0.9,
						delay: 0.2,
						ease: "easeOut",
					}}
				>
					<img src="duimelijntje-home.png" alt="Thumbelina project" className="thumbelina-hero-image" />{" "}
				</motion.div>
			</section>

			{/* OVERVIEW */}

			<motion.section className="thumbelina-section thumbelina-overview" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}>
				<motion.div className="thumbelina-section-heading" variants={fadeUp}>
					<span>01</span>
					<h2>overview</h2>
				</motion.div>

				{/* TOP: project + technologies */}
				<motion.div className="thumbelina-overview-grid" variants={fadeUp}>
					<div className="thumbelina-overview-copy">
						<p>For this front-end development assignment, I designed and developed an interactive one-page experience based on the fairytale Thumbelina.</p>

						<p>
							The project was built in React using React Router, useState and useEffect, with dynamic content rendered from JSON data using map(). Parallax effects, animations and hover interactions were used to make the story feel more playful and
							immersive.
						</p>
					</div>

					<div className="thumbelina-details">
						<div>
							<h3>Role</h3>
							<p>
								UI Designer
								<br />
								Front-end Developer
							</p>
						</div>

						<div>
							<h3>Technologies</h3>
							<p>
								React · React Router
								<br />
								JavaScript · CSS · JSON
							</p>
						</div>

						<div>
							<h3>Interaction</h3>
							<p>
								Parallax · Animations
								<br />
								Hover interactions
							</p>
						</div>

						<div>
							<h3>Deployment</h3>
							<p>GitHub Pages</p>
						</div>
					</div>
				</motion.div>

				{/* VISUALS */}
				<motion.div className="thumbelina-visuals" variants={staggerContainer}>
					<motion.div className="thumbelina-visual-card" variants={fadeUp}>
						<img src="lelie.png" alt="Thumbelina lily visual" />
					</motion.div>

					<motion.div className="thumbelina-visual-card" variants={fadeUp}>
						<img src="bloem.png" alt="Thumbelina flower visual" />
					</motion.div>

					<motion.div className="thumbelina-visual-card" variants={fadeUp}>
						<img src="vogel.png" alt="Thumbelina bird visual" />
					</motion.div>
				</motion.div>

				{/* VISUAL DESIGN + FIGMA */}
				<motion.div className="thumbelina-design-note" variants={fadeUp}>
					<div>
						<span className="thumbelina-small-label">Visual development</span>

						<p>I first explored and designed the experience in Figma. The illustrations used throughout the story were generated with Adobe Firefly and integrated into the final interactive experience.</p>
					</div>

					<a href="https://www.figma.com/proto/kbZSvZ5R6ABfAZTDYntsWi/sprookesportaal?node-id=28-25&starting-point-node-id=28%3A25&t=ZtfA2kJeHYiMHvNU-1&page-id=0%3A1" target="_blank" rel="noopener noreferrer" className="thumbelina-figma-link">
						<span>Design process</span>
						<strong>View Figma prototype ↗</strong>
					</a>
				</motion.div>
			</motion.section>

			{/* NAVIGATION */}

			<section className="thumbelina-navigation">
				<Link to="/#projects" className="thumbelina-back-link">
					← Back to selected projects
				</Link>

				<Link to="/petbridge" className="thumbelina-next-project" onClick={() => window.scrollTo(0, 0)}>
					<span>Next project</span>
					<strong>PetBridge →</strong>
				</Link>
			</section>
		</main>
	);
}
