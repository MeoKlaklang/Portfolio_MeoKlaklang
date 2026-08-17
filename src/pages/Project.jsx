import "./Projects.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MotionLink = motion.create(Link);

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
		category: "UI Design · React · Interactive Web Experience",
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

export default function Projects() {
	return (
		<motion.section
			id="projects"
			className="projects-container"
			variants={containerVariants}
			initial="hidden"
			whileInView="show"
			viewport={{
				once: true,
				amount: 0.2,
			}}
		>
			<header className="projects-header">
				<motion.h1 className="projects-title" variants={titleVariants}>
					Selected
				</motion.h1>

				<div className="projects-subrow">
					<motion.h2 className="projects-subtitle" variants={titleVariants}>
						projects
					</motion.h2>

					<motion.div className="projects-line" variants={lineVariants} />
				</div>
			</header>

			<motion.div className="projects-grid">
				{projects.map((project) => (
					<MotionLink key={project.index} to={project.href} className="project-card" variants={projectVariants} whileHover={{ y: -5 }} transition={{ duration: 0.2 }} aria-label={`View ${project.title} project`} onClick={() => window.scrollTo(0, 0)}>
						<div className="project-main">
							<span className="projects-index">{project.index}</span>

							<div className="project-content">
								<div className="project-title-row">
									<h3 className="projects-label">{project.title}</h3>

									<span className="project-arrow" aria-hidden="true">
										↗
									</span>
								</div>

								<p className="project-category">{project.category}</p>
							</div>
						</div>

						<span className="project-bottom-line" />
					</MotionLink>
				))}
			</motion.div>
		</motion.section>
	);
}
