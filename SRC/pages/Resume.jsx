import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, Briefcase, GraduationCap, Award, Code2 } from 'lucide-react';

const RESUME_URL = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_69b53917485e4b3eedeb1747/3861c8a5b_AnkitSinghResume.pdf';

export default function Resume() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-widest text-accent uppercase mb-3">Resume</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Ankit Singh</h1>
            <p className="mt-2 text-muted-foreground">Finance & Business Systems Automation Professional</p>
          </div>
          <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Download className="w-4 h-4 mr-2" /> Download Resume
            </Button>
          </a>
        </motion.div>

        <div className="space-y-12">
          {/* Summary */}
          <ResumeSection icon={Briefcase} title="Professional Summary">
            <p className="text-muted-foreground leading-relaxed">
              Finance and Business Systems Automation professional with 4+ years of experience designing and owning scalable financial, operational, and decision-support systems. Specialized in ERP-style frameworks, process improvement, automation tools, FP&A analysis, contract lifecycle intelligence platforms, treasury allocation models, and KPI-driven reporting ecosystems. Proven ability to convert manual finance processes into structured, modular, validation-controlled systems supporting leadership decision-making.
            </p>
          </ResumeSection>

          {/* Experience */}
          <ResumeSection icon={Briefcase} title="Professional Experience">
            <div className="space-y-8">
              <ExperienceItem
                role="Executive, FP&A & Automation Analytics"
                company="Infinite Computer Solutions"
                period="Sep 2025 – Present"
                bullets={[
                  'Architected finance analytics ecosystem with 30+ automated dashboards supporting 50+ stakeholders across UK and India.',
                  'Built Contract Lifecycle Intelligence Platform covering 135+ active contracts with expiry classification (0–60 / 60–90 / 90+ days), vendor KPI tracking, and renewal risk visibility.',
                  'Enabled multi-million-dollar cost visibility and avoidance through proactive contract governance and structured decision frameworks.',
                  'Developed enterprise consumption analytics engine processing 143K+ transaction line items enabling 100% spend transparency.',
                  'Reduced reporting timeline from 4 months to 12 days via validation-driven automation architecture.',
                  'Standardized SAP-to-Power BI reporting pipelines with data validation controls and reusable templates.',
                  'Trained 30+ users on dashboard adoption and interpretation.',
                ]}
              />
              <ExperienceItem
                role="Associate, Finance Operations"
                company="SRC Infrastructure"
                period="Jul 2022 – Sep 2025"
                bullets={[
                  'Managed finance operations for ₹574+ Cr infrastructure portfolio across 35+ active sites using SAP S/4HANA.',
                  'Designed mini-ERP-style modular systems integrating procurement, GRN, inventory tracking, and reconciliation.',
                  'Reduced reconciliation cycle time by 60% through automation templates and structured validation workflows.',
                  'Developed FP&A models supporting budgeting, forecasting, costing, and multi-location variance analysis.',
                  'Contributed to SAP S/4HANA implementation including master data structuring and reporting workflow design.',
                ]}
              />
            </div>
          </ResumeSection>

          {/* Skills */}
          <ResumeSection icon={Code2} title="Core Competencies">
            <div className="grid sm:grid-cols-2 gap-6">
              <SkillGroup title="Finance & FP&A" skills={['Budgeting', 'Costing', 'Forecasting', 'Variance Analysis', 'Run-Rate Analytics', 'Cost Optimization', 'Scenario & Sensitivity Analysis', 'Treasury Allocation Modeling']} />
              <SkillGroup title="Systems Architecture" skills={['ERP-style Frameworks', 'Project Lifecycle Systems (CODEX)', 'Contract Intelligence', 'Ownership Structuring', 'Automated Financial Reporting', 'Material Management']} />
              <SkillGroup title="Data & Analytics" skills={['SQL', 'Power BI (Data Modeling)', 'Advanced Excel (Modular Architecture)', 'Power Query', 'VBA Automation']} />
              <SkillGroup title="Enterprise Tools" skills={['SAP S/4HANA (PP, MM, PM)', 'SAP Concur', 'Jira', 'SharePoint']} />
            </div>
          </ResumeSection>

          {/* Education */}
          <ResumeSection icon={GraduationCap} title="Education">
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-muted/50 border border-border">
                <h4 className="font-semibold text-foreground">MBA – Finance & Marketing</h4>
                <p className="text-sm text-muted-foreground">Mangalayatan University · 2021 – 2023</p>
              </div>
              <div className="p-4 rounded-xl bg-muted/50 border border-border">
                <h4 className="font-semibold text-foreground">B.Tech – Mechanical Engineering</h4>
                <p className="text-sm text-muted-foreground">Lovely Professional University · 2015 – 2019</p>
              </div>
            </div>
          </ResumeSection>

          {/* Certifications */}
          <ResumeSection icon={Award} title="Certifications (Planned)">
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium">Microsoft Power BI Data Analyst (PL-300)</span>
              <span className="px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium">Oracle SQL Certified Associate</span>
            </div>
          </ResumeSection>
        </div>
      </div>
    </div>
  );
}

function ResumeSection({ icon: Icon, title, children }) {
  return (
    <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <div className="flex items-center gap-3 mb-5">
        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
          <Icon className="w-4 h-4 text-primary" />
        </div>
        <h2 className="text-xl font-semibold text-foreground">{title}</h2>
      </div>
      {children}
    </motion.div>
  );
}

function ExperienceItem({ role, company, period, bullets }) {
  return (
    <div className="border-l-2 border-primary/20 pl-6">
      <h3 className="font-semibold text-foreground">{role}</h3>
      <p className="text-sm text-accent font-medium">{company}</p>
      <p className="text-xs text-muted-foreground mb-3">{period}</p>
      <ul className="space-y-2">
        {bullets.map((b, i) => (
          <li key={i} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
            <span className="text-primary mt-1.5">•</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SkillGroup({ title, skills }) {
  return (
    <div>
      <h4 className="font-medium text-foreground text-sm mb-2">{title}</h4>
      <div className="flex flex-wrap gap-1.5">
        {skills.map(s => (
          <span key={s} className="text-xs px-2.5 py-1 rounded-md bg-muted text-muted-foreground">{s}</span>
        ))}
      </div>
    </div>
  );
}