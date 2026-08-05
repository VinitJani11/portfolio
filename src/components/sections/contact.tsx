import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:Vinitjani1512@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <motion.div 
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-16 flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full mb-6"></div>
            <p className="text-muted-foreground max-w-2xl text-lg">
              Whether you're looking for a Data Analyst, Business Analyst, or just want to chat about data, I'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 bg-background border border-border rounded-3xl overflow-hidden shadow-sm">
            {/* Contact Info */}
            <div className="lg:col-span-2 bg-primary p-10 text-primary-foreground flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-serif font-bold mb-2">Contact Information</h3>
                <p className="text-primary-foreground/80 mb-10">
                  Fill out the form and I will get back to you within 24 hours.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 mt-1 text-primary-foreground/80" />
                    <div>
                      <p className="text-sm font-medium text-primary-foreground/80 mb-1">Email</p>
                      <a href="mailto:Vinitjani1512@gmail.com" className="text-lg hover:underline">
                        Vinitjani1512@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 mt-1 text-primary-foreground/80" />
                    <div>
                      <p className="text-sm font-medium text-primary-foreground/80 mb-1">Phone</p>
                      <a href="tel:07721812382" className="text-lg hover:underline">
                        07721812382
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 mt-1 text-primary-foreground/80" />
                    <div>
                      <p className="text-sm font-medium text-primary-foreground/80 mb-1">Location</p>
                      <p className="text-lg">London, UK</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3 p-10 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Your Name
                  </label>
                  <Input 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="bg-card/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Your Email
                  </label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="bg-card/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <Textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    required
                    className="min-h-[150px] resize-y bg-card/50"
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full sm:w-auto rounded-full px-8 gap-2">
                  Send Message
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
