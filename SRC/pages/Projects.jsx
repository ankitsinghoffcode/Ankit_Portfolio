import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../components/data/projects';
import ProjectCard from '../components/projects/ProjectCard';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const domains = ['All', ...new Set(projects.map(p => p.domain))];

export default function Projects() {
  const [search, setSearch] = useState('');
  const [activeDomain, setActiveDomain] = useState('All');

  const filtered = projects.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.client.toLowerCase().includes(search.toLowerCase()) ||
      p.domain.toLowerCase().includes(search.toLowerCase());
    const matchesDomain = activeDomain === 'All' || p.domain === activeDomain;
    return matchesSearch && matchesDomain;
  });

  return (
    <div className="pt-24 pb-16 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <p className="text-xs font-semibold tracking-widest text-accent uppercase mb-3">Portfolio</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">All Projects</h1>
          <p className="mt-4 text-muted-foreground max-w-2xl text-lg">
            27 enterprise-grade systems delivering measurable business impact across multiple industries.
          </p>
        </motion.div>

        {/* Search & Filter */}
        <div className="mb-10 space-y-4">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search projects..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {domains.map(d => (
              <Badge
                key={d}
                variant={activeDomain === d ? 'default' : 'outline'}
                className={`cursor-pointer transition-all ${activeDomain === d ? 'bg-primary text-primary-foreground' : 'hover:border-primary/30'}`}
                onClick={() => setActiveDomain(d)}
              >
                {d}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">
            No projects match your search criteria.
          </div>
        )}
      </div>
    </div>
  );
}