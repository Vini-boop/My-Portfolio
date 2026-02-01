import React, { useState, useEffect, useRef } from 'react';
/**
 * Skills Section: technical expertise grid
 */
import { Code, Database, Shield, Brain, Wrench, Users, Zap, Globe, Smartphone, Palette, Target } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
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

  const categories = [
    { id: 'all', label: 'All Skills', icon: Target },
    { id: 'frontend', label: 'Frontend', icon: Palette },
    { id: 'backend', label: 'Backend', icon: Database },
    { id: 'mobile', label: 'Mobile', icon: Smartphone },
    { id: 'cybersecurity', label: 'Security', icon: Shield },
    { id: 'tools', label: 'Tools', icon: Zap },
  ];

  const skills = [
    // Frontend Skills
    { name: 'React', level: 56, category: 'frontend', icon: '⚛️', color: 'from-blue-500 to-cyan-500' },
    { name: 'TypeScript', level: 65, category: 'frontend', icon: '📘', color: 'from-blue-600 to-blue-700' },
    { name: 'JavaScript', level: 72, category: 'frontend', icon: '🟨', color: 'from-yellow-400 to-yellow-500' },
    { name: 'HTML/CSS', level: 90, category: 'frontend', icon: '🎨', color: 'from-orange-500 to-red-500' },
    { name: 'Tailwind CSS', level: 79, category: 'frontend', icon: '💨', color: 'from-cyan-400 to-blue-500' },
    { name: 'Next.js', level: 74, category: 'frontend', icon: '⚡', color: 'from-black to-gray-800' },

    // Backend Skills
    { name: 'Node.js', level: 80, category: 'backend', icon: '🟢', color: 'from-green-500 to-green-600' },
    { name: 'Python', level: 85, category: 'backend', icon: '🐍', color: 'from-blue-500 to-yellow-500' },
    { name: 'Express.js', level: 75, category: 'backend', icon: '🚂', color: 'from-gray-600 to-gray-700' },
    { name: 'MongoDB', level: 70, category: 'backend', icon: '🍃', color: 'from-green-400 to-green-500' },
    { name: 'PostgreSQL', level: 65, category: 'backend', icon: '🐘', color: 'from-blue-400 to-blue-500' },
    { name: 'REST APIs', level: 70, category: 'backend', icon: '🔗', color: 'from-purple-500 to-purple-600' },

    // Mobile Skills
    { name: 'React Native', level: 60, category: 'mobile', icon: '📱', color: 'from-blue-500 to-cyan-500' },
    { name: 'Flutter', level: 45, category: 'mobile', icon: '🦋', color: 'from-blue-400 to-blue-500' },

    // Cybersecurity Skills
    { name: 'Network Security', level: 55, category: 'cybersecurity', icon: '🛡️', color: 'from-red-500 to-red-600' },
    { name: 'Penetration Testing', level: 40, category: 'cybersecurity', icon: '🔍', color: 'from-purple-500 to-purple-600' },
    { name: 'Ethical Hacking', level: 25, category: 'cybersecurity', icon: '⚔️', color: 'from-gray-700 to-gray-800' },
    { name: 'Security Tools', level: 40, category: 'cybersecurity', icon: '🛠️', color: 'from-orange-500 to-orange-600' },

    // Tools
    { name: 'Git/GitHub', level: 70, category: 'tools', icon: '📚', color: 'from-gray-700 to-gray-800' },
    { name: 'Docker', level: 45, category: 'tools', icon: '🐳', color: 'from-blue-500 to-blue-600' },
    { name: 'VS Code', level: 95, category: 'tools', icon: '💻', color: 'from-blue-500 to-purple-600' },
    { name: 'Figma', level: 60, category: 'tools', icon: '🎨', color: 'from-purple-500 to-pink-500' },
  ];

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
            <span className="text-cyan-600 font-medium tracking-wider uppercase text-sm">My Expertise</span>
            <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and expertise across various domains.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-200 ${activeCategory === category.id
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-600'
                }`}
            >
              <category.icon className="h-4 w-4" />
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className={`bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${isVisible ? 'animate-slide-up' : 'opacity-0'
                }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className={`p-3 bg-gradient-to-r ${skill.color} rounded-xl text-white text-xl`}>
                  {skill.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {skill.level}% Proficiency
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600 dark:text-slate-300">Beginner</span>
                  <span className="text-slate-600 dark:text-slate-300">Expert</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out ${isVisible ? 'animate-progress' : ''
                      }`}
                    style={{
                      '--progress-width': `${skill.level}%`,
                      width: isVisible ? `${skill.level}%` : '0%'
                    } as React.CSSProperties}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-2xl">
            <Code className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Frontend Development
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Creating responsive and interactive user interfaces with modern frameworks and tools.
            </p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl">
            <Database className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Backend Development
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Building robust server-side applications and APIs with scalable architectures.
            </p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-2xl">
            <Shield className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Cybersecurity
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Protecting digital assets and implementing security best practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;