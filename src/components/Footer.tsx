import React from 'react';
import { Heart, Code, Shield, Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '#about', label: 'About Me' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const focusAreas = [
    { icon: Code, label: 'Software Development', color: 'text-cyan-400' },
    { icon: Shield, label: 'Cybersecurity', color: 'text-emerald-400' },
    { icon: Heart, label: 'Artificial Intelligence', color: 'text-purple-400' },
  ];

  const contactInfo = [
    { icon: Mail, label: 'vinmarmak21@gmail.com', href: 'mailto:vinmarmak21@gmail.com' },
    { icon: Phone, label: '+254 114 492 024', href: 'tel:+254114492024' },
    { icon: MapPin, label: 'Laikipia University, Kenya', href: '#' },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex flex-col items-center justify-center mt-6 mb-4">
              <div className="bg-white p-2 rounded-2xl shadow-lg flex items-center justify-center mb-2">
                <img
                  src={`${import.meta.env.BASE_URL}logo.png`}
                  alt="Vincent Makori Logo"
                  className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 transition-all duration-300 mx-auto rounded-full"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                />
              </div>
              <span className="text-2xl font-bold">Vincent Makori</span>
              <p className="text-slate-400 text-sm">Software Developer & Cybersecurity Enthusiast</p>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6 max-w-md">
              Final Year Computer Science Student passionate about building innovative
              software solutions and pursuing a career in cybersecurity. Always ready
              to tackle new challenges and learn cutting-edge technologies.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/vincent-makori"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-400 hover:text-cyan-400 transition-all duration-200 group"
              >
                <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://github.com/Vini-boop"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-400 hover:text-cyan-400 transition-all duration-200 group"
              >
                <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="mailto:vinmarmak21@gmail.com"
                className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-400 hover:text-cyan-400 transition-all duration-200 group"
              >
                <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 transition-colors duration-200 flex items-center group"
                  >
                    <ExternalLink className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Get In Touch</h3>
            <ul className="space-y-4">
              {contactInfo.map((contact, index) => (
                <li key={index}>
                  <a
                    href={contact.href}
                    className="flex items-center space-x-3 text-slate-400 hover:text-cyan-400 transition-colors duration-200 group"
                  >
                    <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-slate-700 transition-colors">
                      <contact.icon className="h-4 w-4" />
                    </div>
                    <span className="text-sm">{contact.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Focus Areas Section */}
        <div className="py-8 border-t border-slate-800">
          <h3 className="text-lg font-semibold mb-6 text-center text-white">Areas of Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {focusAreas.map((area, index) => (
              <div key={index} className="flex items-center justify-center space-x-3 p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:bg-slate-800 transition-colors">
                <area.icon className={`h-5 w-5 ${area.color}`} />
                <span className="text-slate-300 font-medium">{area.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-slate-400">
              <span>© {currentYear} Vincent Makori. Made with</span>

              <span> Simbariu Tech Limited</span>

              <span>in Kenya</span>
            </div>
            <div className="flex items-center space-x-4 text-slate-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-sm">Available for opportunities</span>
              </div>
              <span className="text-slate-600">•</span>
              <span className="text-sm">Laikipia University</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;