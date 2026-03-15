import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../components/data/projects';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Building2, Target, Lightbulb, CheckCircle2, TrendingUp, Wrench, ArrowRight, BarChart3 } from 'lucide-react';

export default function ProjectDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="pt-32 pb-16 text-center min-h-screen">
        <h1 className="text-2xl font-bold">Project Not Found</h1>
        <Link to="/Projects">
          <Button className="mt-4">Back to Projects</Button>
        </Link>
      </div>
    );
  }

  const currentIndex = projects.findIndex(p => p.id === id);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="pt-24 pb-16 min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Back link */}
        <Link to="/Projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10">
          <ArrowLeft className="w-4 h-4" /> Back to Projects
        </Link>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="outline" className="text-accent border-accent/30 bg-accent/5">{project.domain}</Badge>
            <Badge variant="outline" className="border-border">{project.caseId}</Badge>
            <Badge variant="outline" className="border-border">{project.id}</Badge>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">{project.name}</h1>
          <div className="flex items-center gap-2 mt-4 text-muted-foreground">
            <Building2 className="w-4 h-4" />
            <span>{project.client}</span>
            <span className="mx-2">·</span>
            <span>{project.status}</span>
            {project.budget !== '—' && (
              <>
                <span className="mx-2">·</span>
                <span className="font-semibold text-foreground">{project.budget}</span>
              </>
            )}
          </div>
        </motion.div>

        <div className="mt-12 space-y-12">
          {/* Executive Summary */}
          <Section icon={Target} title="Executive Summary">
            <p className="text-muted-foreground leading-relaxed">{project.description}</p>
          </Section>

          {/* Problem Statement */}
          <Section icon={Lightbulb} title="Problem Statement">
            <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
          </Section>

          {/* Manager Requirement */}
          <Section icon={BarChart3} title="Manager Requirement">
            <p className="text-muted-foreground leading-relaxed">{project.managerRequirement}</p>
          </Section>

          {/* Solution Architecture */}
          <Section icon={Wrench} title="Solution Architecture">
            <p className="text-muted-foreground leading-relaxed">{project.solution}</p>

            {/* Flow diagram */}
            <div className="mt-6 p-6 rounded-xl bg-muted/50 border border-border">
              <p className="text-xs font-semibold tracking-widest text-accent uppercase mb-4">System Flow</p>
              <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
                {['Data Source', 'Data Processing', 'System Logic', 'Dashboard Output'].map((step, i) => (
                  <React.Fragment key={step}>
                    <div className="px-4 py-2 rounded-lg bg-primary/10 text-primary font-medium text-center">
                      {step}
                    </div>
                    {i < 3 && <ArrowRight className="w-4 h-4 text-muted-foreground hidden sm:block" />}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </Section>

          {/* Tools Used */}
          <Section icon={Wrench} title="Tools Used">
            <div className="flex flex-wrap gap-2">
              {project.tools.map(tool => (
                <Badge key={tool} variant="secondary" className="text-sm px-3 py-1">
                  {tool}
                </Badge>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-3">Deliverables: {project.dashboards}</p>
          </Section>

          {/* KPIs */}
          <Section icon={TrendingUp} title="Key Performance Indicators">
            <div className="grid sm:grid-cols-2 gap-4">
              {project.kpis.map((kpi, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-muted/50 border border-border">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">{kpi}</span>
                </div>
              ))}
            </div>
          </Section>

          {/* Value Delivered */}
          <Section icon={TrendingUp} title="Value Delivered">
            <p className="text-muted-foreground leading-relaxed">{project.value}</p>
          </Section>
        </div>

        {/* Next project */}
        <div className="mt-16 pt-10 border-t border-border">
          <Link to={`/ProjectDetail?id=${nextProject.id}`} className="group flex items-center justify-between p-6 rounded-2xl border border-border hover:border-primary/20 hover:shadow-md transition-all">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Next Project</p>
              <p className="font-semibold text-foreground group-hover:text-primary transition-colors">{nextProject.name}</p>
            </div>
            <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </Link>
        </div>
      </div>
    </div>
  );
}

function Section({ icon: Icon, title, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
          <Icon className="w-4 h-4 text-primary" />
        </div>
        <h2 className="text-xl font-semibold text-foreground">{title}</h2>
      </div>
      {children}
    </motion.div>
  );
}