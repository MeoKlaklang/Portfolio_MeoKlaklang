import "./Projects.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const MotionLink = motion.create(Link);


/* =========================================
   MOBILE DETECTION
========================================= */

function useMediaQuery(query) {
	const [matches, setMatches] = useState(() => {
		if (typeof window === "undefined") return false;

		return window.matchMedia(query).matches;
	});

	useEffect(() => {
		const mediaQuery = window.matchMedia(query);

		const handleChange = (event) => {
			setMatches(event.matches);
		};

		setMatches(mediaQuery.matches);

		mediaQuery.addEventListener("change", handleChange);

		return () => {
			mediaQuery.removeEventListener("change", handleChange);
		};
	}, [query]);

	return matches;
}


/* =========================================
   ANIMATION VARIANTS
========================================= */

const containerVariants = {
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
			staggerChildren: 0.12,
		},
	},
};


const titleVariants = {
	hidden: {
		opacity: 0,
		y: 20,
	},

	show: {
		opacity: 1,
		y: 0,

		transition: {
			duration: 0.6,
			ease: "easeOut",
		},
	},
};


const lineVariants = {
	hidden: {
		scaleX: 0,
	},

	show: {
		scaleX: 1,

		transition: {
			duration: 1.1,
			ease: "easeOut",
		},
	},
};


const projectVariants = {
	hidden: {
		opacity: 0,
		y: 20,
	},

	show: {
		opacity: 1,
		y: 0,

		transition: {
			duration: 0.5,
			ease: "easeOut",
		},
	},
};


/* =========================================
   PROJECT DATA
========================================= */

const projects = [
	{
		index: "0.1",
		title: "Het Mandje",
		category: "UX/UI · Full-stack · Web platform",
		href: "/Het-Mandje",
	},
	{
		index: "0.2",
		title: "Thumbelina",
		category: "React · Interactive Web Experience",
		href: "/Thumbelina",
	},
	{
		index: "0.3",
		title: "PetBridge",
		category: "iOS · UX/UI · SwiftUI",
		href: "/PetBridge",
	},
	{
		index: "0.4",
		title: "Animal Festival",
		category: "Branding · Graphic design",
		href: "/AnimalFestival",
	},
	{
		index: "0.5",
		title: "Areonix",
		category: "Web design · Front-end",
		href: "/Aeronix",
	},
	{
		index: "0.6",
		title: "GISTDA",
		category: "Editorial · Graphic design · Web",
		href: "/Gistda",
	},
];


/* =========================================
   PROJECTS
========================================= */

export default function Projects() {

	const isMobile = useMediaQuery("(max-width: 700px)");

	return (
		<motion.section
			id="projects"
			className="projects-container"

			variants={
				isMobile
					? undefined
					: containerVariants
			}

			initial={
				isMobile
					? false
					: "hidden"
			}

			whileInView={
				isMobile
					? undefined
					: "show"
			}

			viewport={
				isMobile
					? undefined
					: {
							once: true,
							amount: 0.2,
					  }
			}
		>

			{/* =====================================
			    HEADER
			===================================== */}

			<header className="projects-header">

				<motion.h1
					className="projects-title"
					variants={
						isMobile
							? undefined
							: titleVariants
					}
				>
					Selected
				</motion.h1>


				<div className="projects-subrow">

					<motion.h2
						className="projects-subtitle"
						variants={
							isMobile
								? undefined
								: titleVariants
						}
					>
						projects
					</motion.h2>


					<motion.div
						className="projects-line"
						variants={
							isMobile
								? undefined
								: lineVariants
						}
					/>

				</div>

			</header>


			{/* =====================================
			    PROJECT GRID
			===================================== */}

			<motion.div className="projects-grid">

				{projects.map((project) => (

					<MotionLink
						key={project.index}

						to={project.href}

						className="project-card"

						variants={
							isMobile
								? undefined
								: projectVariants
						}

						whileHover={
							isMobile
								? undefined
								: {
										y: -5,
								  }
						}

						transition={
							isMobile
								? undefined
								: {
										duration: 0.2,
								  }
						}

						aria-label={`View ${project.title} project`}

						onClick={() =>
							window.scrollTo(0, 0)
						}
					>

						<div className="project-main">

							<span className="projects-index">
								{project.index}
							</span>


							<div className="project-content">

								<div className="project-title-row">

									<h3 className="projects-label">
										{project.title}
									</h3>

									<span
										className="project-arrow"
										aria-hidden="true"
									>
										↗
									</span>

								</div>


								<p className="project-category">
									{project.category}
								</p>

							</div>

						</div>


						<span className="project-bottom-line" />

					</MotionLink>

				))}

			</motion.div>

		</motion.section>
	);
}