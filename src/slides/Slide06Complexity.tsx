import { motion } from "framer-motion";
import CountUp from "@/components/CountUp";

interface SlideProps {
  isActive: boolean;
}

const cards = [
  {
    icon: "🧠",
    value: 169,
    label: "Neurocirurgia + AVC + Traumatismo craniano",
    sub: "Procedimentos que EXIGEM hospital de referência",
  },
  {
    icon: "❤️‍🩹",
    value: 216,
    label: "Cardiologia de emergência",
    sub: "Infarto, insuficiência cardíaca, angina, síndrome coronariana",
  },
  {
    icon: "⚕️",
    value: 39,
    label: "Saúde mental — risco de suicídio",
    sub: "Acolhimento em crise que não existe em UBS",
  },
];

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } };
const cardAnim = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const Slide06Complexity = ({ isActive }: SlideProps) => (
  <div className="w-full h-full bg-thauma-deep flex flex-col items-center justify-center px-8">
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      animate={isActive ? { opacity: 1, y: 0 } : {}}
      className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-12 text-center"
    >
      Complexidade Assistencial
    </motion.h2>

    <motion.div
      variants={stagger}
      initial="hidden"
      animate={isActive ? "show" : "hidden"}
      className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full mb-12"
    >
      {cards.map((c) => (
        <motion.div
          key={c.label}
          variants={cardAnim}
          className="bg-thauma-mid/40 border border-thauma-cyan/20 rounded-2xl p-8 text-center hover:border-thauma-cyan/50 hover:-translate-y-1 transition-all duration-300"
        >
          <span className="text-5xl mb-4 block">{c.icon}</span>
          <div className="text-thauma-cyan font-display font-bold text-5xl mb-3">
            <CountUp end={c.value} isActive={isActive} />
          </div>
          <p className="font-display font-semibold text-primary-foreground text-sm mb-2">{c.label}</p>
          <p className="font-body text-primary-foreground/50 text-xs">{c.sub}</p>
        </motion.div>
      ))}
    </motion.div>

    <motion.p
      initial={{ opacity: 0 }}
      animate={isActive ? { opacity: 1 } : {}}
      transition={{ delay: 0.8 }}
      className="font-body text-primary-foreground/60 text-center max-w-2xl text-base italic"
    >
      Esta não é uma Santa Casa que trata gripe. É um centro de referência regional em emergências
      neurológicas, cardiovasculares e saúde mental.
    </motion.p>
  </div>
);

export default Slide06Complexity;
