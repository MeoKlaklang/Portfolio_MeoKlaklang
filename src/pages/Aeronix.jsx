import "./Aeronix.css";
import { useState } from "react";
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

export default function Areonix() {
	/* =========================================
	   BRAND BOOK
	========================================= */

const brandbookPages = [
	"brandbook-1.png",
	"brandbook-2.png",
	"brandbook-3.png",
	"brandbook-4.png",
	"brandbook-5.png",
	"brandbook-6.png",
	"brandbook-7.png",
	"brandbook-8.png",
	"brandbook-9.png",
	"brandbook-10.png",
	"brandbook-11.png",
	"brandbook-12.png",
	"brandbook-13.png",
	"brandbook-14.png",
];

	const [brandbookPage, setBrandbookPage] = useState(0);

	const nextBrandbook = () => {
		if (brandbookPage < brandbookPages.length - 2) {
			setBrandbookPage((prev) => prev + 2);
		}
	};

	const previousBrandbook = () => {
		if (brandbookPage > 0) {
			setBrandbookPage((prev) => prev - 2);
		}
	};

	return (
		<main className="areonix-page">

			{/* =========================================
			    HERO
			========================================= */}

			<section className="areonix-hero">

				<motion.div
					className="areonix-hero-copy"
					initial="hidden"
					animate="show"
					variants={staggerContainer}
				>
					<motion.p
						className="areonix-project-number"
						variants={fadeUp}
					>
						05 — Branding & Campaign Design
					</motion.p>

					<motion.h1
						className="areonix-main-title"
						variants={fadeUp}
					>
						Areonix
					</motion.h1>

					<motion.div
						className="areonix-meta"
						variants={fadeUp}
					>
						<p>Branding · UI Design · AI Campaign</p>
						<p>2025</p>
					</motion.div>

					<motion.p
						className="areonix-intro"
						variants={fadeUp}
					>
						A skincare campaign exploring how AI can help people
						find cosmetic products that better match their skin.
					</motion.p>
				</motion.div>

				{/* HERO VISUAL */}

				<motion.div
					className="areonix-hero-media"
					initial={{
						opacity: 0,
						y: 30,
					}}
					animate={{
						opacity: 1,
						y: 0,
					}}
					transition={{
						duration: 0.85,
						delay: 0.2,
						ease: "easeOut",
					}}
				>
					<div className="areonix-device-showcase">

						{/* LAPTOP */}

						<motion.img
							src="aeronix2.png"
							alt="Areonix desktop website"
							className="areonix-device-laptop"
							initial={{
								opacity: 0,
								x: 40,
							}}
							animate={{
								opacity: 1,
								x: 0,
							}}
							transition={{
								duration: 0.9,
								delay: 0.3,
								ease: "easeOut",
							}}
						/>

						{/* PHONE */}

						<motion.img
							src="aeronix-phone.png"
							alt="Areonix mobile website"
							className="areonix-device-phone"
							initial={{
								opacity: 0,
								y: 40,
								rotate: -5,
							}}
							animate={{
								opacity: 1,
								y: 0,
								rotate: -5,
							}}
							transition={{
								duration: 0.8,
								delay: 0.55,
								ease: "easeOut",
							}}
						/>

					</div>
				</motion.div>

			</section>


			{/* =========================================
			    01 — OVERVIEW
			========================================= */}

			<motion.section
				className="areonix-section areonix-overview"
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.2 }}
				variants={staggerContainer}
			>

				<motion.div
					className="areonix-section-heading"
					variants={fadeUp}
				>
					<span>01</span>
					<h2>overview</h2>
				</motion.div>

				<motion.div
					className="areonix-overview-grid"
					variants={fadeUp}
				>

					<div className="areonix-overview-copy">

						<p>
							For Design 3, I developed an AI-driven campaign
							around a fictional skincare brand called Areonix.
						</p>

						<p>
							The concept helps people who struggle to find
							suitable cosmetic products for their skin.
							Areonix scans the user's skin and recommends
							products based on their needs. The campaign was
							designed for both mobile and desktop.
						</p>

					</div>

					<div className="areonix-details">

						<div>
							<h3>Role</h3>

							<p>
								Brand Designer
								<br />
								UI Designer
							</p>
						</div>

						<div>
							<h3>Tools</h3>

							<p>
								Figma
								<br />
								Adobe Firefly
							</p>
						</div>

						<div>
							<h3>Focus</h3>

							<p>
								Brand Identity · Campaign
								<br />
								UI Design · Advertising
							</p>
						</div>

						<div>
							<h3>Deliverables</h3>

							<p>
								Brandbook · Prototype
								<br />
								Social Media · Advertising
							</p>
						</div>

					</div>

				</motion.div>

			</motion.section>


			{/* =========================================
			    02 — CAMPAIGN
			========================================= */}

			<motion.section
				className="areonix-section areonix-campaign"
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.15 }}
				variants={staggerContainer}
			>

				<motion.div
					className="areonix-section-heading"
					variants={fadeUp}
				>
					<span>02</span>
					<h2>campaign</h2>
				</motion.div>


				{/* INTRO + LOGO */}

				<motion.div
					className="areonix-campaign-intro"
					variants={fadeUp}
				>

					<div className="areonix-campaign-intro-copy">

						<p className="areonix-large-text">
							A consistent visual identity across digital
							campaign touchpoints.
						</p>

						<p>
							I translated the Areonix identity into social
							media content and campaign visuals. The imagery
							was generated using Adobe Firefly and integrated
							into the visual identity of the brand.
						</p>

					</div>

					<div className="areonix-campaign-logo">
						<img
							src="logo-juist.png"
							alt="Areonix logo"
						/>
					</div>

				</motion.div>


				{/* SOCIAL MEDIA CAMPAIGN */}

				<motion.div
					className="areonix-campaign-showcase"
					variants={fadeUp}
				>

					<div className="areonix-showcase-label">

						<span>01</span>

						<div>
							<h3>Social campaign</h3>

							<p>
								A three-part social media carousel introducing
								the Areonix concept and visual identity.
							</p>
						</div>

					</div>


					<motion.div
						className="areonix-social-grid"
						variants={staggerContainer}
					>

						<motion.div
							className="areonix-social-card"
							variants={fadeUp}
						>
							<img
								src="carousel_1.jpg"
								alt="Areonix social campaign — slide 1"
							/>
						</motion.div>

						<motion.div
							className="areonix-social-card"
							variants={fadeUp}
						>
							<img
								src="carousel_2.jpg"
								alt="Areonix social campaign — slide 2"
							/>
						</motion.div>

						<motion.div
							className="areonix-social-card"
							variants={fadeUp}
						>
							<img
								src="carousel_3.jpg"
								alt="Areonix social campaign — slide 3"
							/>
						</motion.div>

					</motion.div>

				</motion.div>


				{/* LOGO ANIMATION */}

				<motion.div
					className="areonix-logo-showcase"
					variants={fadeUp}
				>

					<div className="areonix-showcase-label">

						<span>02</span>

						<div>
							<h3>Logo animation</h3>

							<p>
								The visual identity was extended into motion
								to give the Areonix brand a more dynamic and
								digital character.
							</p>
						</div>

					</div>

					<div className="areonix-logo-video-container">

						<video
							className="areonix-campaign-video"
							autoPlay
							muted
							loop
							playsInline
						>
							<source
								src="logo ae done.mp4"
								type="video/mp4"
							/>

							Your browser does not support the video tag.
						</video>

						<span className="areonix-video-label">
							Areonix — Motion identity
						</span>

					</div>

				</motion.div>

			</motion.section>


			{/* =========================================
			    03 — BRAND IDENTITY
			========================================= */}

			<motion.section
				className="areonix-section areonix-brand"
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.15 }}
				variants={staggerContainer}
			>

				<motion.div
					className="areonix-section-heading areonix-brand-heading"
					variants={fadeUp}
				>
					<span>03</span>
					<h2>brand identity</h2>
				</motion.div>


				{/* INTRO */}

				<motion.div
					className="areonix-brand-intro"
					variants={fadeUp}
				>

					<p className="areonix-large-text">
						More than an interface — Areonix was designed as
						a complete brand.
					</p>

					<p>
						I created a complete brandbook to define the visual
						direction of Areonix, including the logo, typography,
						colour palette, visual language and brand applications.
					</p>

				</motion.div>


				{/* =========================================
				    INTERACTIVE BRAND BOOK
				========================================= */}

				<motion.div
					className="areonix-brandbook"
					variants={fadeUp}
				>

					{/* TOP INFO */}

					<div className="areonix-brandbook-top">

						<span>
							Brand guidelines
						</span>

						<span>
							{String(brandbookPage + 1).padStart(2, "0")}
							{" — "}
							{String(
								Math.min(
									brandbookPage + 2,
									brandbookPages.length
								)
							).padStart(2, "0")}
							{" / "}
							{String(brandbookPages.length).padStart(2, "0")}
						</span>

					</div>


					{/* BOOK VIEWER */}

					<div className="areonix-book-viewer">


						{/* LEFT ARROW */}

						<button
							type="button"
							className="areonix-book-arrow areonix-book-arrow-left"
							onClick={previousBrandbook}
							disabled={brandbookPage === 0}
							aria-label="Previous brandbook pages"
						>
							←
						</button>


						{/* BOOK */}

						<div className="areonix-book">


							{/* LEFT PAGE */}

							<motion.div
								className="areonix-book-page areonix-book-page-left"
								key={`left-${brandbookPage}`}
								initial={{
									opacity: 0,
									x: -20,
								}}
								animate={{
									opacity: 1,
									x: 0,
								}}
								transition={{
									duration: 0.4,
									ease: "easeOut",
								}}
							>

								<img
									src={brandbookPages[brandbookPage]}
									alt={`Areonix brandbook page ${
										brandbookPage + 1
									}`}
								/>

							</motion.div>


							{/* RIGHT PAGE */}

							{brandbookPages[brandbookPage + 1] && (

								<motion.div
									className="areonix-book-page areonix-book-page-right"
									key={`right-${brandbookPage + 1}`}
									initial={{
										opacity: 0,
										x: 20,
									}}
									animate={{
										opacity: 1,
										x: 0,
									}}
									transition={{
										duration: 0.4,
										ease: "easeOut",
									}}
								>

									<img
										src={
											brandbookPages[
												brandbookPage + 1
											]
										}
										alt={`Areonix brandbook page ${
											brandbookPage + 2
										}`}
									/>

								</motion.div>

							)}


							{/* CENTER BOOK FOLD */}

							<div className="areonix-book-spine" />

						</div>


						{/* RIGHT ARROW */}

						<button
							type="button"
							className="areonix-book-arrow areonix-book-arrow-right"
							onClick={nextBrandbook}
							disabled={
								brandbookPage >=
								brandbookPages.length - 2
							}
							aria-label="Next brandbook pages"
						>
							→
						</button>

					</div>


					{/* PROGRESS */}

					<div className="areonix-brandbook-progress">

						<div className="areonix-brandbook-progress-track">

							<motion.div
								className="areonix-brandbook-progress-fill"
								animate={{
									width: `${
										((brandbookPage + 2) /
											brandbookPages.length) *
										100
									}%`,
								}}
								transition={{
									duration: 0.4,
									ease: "easeOut",
								}}
							/>

						</div>

					</div>


					<p className="areonix-brandbook-hint">
						Use the arrows to explore the Areonix brand guidelines.
					</p>

				</motion.div>

			</motion.section>


			{/* =========================================
			    04 — DIGITAL EXPERIENCE
			========================================= */}

			<motion.section
				className="areonix-section areonix-prototype"
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.2 }}
				variants={staggerContainer}
			>

				<motion.div
					className="areonix-section-heading"
					variants={fadeUp}
				>
					<span>04</span>
					<h2>digital experience</h2>
				</motion.div>


				<motion.div
					className="areonix-prototype-grid"
					variants={fadeUp}
				>

					<div className="areonix-prototype-copy">

						<p className="areonix-large-text">
							From campaign concept to interactive experience.
						</p>

						<p>
							The final Figma prototype translates the Areonix
							brand into a responsive digital experience for
							both mobile and desktop.
						</p>

					</div>


					<a
						href="https://www.figma.com/proto/p4U3EJXeljyL20zvwuKCH7/aeronix?node-id=11-2&viewport=-669%2C161%2C0.18&t=30EznDK4RLOLGGws-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=11%3A2&page-id=0%3A1"
						target="_blank"
						rel="noopener noreferrer"
						className="areonix-figma-link"
					>

						<span>
							Interactive prototype
						</span>

						<strong>
							View Figma prototype ↗
						</strong>

					</a>

				</motion.div>

			</motion.section>


			{/* =========================================
			    NAVIGATION
			========================================= */}

			<section className="areonix-navigation">

				<Link
					to="/#projects"
					className="areonix-back-link"
				>
					← Back to selected projects
				</Link>


				<Link
					to="/gistda"
					className="areonix-next-project"
					onClick={() => window.scrollTo(0, 0)}
				>

					<span>
						Next project
					</span>

					<strong>
						GISTDA →
					</strong>

				</Link>

			</section>

		</main>
	);
}