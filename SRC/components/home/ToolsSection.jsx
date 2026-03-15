import React from 'react';
import { motion } from 'framer-motion';
import { FileSpreadsheet, Database, BarChart3, Code2, Workflow, GitBranch, Monitor, Layers, Terminal } from 'lucide-react';

const tools = [
  { name: 'Advanced Excel', icon: FileSpreadsheet },
  { name: 'SQL', icon: Database },
  { name: 'Power BI', icon: BarChart3 },
  { name: 'Python', icon: Code2 },
  { name: 'Power Automate', icon: Workflow },
  { name: 'GitHub', icon: GitBranch },
  { name: 'SAP S/4HANA', icon: Layers },
  { name: 'VBA', icon: Terminal },
  { name: 'Power Query', icon: Monitor },
];

export default function ToolsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-widest text-accent uppercase mb-3">Technology Stack</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Tools & Technologies</h2>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-6">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex flex-col items-center gap-3 p-4 rounded-xl border border-border bg-card hover:shadow-md hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                <tool.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xs font-medium text-muted-foreground text-center">{tool.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}