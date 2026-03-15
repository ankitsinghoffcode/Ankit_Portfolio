import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-24 bg-primary">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
            Interested in Learning More?
          </h2>
          <p className="mt-4 text-primary-foreground/70 text-lg leading-relaxed max-w-2xl mx-auto">
            Whether you're looking to discuss collaboration, explore system design possibilities, or learn more about these enterprise solutions — let's connect.
          </p>
          <Link to="/Contact">
            <Button size="lg" className="mt-8 bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-10 h-12 text-sm font-semibold tracking-wide">
              Get in Touch <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}