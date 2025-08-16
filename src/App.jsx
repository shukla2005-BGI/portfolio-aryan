
import './App.css'

import React, { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, Github, MapPin, Award, Briefcase, GraduationCap, Code, Star, CheckCircle } from 'lucide-react';

// Main App Component - Your Portfolio
export default function App() {
  // --- State for load-in animation ---
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation once the component mounts
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // --- Data for your portfolio ---
  const portfolioData = {
    name: "Aryan Shukla",
    title: "Software Engineer, CSE",
    phone: "7067829845",
    email: "0112cs221033@gmail.com",
    linkedin: "https://www.linkedin.com/in/aryan-shukla-924033279",
    github: "https://github.com/shukla2005-BGI", // Updated GitHub link
    leetcode: "https://leetcode.com/u/Aryan_shukla7067/", // Added LeetCode link
    location: "Bhopal, India",
    careerObjective: "Passionate Computer Science Engineering student with a solid foundation in web development and data structures & algorithms. Eager to build innovative web applications and contribute to basic backend setups. Committed to continuous learning and growth in a dynamic software development environment.",
    education: [
      {
        degree: "B. Tech in Computer Science & Technology",
        institution: "Bansal Institute of Science and Technology, Bhopal",
        duration: "2022 - 2026",
        grade: "CGPA: 8.13",
      },
      {
        degree: "12th Grade",
        institution: "Saraswati Bal Vidhya Mandir Higher Secondary School",
        duration: "2021 - 2022",
        grade: "Percentage: 86.6%",
      },
      {
        degree: "10th Grade",
        institution: "Saraswati Bal Vidhya Mandir Higher Secondary School",
        duration: "2019 - 2020",
        grade: "Percentage: 85.25%",
      },
    ],
    coursework: ["Data Structures & Algorithms", "Database Management Systems", "Object-Oriented Programming", "Web Development"],
    skills: {
      languages: ["C", "C++", "Java"],
      web: ["HTML", "CSS", "JavaScript", "React.js", "SQL"],
      tools: ["GitHub", "VS Code"],
    },
    projects: [
      {
        title: "Self Identifies Mental Health Disorder and Cure",
        description: "Developed a self-identification mental health care web application using web development technologies. Designed an interactive interface where users respond to structured questionnaires. Based on user input, the system analyzes data to provide relevant mental health insights. Focused on user experience, data handling, and responsive design principles.",
      },
      {
        title: "Interview Prep",
        description: "Developed a web application aimed at helping students prepare for campus placements effectively. Integrated live chat support to assist users with real-time queries and guidance. Curated relevant content and resources including tips, practice questions, and mock interviews. Focused on seamless navigation, responsive UI, and personalized learning experience.",
      },
      {
        title: "Personal Portfolio",
        description: "Developed a personal portfolio website to showcase web development projects, skills, and achievements. Built with HTML, CSS, and JavaScript, featuring a responsive design and interactive sections.",
      },
    ],
    certifications: [
      "C and C++ from Parabit Technology",
      "Java with DSA from Parabit Technology",
      "Basic Problem Solving from Hacker Rank",
      "Power BI from PWC India",
    ],
  };

  // --- Reusable Components ---
  const Section = ({ title, icon, children, delay = 0 }) => (
    <section className={`mb-12 transition-all duration-700 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: `${delay}ms` }}>
      <h2 className="text-2xl font-bold text-gray-100 mb-6 flex items-center">
        {icon}
        <span className="ml-3">{title}</span>
      </h2>
      {children}
    </section>
  );

  const SkillBadge = ({ skill }) => (
    <span className="bg-teal-500/10 border border-teal-400 text-teal-300 text-sm font-medium mr-2 mb-2 px-4 py-1.5 rounded-full transition-all duration-300 hover:bg-teal-500/20 hover:text-white">
      {skill}
    </span>
  );
  
  const InfoCard = ({ text }) => (
      <div className="flex items-center bg-gray-800/60 p-3 rounded-lg mb-3 border border-gray-700 hover:border-purple-500 transition-colors duration-300">
          <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
          <span className="text-gray-200">{text}</span>
      </div>
  );

  // Custom LeetCode Icon using the new SVG
  const LeetCodeIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path d="m15.42 16.94-2.25 2.17a2.1 2.1 0 0 1-1.52.56 2.1 2.1 0 0 1-1.52-.56l-3.61-3.63a2.18 2.18 0 0 1-.58-1.55 2.07 2.07 0 0 1 .58-1.52l3.6-3.65a2.1 2.1 0 0 1 1.53-.54 2.08 2.08 0 0 1 1.52.55l2.25 2.17A1.14 1.14 0 0 0 17 9.33l-2.17-2.2a4.24 4.24 0 0 0-2-1.12l2.06-2.08a1.15 1.15 0 0 0-1.62-1.62l-8.43 8.42a4.48 4.48 0 0 0-1.24 3.2 4.57 4.57 0 0 0 1.24 3.23l3.63 3.63A4.38 4.38 0 0 0 11.66 22a4.45 4.45 0 0 0 3.2-1.25L17 18.56a1.14 1.14 0 0 0-1.61-1.62z"></path>
      <path d="M19.34 12.84h-8.45a1.12 1.12 0 0 0 0 2.24h8.45a1.12 1.12 0 0 0 0-2.24"></path>
    </svg>
  );

  return (
    <div className="dark min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/50 to-gray-900 font-sans text-gray-300">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8">
        <div className="bg-gray-800/50 backdrop-blur-xl shadow-2xl shadow-purple-900/20 rounded-2xl overflow-hidden border border-purple-500/20">
          <main className="p-6 sm:p-8 lg:p-12">
            
            {/* --- Header / Hero Section with Animation --- */}
            <header className={`text-center mb-12 transition-all duration-700 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
              <h1 className="text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-teal-300">
                {portfolioData.name}
              </h1>
              <p className="text-xl text-teal-400 mt-2">{portfolioData.title}</p>
              
              {/* Contact Info */}
              <div className="mt-6 flex justify-center items-center flex-wrap gap-x-6 gap-y-2">
                <a href={`mailto:${portfolioData.email}`} className="flex items-center text-gray-400 hover:text-teal-400 transition-colors">
                  <Mail className="w-4 h-4 mr-2" /> {portfolioData.email}
                </a>
                <a href={`tel:${portfolioData.phone}`} className="flex items-center text-gray-400 hover:text-teal-400 transition-colors">
                  <Phone className="w-4 h-4 mr-2" /> {portfolioData.phone}
                </a>
                 <span className="flex items-center text-gray-400">
                  <MapPin className="w-4 h-4 mr-2" /> {portfolioData.location}
                </span>
              </div>
              
              {/* Social Links */}
              <div className="mt-4 flex justify-center items-center space-x-4">
                <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-transform transform hover:scale-125">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-transform transform hover:scale-125">
                  <Github className="w-6 h-6" />
                </a>
                <a href={portfolioData.leetcode} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-transform transform hover:scale-125">
                  <LeetCodeIcon className="w-6 h-6" />
                </a>
              </div>
            </header>

            {/* --- Career Objective with Animation --- */}
            <section className={`mb-12 text-center max-w-3xl mx-auto transition-all duration-700 delay-200 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <p className="text-lg leading-relaxed text-gray-300">{portfolioData.careerObjective}</p>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                
                {/* --- Projects Section --- */}
                <Section title="Projects" icon={<Briefcase className="w-6 h-6 text-teal-400" />} delay={400}>
                  <div className="space-y-8">
                    {portfolioData.projects.map((project, index) => (
                      <div key={index} className="p-6 bg-gray-800/60 border border-gray-700 rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-teal-800/30 hover:border-teal-400 hover:-translate-y-2">
                        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                        <p className="mt-2 text-gray-400">{project.description}</p>
                      </div>
                    ))}
                  </div>
                </Section>
                
                {/* --- Education Section --- */}
                <Section title="Education" icon={<GraduationCap className="w-6 h-6 text-teal-400" />} delay={600}>
                  <div className="space-y-6">
                    {portfolioData.education.map((edu, index) => (
                      <div key={index} className="p-4 border-l-4 border-purple-500 bg-gray-800/60 rounded-r-lg">
                        <h3 className="font-semibold text-white">{edu.degree}</h3>
                        <p className="text-gray-400">{edu.institution}</p>
                        <div className="flex justify-between text-sm text-gray-500 mt-1">
                          <span>{edu.duration}</span>
                          <span>{edu.grade}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </Section>

              </div>

              <div className="lg:col-span-1">
                
                {/* --- Skills Section --- */}
                <Section title="Technical Skills" icon={<Code className="w-6 h-6 text-teal-400" />} delay={500}>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-3 text-gray-200">Programming Languages</h4>
                      <div className="flex flex-wrap">
                        {portfolioData.skills.languages.map(skill => <SkillBadge key={skill} skill={skill} />)}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-gray-200">Web Technologies</h4>
                      <div className="flex flex-wrap">
                        {portfolioData.skills.web.map(skill => <SkillBadge key={skill} skill={skill} />)}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-gray-200">Tools</h4>
                      <div className="flex flex-wrap">
                        {portfolioData.skills.tools.map(skill => <SkillBadge key={skill} skill={skill} />)}
                      </div>
                    </div>
                  </div>
                </Section>
                
                {/* --- Coursework Section --- */}
                <Section title="Relevant Coursework" icon={<Star className="w-6 h-6 text-teal-400" />} delay={700}>
                  <div>
                    {portfolioData.coursework.map(course => <InfoCard key={course} text={course} />)}
                  </div>
                </Section>

                {/* --- Certifications Section --- */}
                <Section title="Certifications" icon={<Award className="w-6 h-6 text-teal-400" />} delay={800}>
                   <div>
                    {portfolioData.certifications.map(cert => <InfoCard key={cert} text={cert} />)}
                  </div>
                </Section>

              </div>
            </div>
          </main>
          
          {/* --- Footer --- */}
          <footer className="text-center py-6 bg-gray-800/30 border-t border-purple-500/20">
            <p className="text-gray-400">
              MADE BY ARYAN SHUKLA
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
