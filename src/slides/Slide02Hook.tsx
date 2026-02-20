import { motion } from "framer-motion";

interface SlideProps {
  isActive: boolean;
}

const fadeIn = (delay: number) => ({
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, delay, ease: "easeOut" as const } },
});

const Slide02Hook = ({ isActive }: SlideProps) => (
  <div className="w-full h-full bg-thauma-deep flex items-center justify-center">
    <div className="max-w-3xl px-8 text-center">
      <motion.p
        variants={fadeIn(0.2)}
        initial="hidden"
        animate={isActive ? "show" : "hidden"}
        className="font-body text-2xl md:text-3xl text-primary-foreground/80 italic mb-8"
      >
        E se o senhor soubesse...
      </motion.p>

      <motion.p
        variants={fadeIn(1.2)}
        initial="hidden"
        animate={isActive ? "show" : "hidden"}
        className="font-body text-2xl md:text-3xl text-primary-foreground leading-relaxed mb-8"
      >
        que <span className="text-thauma-cyan font-bold font-display">60,6%</span> dos pacientes internados na Santa Casa de Diamantina vêm de{" "}
        <span className="text-thauma-cyan font-bold">FORA</span> do município?
      </motion.p>

      <motion.p
        variants={fadeIn(2.4)}
        initial="hidden"
        animate={isActive ? "show" : "hidden"}
        className="font-body text-2xl md:text-3xl text-primary-foreground leading-relaxed mb-12"
      >
        E que <span className="text-thauma-cyan font-bold font-display">5.159</span> dos seus eleitores dependem diretamente desta instituição?
      </motion.p>

      <motion.p
        variants={fadeIn(3.6)}
        initial="hidden"
        animate={isActive ? "show" : "hidden"}
        className="font-body text-lg text-thauma-cyan italic tracking-wide"
      >
        Esses são os dados. Esta é a verdade. Permita-nos revelar.
      </motion.p>
    </div>
  </div>
);

export default Slide02Hook;
