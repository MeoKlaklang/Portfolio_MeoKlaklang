import "./Introduction.css";
import { motion } from "framer-motion";

const base = import.meta.env.BASE_URL; // -> "/Portfolio_MeoKlaklang/"

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
              Hoi! Ik ben Siriyakorn, maar iedereen noemt me Meo. Ik ben 23 jaar
              oud en heb een passie voor webdesign en alles wat creativiteit met
              technologie combineert.
            </p>

            <p>
              Ik ben geboren in Thailand maar opgegroeid in België. Nu krijg ik
              de boeiende kans om terug te keren naar mijn geboorteland voor een
              stage. Het voelt bijzonder om opnieuw verbinding te maken met mijn
              roots en tegelijk de kennis en ervaring mee te nemen die ik in
              België heb opgedaan.
            </p>
          </div>

          <div className="col">
            <p>
              Momenteel zit ik in mijn laatste jaar van de opleiding Multimedia
              en Creative Technology aan de Erasmushogeschool Brussel, waar ik
              me focus op UX/UI-design. Naast design heb ik ook vaardigheden
              ontwikkeld in zowel front-end als back-end development.
            </p>

            <p>
              Deze technische achtergrond helpt me om ontwerpen te maken die niet
              alleen visueel aantrekkelijk zijn, maar ook praktisch en
              realiseerbaar. Ik hou ervan om die balans te vinden tussen esthetiek
              en functionaliteit.
            </p>
          </div>
        </motion.div>
      </motion.div>

      <motion.img
        src={`${base}pijl.png`}
        alt="arrow"
        className="intro-arrow"
        variants={arrowVariants}
      />

      <motion.div className="intro-right">
        <motion.img
          src={`${base}meo.jpeg`}
          alt="Meo smiling"
          className="intro-image"
          variants={imageVariants}
        />
      </motion.div>
    </motion.div>
  );
}
