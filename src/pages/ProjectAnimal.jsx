import "./ProjectAnimal.css";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function ProjectAnimal() {
  const [hoverImage, setHoverImage] = useState(null);

  const base = import.meta.env.BASE_URL; // "/Portfolio_MeoKlaklang/"
  const asset = (file) => `${base}${file}`;

  return (
    <div className="project-container">
      {/* TITEL */}
      <motion.div
        className="project-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="project-title-block">
          <span className="project-index">0.1 Dierenbescherming</span>
          <h2 className="project-title">Mechelen</h2>
        </div>
      </motion.div>

      {/* INTRO BLOKKEN + FOTO */}
      <div className="project-row">
        <motion.div
          className="project-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: false }}
        >
          <h3 className="project-subtitle">Wat is dierenbescherming Mechelen?</h3>
          <p>
            Dierenbescherming Mechelen is een organisatie die zich inzet voor het
            opvangen, verzorgen en herplaatsen van dieren (zoals honden en katten)
            in en rond Mechelen. Ze beheren onder andere een opvang- en adoptieservice
            voor viervoeters die op zoek zijn naar een nieuw thuis.
          </p>

          <h3 className="project-subtitle">Waarom een redesign?</h3>

          <ul className="project-bullets">
            <li>Belangrijke informatie is moeilijk vindbaar.</li>
            <li>Navigatie leidt gebruikers naar verkeerde tabs.</li>
            <li>Te veel ongestructureerde tekst → informatie-overload.</li>
            <li>Call-to-actions zijn onduidelijk en slecht geplaatst.</li>
            <li>Proces van opvanggezin worden is niet helder uitgelegd.</li>
            <li>Gebruikers missen structuur, visuals en vertrouwen.</li>
            <li>Website volgt moderne UX/UI-principes niet.</li>
          </ul>
        </motion.div>

        <motion.img
          className="project-image"
          src={asset("mechelen-home.gif")}
          alt="Mockup dierenbescherming"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false }}
        />
      </div>

      {/* CONCURRENTIE ANALYSE */}
      <motion.h3
        className="project-subtitle2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        Concurrentie analyse
      </motion.h3>

      <div className="project-competitor-grid">
        {/* GENK */}
        <motion.div
          className="competitor-block"
          onMouseEnter={() => setHoverImage(asset("genk.png"))}
          onMouseLeave={() => setHoverImage(null)}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: false }}
        >
          <h4>Dierenasiel Genk</h4>
          <p>
            Heeft aparte pagina’s voor honden/katten-adoptie met formulieren en
            duidelijke uitleg. Beschikt ook over een specifieke pagina rond
            opvanggezinnen, maar deze is eerder tekstgedreven en niet super prominent
            in de algemene flow van de site.
          </p>
          <motion.div
            className="competitor-line"
            initial={{ width: 0 }}
            whileInView={{ width: "80%" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false }}
          />
        </motion.div>

        {/* IEPER */}
        <motion.div
          className="competitor-block"
          onMouseEnter={() => setHoverImage(asset("ieper.png"))}
          onMouseLeave={() => setHoverImage(null)}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
        >
          <h4>Dierenasiel Ieper</h4>
          <p>
            Website focust vooral op “dieren in het asiel” en adoptie-informatie.
            Info over opvanggezinnen verschijnt vooral via externe platformen zoals
            Facebook en adopteersites, niet als duidelijke UX-flow op de hoofdsite
          </p>
          <motion.div
            className="competitor-line"
            initial={{ width: 0 }}
            whileInView={{ width: "80%" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false }}
          />
        </motion.div>

        {/* GEEL */}
        <motion.div
          className="competitor-block"
          onMouseEnter={() => setHoverImage(asset("geel.png"))}
          onMouseLeave={() => setHoverImage(null)}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false }}
        >
          <h4>Het Dierenthuisje (geel)</h4>
          <p>
            Profiel als “dierenopvang” voor oudere, zieke en moeilijk plaatsbare
            dieren, met sterke storytelling en veel emotionele content. Zoekt wel
            opvang-/pleeggezinnen (bv. voor kittens), maar die oproepen zitten vooral
            in losse posts/pagina’s, niet in een heldere, stap-voor-stap UX-flow
            “opvanggezin worden”
          </p>
          <motion.div
            className="competitor-line"
            initial={{ width: 0 }}
            whileInView={{ width: "80%" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false }}
          />
        </motion.div>
      </div>

      {/* FULLSCREEN OVERLAY */}
      <AnimatePresence>
        {hoverImage && (
          <motion.div
            className="competitor-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src={hoverImage}
              alt="Competitor preview"
              className="competitor-overlay-image"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
