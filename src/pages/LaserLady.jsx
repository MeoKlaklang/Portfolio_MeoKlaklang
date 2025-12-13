import "./LaserLady.css";
import { motion } from "framer-motion";

export default function LaserLady() {
  const base = import.meta.env.BASE_URL; // "/Portfolio_MeoKlaklang/"

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="laserlady-container">
      {/* HOOFDTITEL */}
      <motion.h2
        className="laserlady-title"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
      >
        0.3 LaserLady
      </motion.h2>

      {/* SUBTITEL + TEKST */}
      <div className="laserlady-intro">
        <motion.h3 initial="hidden" whileInView="visible" variants={fadeUp}>
          Wat is Laserlady?
        </motion.h3>

        <motion.p initial="hidden" whileInView="visible" variants={fadeUp}>
          LaserLady is een professionele website voor een zelfstandige
          laserontharingsspecialiste. De website focust op een duidelijke
          presentatie van de diensten, een gebruiksvriendelijk boekingssysteem
          en een laagdrempelig contactformulier. Het doel is om bezoekers snel
          vertrouwen te geven en hen eenvoudig een afspraak te laten maken, met
          een moderne en vrouwelijke uitstraling die past bij de branding van de
          zaak.
        </motion.p>
      </div>

      {/* ----------------------------------------------------- */}
      {/* LASERLADY SKETCH WIREFRAME SECTION                     */}
      {/* ----------------------------------------------------- */}

      <div className="laserlady-sketch">
        {/* Titel */}
        <motion.h3
          className="laserlady-sketch-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Meo VS opencode
        </motion.h3>

        <div className="laserlady-sketch-grid laserlady-sketch-grid--two">
          {["laserlady1.mp4", "laserlady2.mp4"].map((video, i) => (
            <motion.div
              key={i}
              className="laserlady-sketch-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: i * 0.1,
              }}
            >
              <video
                src={`${base}${video}`}
                autoPlay
                loop
                muted
                playsInline
              />
            </motion.div>
          ))}
        </div>

        {/* Probleem + Oplossing */}
        <div className="laserlady-sketch-bottom">
          <div className="laserlady-sketch-textblock">
            <h3>Probleem</h3>
            <p>
              Bij het bouwen van de LaserLady-website in WordPress merkte ik dat
              het platform mijn creativiteit beperkte. Hoewel ik zonder code een
              boekingssysteem en contactformulier kon opzetten, bleek het
              manueel opbouwen van pagina’s traag en omslachtig. Dit maakte het
              moeilijk om snel te itereren en ideeën efficiënt uit te werken.
            </p>
          </div>

          <div className="laserlady-sketch-textblock">
            <h3>Oplossing</h3>
            <p>
              Door een tweede versie te genereren via OpenCode ontdekte ik een
              veel snellere en flexibelere workflow. Met één duidelijke prompt
              kon ik in enkele minuten een volledige website laten genereren,
              waarna de code werd omgezet naar een WordPress-theme en meteen
              geüpload. Deze aanpak combineert de kracht van WordPress met de
              snelheid van AI, en toont hoe websites in een professionele
              context veel efficiënter ontwikkeld kunnen worden.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
