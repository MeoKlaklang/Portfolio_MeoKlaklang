import "./Spline.css";
import { motion } from "framer-motion";

export default function SplineSection() {
  const base = import.meta.env.BASE_URL; // "/Portfolio_MeoKlaklang/"
  const asset = (file) => `${base}${file}`;

  const cardAnim = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="spline-container">
      {/* TITEL */}
      <motion.h2
        className="spline-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        0.2.1 Spline
      </motion.h2>

      {/* 4 KAARTEN */}
      <motion.div
        className="spline-grid"
        initial="hidden"
        whileInView="visible"
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
      >
        {[
          { src: "spline1.png", type: "img" },
          { src: "spline2.png", type: "img" },
          { src: "spline3.mp4", type: "video" },
          { src: "spline4.png", type: "img" },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="spline-card"
            variants={cardAnim}
            whileHover={{ scale: 1.03 }}
          >
            {item.type === "img" ? (
              <img src={asset(item.src)} alt={`Spline ${index + 1}`} />
            ) : (
              <video
                src={asset(item.src)}
                autoPlay
                loop
                muted
                playsInline
              />
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* PROBLEEM + OPLOSSING */}
      <div className="spline-text-grid">
        <motion.div
          className="spline-textblock"
          initial="hidden"
          whileInView="visible"
          variants={cardAnim}
        >
          <h3>Probleem</h3>
          <p>
            Probleem dat ik ondervond bij Spline is dat je je animatie enkel in
            figma kan opnen met een anima plugin. Maar als je dit doet werken de
            andere animatie niet in figma die je hebt gemaakt.
          </p>
        </motion.div>

        <motion.div
          className="spline-textblock"
          initial="hidden"
          whileInView="visible"
          variants={cardAnim}
        >
          <h3>Oplossing</h3>
          <p>
            Mijn oplossing was dan om mijn portfolio te coderen waardoor ik wel
            de embeded code kan gebruiken van Spline en deze makkelijker en
            mooier kan toepassen in mijn project
          </p>
        </motion.div>
      </div>

      {/* SPLINE ANIMATIE */}
      <motion.div
        className="spline-player"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <iframe
          src="https://my.spline.design/untitled-LcqrK4wXgsqoPkXWSveGss4U/"
          frameBorder="0"
          width="100%"
          height="100%"
          style={{ border: "none" }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </motion.div>
    </div>
  );
}
