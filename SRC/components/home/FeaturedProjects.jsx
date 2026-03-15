import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { featuredProjects } from '../data/projects';
import ProjectCard from '../projects/ProjectCard';

export default function FeaturedProjects() {
  return (
    <section className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12"
        >
          <div>
            <p className="text-xs font-semibold tracking-widest text-accent uppercase mb-3">Portfolio</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Featured Projects</h2>
            <p className="mt-3 text-muted-foreground max-w-xl">Enterprise-grade systems delivering measurable business impact across finance, operations, and automation.</p>
          </div>
          <Link to="/Projects" className="mt-6 md:mt-0">
            <Button variant="outline" className="border-primary/20 text-primary hover:bg-primary/5">
              View All Projects <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}