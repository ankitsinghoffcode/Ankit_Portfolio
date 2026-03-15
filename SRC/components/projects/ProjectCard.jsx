import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Building2, Layers } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function ProjectCard({ project, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
    >
      <Link
        to={`/ProjectDetail?id=${project.id}`}
        className="group block h-full"
      >
        <div className="h-full p-6 rounded-2xl border border-border bg-card hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col">
          {/* Domain badge */}
          <div className="flex items-center justify-between mb-4">
            <Badge variant="outline" className="text-xs font-medium text-accent border-accent/30 bg-accent/5">
              {project.domain}
            </Badge>
            <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </div>

          {/* Title */}
          <h3 className="font-semibold text-foreground leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {project.name}
          </h3>

          {/* Client */}
          <div className="flex items-center gap-1.5 mb-3">
            <Building2 className="w-3.5 h-3.5 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">{project.client}</span>
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed flex-1 line-clamp-3 mb-4">
            {project.description}
          </p>

          {/* Tools */}
          <div className="flex flex-wrap gap-1.5 mt-auto">
            {project.tools.slice(0, 4).map(tool => (
              <span key={tool} className="text-xs px-2 py-0.5 rounded-md bg-muted text-muted-foreground">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}