import "./End.css";
import { motion } from "framer-motion";

export default function End() {
	return (
		<section className="contact-end" id="contact">

			{/* Decorative kite — desktop only */}
			<motion.img
				className="contact-kite"
				src={`${import.meta.env.BASE_URL}vlieger.png`}
				alt=""
				aria-hidden="true"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 0.75, y: 0 }}
				viewport={{ once: true }}
				transition={{
					duration: 0.8,
					ease: "easeOut",
				}}
			/>

			{/* Main content */}
			<motion.div
				className="contact-content"
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.25 }}
				transition={{
					duration: 0.75,
					ease: "easeOut",
				}}
			>
				<div className="contact-heading">
					<h2>Thank you</h2>

					<p>
						Thank you for taking the time to explore my work.
						<br />
						Hope to hear from you soon.
					</p>
				</div>

				<div className="contact-details">

					<div className="contact-detail">
						<span>Email</span>

						<a href="mailto:klaklang.m@outlook.com">
							klaklang.m@outlook.com ↗
						</a>
					</div>

					<div className="contact-detail">
						<span>Phone</span>

						<a href="tel:+32472675037">
							+32 472 67 50 37
						</a>
					</div>

					<div className="contact-detail">
						<span>LinkedIn</span>

						<a
							href="https://www.linkedin.com/in/meo-klaklang-9838782a0/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Meo Klaklang ↗
						</a>
					</div>

					<div className="contact-detail">
						<span>Based in</span>

						<p>
							Boortmeerbeek, Belgium
						</p>
					</div>

				</div>
			</motion.div>

			{/* Footer */}
			<footer className="contact-footer">
				<span>
					© {new Date().getFullYear()} Meo Klaklang
				</span>

				<button
					type="button"
					onClick={() =>
						window.scrollTo({
							top: 0,
							behavior: "smooth",
						})
					}
				>
					Back to top ↑
				</button>
			</footer>

		</section>
	);
}