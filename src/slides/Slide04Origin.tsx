import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

interface SlideProps {
  isActive: boolean;
}

const data = [
  { name: "Diamantina", value: 601, pct: "55,91%" },
  { name: "Datas", value: 65, pct: "6,05%" },
  { name: "Felício dos Santos", value: 59, pct: "5,49%" },
  { name: "Serro", value: 56, pct: "5,21%" },
  { name: "Sen. Modestino G.", value: 55, pct: "5,12%" },
  { name: "Gouveia", value: 49, pct: "4,56%" },
  { name: "Capelinha", value: 48, pct: "4,47%" },
  { name: "Conc. Mato Dentro", value: 48, pct: "4,47%" },
  { name: "Itamarandiba", value: 47, pct: "4,37%" },
  { name: "Turmalina", value: 47, pct: "4,37%" },
].reverse();

const Slide04Origin = ({ isActive }: SlideProps) => (
  <div className="w-full h-full bg-background flex flex-col items-center justify-center px-8">
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      animate={isActive ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2 text-center"
    >
      Dependência Regional: Top 10 Municípios de Origem
    </motion.h2>
    <motion.p
      initial={{ opacity: 0 }}
      animate={isActive ? { opacity: 1 } : {}}
      transition={{ delay: 0.2 }}
      className="text-muted-foreground text-sm mb-8 font-body"
    >
      Fonte: SIH/DATASUS — Período Jan-Jun/2025
    </motion.p>

    <motion.div
      initial={{ opacity: 0 }}
      animate={isActive ? { opacity: 1 } : {}}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="w-full max-w-4xl"
      style={{ height: 420 }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" margin={{ left: 120, right: 60, top: 10, bottom: 10 }}>
          <XAxis type="number" hide />
          <YAxis
            type="category"
            dataKey="name"
            tick={{ fill: "#001070", fontSize: 13, fontFamily: "'Helvetica Neue', sans-serif" }}
            width={110}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            formatter={(v: number, _name: string, entry: any) => [`${v} atendimentos (${entry.payload.pct})`, ""]}
            contentStyle={{ borderRadius: 8, border: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}
          />
          <Bar dataKey="value" radius={[0, 6, 6, 0]} barSize={24}>
            {data.map((entry, i) => (
              <Cell
                key={entry.name}
                fill={i === data.length - 1 ? "#001070" : `rgba(0,16,112,${0.3 + (i / data.length) * 0.5})`}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  </div>
);

export default Slide04Origin;
