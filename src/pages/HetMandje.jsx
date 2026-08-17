import "./HetMandje.css";
import { motion } from "framer-motion";
import Persona from "../pages/Persona";
import { useState } from "react";
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

const insights = [
	{
		number: "01",
		title: "Unclear foster process",
		text: "Potential foster families are often willing to help, but do not clearly understand what temporary foster care involves.",
	},
	{
		number: "02",
		title: "Fragmented communication",
		text: "Animal shelters, foster families and veterinarians often communicate through separate channels.",
	},
	{
		number: "03",
		title: "Limited overview",
		text: "Appointments, medical information and animal updates are not always stored in one central place.",
	},
];

const roles = [
	{
		number: "01",
		title: "Foster families",
		text: "Discover suitable animals, manage availability, follow appointments and communicate with shelters and veterinarians.",
	},
	{
		number: "02",
		title: "Animal shelters",
		text: "Manage animals, foster applications, availability statuses, communication and follow-up.",
	},
	{
		number: "03",
		title: "Veterinarians",
		text: "Access medical information, manage appointments and follow the treatment of assigned animals.",
	},
];

const processSteps = [
	{
		number: "01",
		title: "Research",
		text: "Interviews, desk research and competitive analysis.",
	},
	{
		number: "02",
		title: "Define",
		text: "Personas, user needs, user journeys and platform requirements.",
	},
	{
		number: "03",
		title: "Design",
		text: "User flows, wireframes, visual identity and interactive prototypes.",
	},
	{
		number: "04",
		title: "Test",
		text: "Task-based usability testing followed by iterative improvements.",
	},
	{
		number: "05",
		title: "Build",
		text: "Responsive front-end development and Supabase integration.",
	},
];

const features = [
	{
		number: "01",
		title: "Interactive animal map",
		text: "Foster families can discover available dogs and cats through an interactive map, making it easier to find animals and shelters in their area.",
		image: "interactive_map.png",
		roles: "Foster families",
		className: "feature-large",
	},
	{
		number: "02",
		title: "Foster applications",
		text: "A clear application flow allows foster families to apply for an animal, while shelters can review and manage incoming requests from one central place.",
		image: "aanvraag.png",
		roles: "Foster families · Shelters",
		className: "",
	},
	{
		number: "03",
		title: "Animal medical records",
		text: "Shelters and veterinarians can access a central record for each dog or cat, containing medical information, appointments and notes to keep everyone involved up to date.",
		image: "dossier.png",
		roles: "Shelters · Veterinarians",
		className: "feature-large",
	},
	{
		number: "04",
		title: "Centralised reminders",
		text: "Foster families receive a clear overview of appointments, reminders and notes in their dashboard, including whether an update comes from the shelter or veterinarian.",
		image: "reminder.png",
		roles: "Foster families",
		className: "",
	},
	{
		number: "05",
		title: "Task management",
		text: "Shelters and veterinarians can organise and follow up their daily tasks, such as blood tests, medical follow-ups and other animal-related actions.",
		image: "task.png",
		roles: "Shelters · Veterinarians",
		className: "",
	},
];

function MediaPlaceholder({ label, type = "image", className = "" }) {
	return (
		<div className={`media-placeholder ${type === "video" ? "video-placeholder" : ""} ${className}`}>
			<span className="media-placeholder-number">{type === "video" ? "▶" : "+"}</span>

			<p>{label}</p>
		</div>
	);
}

