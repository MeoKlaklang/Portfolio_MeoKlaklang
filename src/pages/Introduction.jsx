import "./Introduction.css";
import { motion } from "framer-motion";

const containerVariants = {
	hidden: { opacity: 0, y: 40 },
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
	hidden: { opacity: 0, y: 30 },
	show: { opacity: 1, y: 0 },
};

const subtitleVariants = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0 },
};

const textVariants = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0 },
};

const imageVariants = {
	hidden: { opacity: 0, y: 60 },
	show: { opacity: 1, y: 0 },
};

const arrowVariants = {
	hidden: { opacity: 0, y: 20, scale: 0.95 },
	show: { opacity: 1, y: 0, scale: 1 },
};

export default function Introduction() {
	return (
		<motion.div
			className="intro-container"
			variants={containerVariants}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0.3 }}
		>
			{/* ===== LINKER KOLOM (Titels + tekst) ===== */}
			<motion.div className="intro-left">
				<motion.h1 className="intro-title" variants={titleVariants}>
					hoi!
				</motion.h1>

				<motion.h2 className="intro-subtitle" variants={subtitleVariants}>
					ik ben <span>Meo</span>
				</motion.h2>

				<motion.div className="intro-text" variants={textVariants}>
					<div className="col">
						<p>
							Hi! I’m Siriyakorn, but everyone calls me Meo. I’m 23 years old and
							have a passion for web design and everything that combines creativity
							with technology.
						</p>

						<p>
							Born in Thailand but raised in Belgium, I now have the exciting
							opportunity to return to my birth country for an internship. It feels
							special to be able to reconnect with my roots while also bringing
							with me the knowledge and experience I’ve gained in Belgium.
						</p>
					</div>

					<div className="col">
						<p>
							I’m currently in my fourth semester of the Multimedia and Creative
							Technology program at Erasmus University College Brussels, where I
							focus on UX/UI design. In addition to design, I’ve developed skills in
							both front-end and back-end development.
						</p>

						<p>
							This technical background helps me create designs that are not only
							visually engaging but also practical and buildable. I love finding that
							balance between aesthetics and functionality.
						</p>
					</div>
				</motion.div>
			</motion.div>

			{/* ===== PIJL – ANIMEERT MEE MET DE SECTION ===== */}
			<motion.img
				src="/pijl.png"
				alt="arrow"
				className="intro-arrow"
				variants={arrowVariants}
			/>

			{/* ===== RECHTERKOLOM – FOTO ===== */}
			<motion.div className="intro-right">
				<motion.img
					src="/meo.jpeg"
					alt="Meo smiling"
					className="intro-image"
					variants={imageVariants}
				/>
			</motion.div>
		</motion.div>
	);
}
