import "./Persona.css";
import { motion } from "framer-motion";

export default function Persona() {
  const base = import.meta.env.BASE_URL; // "/Portfolio_MeoKlaklang/"

  return (
    <div className="persona-container">
      {/* TITEL */}
      <motion.h2
        className="persona-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        User Personas & Journey map
      </motion.h2>

      {/* GRID */}
      <div className="persona-grid">
        {/* ——— LINKERKOLOM ——— */}
        <motion.div
          className="persona-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <h3 className="persona-name">Marte Vermeulen</h3>

          <p className="persona-info">
            Kinderopvang medewerkster
            <br />
            Leeftijd: 30 jaar
            <br />
            Locatie: Holsbeek
          </p>

          <p className="persona-description">
            Marte is een zorgzame vrouw die haar tijd verdeelt tussen haar werk
            in de kinderopvang en het opvoeden van haar éénjarig kind. Ze houdt
            van dieren en heeft thuis een kat, maar wist tot voor kort weinig
            over wat een opvanggezin precies doet.
          </p>

          <p className="persona-description">
            Ze zoekt vooral duidelijke en beknopte informatie wanneer ze online
            opzoekt hoe dit werkt.
          </p>
        </motion.div>

        {/* ——— RECHTERKOLOM: IMAGE + FIGMA HOVER REVEAL ——— */}
        <div className="persona-image-wrapper">
          {/* NORMALE AFBEELDING */}
          <motion.img
            className="persona-image"
            src={`${base}persona.png`}
            alt="Persona Journey Illustration"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          />

          {/* FIGMA EMBED OP HOVER */}
          <iframe
            className="persona-figma"
            style={{ border: "1px solid rgba(0,0,0,0.1)" }}
            width="800"
            height="450"
            src="https://embed.figma.com/board/kfzLbn4zLP12hIqjNg3PBp/Customer-Journey-Map--Copy-?node-id=0-1&embed-host=share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
