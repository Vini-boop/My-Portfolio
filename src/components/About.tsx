import React from 'react';
/**
 * About Section: educational background and bio
 */
import { GraduationCap, MapPin, Target, Heart, Award, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
            <span className="text-cyan-600 font-medium tracking-wider uppercase text-sm">About Me</span>
            <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            My Journey in Technology
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A passionate computer science student on a mission to make a meaningful impact in technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl mr-4">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Educational Journey</h3>
              </div>
              <div className="space-y-6">
                <div className="relative pl-6 border-l-4 border-gradient-to-b from-cyan-500 to-blue-600">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-cyan-500 rounded-full"></div>
                  <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-900 flex items-center">
                      <Award className="h-4 w-4 mr-2 text-cyan-600" />
                      Bachelor of Science (Computer Science)
                    </h4>
                    <p className="text-slate-600 flex items-center mt-1">
                      <Calendar className="h-4 w-4 mr-2" />
                      Laikipia University • Final Year • 2022-2026
                    </p>
                  </div>
                </div>
                <div className="relative pl-6 border-l-4 border-slate-300">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-slate-400 rounded-full"></div>
                  <h4 className="font-semibold text-slate-900">Secondary Education</h4>
                  <p className="text-slate-600">Nyamesocho Secondary School • 2017-2022</p>
                </div>
                <div className="relative pl-6 border-l-4 border-slate-300">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-slate-400 rounded-full"></div>
                  <h4 className="font-semibold text-slate-900">Primary Education</h4>
                  <p className="text-slate-600">Langata Road Primary, Eramani Complex Academy • 2009- 2016</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl mr-4">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Background</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Growing up in Kisii County, I was drawn to the problem-solving power of technology.
                This early fascination led me to pursue computer science, where I've developed expertise
                in multiple programming languages and discovered my passion for cybersecurity.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-rose-500 to-pink-600 rounded-xl mr-4">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Passion & Motivation</h3>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                I'm passionate about leveraging technology to solve real-world problems. My interests span
                across software development, artificial intelligence, and cybersecurity. I believe in the
                power of code to create positive change and am constantly learning new technologies to
                stay at the forefront of innovation.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Currently, I'm actively involved in AI tools monitoring and exploring the intersection
                of artificial intelligence and cybersecurity, preparing myself for the evolving tech landscape.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl shadow-lg text-white">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl mr-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Future Aspirations</h3>
              </div>
              <p className="leading-relaxed mb-6 text-slate-300">
                My long-term goal is to become a cybersecurity professional, combining my software
                development skills with deep security expertise to protect digital assets and privacy.
              </p>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <p className="font-semibold text-cyan-400 mb-3">Next Steps:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-sm text-slate-300">Complete CS degree</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-sm text-slate-300">Security certifications</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className="text-sm text-slate-300">Hands-on experience</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-sm text-slate-300">Open-source projects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;