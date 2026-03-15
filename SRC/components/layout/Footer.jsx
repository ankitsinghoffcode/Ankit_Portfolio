import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-lg font-bold tracking-tight mb-4">ANKIT SINGH</h3>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Finance & Business Systems Automation Professional. Building scalable financial systems, dashboards, and enterprise automation tools.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['Home','Projects','About','Resume','Contact'].map(l => (
                <Link key={l} to={`/${l}`} className="block text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {l}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Connect</h4>
            <div className="space-y-3">
              <a href="mailto:Ankit.singh.offcode@email.com" className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Mail className="w-4 h-4" /> Ankit.singh.offcode@email.com
              </a>
              <a href="tel:+916366238177" className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Phone className="w-4 h-4" /> +91-6366238177
              </a>
              <a href="https://www.linkedin.com/in/Brand-Ankit" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Linkedin className="w-4 h-4" /> LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="text-xs text-primary-foreground/50">© 2026 Ankit Singh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}