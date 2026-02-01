import React, { useState } from 'react';
/**
 * Contact Section: form and social links
 */
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle, MessageSquare, Calendar, MessageCircle, Facebook } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      // REPLACE 'YOUR_FORM_ID_HERE' WITH YOUR ACTUAL FORMSPREE FORM ID
      const response = await fetch("https://formspree.io/f/xkozgpva", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setErrorMessage('Something went wrong. Please try again later.');
      }
    } catch (error) {
      setErrorMessage('Failed to send message. Please check your internet connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'vinmarmak21@gmail.com',
      href: 'mailto:vinmarmak21@gmail.com',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+254 114 492 024',
      href: 'tel:+254114492024',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+254 114 492 024',
      href: 'https://wa.me/254114492024',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Nakuru, Kenya',
      href: '#',
      color: 'from-purple-500 to-indigo-600'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/vincent-makori',
      color: 'hover:text-blue-600 hover:bg-blue-50'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Vini-boop',
      color: 'hover:text-slate-900 hover:bg-slate-50'
    },
    {
      icon: Facebook,
      label: 'Facebook • Vincent Makori (Brother)',
      href: 'https://web.facebook.com/profile.php?id=100080250319567',
      color: 'hover:text-slate-900 hover:bg-slate-50'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: 'https://wa.me/254114492024',
      color: 'hover:text-green-600 hover:bg-green-50'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
            <span className="text-cyan-600 font-medium tracking-wider uppercase text-sm">Get In Touch</span>
            <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to collaborate on exciting projects or discuss opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Get in Touch</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Whether you're looking for a passionate developer to join your team,
                want to collaborate on a project, or simply have questions about my work,
                I'm always open to meaningful conversations.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target={info.label === 'WhatsApp' ? '_blank' : undefined}
                  rel={info.label === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                  className="flex items-center space-x-4 p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-all duration-200 group hover:border-slate-300"
                >
                  <div className={`p-4 bg-gradient-to-r ${info.color} rounded-xl shadow-lg group-hover:scale-110 transition-transform`}>
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">{info.label}</p>
                    <p className="text-lg font-semibold text-slate-900 group-hover:text-cyan-600 transition-colors">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="pt-8 border-t border-slate-200">
              <h4 className="text-lg font-semibold text-slate-900 mb-6 flex items-center">
                <MessageSquare className="h-5 w-5 mr-2 text-cyan-600" />
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    referrerPolicy="no-referrer"
                    aria-label={social.label}
                    title={social.label}
                    className={`p-4 bg-slate-100 rounded-xl text-slate-600 ${social.color} transition-all duration-200 transform hover:scale-110 shadow-lg hover:shadow-xl`}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl text-white shadow-lg">
              <div className="flex items-center mb-4">
                <Calendar className="h-6 w-6 mr-3 text-cyan-400" />
                <h4 className="text-lg font-semibold">Available for Opportunities</h4>
              </div>
              <p className="text-slate-300 leading-relaxed">
                I'm currently seeking internship opportunities and entry-level positions
                in software development and cybersecurity. Let's discuss how I can contribute
                to your team's success.
              </p>
              <div className="mt-4 flex items-center space-x-2">
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-emerald-400 text-sm font-medium">Available immediately</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <Send className="h-6 w-6 mr-3 text-cyan-600" />
              Send a Message
            </h3>

            {isSubmitted && (
              <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-emerald-600" />
                <span className="text-emerald-800">Message sent successfully! I'll get back to you soon.</span>
              </div>
            )}

            {errorMessage && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2">
                <span className="text-red-800">{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors bg-white"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors bg-white"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors bg-white"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors resize-none bg-white"
                  placeholder="Tell me about your project"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-colors ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