export default function HetMandje() {
	const [activeTab, setActiveTab] = useState("pleeg"); // ✅ HIER

	const tabs = [
		{
			id: "pleeg",
			label: "Pleeggezin",
			images: ["Dieren zoeken.png", "Dieren zoeken-2.png", "Dieren zoeken-3.png", "hoe werkt opvang.png", "Aanmelding pleeggezin.png"],
		},
		{
			id: "asiel",
			label: "Dierenasiel",
			images: ["Asiel-wire-1.png", "Asiel-wire-2.png", "Asiel-wire-3.png", "Asiel-wire-4.png", "Asiel-wire-5.png"],
		},
		{
			id: "arts",
			label: "Dierenarts",
			images: ["dierenarts-wireframe-1.png", "dierenarts-wireframe-2.png", "dierenarts-wireframe-3.png", "dierenarts-wireframe-4.png", "dierenarts-wireframe-5.png"],
		},
	];

	return (
		<main className="mandje-page">
			{/* HERO */}

			<section className="mandje-hero">
				<motion.div className="mandje-hero-copy" initial="hidden" animate="show" variants={staggerContainer}>
					<motion.p className="mandje-project-number" variants={fadeUp}>
						01 — Bachelor project
					</motion.p>

					<motion.h1 className="mandje-main-title" variants={fadeUp}>
						Het
						<br />
						Mandje
					</motion.h1>

					<motion.div className="mandje-hero-info" variants={fadeUp}>
						<p>UX/UI · Full-stack · Web platform</p>
						<p>2025 — 2026</p>
					</motion.div>

					<motion.p className="mandje-hero-description" variants={fadeUp}>
						A digital platform connecting foster families, animal shelters and veterinarians to make temporary animal care more accessible, organised and transparent.
					</motion.p>
				</motion.div>

				<motion.div
					className="mandje-hero-media"
					initial={{ opacity: 0, scale: 0.96 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						duration: 0.9,
						delay: 0.2,
						ease: "easeOut",
					}}
				>
					<div className="mandje-mockup-composition">
						<img src="search-desk.png" alt="Desktopversie van Het Mandje" className="mandje-desktop-mockup" />

						<img src="home-app.png" alt="Mobiele versie van Het Mandje" className="mandje-mobile-mockup" />
					</div>
				</motion.div>
			</section>

			{/* OVERVIEW */}

			<motion.section className="mandje-section overview-section" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}>
				<motion.div className="section-heading" variants={fadeUp}>
					<span>01</span>
					<h2>overview</h2>
				</motion.div>

				<motion.div className="overview-grid" variants={fadeUp}>
					<div className="overview-introduction">
						<p>Het Mandje was developed as my graduation project in Multimedia & Creative Technology. I was responsible for the complete process, from research and concept development to UX/UI design and full-stack implementation.</p>
					</div>

					<div className="overview-details">
						<div>
							<h3>Role</h3>
							<p>
								UX/UI Designer
								<br />
								Full-stack Developer
							</p>
						</div>

						<div>
							<h3>Duration</h3>
							<p>Academic year 2025–2026</p>
						</div>

						<div>
							<h3>Tools</h3>
							<p>Figma, Next.js, React, Supabase, Adobe InDesign</p>
						</div>

						<div>
							<h3>Deliverables</h3>
							<p>Research, wireframes, prototype, design system, platform, magazine and presentation video</p>
						</div>
					</div>
				</motion.div>
			</motion.section>

			{/* CHALLENGE */}

			<motion.section className="mandje-section challenge-section" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}>
				<motion.div className="challenge-left" variants={fadeUp}>
					<div className="split-title">
						<span>02</span>

						<h2>
							the
							<br />
							challenge
						</h2>
					</div>

					<div className="challenge-video-wrapper">
						<video className="challenge-video" src="PROMO-VIDEO-mandje.mp4" controls playsInline preload="metadata">
							Your browser does not support this video.
						</video>
					</div>
				</motion.div>

				<motion.div className="challenge-content" variants={fadeUp}>
					<p className="large-body-text">Animal shelters often struggle with overcrowding, fragmented communication and limited follow-up during temporary foster care.</p>

					<p>
						Many people are willing to temporarily care for an animal, but unclear processes, limited information and scattered communication create unnecessary barriers. Shelters and veterinarians also need a more centralised way to manage animals,
						appointments and medical information.
					</p>
				</motion.div>
			</motion.section>

			{/* INSIGHTS */}

			<motion.section className="mandje-section insight-section" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}>
				<motion.div className="insight-grid" variants={staggerContainer}>
					{insights.map((insight) => (
						<motion.article className="insight-item" key={insight.number} variants={fadeUp}>
							<span>{insight.number}</span>
							<h3>{insight.title}</h3>
							<p>{insight.text}</p>
						</motion.article>
					))}
				</motion.div>
			</motion.section>

			{/* RESEARCH */}

			<motion.section className="mandje-section research-section" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={staggerContainer}>
				<motion.div className="section-heading" variants={fadeUp}>
					<span>03</span>
					<h2>research</h2>
				</motion.div>

				{/* 👇 NIEUW: wrapper rond tekst + carousel */}
				<div className="research-row">
					{/* 👉 jouw originele tekst (NIET veranderd) */}
					<motion.div className="research-copy" variants={fadeUp}>
						<p className="large-body-text">I used research to understand the needs of foster families, shelters and veterinarians before designing the platform.</p>

						<p>
							Through interviews, desk research, competitive analysis and user journey mapping, I identified the most important barriers and opportunities. The research showed that users mainly needed clarity, reassurance, simple communication and
							one central overview.
						</p>
					</motion.div>

					{/* 👉 ENKEL dit toegevoegd rechts */}
					<motion.div className="research-carousel" variants={fadeUp} onMouseEnter={(e) => e.currentTarget.classList.add("active")}>
						<div className="carousel-track">
							<img src="asiel-1.png" />
							<img src="asiel-2.png" />
							<img src="asiel-3.png" />
							<img src="asiel-5.png" />

							{/* duplicate voor infinite */}
							<img src="asiel-1.png" />
							<img src="asiel-2.png" />
							<img src="asiel-3.png" />
							<img src="asiel-5.png" />
						</div>
					</motion.div>
				</div>

				{/* 👉 persona blijft exact zoals het was */}
				<motion.div className="research-persona-wrapper" variants={fadeUp}>
					<Persona />
				</motion.div>
			</motion.section>

			{/* WIREFRAMES */}

			<motion.section className="mandje-section wireframe-section" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={staggerContainer}>
				<motion.div className="split-title" variants={fadeUp}>
					<span>04</span>
					<h2>
						from
						<br />
						idea to interface
					</h2>
				</motion.div>

				<motion.div className="wireframe-copy" variants={fadeUp}>
					<p>I first translated the platform requirements into user flows and low-fidelity wireframes. These wireframes allowed me to test the structure, navigation and core user journeys before focusing on the visual design.</p>
				</motion.div>

				{/* 🔥 TABS */}
				<div className="wireframe-tabs">
					{tabs.map((tab) => (
						<button key={tab.id} className={activeTab === tab.id ? "active" : ""} onClick={() => setActiveTab(tab.id)}>
							{tab.label}
						</button>
					))}
				</div>

				{/* WIREFRAME GALLERY */}
				<motion.div className="wireframe-gallery" key={activeTab} variants={staggerContainer} initial="hidden" animate="show">
					{tabs
						.find((tab) => tab.id === activeTab)
						.images.map((image, index) => (
							<motion.div className="wireframe-image-wrapper" key={image} variants={fadeUp}>
								<img src={image} alt={`${tabs.find((tab) => tab.id === activeTab).label} wireframe ${index + 1}`} className="wireframe-image" />
							</motion.div>
						))}
				</motion.div>
			</motion.section>

			{/* DESIGN SYSTEM */}

			<motion.section className="mandje-section design-section" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={staggerContainer}>
				<motion.div className="section-heading" variants={fadeUp}>
					<span>07</span>
					<h2>visual language</h2>
				</motion.div>

				<motion.div className="design-intro" variants={fadeUp}>
					<p className="large-body-text">Warm, trustworthy and approachable.</p>

					<p>
						The visual identity uses soft colours, rounded elements and hand-drawn details to create a friendly experience without making the platform feel childish. The design system ensures consistency across the different dashboards and user
						roles.
					</p>
				</motion.div>

				<motion.div className="design-system-showcase" variants={staggerContainer}>
					{/* COLORS */}
					<motion.div className="design-block design-colors" variants={fadeUp}>
						<span className="design-label">01 — Colour palette</span>

						<div className="color-palette">
							<div className="color-item">
								<div className="color-swatch" style={{ backgroundColor: "#fef5eb" }}></div>
								<span>#FEF5EB</span>
							</div>

							<div className="color-item">
								<div className="color-swatch" style={{ backgroundColor: "#d9d3aa" }}></div>
								<span>#D9D3AA</span>
							</div>

							<div className="color-item">
								<div className="color-swatch" style={{ backgroundColor: "#e09134" }}></div>
								<span>#E09134</span>
							</div>

							<div className="color-item">
								<div className="color-swatch" style={{ backgroundColor: "#3a2313" }}></div>
								<span>#3A2313</span>
							</div>
						</div>

						<p className="design-description">A warm and natural colour palette creates a welcoming and trustworthy atmosphere while keeping the platform clear and accessible.</p>
					</motion.div>

					{/* TYPOGRAPHY */}
					<motion.div className="design-block design-typography" variants={fadeUp}>
						<span className="design-label">02 — Typography</span>

						<div className="typography-grid">
							<div className="font-example font-borel">
								<span className="font-name">Borel</span>
								<p>Warm & personal</p>
								<span className="font-description">Used for expressive titles and playful details.</span>
							</div>

							<div className="font-example font-inter">
								<span className="font-name">Inter</span>
								<p>Aa Bb Cc 123</p>
								<span className="font-description">Used for body text, navigation and interface elements.</span>
							</div>
						</div>
					</motion.div>

					{/* BUTTONS */}
					<motion.div className="design-block design-buttons" variants={fadeUp}>
						<span className="design-label">03 — Interface elements</span>

						<div className="button-showcase">
							<button className="mandje-button-primary">Ontdek hoe het werkt</button>

							<button className="mandje-button-secondary">Vind jouw dier</button>
						</div>

						<p className="design-description">Rounded shapes and warm accent colours make actions approachable while maintaining a clear visual hierarchy.</p>
					</motion.div>

					{/* LOGO */}
					<motion.div className="design-block design-logo-showcase" variants={fadeUp}>
						<div className="logo-content">
							<div>
								<span className="design-label">04 — Logo</span>

								<p className="design-description">The hand-drawn logo gives Het Mandje a warm, authentic and personal identity. Its organic lines reinforce the caring character of the platform.</p>
							</div>

							<img src="logo_mandje.png" alt="Het Mandje logo" className="mandje-design-logo" />
						</div>
					</motion.div>
				</motion.div>
			</motion.section>

			{/* FEATURES */}

			<motion.section className="mandje-section features-section" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer}>
				<motion.div className="section-heading" variants={fadeUp}>
					<span>08</span>
					<h2>key features</h2>
				</motion.div>

				<motion.div className="features-grid" variants={staggerContainer}>
					{features.map((feature) => (
						<motion.article className={`feature-item ${feature.className}`} key={feature.number} variants={fadeUp}>
							<div className="feature-image-wrapper">
								<img src={feature.image} alt={feature.title} className="feature-image" />
							</div>

							<div className="feature-copy">
								<div className="feature-meta">
									<span>{feature.number}</span>
									<span className="feature-role">{feature.roles}</span>
								</div>

								<h3>{feature.title}</h3>

								<p>{feature.text}</p>
							</div>
						</motion.article>
					))}
				</motion.div>
			</motion.section>

			{/* REFLECTION */}

			<motion.section className="mandje-section reflection-section" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}>
				<motion.div className="split-title" variants={fadeUp}>
					<span>12</span>

					<h2>
						what I
						<br />
						learned
					</h2>
				</motion.div>

				<motion.div className="reflection-content" variants={fadeUp}>
					<div className="reflection-copy">
						<p className="large-body-text">Het Mandje allowed me to bring together two fields I deeply care about: animal welfare and digital innovation.</p>

						<p>
							The idea grew from my previous experience at Dierenbescherming Mechelen, where I saw first-hand the challenges animal shelters face, from limited capacity and a growing number of animals to fragmented communication between the people
							involved in their care.
						</p>

						<p>With this project, I combined my background in Animal Care with my skills in Multimedia & Creative Technologies to explore how digital design and technology can respond to a real societal challenge.</p>

						<p>More than designing and developing a platform, this project taught me how meaningful digital products can emerge when research, technology and personal motivation come together.</p>
					</div>

					<motion.a
						className="reflection-feature"
						href="https://www.bruzz.be/videoreeks/said-city/video-nieuwe-apps-en-vr-games-de-techstudenten-van-erasmus-stellen-hun-creaties-tentoon"
						target="_blank"
						rel="noopener noreferrer"
						whileHover={{ y: -6 }}
						transition={{ duration: 0.3 }}
					>
						<div className="reflection-image-wrapper">
							<img src="bruzz.png" alt="Interview with BRUZZ about Het Mandje" />
						</div>

						<div className="reflection-feature-info">
							<span>Featured by BRUZZ</span>

							<p>Selected as one of the graduation projects highlighting social impact.</p>

							<span className="reflection-link">Watch the interview ↗</span>
						</div>
					</motion.a>
				</motion.div>
			</motion.section>
			{/* NAVIGATION */}

			<section className="project-navigation">
				<Link
					to="/#projects"
					className="back-link"
					onClick={() => {
						setTimeout(() => {
							document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
						}, 100);
					}}
				>
					← Back to selected projects
				</Link>

				<Link to="/thumbelina" className="next-project" onClick={() => window.scrollTo(0, 0)}>
					<span>Next project</span>
					<strong>Thumbelina →</strong>
				</Link>
			</section>
		</main>
	);
}
