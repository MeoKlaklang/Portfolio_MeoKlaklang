import "./Skills.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";


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
   SKILLS
========================================= */

export default function Skills() {

	const isMobile = useMediaQuery("(max-width: 700px)");

	/* -----------------------------------------
	   Animation helpers
	----------------------------------------- */

	const containerMotion = isMobile
		? {
				initial: false,
		  }
		: {
				initial: { opacity: 0, y: 40 },
				whileInView: { opacity: 1, y: 0 },
				transition: {
					duration: 0.8,
					ease: "easeOut",
				},
				viewport: {
					once: false,
					amount: 0.2,
				},
		  };


	const columnMotion = (delay = 0) =>
		isMobile
			? {
					initial: false,
			  }
			: {
					initial: { opacity: 0, y: 30 },
					whileInView: { opacity: 1, y: 0 },
					transition: {
						duration: 0.6,
						ease: "easeOut",
						delay,
					},
					viewport: {
						once: false,
						amount: 0.2,
					},
			  };


	const blockMotion = (delay = 0) =>
		isMobile
			? {
					initial: false,
			  }
			: {
					initial: { opacity: 0, y: 20 },
					whileInView: { opacity: 1, y: 0 },
					transition: {
						duration: 0.6,
						ease: "easeOut",
						delay,
					},
					viewport: {
						once: false,
					},
			  };


	const dividerMotion = isMobile
		? {
				initial: false,
		  }
		: {
				initial: { width: 0 },
				whileInView: { width: "80%" },
				transition: {
					duration: 0.8,
					ease: "easeOut",
				},
				viewport: {
					once: false,
					amount: 0.3,
				},
		  };


	return (

		<motion.div
			className="skills-container"
			{...containerMotion}
		>

			{/* =====================================
			    COLUMN 1
			===================================== */}

			<motion.div
				className="skills-column"
				{...columnMotion(0.1)}
			>

				{/* EDUCATION */}

				<motion.div
					className="skills-block"
					{...blockMotion()}
				>
					<h2 className="skills-title">
						education
					</h2>

					<p>
						Erasmus Hogeschool Brussel
						<br />
						Multimedia en creatieve technologie
						<br />
						2023 - 2026
					</p>

					<p>
						Vives Hogeschool Roeselare
						<br />
						Agro-Biotechnologie
						<br />
						2020 - 2023
					</p>
				</motion.div>


				<motion.div
					className="skills-divider"
					{...dividerMotion}
				/>


				{/* LANGUAGES */}

				<motion.div
					className="skills-block"
					{...blockMotion(0.1)}
				>
					<h2 className="skills-title">
						languages
					</h2>

					<p>
						Dutch - native
						<br />
						French - fluent
						<br />
						English - fluent
						<br />
						Thai - advanced
					</p>
				</motion.div>


				<motion.div
					className="skills-divider"
					{...dividerMotion}
				/>


				{/* CONTACT */}

				<motion.div
					className="skills-block"
					{...blockMotion(0.2)}
				>
					<h2 className="skills-title">
						contact
					</h2>

					<p>
						email: klaklang.m@outlook.com
						<br />
						Telefoon: +32 471 67 50 37
					</p>
				</motion.div>

			</motion.div>


			{/* =====================================
			    COLUMN 2
			===================================== */}

			<motion.div
				className="skills-column"
				{...columnMotion(0.2)}
			>

				{/* SOFTWARES */}

				<motion.div
					className="skills-block"
					{...blockMotion()}
				>
					<h2 className="skills-title">
						softwares
					</h2>

					<p>
						Figma
						<br />
						Adobe Illustrator
						<br />
						Adobe Photoshop
						<br />
						Adobe XD
						<br />
						Adobe InDesign
						<br />
						Adobe Firefly
						<br />
						Premiere Pro
					</p>
				</motion.div>


				<motion.div
					className="skills-divider"
					{...dividerMotion}
				/>


				{/* PROGRAMMING */}

				<motion.div
					className="skills-block"
					{...blockMotion(0.1)}
				>
					<h2 className="skills-title">
						programming
					</h2>

					<p>
						HTML/CSS
						<br />
						Next.js
						<br />
						JavaScript
						<br />
						Swift
						<br />
						SwiftUI
						<br />
						React.js
						<br />
						Node.js
						<br />
						MongoDB
						<br />
						MySQL
						<br />
						Supabase
					</p>
				</motion.div>

			</motion.div>


			{/* =====================================
			    KITE — DESKTOP ONLY
			===================================== */}

			{!isMobile && (

				<motion.img
					src={`${import.meta.env.BASE_URL}vlieger.png`}
					alt=""
					aria-hidden="true"
					className="skills-kite"

					initial={{
						opacity: 0,
						y: 30,
					}}

					whileInView={{
						opacity: 1,
						y: 0,
					}}

					transition={{
						duration: 0.8,
						ease: "easeOut",
						delay: 0.4,
					}}

					viewport={{
						once: false,
						amount: 0.3,
					}}
				/>

			)}


			{/* =====================================
			    COLUMN 3
			===================================== */}

			<motion.div
				className="skills-column"
				{...columnMotion(0.3)}
			>

				{/* SOFT SKILLS */}

				<motion.div
					className="skills-block"
					{...blockMotion()}
				>
					<h2 className="skills-title">
						soft skills
					</h2>

					<p>
						Curious
						<br />
						Feedback-oriented
						<br />
						Collaborative
						<br />
						Problem-solving
						<br />
						Driven
					</p>
				</motion.div>


				<motion.div
					className="skills-divider"
					{...dividerMotion}
				/>


				{/* HOBBIES */}

				<motion.div
					className="skills-block"
					{...blockMotion(0.1)}
				>
					<h2 className="skills-title">
						hobbies
					</h2>

					<p>
						Running
						<br />
						Crocheting
						<br />
						Gaming
						<br />
						Traveling
						<br />
						Animal Care
					</p>
				</motion.div>

			</motion.div>

		</motion.div>
	);
}