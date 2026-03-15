import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, Linkedin, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success('Message sent! Ankit will get back to you soon.');
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <p className="text-xs font-semibold tracking-widest text-accent uppercase mb-3">Contact</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">Get in Touch</h1>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl">
            Interested in discussing collaboration, system design, or enterprise automation? Let's connect.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-3"
          >
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="you@company.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" placeholder="Your company" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Tell me about your project or inquiry..." rows={6} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} required />
                </div>
                <Button type="submit" size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                  <Send className="w-4 h-4 mr-2" /> Send Message
                </Button>
              </form>
            ) : (
              <div className="text-center py-16 space-y-4">
                <CheckCircle2 className="w-16 h-16 text-accent mx-auto" />
                <h3 className="text-2xl font-bold text-foreground">Message Sent!</h3>
                <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you shortly.</p>
                <Button variant="outline" onClick={() => { setSubmitted(false); setForm({ name: '', email: '', company: '', message: '' }); }}>
                  Send Another Message
                </Button>
              </div>
            )}

            {/* Google Forms embed placeholder */}
            <div className="mt-12 p-8 rounded-2xl border-2 border-dashed border-border text-center">
              <p className="text-sm text-muted-foreground">
                Google Form can be embedded here for alternative submissions.
              </p>
            </div>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="p-8 rounded-2xl bg-card border border-border space-y-6">
              <h3 className="font-semibold text-foreground">Contact Information</h3>
              
              <ContactItem icon={Mail} label="Email" value="Ankit.singh.offcode@email.com" href="mailto:Ankit.singh.offcode@email.com" />
              <ContactItem icon={Phone} label="Phone" value="+91-6366238177" href="tel:+916366238177" />
              <ContactItem icon={Linkedin} label="LinkedIn" value="linkedin.com/in/Brand-Ankit" href="https://www.linkedin.com/in/Brand-Ankit" />
              <ContactItem icon={MapPin} label="Location" value="Bangalore, India" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function ContactItem({ icon: Icon, label, value, href }) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
        <Icon className="w-4 h-4 text-primary" />
      </div>
      <div>
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="text-sm font-medium text-foreground">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">{content}</a>;
  }
  return content;
}