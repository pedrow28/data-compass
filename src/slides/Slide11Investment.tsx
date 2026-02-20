import { motion } from "framer-motion";

interface SlideProps {
  isActive: boolean;
}

const items = [
  { prio: "🔴", level: "Crítica", need: "Equipamentos de emergência cardiovascular", value: "R$ 800.000", impact: "Redução de mortalidade em infarto/AVC" },
  { prio: "🟡", level: "Alta", need: "Reforma da ala de neurocirurgia", value: "R$ 600.000", impact: "Ampliação de capacidade em 30%" },
  { prio: "🟢", level: "Média", need: "Capacitação de equipe multidisciplinar", value: "R$ 350.000", impact: "Qualificação para alta complexidade" },
  { prio: "🔵", level: "Estratégica", need: "Sistema de telemedicina regional", value: "R$ 250.000", impact: "Cobertura dos 74 municípios" },
];

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const row = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

const Slide11Investment = ({ isActive }: SlideProps) => (
  <div className="w-full h-full bg-background flex flex-col items-center justify-center px-8 py-10">
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      animate={isActive ? { opacity: 1, y: 0 } : {}}
      className="font-display text-2xl md:text-3xl font-bold text-foreground mb-10 text-center"
    >
      Sugestão de Alocação de Emenda Parlamentar
    </motion.h2>

    <motion.div
      variants={stagger}
      initial="hidden"
      animate={isActive ? "show" : "hidden"}
      className="max-w-4xl w-full space-y-4 mb-8"
    >
      {items.map((it) => (
        <motion.div
          key={it.need}
          variants={row}
          className="bg-muted rounded-xl p-5 flex flex-col md:flex-row md:items-center gap-4 hover:shadow-md transition-shadow"
        >
          <div className="flex items-center gap-3 md:w-48 flex-shrink-0">
            <span className="text-xl">{it.prio}</span>
            <span className="font-display font-semibold text-foreground text-sm">{it.level}</span>
          </div>
          <div className="flex-1">
            <p className="font-display font-semibold text-foreground text-sm">{it.need}</p>
            <p className="font-body text-muted-foreground text-xs mt-1">{it.impact}</p>
          </div>
          <div className="font-display font-bold text-thauma-deep text-lg md:text-xl flex-shrink-0">
            {it.value}
          </div>
        </motion.div>
      ))}
    </motion.div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={isActive ? { opacity: 1 } : {}}
      transition={{ delay: 0.8 }}
      className="text-center"
    >
      <div className="inline-flex items-center gap-3 bg-thauma-deep rounded-xl px-8 py-4">
        <span className="font-display text-primary-foreground/70 text-sm">Total sugerido:</span>
        <span className="font-display font-bold text-thauma-cyan text-3xl">R$ 2.000.000</span>
      </div>
      <p className="font-body text-muted-foreground text-xs mt-4 italic">
        Valores estimados para fins de planejamento. Detalhamento técnico disponível no Dossiê de Evidências completo.
      </p>
    </motion.div>
  </div>
);

export default Slide11Investment;
