import { motion } from "framer-motion";

interface SlideProps {
  isActive: boolean;
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const Slide01Cover = ({ isActive }: SlideProps) => (
  <div className="w-full h-full bg-thauma-deep geo-pattern flex items-center justify-center">
    <motion.div
      className="text-center max-w-4xl px-8"
      variants={stagger}
      initial="hidden"
      animate={isActive ? "show" : "hidden"}
    >
      <motion.div variants={fadeUp} className="mb-2">
        <span className="font-display text-2xl font-bold tracking-[0.3em] text-primary-foreground">
          THAUMA
        </span>
      </motion.div>
      <motion.p variants={fadeUp} className="text-sm tracking-[0.2em] text-thauma-cyan/70 mb-10 font-display">
        Inteligência & Narrativa em Saúde
      </motion.p>

      <motion.div variants={fadeUp} className="w-24 h-px mx-auto mb-10" style={{ backgroundColor: "#40D7FF" }} />

      <motion.h1 variants={fadeUp} className="font-display text-4xl md:text-5xl font-bold text-primary-foreground leading-tight mb-2">
        Santa Casa de Caridade de Diamantina
      </motion.h1>
      <motion.h2 variants={fadeUp} className="font-display text-xl md:text-2xl font-light text-thauma-cyan/80 mb-10">
        Dossiê de Inteligência Política
      </motion.h2>

      <motion.p variants={fadeUp} className="text-sm text-primary-foreground/50 mb-2 font-body">
        Apresentação personalizada para
      </motion.p>
      <motion.p variants={fadeUp} className="font-display text-2xl md:text-3xl font-bold text-thauma-cyan">
        Dep. Federal Hercílio Coelho Diniz (MDB)
      </motion.p>

      <motion.p variants={fadeUp} className="mt-14 text-xs text-primary-foreground/30 font-body tracking-wide">
        Dados: SIH/DATASUS × TSE &nbsp;|&nbsp; Período: Jan-Jun 2025 &nbsp;|&nbsp; Confidencial
      </motion.p>
    </motion.div>
  </div>
);

export default Slide01Cover;
