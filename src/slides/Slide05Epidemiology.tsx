import { motion } from "framer-motion";
import { Activity, Heart, Brain, Shield, Droplets, AlertTriangle, Bug, Wind, Bone, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface SlideProps {
  isActive: boolean;
}

const cids: { icon: LucideIcon; name: string; code: string; cases: number; pct: string }[] = [
  { icon: Brain, name: "AVC", code: "I64", cases: 94, pct: "20,4%" },
  { icon: Heart, name: "Infarto agudo do miocárdio", code: "I219", cases: 68, pct: "14,8%" },
  { icon: Activity, name: "Insuficiência cardíaca", code: "I509", cases: 46, pct: "10,0%" },
  { icon: AlertTriangle, name: "Traumatismo intracraniano", code: "S069", cases: 44, pct: "9,6%" },
  { icon: Droplets, name: "Infecção urinária", code: "N390", cases: 42, pct: "9,1%" },
  { icon: Zap, name: "Angina instável", code: "I200", cases: 37, pct: "8,0%" },
  { icon: Bug, name: "Septicemia", code: "A419", cases: 34, pct: "7,4%" },
  { icon: Shield, name: "Insuf. cardíaca congestiva", code: "I500", cases: 34, pct: "7,4%" },
  { icon: Wind, name: "Pneumonia", code: "J189", cases: 31, pct: "6,7%" },
  { icon: Bone, name: "Outros traum. intracranianos", code: "S068", cases: 30, pct: "6,5%" },
];

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };
const item = { hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0, transition: { duration: 0.3 } } };

const Slide05Epidemiology = ({ isActive }: SlideProps) => (
  <div className="w-full h-full bg-background flex flex-col items-center justify-center px-8 py-12 overflow-y-auto">
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      animate={isActive ? { opacity: 1, y: 0 } : {}}
      className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 text-center"
    >
      Perfil Epidemiológico — Top 10 CIDs
    </motion.h2>

    <motion.div
      variants={stagger}
      initial="hidden"
      animate={isActive ? "show" : "hidden"}
      className="max-w-3xl w-full space-y-2 mb-8"
    >
      {cids.map((c, i) => {
        const Icon = c.icon;
        return (
          <motion.div
            key={c.code}
            variants={item}
            className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted transition-colors"
          >
            <span className="font-display text-sm text-muted-foreground w-6 text-right">{i + 1}.</span>
            <div className="w-8 h-8 rounded-full bg-thauma-deep flex items-center justify-center flex-shrink-0">
              <Icon size={16} color="#40D7FF" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="font-display text-sm font-semibold text-foreground">{c.name}</span>
              <span className="text-muted-foreground text-xs ml-2 font-body">({c.code})</span>
            </div>
            <span className="font-display font-bold text-thauma-deep text-lg">{c.cases}</span>
            <span className="text-muted-foreground text-sm font-body w-14 text-right">{c.pct}</span>
          </motion.div>
        );
      })}
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isActive ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.8 }}
      className="max-w-3xl w-full rounded-xl p-5 border-l-4 border-thauma-cyan"
      style={{ backgroundColor: "rgba(64,215,255,0.08)" }}
    >
      <p className="font-body text-sm text-foreground leading-relaxed">
        <span className="font-display font-bold text-thauma-deep">⚡ 45,2% das internações são emergências cardiovasculares e neurológicas</span>{" "}
        (AVC, infarto, angina, insuficiência cardíaca). São vidas que dependem de atendimento imediato — cada minuto conta.
        Sem a Santa Casa, essas vidas seriam perdidas no deslocamento até a capital.
      </p>
    </motion.div>
  </div>
);

export default Slide05Epidemiology;
