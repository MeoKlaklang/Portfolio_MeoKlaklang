import "./Gistda.css";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

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
			staggerChildren: 0.1,
		},
	},
};

/* Temporary sticker placeholders */
const stickers = Array.from({ length: 10 }, (_, index) => ({
	id: index + 2,
	image: `${base}sticker-${String(index + 2).padStart(2, "0")}.png`,
}));

function MediaPlaceholder({ label, className = "" }) {
	return (
		<div className={`gistda-placeholder ${className}`}>
			<span>+</span>
			<p>{label}</p>
		</div>
	);
}

export default function Gistda() {
	const [magazinePage, setMagazinePage] = useState(0);

	const magazinePages = [
		`${base}3.png`,
		`${base}4.png`,
		`${base}5.png`,
		`${base}6.png`,
		`${base}7.png`,
		`${base}8.png`,
		`${base}9.png`,
		`${base}10.png`,
		`${base}15.png`,
		`${base}16.png`,
		`${base}18.png`,
		`${base}20.png`,
		`${base}22.png`,
		`${base}26.png`,
		`${base}27.png`,
		`${base}28.png`,
	];
	const nextMagazinePage = () => {
		setMagazinePage((prev) => (prev === magazinePages.length - 1 ? 0 : prev + 1));
	};

	const prevMagazinePage = () => {
		setMagazinePage((prev) => (prev === 0 ? magazinePages.length - 1 : prev - 1));
	};
	const stickerWindowRef = useRef(null);
	const stickerTrackRef = useRef(null);

	const [stickerDragWidth, setStickerDragWidth] = useState(0);

	useEffect(() => {
		const calculateDragWidth = () => {
			if (stickerWindowRef.current && stickerTrackRef.current) {
				const windowWidth = stickerWindowRef.current.offsetWidth;

				const trackWidth = stickerTrackRef.current.scrollWidth;

				setStickerDragWidth(Math.max(0, trackWidth - windowWidth));
			}
		};

		calculateDragWidth();

		window.addEventListener("resize", calculateDragWidth);

		return () => {
			window.removeEventListener("resize", calculateDragWidth);
		};
	}, []);

	return (
		<main className="gistda-page">
			{/* =========================================
			    HERO
			========================================= */}

			<section className="gistda-hero">
				<motion.div className="gistda-hero-copy" initial="hidden" animate="show" variants={staggerContainer}>
					<motion.p className="gistda-project-number" variants={fadeUp}>
						06 — Internship · Creative Design
					</motion.p>

					<motion.h1 className="gistda-main-title" variants={fadeUp}>
						GISTDA
					</motion.h1>

					<motion.div className="gistda-meta" variants={fadeUp}>
						<p>Branding · Graphic Design · Space Communication</p>
						<p>2026</p>
					</motion.div>

					<motion.p className="gistda-intro" variants={fadeUp}>
						A three-month creative design internship in Thailand at GISTDA (Geo-Informatics and Space Technology Development Agency), working across space technology, science communication and visual identity.
					</motion.p>
				</motion.div>

				{/* HERO VISUAL */}

				<motion.div
					className="gistda-hero-visual"
					initial={{
						opacity: 0,
						y: 30,
					}}
					animate={{
						opacity: 1,
						y: 0,
					}}
					transition={{
						duration: 0.9,
						delay: 0.2,
						ease: "easeOut",
					}}
				>
					<div className="gistda-photo-stack">
						{/* LEFT / BACK PHOTO */}

						<motion.div
							className="gistda-hero-photo gistda-photo-1"
							whileHover={{
								scale: 1.06,
								rotate: 0,
								zIndex: 10,
							}}
							transition={{
								duration: 0.35,
								ease: "easeOut",
							}}
						>
							<img src={`${base}gistda1.jpg`} alt="During my internship at GISTDA" />
							<span>01</span>
						</motion.div>

						{/* MAIN PHOTO */}

						<motion.div
							className="gistda-hero-photo gistda-photo-2"
							whileHover={{
								scale: 1.04,
								rotate: 0,
								zIndex: 10,
							}}
							transition={{
								duration: 0.35,
								ease: "easeOut",
							}}
						>
							<img src={`${base}gistda2.jpg`} alt="My internship experience at GISTDA" />
							<span>02</span>
						</motion.div>

						{/* RIGHT / BACK PHOTO */}

						<motion.div
							className="gistda-hero-photo gistda-photo-3"
							whileHover={{
								scale: 1.06,
								rotate: 0,
								zIndex: 10,
							}}
							transition={{
								duration: 0.35,
								ease: "easeOut",
							}}
						>
							<img src={`${base}gistda3.jpg`} alt="Working at GISTDA in Thailand" />
							<span>03</span>
						</motion.div>

				
					</div>
				</motion.div>
			</section>

			{/* =========================================
			    01 — INTERNSHIP
			========================================= */}

			<motion.section className="gistda-section gistda-internship" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}>
				<motion.div className="gistda-section-heading" variants={fadeUp}>
					<span>01</span>
					<h2>the internship</h2>
				</motion.div>

				<motion.div className="gistda-overview-grid" variants={fadeUp}>
					<div className="gistda-overview-copy">
						<p className="gistda-large-text">Designing for Thailand's space technology organisation.</p>

						<p>During my internship at GISTDA in Thailand, I worked on visual communication and graphic design for different teams within the organisation.</p>

						<p>My work ranged from branding and promotional material to visual concepts for events and space-related communication.</p>
					</div>

					<div className="gistda-details">
						<div>
							<h3>Organisation</h3>
							<p>GISTDA</p>
						</div>

						<div>
							<h3>Location</h3>
							<p>88 Moo 9 Tungsukla Sriracha Chonburi 20230</p>
						</div>

						<div>
							<h3>Role</h3>
							<p>Creative Design Intern</p>
						</div>

						<div>
							<h3>Teams</h3>
							<p>
								Cal/Val
								<br />
								Space Promotion Division
							</p>
						</div>

						<div>
							<h3>Focus</h3>
							<p>
								Branding · Editorial
								<br />
								Visual Communication
							</p>
						</div>

						<div>
							<h3>Duration</h3>
							<p>3 months</p>
						</div>
					</div>
				</motion.div>
			</motion.section>

			{/* =========================================
			    02 — CAL/VAL
			========================================= */}

			<motion.section className="gistda-section gistda-calval" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={staggerContainer}>
				<motion.div className="gistda-section-heading gistda-light-heading" variants={fadeUp}>
					<span>02</span>
					<h2>Cal/Val team</h2>
				</motion.div>

				{/* INTRO */}

				<motion.div className="gistda-calval-intro" variants={fadeUp}>
					<div>
						<p className="gistda-large-text">Making space technology feel more accessible, playful and recognisable.</p>
					</div>

					<div className="gistda-calval-copy">
						<p>The Cal/Val team works on the calibration and validation of Earth observation satellite data, helping ensure that the information collected from space is accurate and reliable.</p>

						<p>Alongside this technical work, the team wanted to make their communication more approachable and engaging, especially for younger audiences and people who are new to space technology.</p>

						<p>
							As a young and open-minded team, they were interested in experimenting with a more playful visual direction. I translated this into a pixel-art identity inspired by satellites, Earth observation and space exploration, while keeping a
							clear connection to GISTDA.
						</p>
					</div>
				</motion.div>

				{/* CAL/VAL TEAM PHOTOS */}

				<motion.div className="gistda-calval-gallery" variants={staggerContainer}>
					{/* LARGE IMAGE */}

					<motion.div className="gistda-calval-photo gistda-calval-photo-main" variants={fadeUp} whileHover={{ scale: 0.985 }} transition={{ duration: 0.35 }}>
						<img src={`${base}calval1.jpg`} alt="Working with the Cal/Val team at GISTDA" loading="lazy" />
						<div className="gistda-calval-photo-caption">
							<span>01</span>
							<p>Working with the Cal/Val team</p>
						</div>
					</motion.div>

					{/* RIGHT SIDE */}

					<div className="gistda-calval-gallery-side">
						<motion.div className="gistda-calval-photo" variants={fadeUp} whileHover={{ scale: 0.975 }} transition={{ duration: 0.35 }}>
							<img src={`${base}calval2.jpg`} alt="My internship experience with the Cal/Val team" loading="lazy" />
							<div className="gistda-calval-photo-caption">
								<span>02</span>
							</div>
						</motion.div>

						<motion.div className="gistda-calval-photo" variants={fadeUp} whileHover={{ scale: 0.975 }} transition={{ duration: 0.35 }}>
							<img src={`${base}calval3.jpg`} alt="Cal/Val team at GISTDA" loading="lazy" />
							<div className="gistda-calval-photo-caption">
								<span>03</span>
							</div>
						</motion.div>
					</div>
				</motion.div>

				{/* =========================================
    STICKERS
========================================= */}

				<motion.div className="gistda-sticker-section" variants={fadeUp}>
					<div className="gistda-work-label">
						<span>01</span>

						<div>
							<h3>Sticker collection</h3>

							<p>A collection of ten illustrations designed to give the Cal/Val team a more playful and approachable visual language.</p>
						</div>

						<span className="gistda-drag-label">DRAG TO EXPLORE →</span>
					</div>

					{/* DRAGGABLE STICKER STRIP */}

					<div className="gistda-sticker-window" ref={stickerWindowRef}>
						<motion.div
							className="gistda-sticker-track"
							ref={stickerTrackRef}
							drag="x"
							dragConstraints={{
								left: -stickerDragWidth,
								right: 0,
							}}
							dragElastic={0.08}
							dragMomentum={true}
						>
							{stickers.map((sticker, index) => (
								<motion.div
									className="gistda-sticker-item"
									key={sticker.id}
									whileHover={{
										y: -18,
										rotate: index % 2 === 0 ? -4 : 4,
										scale: 1.08,
									}}
									transition={{
										duration: 0.25,
										ease: "easeOut",
									}}
								>
									<img src={sticker.image} alt={`Cal/Val sticker design ${index + 1}`} draggable="false" />

									<span className="gistda-sticker-number">{String(index + 1).padStart(2, "0")}</span>
								</motion.div>
							))}
						</motion.div>
					</div>
				</motion.div>

				{/* =========================================
    CAL/VAL BRANDING
========================================= */}

				<motion.div className="gistda-calval-branding" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}>
					<motion.div className="gistda-work-label" variants={fadeUp}>
						<span>02</span>

						<div>
							<h3>Cal/Val visual identity</h3>

							<p>
								The sticker collection became part of a broader visual identity for the Cal/Val team. I developed a playful pixel-inspired style that combines Earth observation, satellites and space exploration with a more youthful and approachable
								character.
							</p>
						</div>
					</motion.div>

					<motion.div className="gistda-calval-branding-visual" variants={fadeUp}>
						<img src={`${base}calval-back-13.jpg`} alt="Cal/Val team visual identity and branding" loading="lazy" />
						<div className="gistda-branding-caption">
							<span>CAL/VAL × GISTDA</span>
							<p>Visual identity · Pixel art · Space communication</p>
						</div>
					</motion.div>
				</motion.div>

				{/* =========================================
    POSTER
========================================= */}

				<motion.div className="gistda-poster-showcase" variants={fadeUp}>
					<div className="gistda-work-label">
						<span>03</span>

						<div>
							<h3>Event communication</h3>

							<p>I also translated the Cal/Val visual direction into promotional material for the GISTDA Technology Watch & Foresight Forum.</p>
						</div>
					</div>

					<div className="gistda-poster-grid">
						{/* COPY */}

						<div className="gistda-poster-copy">
							<p className="gistda-large-text">From playful team branding to professional event communication.</p>

							<p>The poster combines Earth observation imagery with the pixel-inspired visual language developed for the Cal/Val team, creating a consistent identity while keeping the event approachable and visually engaging.</p>

							<div className="gistda-poster-details">
								<div>
									<span>TYPE</span>
									<p>Event poster</p>
								</div>

								<div>
									<span>FOCUS</span>
									<p>Visual communication</p>
								</div>

								<div>
									<span>TEAM</span>
									<p>Cal/Val × GISTDA</p>
								</div>
							</div>
						</div>

						{/* POSTER */}

						<motion.div
							className="gistda-poster-visual"
							whileHover={{
								y: -8,
								rotate: 0.5,
							}}
							transition={{
								duration: 0.35,
								ease: "easeOut",
							}}
						>
							<img src={`${base}calvalPoster-02.jpg`} alt="GISTDA Technology Watch and Foresight Forum poster" loading="lazy" />

							<span className="gistda-poster-caption">GISTDA Technology Watch & Foresight Forum</span>
						</motion.div>
					</div>
				</motion.div>
			</motion.section>

			{/* =========================================
    THEOS EARTH MAGAZINE
========================================= */}

			<motion.section className="gistda-magazine-section" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer}>
				{/* HEADING */}

				<motion.div className="gistda-magazine-heading" variants={fadeUp}>
					<div>
						<span>04</span>
						<h2>THEOS Earth Magazine</h2>
					</div>

					<span className="gistda-magazine-type">EDITORIAL DESIGN · EARTH OBSERVATION</span>
				</motion.div>

				{/* INTRO */}

				<motion.div className="gistda-magazine-intro" variants={fadeUp}>
					<p className="gistda-magazine-large-text">Turning satellite imagery into a visual story about our planet.</p>

					<div>
						<p>During my internship with the Cal/Val team, I designed an editorial magazine using Earth observation imagery captured by Thailand's THEOS-2 satellite.</p>

						<p>The publication brings together satellite imagery and editorial design to present landscapes, cities and natural patterns from a different perspective.</p>
					</div>
				</motion.div>

				{/* MAGAZINE VIEWER */}

				<motion.div className="gistda-magazine-viewer" variants={fadeUp}>
					{/* TOP BAR */}

					<div className="gistda-magazine-toolbar">
						<span>THEOS — EARTH FROM ABOVE</span>

						<span>
							{String(magazinePage + 1).padStart(2, "0")}
							{" / "}
							{String(magazinePages.length).padStart(2, "0")}
						</span>
					</div>

					{/* VIEWER */}

					<div className="gistda-magazine-book">
						{/* LEFT ARROW */}

						<button className="gistda-magazine-arrow gistda-magazine-arrow-left" onClick={prevMagazinePage} aria-label="Previous magazine spread">
							←
						</button>

						{/* SPREAD */}

						<div className="gistda-magazine-spread">
							<AnimatePresence mode="wait">
								<motion.img
									key={magazinePages[magazinePage]}
									src={magazinePages[magazinePage]}
									alt={`THEOS Earth Magazine spread ${magazinePage + 1}`}
									initial={{
										opacity: 0,
										x: 20,
										scale: 0.99,
									}}
									animate={{
										opacity: 1,
										x: 0,
										scale: 1,
									}}
									exit={{
										opacity: 0,
										x: -20,
										scale: 0.99,
									}}
									transition={{
										duration: 0.45,
										ease: [0.22, 1, 0.36, 1],
									}}
								/>
							</AnimatePresence>
						</div>

						{/* RIGHT ARROW */}

						<button className="gistda-magazine-arrow gistda-magazine-arrow-right" onClick={nextMagazinePage} aria-label="Next magazine spread">
							→
						</button>
					</div>

					{/* BOTTOM */}

					<div className="gistda-magazine-bottom">
						<div className="gistda-magazine-progress">
							<div
								className="gistda-magazine-progress-fill"
								style={{
									width: `${((magazinePage + 1) / magazinePages.length) * 100}%`,
								}}
							/>
						</div>

						<p>Use the arrows to explore the THEOS Earth Magazine.</p>
					</div>
				</motion.div>
			</motion.section>

			{/* =========================================
    03 — SPACE PROMOTION
========================================= */}

			<motion.section className="gistda-section gistda-space-promotion" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}>
				<motion.div className="gistda-section-heading" variants={fadeUp}>
					<span>03</span>
					<h2>space promotion devision</h2>
				</motion.div>

				<motion.div className="gistda-rahu-grid" variants={fadeUp}>
					{/* TEXT */}

					<div className="gistda-rahu-copy">
						<p className="gistda-large-text">Bringing Thai culture into a contemporary space identity.</p>

						<p>For GISTDA's Space Promotion Division, I designed a logo for an upcoming space event in Bangkok. The identity combines Thai cultural symbolism with a contemporary visual language connected to astronomy and space.</p>

						<p>
							The central character is <strong>Rahu</strong>, a figure from Thai mythology traditionally depicted swallowing the moon during an eclipse. I translated this story into a playful visual of Rahu holding and consuming the moon.
						</p>

						<p>
							The colour palette is inspired by the
							<strong> Thai flag</strong>, using red, white and blue details to strengthen the connection to Thailand while keeping the traditional gold tones of Rahu.
						</p>

						<div className="gistda-project-status">
							<span>REAL-WORLD APPLICATION</span>

							<p>The final logo was selected for the event and will be used as part of its visual identity in Bangkok.</p>
						</div>
					</div>

					{/* LOGO */}

					<motion.div
						className="gistda-rahu-visual"
						whileHover={{
							scale: 1.025,
							rotate: 0.5,
						}}
						transition={{
							duration: 0.35,
							ease: "easeOut",
						}}
					>
						<div className="gistda-rahu-image-wrapper">
							<img src={`${base}rahu-03.png`} alt="Rahu eating the moon logo designed for GISTDA" className="gistda-rahu-image" loading="lazy" />{" "}
						</div>

						<div className="gistda-rahu-caption">
							<span>EVENT IDENTITY</span>
							<p>Rahu eating the moon · Bangkok · 2026</p>
						</div>
					</motion.div>
				</motion.div>
			</motion.section>

			{/* =========================================
			    04 — EXPERIENCE
			========================================= */}

			<motion.section className="gistda-section gistda-experience" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}>
				<motion.div className="gistda-experience-title" variants={fadeUp}>
					<span>04</span>

					<h2>
						designing
						<br />
						abroad
					</h2>
				</motion.div>

				<motion.div className="gistda-experience-copy" variants={fadeUp}>
					<p className="gistda-large-text">Working at GISTDA taught me how design can make complex and technical subjects more approachable.</p>

					<p>
						Working in Thailand also challenged me to adapt to a different professional and cultural environment. I collaborated with different teams, translated technical information into visual communication and learned to design within an existing
						organisation while still introducing new creative ideas.
					</p>

					<div className="gistda-experience-tags">
						<span>Cross-cultural collaboration</span>
						<span>Visual communication</span>
						<span>Branding</span>
						<span>Space technology</span>
					</div>
				</motion.div>
			</motion.section>

			{/* =========================================
			    NAVIGATION
			========================================= */}

			<section className="gistda-navigation">
				<Link to="/#projects" className="gistda-back-link">
					← Back to selected projects
				</Link>

				<Link to="/" className="gistda-next-project" onClick={() => window.scrollTo(0, 0)}>
					<span>Back to portfolio</span>
					<strong>Home →</strong>
				</Link>
			</section>
		</main>
	);
}
