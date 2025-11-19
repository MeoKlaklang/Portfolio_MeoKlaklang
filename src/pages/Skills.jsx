import "./Skills.css";
import { motion } from "framer-motion";

export default function Skills() {
	return (
		<motion.div
			className="skills-container"
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, ease: "easeOut" }}
			viewport={{ once: false, amount: 0.2 }}
		>

			{/* KOLOM 1 */}
			<motion.div
				className="skills-column"
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
				viewport={{ once: false, amount: 0.2 }}
			>

				{/* Block 1 */}
				<motion.div
					className="skills-block"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: "easeOut" }}
					viewport={{ once: false }}
				>
					<h2 className="skills-title">educatie</h2>
					<p>
						Erasmus Hogeschool Brussel<br />
						Multimedia en creatieve technologie<br />
						2023 - present
					</p>

					<p>
						Vives Hogeschool Roeselare<br />
						Agro-Biotechnologie<br />
						2020 - 2023
					</p>
				</motion.div>

				{/* Divider animatie */}
				<motion.div
					className="skills-divider"
					initial={{ width: 0 }}
					whileInView={{ width: "80%" }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					viewport={{ once: false, amount: 0.3 }}
				/>

				{/* Block 2 */}
				<motion.div
					className="skills-block"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
					viewport={{ once: false }}
				>
					<h2 className="skills-title">talen</h2>
					<p>Nederlands<br />Frans<br />Engels<br />Thai</p>
				</motion.div>

				<motion.div
					className="skills-divider"
					initial={{ width: 0 }}
					whileInView={{ width: "80%" }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					viewport={{ once: false, amount: 0.3 }}
				/>

				{/* Block 3 */}
				<motion.div
					className="skills-block"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
					viewport={{ once: false }}
				>
					<h2 className="skills-title">contact</h2>
					<p>
						email: klaklang.m@outlook.com<br />
						Telefoon: +32 471 67 50 37
					</p>
				</motion.div>

			</motion.div>


			{/* KOLOM 2 */}
			<motion.div
				className="skills-column"
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
				viewport={{ once: false, amount: 0.2 }}
			>

				{/* Block 1 */}
				<motion.div
					className="skills-block"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: "easeOut" }}
					viewport={{ once: false }}
				>
					<h2 className="skills-title">softwares</h2>
					<p>
						Figma<br />
						Adobe Illustrator<br />
						Adobe Photoshop<br />
						Adobe XD<br />
						Adobe InDesign<br />
						Adobe Firefly<br />
						Premiere Pro
					</p>
				</motion.div>

				<motion.div
					className="skills-divider"
					initial={{ width: 0 }}
					whileInView={{ width: "80%" }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					viewport={{ once: false, amount: 0.3 }}
				/>

				{/* Block 2 */}
				<motion.div
					className="skills-block"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
					viewport={{ once: false }}
				>
					<h2 className="skills-title">programmeren</h2>
					<p>
						HTML<br />
						CSS<br />
						Javascript<br />
						Swift<br />
						SwiftUI<br />
						React.js<br />
						Node.js<br />
						MongoDB<br />
						MySQL
					</p>
				</motion.div>

			</motion.div>


			{/* KOLOM 3 */}
			<motion.div
				className="skills-column"
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
				viewport={{ once: false, amount: 0.2 }}
			>

				{/* Block 1 */}
				<motion.div
					className="skills-block"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: "easeOut" }}
					viewport={{ once: false }}
				>
					<h2 className="skills-title">soft skills</h2>
					<p>
						Teamspeler<br />
						Positieve houding<br />
						Creatief<br />
						Stressbestendig<br />
						Doorzettingsvermogen
					</p>
				</motion.div>

				<motion.div
					className="skills-divider"
					initial={{ width: 0 }}
					whileInView={{ width: "80%" }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					viewport={{ once: false, amount: 0.3 }}
				/>

				{/* Block 2 */}
				<motion.div
					className="skills-block"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
					viewport={{ once: false }}
				>
					<h2 className="skills-title">hobbys</h2>
					<p>
						Lopen<br />
						Haken<br />
						Gamen<br />
						Reizen<br />
						Dierenverzorging
					</p>
				</motion.div>

			</motion.div>

		</motion.div>
	);
}
