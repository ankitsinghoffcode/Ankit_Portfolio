import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Briefcase, GraduationCap, Target, TrendingUp } from 'lucide-react';

const milestones = [
  { year: '2019', label: 'B.Tech in Mechanical Engineering', sub: 'Lovely Professional University' },
  { year: '2022', label: 'Associate, Finance Operations', sub: 'SRC Infrastructure' },
  { year: '2023', label: 'MBA – Finance & Marketing', sub: 'Mangalayatan University' },
  { year: '2025', label: 'Executive, FP&A & Automation Analytics', sub: 'Infinite Computer Solutions' },
];

const flagships = [
  'Organization & Director Ownership Management System',
  'CODEX – Project Lifecycle Management System',
  'Contract Lifecycle Intelligence Platform',
  'Mini ERP – Manufacturing & Construction Operations',
  'Inventory Intelligence System',
  'Automated Audit & Reporting Engine',
  'Intercompany Balances Dashboard',
  'Hybrid Cloud TCO Make-vs-Buy Model',
];

export default function About() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
          <p className="text-xs font-semibold tracking-widest text-accent uppercase mb-3">About</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">Ankit Singh</h1>
          <p className="mt-2 text-lg text-muted-foreground">Finance & Business Systems Automation Professional</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-16">
          {/* Left: portrait placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <div className="text-center text-primary-foreground">
                <div className="text-7xl font-bold">AS</div>
                <div className="text-sm tracking-widest opacity-70 mt-2">ANKIT SINGH</div>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <Briefcase className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">Based in Bangalore, India</span>
              </div>
              <div className="flex items-center gap-3">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">4+ Years Experience</span>
              </div>
              <div className="flex items-center gap-3">
                <Target className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">27+ Projects Delivered</span>
              </div>
            </div>
          </motion.div>

          {/* Right: content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 space-y-10"
          >
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">Professional Journey</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm a Finance and Business Systems Automation professional with over 4 years of experience designing and owning scalable financial, operational, and decision-support systems. My work spans ERP-style frameworks, process improvement, automation tools, FP&A analysis, contract lifecycle intelligence platforms, treasury allocation models, and KPI-driven reporting ecosystems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in converting manual finance processes into structured, modular, validation-controlled systems that support leadership decision-making. From managing ₹574+ Cr infrastructure portfolios to architecting 30+ automated dashboards supporting 50+ stakeholders across UK and India — I build systems that deliver measurable business impact.
              </p>
            </div>

            {/* Timeline */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-6">Career Timeline</h2>
              <div className="space-y-6">
                {milestones.map((m, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-primary" />
                      {i < milestones.length - 1 && <div className="w-px h-full bg-border flex-1" />}
                    </div>
                    <div className="pb-6">
                      <span className="text-xs font-semibold text-accent">{m.year}</span>
                      <h3 className="font-medium text-foreground">{m.label}</h3>
                      <p className="text-sm text-muted-foreground">{m.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Flagship systems */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                In-Use Flagship Systems
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {flagships.map((f, i) => (
                  <div key={i} className="flex items-start gap-2 p-3 rounded-lg bg-muted/50 border border-border">
                    <div className="w-5 h-5 rounded bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary">{i + 1}</span>
                    </div>
                    <span className="text-sm text-foreground">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}