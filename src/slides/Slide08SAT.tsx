import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

interface SlideProps {
  isActive: boolean;
}

const Slide08SAT = ({ isActive }: SlideProps) => {
  const score = useMotionValue(0);
  const rounded = useTransform(score, (v) => Math.round(v));

  useEffect(() => {
    if (isActive) {
      animate(score, 87, { duration: 2, ease: "easeOut" });
    }
  }, [isActive, score]);

  const circumference = 2 * Math.PI * 90;
  const strokeDashoffset = useTransform(score, [0, 100], [circumference, 0]);

  return (
    <div className="w-full h-full bg-thauma-deep flex flex-col items-center justify-center px-8">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-2 text-center"
      >
        Score de Alinhamento Territorial
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ delay: 0.2 }}
        className="font-display text-sm text-thauma-cyan/70 mb-8 tracking-wider"
      >
        Metodologia THAUMA
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ delay: 0.3 }}
        className="font-body text-primary-foreground/50 text-sm max-w-2xl text-center mb-10"
      >
        O SAT quantifica o grau de sobreposição entre a base eleitoral do parlamentar e a população atendida pelo hospital.
        Quanto maior o SAT, maior o retorno político-social do investimento via emenda.
      </motion.p>

      {/* Gauge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isActive ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="relative w-56 h-56 mb-4"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full -rotate-90">
          <circle cx="100" cy="100" r="90" fill="none" stroke="rgba(64,215,255,0.1)" strokeWidth="12" />
          <motion.circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke="#40D7FF"
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={circumference}
            style={{ strokeDashoffset }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span className="font-display font-bold text-thauma-cyan text-5xl">
            {rounded}
          </motion.span>
          <span className="font-display text-primary-foreground/50 text-sm">/100</span>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ delay: 1.5 }}
        className="font-display font-bold text-thauma-cyan text-lg tracking-wider mb-8"
      >
        ALINHAMENTO MUITO ALTO
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.8 }}
        className="space-y-3 max-w-xl"
      >
        {[
          "Concentração de 87% dos votos em Diamantina — sede da Santa Casa",
          "Presença em Capelinha — 7° município com mais pacientes atendidos",
          "Histórico do MDB em saúde: partido com tradição em pautas de saúde pública",
        ].map((t) => (
          <div key={t} className="flex items-start gap-3">
            <span className="text-thauma-cyan text-sm mt-0.5">✅</span>
            <p className="font-body text-primary-foreground/70 text-sm">{t}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Slide08SAT;
