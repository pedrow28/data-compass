import { motion } from "framer-motion";
import CountUp from "@/components/CountUp";

interface SlideProps {
  isActive: boolean;
}

const withSC = [
  "✅ 1.524 pacientes atendidos localmente",
  "✅ Emergências cardio/neuro resolvidas em minutos",
  "✅ Custo médio por internação: ~R$ 3.500",
  "✅ 39 pacientes em crise de suicídio acolhidos",
];

const withoutSC = [
  "❌ 1.524 pacientes deslocados 280+ km até BH",
  "❌ AVCs e infartos: 'golden hour' perdida = óbitos",
  "❌ Custo de deslocamento + internação na capital: ~R$ 12.000+",
  "❌ Pacientes em crise de suicídio sem acolhimento local",
];

const Slide09Cost = ({ isActive }: SlideProps) => (
  <div className="w-full h-full bg-background flex flex-col items-center justify-center px-8 py-10">
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      animate={isActive ? { opacity: 1, y: 0 } : {}}
      className="font-display text-2xl md:text-3xl font-bold text-foreground mb-10 text-center"
    >
      O que acontece se a Santa Casa parar?
    </motion.h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full mb-10">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={isActive ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.3 }}
        className="rounded-2xl p-6 border border-green-200" style={{ backgroundColor: "rgba(34,197,94,0.08)" }}
      >
        <h3 className="font-display font-bold text-foreground mb-4 text-lg">COM a Santa Casa</h3>
        <ul className="space-y-3">
          {withSC.map((t) => (
            <li key={t} className="font-body text-sm text-foreground/80">{t}</li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={isActive ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.5 }}
        className="rounded-2xl p-6 border border-red-200" style={{ backgroundColor: "rgba(239,68,68,0.08)" }}
      >
        <h3 className="font-display font-bold text-foreground mb-4 text-lg">SEM a Santa Casa</h3>
        <ul className="space-y-3">
          {withoutSC.map((t) => (
            <li key={t} className="font-body text-sm text-foreground/80">{t}</li>
          ))}
        </ul>
      </motion.div>
    </div>

    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isActive ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: 0.8 }}
      className="text-center"
    >
      <p className="text-sm text-muted-foreground mb-2 font-body">💰 Custo evitado estimado ao SUS:</p>
      <div className="text-thauma-cyan font-display font-bold text-4xl md:text-5xl">
        R$ <CountUp end={12.9} decimals={1} isActive={isActive} suffix=" milhões/ano" />
      </div>
      <p className="text-xs text-muted-foreground mt-2 font-body italic max-w-md mx-auto">
        Cálculo: 1.524 internações × diferencial de custo capital vs. interior × projeção anual
      </p>
    </motion.div>
  </div>
);

export default Slide09Cost;
