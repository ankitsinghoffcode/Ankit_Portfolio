import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Cog, FileSpreadsheet, TrendingUp } from 'lucide-react';

const capabilities = [
  {
    icon: BarChart3,
    title: 'FP&A & Financial Modeling',
    desc: 'Budgeting, forecasting, variance analysis, DCF valuation, and treasury allocation modeling for strategic decision-making.'
  },
  {
    icon: Cog,
    title: 'Process Automation',
    desc: 'VBA, Power Automate, and Python-driven automation suites that eliminate 80%+ of manual reporting and repetitive tasks.'
  },
  {
    icon: FileSpreadsheet,
    title: 'ERP-Style Frameworks',
    desc: 'Enterprise Excel architectures covering HR, procurement, inventory, costing, and budgeting with modular design and Power BI integration.'
  },
  {
    icon: TrendingUp,
    title: 'Decision Intelligence',
    desc: 'KPI-driven dashboards, contract lifecycle intelligence, and early warning systems that convert data into actionable business insights.'
  }
];

export default function SummarySection() {
  return (
    <section className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-widest text-accent uppercase mb-3">What I Do</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Professional Expertise
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Specialized in converting manual finance processes into structured, modular, validation-controlled systems supporting leadership decision-making.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-6 rounded-2xl border border-border bg-background hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <cap.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{cap.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{cap.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}