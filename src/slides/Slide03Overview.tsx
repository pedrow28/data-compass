import { motion } from "framer-motion";
import CountUp from "@/components/CountUp";

interface SlideProps {
  isActive: boolean;
}

const kpis = [
  { icon: "🏥", value: 1524, label: "Internações no período" },
  { icon: "🗺️", value: 74, label: "Municípios atendidos" },
  { icon: "❤️", value: 60.6, label: "Pacientes de fora de Diamantina", suffix: "%", decimals: 1 },
  { icon: "📅", value: 2025, label: "Jan–Jun 2025", isYear: true },
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const cardAnim = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Slide03Overview = ({ isActive }: SlideProps) => (
  <div className="w-full h-full bg-background flex flex-col items-center justify-center px-8">
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      animate={isActive ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12 text-center"
    >
      A Santa Casa em Números
    </motion.h2>

    <motion.div
      variants={stagger}
      initial="hidden"
      animate={isActive ? "show" : "hidden"}
      className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl w-full mb-12"
    >
      {kpis.map((kpi) => (
        <motion.div
          key={kpi.label}
          variants={cardAnim}
          className="bg-thauma-deep rounded-xl p-6 text-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
        >
          <span className="text-3xl mb-3 block">{kpi.icon}</span>
          <div className="text-thauma-cyan font-display font-bold text-4xl md:text-5xl mb-2">
            {kpi.isYear ? (
              "2025"
            ) : (
              <CountUp
                end={kpi.value}
                suffix={kpi.suffix || ""}
                decimals={kpi.decimals || 0}
                isActive={isActive}
              />
            )}
          </div>
          <p className="text-primary-foreground/70 text-sm font-body">{kpi.label}</p>
        </motion.div>
      ))}
    </motion.div>

    <motion.p
      initial={{ opacity: 0 }}
      animate={isActive ? { opacity: 1 } : {}}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="max-w-3xl text-center font-body text-foreground/70 leading-relaxed text-base"
    >
      A Santa Casa de Caridade não é um hospital local. É uma infraestrutura regional de saúde que atende
      populações de 74 municípios do Vale do Jequitinhonha e entorno. Sem ela, milhares de pacientes
      precisariam percorrer centenas de quilômetros até Belo Horizonte.
    </motion.p>
  </div>
);

export default Slide03Overview;
