import "./Navbar.css";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const menuItems = [
	{ number: "01", label: "About", target: "about" },
	{ number: "02", label: "Skills", target: "skills" },
	{ number: "03", label: "Projects", target: "projects" },
	{ number: "04", label: "Contact", target: "contact" },
];

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	const location = useLocation();
	const navigate = useNavigate();

	const isHome = location.pathname === "/";

	/* =========================================
	   SCROLL DETECTION
	========================================= */

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};

		handleScroll();

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [location.pathname]);

	/* =========================================
	   NAVBAR VISIBILITY

	   Home + top = hidden
	   Home + scroll = visible
	   Project pages = always visible
	========================================= */

	const showNavbar = !isHome || scrolled;

	/* =========================================
	   LOCK BODY WHEN MOBILE MENU IS OPEN
	========================================= */

	useEffect(() => {
		document.body.style.overflow = menuOpen ? "hidden" : "";

		return () => {
			document.body.style.overflow = "";
		};
	}, [menuOpen]);

	/* =========================================
	   ESCAPE CLOSES MOBILE MENU
	========================================= */

	useEffect(() => {
		const handleEscape = (event) => {
			if (event.key === "Escape") {
				setMenuOpen(false);
			}
		};

		window.addEventListener("keydown", handleEscape);

		return () => {
			window.removeEventListener("keydown", handleEscape);
		};
	}, []);

	/* =========================================
	   NAVIGATE TO SECTION
	========================================= */

	const goToSection = (sectionId) => {
		setMenuOpen(false);

		/* Already on homepage */
		if (location.pathname === "/") {
			const section = document.getElementById(sectionId);

			if (section) {
				section.scrollIntoView({
					behavior: "smooth",
					block: "start",
				});
			}

			return;
		}

		/* Coming from a project page */
		navigate(`/#${sectionId}`);
	};

	/* =========================================
	   SCROLL TO SECTION AFTER RETURNING HOME
	========================================= */

	useEffect(() => {
		if (location.pathname !== "/" || !location.hash) return;

		const sectionId = location.hash.replace("#", "");

		const timeout = setTimeout(() => {
			const section = document.getElementById(sectionId);

			if (section) {
				section.scrollIntoView({
					behavior: "smooth",
					block: "start",
				});
			}
		}, 100);

		return () => clearTimeout(timeout);
	}, [location]);

	return (
		<>
			{/* =========================================
			    NAVBAR
			========================================= */}

			<AnimatePresence>
				{showNavbar && (
					<motion.header
						className={`portfolio-navbar ${
							scrolled || !isHome
								? "portfolio-navbar-scrolled"
								: ""
						}`}
						initial={{
							opacity: 0,
							y: -20,
						}}
						animate={{
							opacity: 1,
							y: 0,
						}}
						exit={{
							opacity: 0,
							y: -20,
						}}
						transition={{
							duration: 0.35,
							ease: "easeOut",
						}}
					>
						{/* LOGO */}

						<Link
							to="/"
							className="portfolio-logo"
							onClick={() => {
								setMenuOpen(false);

								window.scrollTo({
									top: 0,
									behavior: "smooth",
								});
							}}
						>
							<span>MEO</span>
							<span>KLAKLANG</span>
						</Link>

						{/* DESKTOP NAVIGATION */}

						<nav className="portfolio-desktop-nav">
							{menuItems.map((item) => (
								<button
									type="button"
									key={item.target}
									onClick={() =>
										goToSection(item.target)
									}
								>
									{item.label}
								</button>
							))}
						</nav>

						{/* MOBILE MENU BUTTON */}

						<button
							type="button"
							className="portfolio-menu-button"
							onClick={() =>
								setMenuOpen((prev) => !prev)
							}
							aria-label="Open menu"
							aria-expanded={menuOpen}
						>
							<span></span>
							<span></span>
						</button>
					</motion.header>
				)}
			</AnimatePresence>


			{/* =========================================
			    MOBILE FULLSCREEN MENU
			========================================= */}

			<AnimatePresence>
				{menuOpen && (
					<motion.div
						className="portfolio-mobile-menu"
						initial={{
							y: "-100%",
						}}
						animate={{
							y: 0,
						}}
						exit={{
							y: "-100%",
						}}
						transition={{
							duration: 0.65,
							ease: [0.76, 0, 0.24, 1],
						}}
					>
						{/* TOP */}

						<div className="portfolio-mobile-menu-top">
							<span>MEO KLAKLANG</span>

							<button
								type="button"
								onClick={() =>
									setMenuOpen(false)
								}
								aria-label="Close menu"
							>
								×
							</button>
						</div>


						{/* LINKS */}

						<nav className="portfolio-mobile-links">
							{menuItems.map((item, index) => (
								<motion.button
									type="button"
									key={item.target}
									onClick={() =>
										goToSection(item.target)
									}
									initial={{
										opacity: 0,
										y: 40,
									}}
									animate={{
										opacity: 1,
										y: 0,
									}}
									transition={{
										duration: 0.5,
										delay:
											0.15 +
											index * 0.08,
									}}
								>
									<span>
										{item.number}
									</span>

									<strong>
										{item.label}
									</strong>
								</motion.button>
							))}
						</nav>


						{/* BOTTOM INFO */}

						<motion.div
							className="portfolio-mobile-footer"
							initial={{
								opacity: 0,
							}}
							animate={{
								opacity: 1,
							}}
							transition={{
								delay: 0.55,
							}}
						>
							<p>UX/UI Designer</p>

							<p>Belgium</p>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}