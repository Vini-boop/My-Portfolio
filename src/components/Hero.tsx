import React, { useState, useEffect } from 'react';
import { ArrowDown, Download, Mail, Github, Linkedin, MessageCircle, Sparkles, Code, Shield, Brain } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentText, setCurrentText] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const roles = [
    'Full-Stack Developer',
    'Cybersecurity Specialist',
    'AI Enthusiast',
    'Problem Solver'
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setIsTyping(true);
    const timer = setTimeout(() => setIsTyping(false), 2000);
    return () => clearTimeout(timer);
  }, [currentText]);

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/Vini-boop',
      label: 'GitHub',
      color: 'hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/vincent-makori',
      label: 'LinkedIn',
      color: 'hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20'
    },
    {
      icon: MessageCircle,
      href: 'https://wa.me/254114492024',
      label: 'WhatsApp',
      color: 'hover:text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20'
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden pt-32">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-emerald-400/10 to-teal-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mb-8 mt-8 flex justify-center">
            <div className="relative">
              <img
                src="/src/assets/HGASFJV.png"
                alt="Vincent Makori"
                className="w-auto h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl object-contain object-center"
                style={{ display: 'block', margin: '0 auto' }}
              />
              <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-emerald-500 rounded-full flex items-center justify-center animate-pulse">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 bg-white rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 dark:text-white mb-4 md:mb-6 leading-tight px-4">
              Hi, I'm{' '}
              <span className="gradient-text">Vincent Makori</span>
            </h1>
            
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-600 dark:text-slate-300 mb-6 md:mb-8 h-8 md:h-12 flex items-center justify-center px-4">
              <span className="mr-2">I'm a</span>
              <span className="gradient-text font-semibold min-w-[200px] sm:min-w-[250px] md:min-w-[300px]">
                {isTyping ? (
                  <span className="border-r-2 border-cyan-500 animate-pulse">
                    {roles[currentText]}
                  </span>
                ) : (
                  roles[currentText]
                )}
              </span>
            </div>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto mb-8 md:mb-12 leading-relaxed px-4">
              Passionate about creating innovative solutions that bridge the gap between 
              technology and security. Specializing in full-stack development, cybersecurity, 
              and artificial intelligence.
            </p>

            {/* Skills Pills */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12 px-4">
              {[
                { icon: Code, label: 'Full-Stack', color: 'from-blue-500 to-cyan-500' },
                { icon: Shield, label: 'Cybersecurity', color: 'from-red-500 to-orange-500' },
                { icon: Brain, label: 'AI/ML', color: 'from-purple-500 to-pink-500' },
                { icon: Sparkles, label: 'Innovation', color: 'from-emerald-500 to-teal-500' }
              ].map((skill, index) => (
                <div
                  key={skill.label}
                  className={`flex items-center space-x-1 md:space-x-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-gradient-to-r ${skill.color} text-white text-xs md:text-sm font-medium shadow-lg`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <skill.icon className="h-3 w-3 md:h-4 md:w-4" />
                  <span>{skill.label}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-8 md:mb-12 px-4">
              <a
                href="#contact"
                className="button-primary flex items-center space-x-2 text-sm md:text-base px-4 md:px-6 py-2 md:py-3"
              >
                <Mail className="h-4 w-4 md:h-5 md:w-5" />
                <span>Get In Touch</span>
              </a>
              <a
                href="#projects"
                className="button-secondary flex items-center space-x-2 text-sm md:text-base px-4 md:px-6 py-2 md:py-3"
              >
                <span>View My Work</span>
                <ArrowDown className="h-4 w-4 md:h-5 md:w-5" />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-3 md:space-x-4 mb-6 md:mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 md:p-3 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-600 dark:text-slate-300 ${social.color} transition-all duration-200 transform hover:scale-110 shadow-lg hover:shadow-xl`}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 md:h-6 md:w-6" />
                </a>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8 max-w-lg md:max-w-2xl mx-auto px-4">
              {[
                { number: '3+', label: 'Years Experience' },
                { number: '20+', label: 'Projects Completed' },
                { number: '15+', label: 'Technologies' },
                { number: '100%', label: 'Client Satisfaction' }
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold gradient-text mb-1 md:mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-5 w-5 md:h-6 md:w-6 text-slate-400 dark:text-slate-500" />
      </div>
    </section>
  );
};

export default Hero;