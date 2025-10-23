import { Mail, MapPin, Github, Linkedin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "tollanberhanu@gmail.com",
      link: "mailto:tollanberhanu@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "(615) 668-3525",
      link: "tel:+16156683525"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Idaho Falls, ID, USA",
      link: "https://maps.app.goo.gl/?q=Idaho+Falls,+ID"
    }
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/tollanberhanu", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/tollanberhanu", label: "LinkedIn" }
  ];

  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-20">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project? Let's work together to create something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div 
            className={`space-y-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always excited to discuss new opportunities, creative projects, 
                or potential collaborations. Don't hesitate to reach out!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a 
                  key={index}
                  href={item.link}
                  className="flex items-center space-x-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors duration-200 group"
                >
                  <div className="text-primary group-hover:scale-110 transition-transform duration-200">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-medium">{item.title}</div>
                    <div className="text-muted-foreground">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-colors duration-200 group"
                    aria-label={social.label}
                  >
                    <div className="group-hover:scale-110 transition-transform duration-200">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div 
            className={`card-glow p-8 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    className="bg-muted/50 border-border/50 focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your@email.com" 
                    className="bg-muted/50 border-border/50 focus:border-primary"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input 
                  id="subject" 
                  placeholder="What's this about?" 
                  className="bg-muted/50 border-border/50 focus:border-primary"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Tell me about your project..." 
                  rows={5}
                  className="bg-muted/50 border-border/50 focus:border-primary resize-none"
                />
              </div>
              
              <Button type="submit" className="btn-hero w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;