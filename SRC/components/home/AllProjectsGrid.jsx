import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from '../projects/ProjectCard';

export default function AllProjectsGrid() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-xs font-semibold tracking-widest text-accent uppercase mb-3">Complete Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">All Projects</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            27 enterprise-grade systems spanning finance, operations, HR, healthcare, energy, and more.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}