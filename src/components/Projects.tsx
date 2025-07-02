import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Code, Shield, Brain, Globe, Database, Smartphone, Star, Clock, Filter, Eye } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  status: string;
  featured: boolean;
  features: string[];
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filters = [
    { id: 'all', label: 'All Projects', icon: Filter },
    { id: 'AI & Security', label: 'AI & Security', icon: Brain },
    { id: 'Web Development', label: 'Web Development', icon: Globe },
    { id: 'Cybersecurity', label: 'Cybersecurity', icon: Shield },
    { id: 'Web Application', label: 'Web Apps', icon: Database },
  ];

  const projects: Project[] = [
    {
      title: 'AI-Powered Security Monitor',
      description: 'An intelligent security monitoring system that uses machine learning to detect anomalies and potential threats in real-time. Features automated alert systems and comprehensive reporting.',
      technologies: ['Python', 'TensorFlow', 'Flask', 'SQLite'],
      category: 'AI & Security',
      icon: Shield,
      status: 'Functional Prototype',
      featured: true,
      features: [
        'Real-time threat detection',
        'Machine learning anomaly detection',
        'Automated alert system',
        'Comprehensive dashboard'
      ]
    },
    {
      title: 'Student Management System',
      description: 'A comprehensive web application for managing student records, grades, and academic progress. Built with modern web technologies and featuring a responsive design.',
      technologies: ['PHP', 'JavaScript', 'MySQL', 'HTML/CSS'],
      category: 'Web Development',
      icon: Database,
      status: 'In Development',
      featured: false,
      features: [
        'Student record management',
        'Grade tracking system',
        'Progress analytics',
        'Multi-user authentication'
      ]
    },
    {
      title: 'Cybersecurity Learning Platform',
      description: 'An interactive platform designed to teach cybersecurity concepts through hands-on exercises and simulations. Includes various security challenges and educational content.',
      technologies: ['Java', 'Spring Boot', 'React', 'PostgreSQL'],
      category: 'Education & Security',
      icon: Brain,
      status: 'Conceptual Design',
      featured: true,
      features: [
        'Interactive security challenges',
        'Progress tracking',
        'Educational content library',
        'Community features'
      ]
    },
    {
      title: 'Personal Finance Tracker',
      description: 'A mobile-responsive web application for tracking personal expenses, budgeting, and financial goal setting. Features data visualization and spending analytics.',
      technologies: ['JavaScript', 'Chart.js', 'Local Storage', 'CSS3'],
      category: 'Web Application',
      icon: Globe,
      status: 'Functional Prototype',
      featured: false,
      features: [
        'Expense tracking',
        'Budget management',
        'Data visualization',
        'Goal setting tools'
      ]
    },
    {
      title: 'Network Security Scanner',
      description: 'A Python-based tool for scanning network vulnerabilities and generating security reports. Designed to help identify potential security weaknesses in network infrastructure.',
      technologies: ['Python', 'Nmap', 'Scapy', 'Tkinter'],
      category: 'Cybersecurity',
      icon: Shield,
      status: 'Functional Prototype',
      featured: false,
      features: [
        'Network vulnerability scanning',
        'Automated report generation',
        'GUI interface',
        'Export capabilities'
      ]
    },
    {
      title: 'AI Chat Assistant',
      description: 'An intelligent chatbot application that uses natural language processing to provide helpful responses. Integrated with various APIs for enhanced functionality.',
      technologies: ['Python', 'NLTK', 'Flask', 'API Integration'],
      category: 'Artificial Intelligence',
      icon: Brain,
      status: 'In Development',
      featured: true,
      features: [
        'Natural language processing',
        'Context-aware responses',
        'API integrations',
        'Learning capabilities'
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Functional Prototype':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-800';
      case 'In Development':
        return 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800';
      case 'Conceptual Design':
        return 'bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-800';
      default:
        return 'bg-slate-100 text-slate-800 border-slate-200 dark:bg-slate-700 dark:text-slate-300 dark:border-slate-600';
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'AI & Security': 'bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-900/20 dark:text-purple-400 dark:border-purple-800',
      'Web Development': 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800',
      'Education & Security': 'bg-indigo-100 text-indigo-800 border-indigo-200 dark:bg-indigo-900/20 dark:text-indigo-400 dark:border-indigo-800',
      'Web Application': 'bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-800',
      'Cybersecurity': 'bg-red-100 text-red-800 border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800',
      'Artificial Intelligence': 'bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-900/20 dark:text-purple-400 dark:border-purple-800',
    };
    return colors[category as keyof typeof colors] || 'bg-slate-100 text-slate-800 border-slate-200 dark:bg-slate-700 dark:text-slate-300 dark:border-slate-600';
  };

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
            <span className="text-cyan-600 font-medium tracking-wider uppercase text-sm">Portfolio</span>
            <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            A showcase of my technical projects spanning web development, AI, and cybersecurity
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-600'
              }`}
            >
              <filter.icon className="h-4 w-4" />
              <span>{filter.label}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl shadow-lg">
                      <project.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(project.category)}`}>
                      {project.category}
                    </span>
                  </div>
                  {project.featured && (
                    <Star className="h-5 w-5 text-amber-500 fill-current" />
                  )}
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">{project.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">Key Features:</h4>
                  <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-xs font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                    <Clock className="h-3 w-3 inline mr-1" />
                    {project.status}
                  </span>
                  <div className="flex space-x-2">
                    <button className="p-2 text-slate-400 hover:text-cyan-600 transition-colors hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg">
                      <Github className="h-5 w-5" />
                    </button>
                    <button className="p-2 text-slate-400 hover:text-cyan-600 transition-colors hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg">
                      <ExternalLink className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900 p-8 rounded-2xl shadow-lg text-white">
            <h3 className="text-2xl font-bold mb-4">More Projects Coming Soon</h3>
            <p className="text-lg mb-6 max-w-3xl mx-auto text-slate-300">
              I'm constantly working on new projects and exploring innovative solutions. 
              Follow my GitHub for the latest updates and code repositories.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://github.com/Vini-boop"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors flex items-center space-x-2 shadow-lg"
              >
                <Github className="h-5 w-5" />
                <span>View GitHub Profile</span>
              </a>
              <a
                href="#contact"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Discuss a Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;