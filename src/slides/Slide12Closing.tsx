import { motion } from "framer-motion";

interface SlideProps {
  isActive: boolean;
}

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } };
const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } } as const;

const Slide12Closing = ({ isActive }: SlideProps) => (
  <div className="w-full h-full bg-thauma-deep geo-pattern flex items-center justify-center">
    <motion.div
      variants={stagger}
      initial="hidden"
      animate={isActive ? "show" : "hidden"}
      className="text-center max-w-3xl px-8"
    >
      <motion.p variants={fadeUp} className="font-body text-3xl md:text-4xl text-primary-foreground font-bold leading-tight mb-6">
        Não pedimos ajuda.
        <br />
        Apresentamos evidências.
      </motion.p>

      <motion.p variants={fadeUp} className="font-body text-lg text-thauma-cyan italic mb-10">
        A Santa Casa de Diamantina não precisa de favores. Precisa de parceiros que entendam o valor do investimento.
      </motion.p>

      <motion.div variants={fadeUp} className="w-24 h-px mx-auto mb-10" style={{ backgroundColor: "#40D7FF" }} />

      <motion.div variants={fadeUp} className="mb-10">
        <p className="font-display text-xl font-bold tracking-[0.2em] text-primary-foreground mb-1">THAUMA</p>
        <p className="font-display text-sm text-thauma-cyan/70 tracking-wider mb-3">Inteligência & Narrativa em Saúde</p>
        <p className="font-body text-primary-foreground/50 text-sm">Pedro William Ribeiro | Fundador</p>
        <p className="font-body text-primary-foreground/30 text-xs italic mt-2">
          "O espanto da descoberta. A ciência do resultado."
        </p>
      </motion.div>

      <motion.div variants={fadeUp} className="space-y-2 text-xs text-primary-foreground/30 font-body">
        <p>📊 Análise baseada em dados oficiais: SIH/DATASUS + TSE</p>
        <p>🔒 Metodologia proprietária: Score de Alinhamento Territorial (SAT)</p>
        <p>📋 Entregáveis: Dossiê + Radar Político + Pitch Deck + Playbook</p>
      </motion.div>
    </motion.div>
  </div>
);

export default Slide12Closing;
