import "./ProjectAnimal.css";
import { motion } from "framer-motion";

export default function ProjectAnimal() {
    return (
        <div className="project-container">

            {/* HEADER */}
            <motion.div
                className="project-header"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
            >
                <h2 className="project-index">0.1 UX/UI</h2>
                <h1 className="project-title">animal festival</h1>
            </motion.div>

            {/* TEKST EN MOCKUPS */}
            <div className="project-content">

                {/* LINKER TEKSTKOLOM */}
                <motion.div
                    className="project-text"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: false }}
                >
                    <p>
                        Animal Festival is een applicatie die is ontworpen om gebruikers snel
                        en efficiënt toegang te geven tot het festival­schema en verschillende
                        activiteiten te verkennen via een intuïtief en doordacht ontwerp.
                        Daarnaast stelt de app gebruikers in staat om tickets te kopen en alle
                        belangrijke festival­informatie op één handige plek te vinden.
                    </p>

                    {/* POSTER */}
                    <img src="/animal festival home.png" alt="poster" className="project-poster" />

                    {/* KNOP */}
                    <button className="project-button">bekijk project</button>
                </motion.div>

                {/* RECHTER MOCKUPS */}
                <motion.div
                    className="project-mockups"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                    viewport={{ once: false }}
                >
                    <img src="/animal festival info.png" alt="info screen" className="mockup big" />
                    <img src="/animal festival map.png" alt="map screen" className="mockup small" />
                </motion.div>

            </div>
        </div>
    );
}
