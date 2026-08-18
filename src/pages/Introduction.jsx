import "./Introduction.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const base = import.meta.env.BASE_URL;


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
			mediaQuery.removeEventListener(
				"change",
				handleChange
			);
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
			duration: 0.8,
			ease: "easeOut",
			staggerChildren: 0.15,
		},
	},
};


const titleVariants = {
	hidden: {
		opacity: 0,
		y: 30,
	},

	show: {
		opacity: 1,
		y: 0,
	},
};


const subtitleVariants = {
	hidden: {
		opacity: 0,
		y: 20,
	},

	show: {
		opacity: 1,
		y: 0,
	},
};


const textVariants = {
	hidden: {
		opacity: 0,
		y: 20,
	},

	show: {
		opacity: 1,
		y: 0,
	},
};


const imageVariants = {
	hidden: {
		opacity: 0,
		y: 50,
		scale: 0.97,
	},

	show: {
		opacity: 1,
		y: 0,
		scale: 1,

		transition: {
			duration: 0.8,
			ease: "easeOut",
		},
	},
};


const arrowVariants = {
	hidden: {
		opacity: 0,
		y: 20,
		scale: 0.95,
	},

	show: {
		opacity: 1,
		y: 0,
		scale: 1,
	},
};


/* =========================================
   INTRODUCTION
========================================= */

export default function Introduction() {

	const isMobile = useMediaQuery(
		"(max-width: 700px)"
	);

	return (

		<motion.section
			className="intro-container"

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
							once: false,
							amount: 0.2,
					  }
			}
		>

			{/* =====================================
			    LEFT
			===================================== */}

			<motion.div className="intro-left">

				<motion.h1
					className="intro-title"

					variants={
						isMobile
							? undefined
							: titleVariants
					}
				>
					hey!
				</motion.h1>


				<motion.h2
					className="intro-subtitle"

					variants={
						isMobile
							? undefined
							: subtitleVariants
					}
				>
					I'm <span>Meo</span>
				</motion.h2>


				<motion.div
					className="intro-text"

					variants={
						isMobile
							? undefined
							: textVariants
					}
				>

					{/* COLUMN 1 */}

					<div className="col">

						<p>
							Hello, I’m Siriyakorn Klaklang,
							but everyone calls me Meo. I’m a
							recent Multimedia &amp; Creative
							Technology graduate with a strong
							interest in UX/UI design. I cannot
							wait to jump into the world of
							design and make a difference.
						</p>


						<p>
							I am a creative, enthusiastic and
							driven person who enjoys turning
							ideas into clear and user-friendly
							digital experiences. I like to stay
							curious, explore new design trends
							and learn new tools that help me
							grow as a designer. For me,
							creative challenges are
							opportunities to improve,
							especially when I can share ideas,
							receive feedback and work together
							with a team.
						</p>

					</div>


					{/* COLUMN 2 */}

					<div className="col">

						<p>
							My studies in Multimedia &amp;
							Creative Technology taught me how
							to combine creativity with
							technology. I learned how to
							design visually, but also how
							digital products are built. This
							helps me create designs that are
							not only attractive, but also
							practical and realistic to
							implement.
						</p>


						<p>
							Besides design, I am a cheerful
							and curious person who loves
							discovering new experiences,
							travelling, creating and taking
							care of animals. I am always open
							to new projects and opportunities
							where I can use my creativity,
							technical knowledge and keep
							learning.
						</p>

					</div>

				</motion.div>

			</motion.div>


			{/* =====================================
			    PHOTOS
			===================================== */}

			<motion.div
				className="intro-right"

				variants={
					isMobile
						? undefined
						: imageVariants
				}
			>

				<div className="intro-photo-collage">


					{/* MAIN PHOTO */}

					<motion.img
						src={`${base}meo.jpeg`}

						alt="Meo"

						className="
							intro-photo
							intro-photo-main
						"

						whileHover={
							isMobile
								? undefined
								: {
										y: -8,
										rotate: -1,
								  }
						}

						transition={
							isMobile
								? undefined
								: {
										duration: 0.3,
								  }
						}
					/>


					{/* SECOND PHOTO */}

					<motion.img
						src={`${base}meo1.jpg`}

						alt="Meo"

						className="
							intro-photo
							intro-photo-secondary
						"

						whileHover={
							isMobile
								? undefined
								: {
										y: -8,
										rotate: 1,
								  }
						}

						transition={
							isMobile
								? undefined
								: {
										duration: 0.3,
								  }
						}
					/>


					{/* THIRD PHOTO */}

					<motion.img
						src={`${base}meo2.jpg`}

						alt="Meo"

						className="
							intro-photo
							intro-photo-third
						"

						whileHover={
							isMobile
								? undefined
								: {
										y: -8,
										rotate: -1,
								  }
						}

						transition={
							isMobile
								? undefined
								: {
										duration: 0.3,
								  }
						}
					/>

				</div>

			</motion.div>


			{/* =====================================
			    ARROW — DESKTOP ONLY
			===================================== */}

			{!isMobile && (

				<motion.img
					src={`${base}pijl.png`}

					alt=""

					className="intro-arrow"

					variants={arrowVariants}
				/>

			)}

		</motion.section>
	);
}