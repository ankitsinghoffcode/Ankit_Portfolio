import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide mb-8">
              <Briefcase className="w-3.5 h-3.5" />
              FINANCE & BUSINESS SYSTEMS AUTOMATION
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground tracking-tight">
              Designing Financial Systems & 
              <span className="text-primary"> Automation Tools</span> for Modern Businesses
            </h1>

            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
              4+ years building scalable ERP frameworks, FP&A models, contract intelligence platforms, and KPI-driven reporting ecosystems that transform manual processes into decision-ready systems.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/Projects">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-12 text-sm font-semibold tracking-wide">
                  View Projects <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/Contact">
                <Button size="lg" variant="outline" className="border-primary/20 text-primary hover:bg-primary/5 px-8 h-12 text-sm font-semibold tracking-wide">
                  Contact
                </Button>
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-8 text-sm text-muted-foreground">
              <div>
                <span className="text-2xl font-bold text-foreground block">27+</span>
                Projects Delivered
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <span className="text-2xl font-bold text-foreground block">$25M+</span>
                Value Created
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <span className="text-2xl font-bold text-foreground block">80%</span>
                Avg. Efficiency Gain
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-3xl rotate-6 opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-3xl flex items-center justify-center">
                <div className="text-center text-primary-foreground">
                  <div className="text-6xl font-bold">AS</div>
                  <div className="text-sm mt-2 tracking-widest opacity-70">ANKIT SINGH</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}