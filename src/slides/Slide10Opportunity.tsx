import { motion } from "framer-motion";

interface SlideProps {
  isActive: boolean;
}

const args = [
  {
    title: "Impacto Mensurável",
    text: "Uma emenda de R$ 2 milhões impacta diretamente 5.911 eleitores da sua base em Diamantina e Capelinha. ROI político: R$ 338 por eleitor alcançado.",
  },
  {
    title: "Visibilidade Regional",
    text: "A Santa Casa atende 74 municípios do Vale do Jequitinhonha — uma das regiões mais carentes de MG. Investimento aqui gera visibilidade em toda a macrorregião.",
  },
  {
    title: "Legado Institucional",
    text: "A Santa Casa de Caridade de Diamantina é patrimônio centenário. Investir na sua sustentabilidade é construir legado político duradouro.",
  },
];

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.2 } } };
const cardAnim = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const Slide10Opportunity = ({ isActive }: SlideProps) => (
  <div className="w-full h-full bg-thauma-deep flex flex-col items-center justify-center px-8">
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      animate={isActive ? { opacity: 1, y: 0 } : {}}
      className="font-display text-xl md:text-2xl font-bold text-primary-foreground mb-2 text-center max-w-3xl"
    >
      Dep. Hercílio: investir na Santa Casa de Diamantina é investir na sua base.
    </motion.h2>
    <motion.div
      initial={{ opacity: 0 }}
      animate={isActive ? { opacity: 1 } : {}}
      transition={{ delay: 0.2 }}
      className="w-16 h-px mx-auto mb-10"
      style={{ backgroundColor: "#40D7FF" }}
    />

    <motion.div
      variants={stagger}
      initial="hidden"
      animate={isActive ? "show" : "hidden"}
      className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full"
    >
      {args.map((a, i) => (
        <motion.div
          key={a.title}
          variants={cardAnim}
          className="bg-thauma-mid/30 border border-thauma-cyan/15 rounded-2xl p-8 hover:border-thauma-cyan/40 transition-all duration-300"
        >
          <span className="font-display text-thauma-cyan text-sm tracking-widest mb-4 block">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="font-display font-bold text-primary-foreground text-lg mb-4">{a.title}</h3>
          <p className="font-body text-primary-foreground/60 text-sm leading-relaxed">{a.text}</p>
        </motion.div>
      ))}
    </motion.div>
  </div>
);

export default Slide10Opportunity;
