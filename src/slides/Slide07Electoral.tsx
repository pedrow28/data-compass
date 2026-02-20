import { motion } from "framer-motion";
import CountUp from "@/components/CountUp";
import deputadoImg from "@/assets/deputado.jpg";

interface SlideProps {
  isActive: boolean;
}

const tableData = [
  { mun: "Diamantina", votos: "5.159", pacientes: "601" },
  { mun: "Capelinha", votos: "752", pacientes: "48" },
  { mun: "TOTAL", votos: "5.911", pacientes: "649" },
];

const Slide07Electoral = ({ isActive }: SlideProps) => (
  <div className="w-full h-full bg-background flex flex-col items-center justify-center px-8 py-10 overflow-y-auto" style={{ borderTop: "4px solid #40D7FF" }}>
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      animate={isActive ? { opacity: 1, y: 0 } : {}}
      className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2 text-center"
    >
      Deputado Hercílio: a Santa Casa atende quem vota no senhor.
    </motion.h2>
    <motion.p
      initial={{ opacity: 0 }}
      animate={isActive ? { opacity: 1 } : {}}
      transition={{ delay: 0.2 }}
      className="text-muted-foreground text-sm mb-8 font-body"
    >
      Cruzamento DATASUS × TSE — Eleições 2022
    </motion.p>

    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isActive ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="bg-thauma-deep rounded-2xl p-8 max-w-3xl w-full mb-8"
    >
      <div className="flex items-center gap-6 mb-6">
        <img src={deputadoImg} alt="Dep. Hercílio" className="w-20 h-20 rounded-full object-cover border-2 border-thauma-cyan" />
        <div>
          <p className="font-display font-bold text-primary-foreground text-lg">DEPUTADO FEDERAL HERCÍLIO COELHO DINIZ</p>
          <p className="text-thauma-cyan font-display text-sm">Partido: MDB &nbsp;|&nbsp; Número: 1515</p>
        </div>
      </div>

      <div className="overflow-hidden rounded-lg">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-thauma-mid/60">
              <th className="text-left p-3 font-display text-primary-foreground/70">Município</th>
              <th className="text-right p-3 font-display text-primary-foreground/70">Votos</th>
              <th className="text-right p-3 font-display text-primary-foreground/70">Pacientes</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((r) => (
              <tr key={r.mun} className={`border-t border-thauma-cyan/10 ${r.mun === "TOTAL" ? "bg-thauma-mid/30 font-bold" : ""}`}>
                <td className="p-3 text-primary-foreground font-display">{r.mun}</td>
                <td className="p-3 text-primary-foreground text-right font-display">{r.votos}</td>
                <td className="p-3 text-thauma-cyan text-right font-display">{r.pacientes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isActive ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.7 }}
      className="text-center"
    >
      <div className="text-thauma-cyan font-display font-bold text-5xl md:text-6xl mb-2">
        <CountUp end={5911} isActive={isActive} />
      </div>
      <p className="font-body text-foreground/70 text-sm max-w-lg mx-auto">
        eleitores do Dep. Hercílio são atendidos pela região de cobertura desta Santa Casa.
      </p>
      <p className="font-body text-muted-foreground text-xs mt-4 italic">
        Somente nos 2 municípios com presença eleitoral direta. A área de influência alcança 74 municípios.
      </p>
    </motion.div>
  </div>
);

export default Slide07Electoral;
