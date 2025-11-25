import "./Projects.css";
import { motion } from "framer-motion";

const containerVariants = {
	hidden: { opacity: 0, y: 40 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.7,
			ease: "easeOut",
			staggerChildren: 0.15,
		},
	},
};

const titleVariants = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0 },
};

const lineVariants = {
	hidden: { width: "0%" },
	show: {
		width: "100%",
		transition: {
			duration: 1.1,
			ease: "easeOut",
		},
	},
};

const categoryVariants = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0 },
};

export default function Projects() {
	return (
		<motion.div
			className="projects-container"
			variants={containerVariants}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0.3 }}
		>
			{/* TITELS */}
			<header className="projects-header">
				<motion.h1 className="projects-title" variants={titleVariants}>
					Expertlab
				</motion.h1>

				<div className="projects-subrow">
					<motion.h2 className="projects-subtitle" variants={titleVariants}>
						2025
					</motion.h2>

					<motion.div
						className="projects-line"
						variants={lineVariants}
					/>
				</div>
			</header>

			{/* CATEGORIEËN */}
			<motion.div className="projects-grid">
				{/* 0.1 UX/UI */}
				<motion.div className="projects-column" variants={categoryVariants}>
					<div className="projects-col-header">
						<span className="projects-index">0.1</span>
						<span className="projects-label">Dierenbescherming Mechelen</span>
					</div>
				
				</motion.div>

				{/* 0.2 CODING */}
				<motion.div className="projects-column" variants={categoryVariants}>
					<div className="projects-col-header">
						<span className="projects-index">0.2</span>
						<span className="projects-label">Spline</span>
					</div>
				
				</motion.div>

				{/* 0.3 DESIGN */}
				<motion.div className="projects-column" variants={categoryVariants}>
					<div className="projects-col-header">
						<span className="projects-index">0.3</span>
						<span className="projects-label">Laserlady</span>
					</div>
			
				</motion.div>
			</motion.div>
		</motion.div>
	);
}
