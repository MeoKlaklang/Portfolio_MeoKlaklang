import "./Home.css";
import {
	motion,
	useMotionValue,
	useTransform,
} from "framer-motion";
import {
	useEffect,
	useRef,
	useState,
} from "react";


/* =========================================
   TRAIL SYMBOLS
========================================= */

const trailSymbols = [
	"✦",
	"○",
	"＋",
	"◇",
	"·",
	"✧",
	"—",
	"⌁",
];


export default function Home() {

	const constraintsRef = useRef(null);

	const base = import.meta.env.BASE_URL;

	const asset = (file) => `${base}${file}`;


	/* =========================================
	   CAT POSITION
	========================================= */

	const x = useMotionValue(0);
	const y = useMotionValue(0);


	/* =========================================
	   BACKGROUND
	========================================= */

	const background = useTransform(
		x,
		[-300, 0, 300],
		["#f7f7ff", "#ffffff", "#f7f7ff"]
	);


	/* =========================================
	   DEVICE
	========================================= */

	const [isMobile, setIsMobile] = useState(
		() => window.innerWidth <= 700
	);

	useEffect(() => {

		const handleResize = () => {
			setIsMobile(window.innerWidth <= 700);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener(
				"resize",
				handleResize
			);
		};

	}, []);


	/* =========================================
	   TRAIL
	========================================= */

	const [trail, setTrail] = useState([]);

	const lastTrailPosition = useRef({
		x: 0,
		y: 0,
	});

	const trailId = useRef(0);


	/* =========================================
	   CREATE TRAIL PARTICLE
	========================================= */

	const createTrailParticle = () => {

		if (
			isMobile ||
			!constraintsRef.current
		) {
			return;
		}

		const currentX = x.get();
		const currentY = y.get();


		/* Distance since last particle */

		const dx =
			currentX -
			lastTrailPosition.current.x;

		const dy =
			currentY -
			lastTrailPosition.current.y;

		const distance = Math.sqrt(
			dx * dx + dy * dy
		);


		/*
		 * Don't create hundreds of particles.
		 * Only create one after the cat moved
		 * approximately 25px.
		 */

		if (distance < 25) return;


		lastTrailPosition.current = {
			x: currentX,
			y: currentY,
		};


		const id = trailId.current++;

		const symbol =
			trailSymbols[
				Math.floor(
					Math.random() *
						trailSymbols.length
				)
			];


		const particle = {
			id,
			x:
				currentX +
				(Math.random() - 0.5) * 55,

			y:
				currentY +
				(Math.random() - 0.5) * 55,

			symbol,

			size:
				10 +
				Math.random() * 14,

			rotation:
				Math.random() * 100 - 50,
		};


		setTrail((current) => [
			...current.slice(-24),
			particle,
		]);


		/* Remove automatically */

		setTimeout(() => {

			setTrail((current) =>
				current.filter(
					(item) => item.id !== id
				)
			);

		}, 1200);
	};


	/* =========================================
	   LISTEN TO CAT MOVEMENT
	========================================= */

	useEffect(() => {

		if (isMobile) return;

		const unsubscribeX =
			x.on("change", createTrailParticle);

		const unsubscribeY =
			y.on("change", createTrailParticle);


		return () => {

			unsubscribeX();
			unsubscribeY();

		};

	}, [isMobile]);


	/* =========================================
	   DRAG START
	========================================= */

	const handleDragStart = () => {

		lastTrailPosition.current = {
			x: x.get(),
			y: y.get(),
		};

	};


	return (

		<motion.div
			className="home"
			style={{
				background:
					isMobile
						? "#ffffff"
						: background,
			}}
		>

			{/* =====================================
			    TOP
			===================================== */}

			<header className="top">

				<nav className="tags">

					<span>
						UX/UI Designer
					</span>

				</nav>

			</header>


			{/* =====================================
			    HERO
			===================================== */}

			<main
				className="hero"
				ref={constraintsRef}
			>

				{/* Portfolio typography */}

				<img
					className="portfolio"
					src={asset("port.png")}
					alt="Portfolio"
				/>


				{/* Name */}

				<div className="name">

					Meo
					<br />
					Klaklang

				</div>


				{/* =================================
				    CAT TRAIL — DESKTOP ONLY
				================================= */}

				{!isMobile && (

					<div
						className="cat-trail"
						aria-hidden="true"
					>

						{trail.map((particle) => (

							<motion.span
								key={particle.id}
								className="trail-particle"

								style={{
									left: `calc(50% + ${particle.x}px)`,
									top: `calc(50% + ${particle.y}px)`,
									fontSize: `${particle.size}px`,
								}}

								initial={{
									opacity: 0,
									scale: 0.3,
									rotate:
										particle.rotation -
										20,
								}}

								animate={{
									opacity: [
										0,
										0.7,
										0.5,
										0,
									],

									scale: [
										0.3,
										1,
										0.9,
										0.6,
									],

									rotate:
										particle.rotation,

									y: -20,
								}}

								transition={{
									duration: 1.2,
									ease: "easeOut",
								}}
							>

								{particle.symbol}

							</motion.span>

						))}

					</div>

				)}


				{/* =================================
				    CAT
				================================= */}

				<motion.img
					className="cat"

					src={asset("cat-home.png")}

					alt="Illustrated cat"

					drag={!isMobile}

					dragConstraints={
						isMobile
							? undefined
							: constraintsRef
					}

					dragElastic={0.25}

					dragSnapToOrigin

					style={
						isMobile
							? {}
							: { x, y }
					}

					onDragStart={
						handleDragStart
					}

					whileTap={
						isMobile
							? {}
							: {
									scale: 1.07,
									rotate: 4,
							  }
					}

					transition={{
						type: "spring",
						stiffness: 80,
						damping: 14,
						mass: 0.8,
					}}
				/>


				{/* =================================
				    KITE — DESKTOP
				================================= */}

				<img
					className="kite"
					src={asset("vlieger.png")}
					alt=""
					aria-hidden="true"
				/>


				{/* =================================
				    WINDMILL — DESKTOP
				================================= */}

				<div
					className="mill-wrapper"
					aria-hidden="true"
				>

					<img
						className="mill"
						src={asset("molen.png")}
						alt=""
					/>

					<img
						className="mill-steel"
						src={asset(
							"molen-steel.png"
						)}
						alt=""
					/>

				</div>

			</main>


			{/* =====================================
			    FOOTER
			===================================== */}

			<footer className="foot">

				<a href="mailto:klaklang.m@outlook.com">
					klaklang.m@outlook.com
				</a>

			</footer>

		</motion.div>

	);

}