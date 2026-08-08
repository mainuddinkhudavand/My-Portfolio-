import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import * as THREE from 'three';
import {
  Brain,
  Code2,
  Cpu,
  Download,
  ExternalLink,
  GraduationCap,
  Layers,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  Phone,
  Send,
  Sparkles,
  Terminal,
  User,
  X,
  FileCode,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
  Briefcase,
  ShieldCheck,
  Award,
  Zap,
  Globe,
  Star,
  BarChart3,
  Monitor,
  Maximize2,
  Sparkle
} from 'lucide-react';

/* Custom Social SVG Components */
const Github = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const Linkedin = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
  </svg>
);

/* ==========================================================================
   PORTFOLIO CONFIGURATION (CUSTOMIZE ALL CONTENT HERE)
   ========================================================================== */
export const PORTFOLIO_CONFIG = {
  personal: {
    name: "Mainuddin Khudavand",
    shortName: "Mainuddin.K",
    portraitUrl: "/mainuddin_portrait.jpg",
    avatar3dUrl: "/mainuddin_3d_avatar.jpg",
    roleTitle: "AI/ML Engineer & Full Stack Developer (MERN)",
    taglinePrefix: "Building ",
    taglines: [
      "Agentic AI & LLM Pipelines",
      "Scalable Full-Stack MERN Apps",
      "Deep Learning & Computer Vision",
      "Patented Digital Governance Platforms"
    ],
    valueProposition: "Engineered at the intersection of Deep Learning and Full-Stack MERN Architecture — turning cutting-edge ML research into robust, high-impact products.",
    location: "Karnataka, India (Open to Remote & Relocation)",
    resumeUrl: "/Mainuddin_Khudavand_Resume.pdf",
    email: "mainuddinkhudavand@gmail.com",
    phone: "+91 8088163133",
    github: "https://github.com/mainuddinkhudavand",
    linkedin: "https://linkedin.com/in/mainuddinkhudavand",
  },
  
  about: {
    bio: [
      "I am an AI/ML Engineer and Full Stack MERN Developer pursuing my B.E. in Computer Science & Engineering with an 8.5 CGPA.",
      "My work focuses on designing intelligent, autonomous agents and high-throughput web systems — spanning from LLM-powered RAG applications to multi-role enterprise web platforms.",
      "I hold a published patent for a digital governance platform and have delivered multiple production-ready systems combining facial recognition, voice verification, and computer vision."
    ],
    stats: [
      { id: "cgpa", label: "B.E. CSE CGPA", value: "8.5", detail: "Tontadarya College of Engg", iconName: "GraduationCap" },
      { id: "patent", label: "Patent Published", value: "1", detail: "App #202641040564", iconName: "FileCode" },
      { id: "projects", label: "Deployed Projects", value: "15+", detail: "Live Production Demos", iconName: "Sparkles" },
      { id: "tech", label: "Tech Stack Tools", value: "15+", detail: "PyTorch, React, Node, SQL", iconName: "Cpu" }
    ]
  },

  skills: {
    categories: [
      {
        id: "languages",
        name: "Languages & Core",
        iconName: "Code2",
        items: [
          { name: "JavaScript (ES6+)", level: "Advanced", badge: "Primary" },
          { name: "Python 3", level: "Advanced", badge: "Primary" },
          { name: "SQL (PostgreSQL / SQLite)", level: "Intermediate", badge: "Database" },
          { name: "MongoDB / NoSQL", level: "Advanced", badge: "Database" },
          { name: "HTML5 / CSS3", level: "Advanced", badge: "Frontend" }
        ]
      },
      {
        id: "aiml",
        name: "AI & Machine Learning",
        iconName: "Brain",
        items: [
          { name: "PyTorch & Deep Learning", level: "Advanced", badge: "Framework" },
          { name: "Agentic AI & RAG Pipelines", level: "Advanced", badge: "GenAI" },
          { name: "OpenAI & Groq LLMs", level: "Advanced", badge: "LLM API" },
          { name: "Scikit-Learn (SVM, Reg)", level: "Advanced", badge: "Classic ML" },
          { name: "OpenCV & MediaPipe", level: "Advanced", badge: "Vision" },
          { name: "Resemblyzer & Audio Embeddings", level: "Intermediate", badge: "Voice AI" }
        ]
      },
      {
        id: "web",
        name: "Full Stack Web",
        iconName: "Layers",
        items: [
          { name: "React.js & Hooks", level: "Advanced", badge: "Frontend" },
          { name: "Node.js & Express.js", level: "Advanced", badge: "Backend" },
          { name: "REST APIs & JWT Auth", level: "Advanced", badge: "Security" },
          { name: "Supabase & PostgreSQL", level: "Intermediate", badge: "BaaS" },
          { name: "Flask & Streamlit", level: "Advanced", badge: "Python Web" },
          { name: "SMTP & Notification Logic", level: "Advanced", badge: "Backend" }
        ]
      },
      {
        id: "devops",
        name: "DevOps & Tools",
        iconName: "Terminal",
        items: [
          { name: "Git & GitHub", level: "Advanced", badge: "VCS" },
          { name: "Docker & Containers", level: "Intermediate", badge: "DevOps" },
          { name: "Kubernetes Fundamentals", level: "Conceptual", badge: "Cloud" },
          { name: "Render & Vercel", level: "Advanced", badge: "Deployment" },
          { name: "Jest Unit Testing", level: "Intermediate", badge: "Testing" }
        ]
      }
    ]
  },

  projects: [
    {
      id: "digital-governance",
      title: "Empowering Villages Through Digital Governance",
      subtitle: "Multi-Role MERN Grievance & Administrative Platform",
      description: "A 5-role governance ecosystem (Citizens, Field Workers, Officials, Managers, Admins) enabling complaint tracking, automated escalation, and multi-role dashboards.",
      impact: "Patent Published (#202641040564) • 5 Administrative Dashboards • SMTP Alert Engine",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "SMTP", "REST APIs"],
      liveDemo: "https://empowering-villages-through-digital-6r80.onrender.com",
      github: "https://github.com/mainuddinkhudavand/digital-governance-mern",
      category: "Full Stack MERN",
      badge: "Patent Published"
    },
    {
      id: "ai-attendance",
      title: "Intelligent AI Attendance System",
      subtitle: "Contactless Dual-Factor Face & Voice Verification",
      description: "AI-driven dual-factor attendance platform using facial recognition (dlib & SVM classifier) combined with Resemblyzer voice speaker verification.",
      impact: "Dual-Factor Biometric Auth • QR Enrollment • Teacher & Student Portals • Supabase Backend",
      tags: ["Python", "Flask", "Streamlit", "Supabase", "Scikit-Learn", "dlib", "Resemblyzer"],
      liveDemo: "https://ai-attendance-project-landing-main1-1.onrender.com",
      github: "https://github.com/mainuddinkhudavand/ai-attendance-system",
      category: "AI & Biometrics",
      badge: "Dual-Factor Auth"
    },
    {
      id: "ai-gym-trainer",
      title: "Real-Time AI Gym Trainer",
      subtitle: "Computer Vision Posture Detection & Rep Counter",
      description: "Interactive fitness assistant leveraging MediaPipe pose landmarks and Groq LLMs to deliver real-time corrective feedback and automated rep counting.",
      impact: "Sub-100ms Posture Validation • Real-Time Voice Audio • WebRTC Stream Processing",
      tags: ["Python", "Streamlit", "WebRTC", "MediaPipe", "OpenCV", "Groq LLM", "gTTS"],
      liveDemo: "https://ai-gym-trainer-landing-page.onrender.com",
      github: "https://github.com/mainuddinkhudavand/realtime-ai-gym-trainer",
      category: "Vision & LLMs",
      badge: "Sub-100ms Vision"
    }
  ],

  experience: [
    {
      period: "Mar 2026 – Present",
      role: "Founder & Lead Developer",
      organization: "Empowering Residency (MSME Registered Enterprise)",
      location: "Udyam Reg. UDYAM-KR-14-0034950 • Govt. of India",
      description: "Leading digital service solutions and software architecture for registered micro-enterprise initiatives, empowering rural governance and service automation."
    },
    {
      period: "Sep 2023 – July 2027",
      role: "B.E. in Computer Science and Engineering",
      organization: "Tontadarya College of Engineering",
      location: "Gadag, Karnataka • CGPA: 8.5",
      description: "Focusing on Deep Learning, Agentic AI Systems, Operating Systems, Computer Networks, and DBMS. Active participant in state-level technical competitions."
    },
    {
      period: "2025 – 2026",
      role: "Full Stack & AI/ML Certifications & Finalist",
      organization: "Apna College & Navitantriks State Level Competition",
      location: "Karnataka, India",
      description: "Selected as Navitantriks 2026 State-Level Finalist for Digital Governance research. Earned certifications in Full Stack Web Development (2025) and AI/ML (2026)."
    }
  ],

  emailjs: {
    serviceId: "YOUR_SERVICE_ID",
    templateId: "YOUR_TEMPLATE_ID",
    publicKey: "YOUR_PUBLIC_KEY"
  }
};

/* ==========================================================================
   TYPEWRITER ANIMATION HOOK
   ========================================================================== */
function useTypewriter(words, speed = 80, delay = 2000) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;

    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), delay);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words, speed, delay]);

  return words[index] ? words[index].substring(0, subIndex) : '';
}

/* ==========================================================================
   3D TILT CARD COMPONENT
   ========================================================================== */
const TiltCard3D = ({ children, className = "", perspective = 1000 }) => {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    transition: 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
  });
  const [glare, setGlare] = useState({ opacity: 0, x: 50, y: 50 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -14;
    const rotateY = ((x - centerX) / centerX) * 14;

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setStyle({
      transform: `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`,
      transition: 'transform 0.1s ease-out',
    });

    setGlare({ opacity: 0.35, x: glareX, y: glareY });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
      transition: 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
    });
    setGlare({ opacity: 0, x: 50, y: 50 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={`relative preserve-3d glass-3d-card rounded-2xl overflow-hidden cursor-pointer ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300 -z-0"
        style={{
          opacity: glare.opacity,
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.35) 0%, rgba(16, 185, 129, 0.2) 35%, transparent 75%)`,
        }}
      />
      <div className="relative z-10 preserve-3d h-full">{children}</div>
    </div>
  );
};

/* ==========================================================================
   THREE.JS 3D CANVAS BACKGROUND SCENE
   ========================================================================== */
const ThreeCanvasBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 25;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const geometry = new THREE.IcosahedronGeometry(13, 2);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    });
    const icosahedron = new THREE.Mesh(geometry, wireframeMaterial);
    scene.add(icosahedron);

    const torusGeo = new THREE.TorusGeometry(8.5, 0.25, 16, 100);
    const torusMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });
    const torus = new THREE.Mesh(torusGeo, torusMat);
    scene.add(torus);

    const particlesCount = 400;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 85;
    }

    const particlesGeo = new THREE.BufferGeometry();
    particlesGeo.setAttribute(
      'position',
      new THREE.BufferAttribute(posArray, 3)
    );

    const particlesMat = new THREE.PointsMaterial({
      size: 0.14,
      color: 0x34d399,
      transparent: true,
      opacity: 0.75,
    });

    const particlesMesh = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particlesMesh);

    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    const handleMouseMove = (event) => {
      mouseX = event.clientX - windowHalfX;
      mouseY = event.clientY - windowHalfY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      icosahedron.rotation.x = elapsedTime * 0.05;
      icosahedron.rotation.y = elapsedTime * 0.08;

      torus.rotation.x = elapsedTime * -0.07;
      torus.rotation.y = elapsedTime * 0.1;

      particlesMesh.rotation.y = elapsedTime * 0.02;

      targetX = mouseX * 0.001;
      targetY = mouseY * 0.001;

      scene.rotation.y += (targetX - scene.rotation.y) * 0.05;
      scene.rotation.x += (targetY - scene.rotation.x) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      wireframeMaterial.dispose();
      torusGeo.dispose();
      torusMat.dispose();
      particlesGeo.dispose();
      particlesMat.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 pointer-events-none -z-10 overflow-hidden" />;
};

/* Dynamic Icon Component */
const DynamicIcon = ({ name, className = "w-5 h-5" }) => {
  const icons = {
    Brain: <Brain className={className} />,
    Code2: <Code2 className={className} />,
    Cpu: <Cpu className={className} />,
    GraduationCap: <GraduationCap className={className} />,
    Layers: <Layers className={className} />,
    Sparkles: <Sparkles className={className} />,
    Terminal: <Terminal className={className} />,
    FileCode: <FileCode className={className} />,
    ShieldCheck: <ShieldCheck className={className} />,
    Award: <Award className={className} />
  };
  return icons[name] || <Code2 className={className} />;
};

/* ==========================================================================
   MAIN PORTFOLIO COMPONENT
   ========================================================================== */
export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedSkillCategory, setSelectedSkillCategory] = useState('all');

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];
  
  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: null,
    usedMailto: false,
    message: ''
  });

  const typewriterText = useTypewriter(PORTFOLIO_CONFIG.personal.taglines);

  // Active section observer
  useEffect(() => {
    const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Form Change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Form Submit Handler
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, success: false, error: null, usedMailto: false, message: '' });

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus({
        submitting: false,
        success: false,
        error: 'Please fill in all required fields (Name, Email, and Message).',
        usedMailto: false,
        message: ''
      });
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();

      if (response.ok && data.success) {
        setFormStatus({
          submitting: false,
          success: true,
          error: null,
          usedMailto: false,
          message: data.message || 'Thank you! Your message has been sent successfully. I will get back to you soon.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
        return;
      }
    } catch (err) {
      console.log('Local SMTP server not responding, trying alternative delivery options...');
    }

    const { serviceId, templateId, publicKey } = PORTFOLIO_CONFIG.emailjs;
    const isEmailJSConfigured =
      serviceId && serviceId !== 'YOUR_SERVICE_ID' &&
      templateId && templateId !== 'YOUR_TEMPLATE_ID' &&
      publicKey && publicKey !== 'YOUR_PUBLIC_KEY';

    if (isEmailJSConfigured) {
      try {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject || 'Portfolio Inquiry',
            message: formData.message,
            to_name: PORTFOLIO_CONFIG.personal.name
          },
          publicKey
        );

        setFormStatus({
          submitting: false,
          success: true,
          error: null,
          usedMailto: false,
          message: 'Thank you! Your message has been sent successfully.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
        return;
      } catch (err) {
        console.error('EmailJS Error:', err);
      }
    }

    const mailtoSubject = encodeURIComponent(formData.subject || `Portfolio Contact from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${PORTFOLIO_CONFIG.personal.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    
    setFormStatus({
      submitting: false,
      success: true,
      error: null,
      usedMailto: true,
      message: 'Opened your email client with your message pre-filled.'
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-100 relative overflow-x-hidden selection:bg-emerald-500 selection:text-black">
      
      {/* 3D WebGL Background Canvas */}
      <ThreeCanvasBackground />

      {/* Ambient Gradient Flares */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse"></div>
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" style={{ animationDuration: '4s' }}></div>

      {/* ===================================================================
          1. STICKY NAVBAR
          =================================================================== */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0B0F17]/85 border-b border-slate-800/80 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Logo / Name */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-emerald-500/40 shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-300">
              <img src={PORTFOLIO_CONFIG.personal.portraitUrl} alt="Portrait" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-100 group-hover:text-emerald-400 transition-colors text-sm sm:text-base tracking-tight flex items-center gap-1.5">
                {PORTFOLIO_CONFIG.personal.name}
              </span>
              <span className="text-[10px] text-emerald-400 font-mono tracking-wider">AI/ML & MERN Engineer</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/90 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                  activeSection === link.id
                    ? 'bg-emerald-500 text-black font-extrabold shadow-lg shadow-emerald-500/30'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={PORTFOLIO_CONFIG.personal.resumeUrl}
              download
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-semibold text-slate-200 border border-slate-700/80 hover:border-emerald-500/50 transition-all focus-visible:ring-2 focus-visible:ring-emerald-400 shadow-md hover:scale-105"
            >
              <Download className="w-3.5 h-3.5 text-emerald-400" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="md:hidden p-2 rounded-xl text-slate-400 hover:text-white bg-slate-900/80 border border-slate-800 focus-visible:ring-2 focus-visible:ring-emerald-400"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-emerald-400" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0B0F17]/95 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 backdrop-blur-xl animate-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                    : 'text-slate-300 hover:bg-slate-800/60'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-800/60">
              <a
                href={PORTFOLIO_CONFIG.personal.resumeUrl}
                download
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-600 text-white font-semibold text-sm shadow-md"
              >
                <Download className="w-4 h-4" />
                Download Resume PDF
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ===================================================================
          2. HERO SECTION MATCHING THE REFERENCE STUDIO SETUP
          =================================================================== */}
      <section id="hero" className="relative min-h-[calc(100vh-4rem)] flex items-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          
          {/* Left Column: Info & Bio */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-emerald-500/40 shadow-xl shadow-emerald-500/10 text-xs text-slate-200 font-medium">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Creative AI & Full Stack Developer • Open to Roles & Projects</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Mainuddin Khudavand
              </h1>
              <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_10px_25px_rgba(16,185,129,0.3)]">
                PORTFOLIO — Full Stack & AI/ML Engineer
              </p>

              {/* Typewriter */}
              <div className="h-10 flex items-center text-lg sm:text-xl font-mono text-slate-300">
                <span className="text-emerald-400 mr-2">{PORTFOLIO_CONFIG.personal.taglinePrefix}</span>
                <span className="text-white border-r-2 border-emerald-400 pr-1 animate-pulse min-h-[1.5em] inline-block font-semibold">
                  {typewriterText}
                </span>
              </div>
            </div>

            {/* Short Narrative */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-xl">
              {PORTFOLIO_CONFIG.personal.valueProposition}
            </p>

            {/* Workstation Dashboard Interactive Stats */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 rounded-xl bg-slate-950/90 border border-slate-800 text-xs space-y-1">
                <div className="text-slate-400 font-mono text-[11px] flex items-center gap-1.5">
                  <BarChart3 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Academic Excellence</span>
                </div>
                <div className="text-lg font-bold text-white font-mono">8.5 CGPA</div>
                <div className="text-[10px] text-emerald-400 font-mono">B.E. Computer Science</div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/90 border border-slate-800 text-xs space-y-1">
                <div className="text-slate-400 font-mono text-[11px] flex items-center gap-1.5">
                  <FileCode className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Patented Innovation</span>
                </div>
                <div className="text-lg font-bold text-white font-mono">1 Patent</div>
                <div className="text-[10px] text-cyan-400 font-mono">App #202641040564</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-400 hover:to-cyan-500 text-white font-bold text-sm shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all transform hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-emerald-400 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Contact Me</span>
              </a>

              <a
                href={PORTFOLIO_CONFIG.personal.resumeUrl}
                download
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold text-sm border border-slate-700 hover:border-emerald-500/40 transition-all transform hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-emerald-400 flex items-center justify-center gap-2 shadow-lg"
              >
                <Download className="w-4 h-4 text-emerald-400" />
                <span>Download Resume</span>
              </a>
            </div>

          </div>

          {/* Right Column: REFERENCE-MATCHED STUDIO WORKSPACE SHOWCASE */}
          <div className="lg:col-span-6 flex justify-center">
            <TiltCard3D className="w-full max-w-lg p-6 relative group">
              
              {/* Studio Header Bar */}
              <div className="translate-z-30 flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <Monitor className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-mono font-bold text-slate-200">
                    Developer Studio Setup
                  </span>
                </div>

                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[10px] font-mono font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>System Active</span>
                </div>
              </div>

              {/* Main Portrait Frame matching the Reference Image */}
              <div className="translate-z-40 relative rounded-2xl overflow-hidden border-2 border-emerald-500/40 shadow-2xl shadow-emerald-500/20 group-hover:scale-[1.01] transition-transform duration-500">
                <img
                  src={PORTFOLIO_CONFIG.personal.portraitUrl}
                  alt="Mainuddin Khudavand Studio Portrait"
                  className="w-full h-96 object-cover object-top filter brightness-105 contrast-105"
                />

                {/* Interactive UX/UI Screen Mockup Badge on Top Right */}
                <div className="absolute top-3 right-3 p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-800 shadow-xl max-w-[180px] space-y-1.5 hidden sm:block">
                  <div className="flex items-center justify-between text-[10px] font-mono text-emerald-400 font-bold">
                    <span>UX Design Mockup</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  </div>
                  <div className="space-y-1">
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div className="w-3/4 h-full bg-emerald-400 rounded-full"></div>
                    </div>
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div className="w-1/2 h-full bg-cyan-400 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Bottom Title Bar overlay */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-950/90 backdrop-blur-md border border-slate-800 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-white">Mainuddin Khudavand</h3>
                    <p className="text-[11px] text-emerald-400 font-mono">Full Stack & AI Engineer</p>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-amber-400 font-mono font-bold px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>8.5 CGPA</span>
                  </div>
                </div>
              </div>

              {/* Bottom Workstation Tech Badges */}
              <div className="translate-z-30 pt-4 flex flex-wrap justify-center gap-2">
                <span className="px-3 py-1 rounded-xl bg-slate-900/90 text-emerald-300 border border-emerald-500/30 text-xs font-mono shadow-md">PyTorch</span>
                <span className="px-3 py-1 rounded-xl bg-slate-900/90 text-sky-300 border border-sky-500/30 text-xs font-mono shadow-md">React.js</span>
                <span className="px-3 py-1 rounded-xl bg-slate-900/90 text-cyan-300 border border-cyan-500/30 text-xs font-mono shadow-md">Agentic AI</span>
                <span className="px-3 py-1 rounded-xl bg-slate-900/90 text-emerald-300 border border-emerald-500/30 text-xs font-mono shadow-md">MongoDB</span>
              </div>

            </TiltCard3D>
          </div>

        </div>
      </section>

      {/* ===================================================================
          3. ABOUT SECTION WITH SKILL PROGRESS BARS & 3D STATS
          =================================================================== */}
      <section id="about" className="py-20 border-t border-slate-800/60 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Section Header */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold uppercase tracking-wider border border-emerald-500/20">
              <User className="w-3.5 h-3.5" />
              About Me
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              AI & Product Engineering Specialist
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Narrative Bio & Skill Progress */}
            <div className="lg:col-span-7 space-y-6">
              <TiltCard3D className="p-6 sm:p-8">
                <div className="space-y-4 translate-z-20">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-emerald-400" />
                    Bridging Research with High-Impact Applications
                  </h3>
                  {PORTFOLIO_CONFIG.about.bio.map((paragraph, i) => (
                    <p key={i} className="text-slate-300 leading-relaxed text-sm sm:text-base">
                      {paragraph}
                    </p>
                  ))}

                </div>
              </TiltCard3D>
            </div>

            {/* 3D Stats Cards Block */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {PORTFOLIO_CONFIG.about.stats.map((stat) => (
                <TiltCard3D key={stat.id} className="p-5 flex flex-col justify-between h-full">
                  <div className="translate-z-30 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-md">
                        <DynamicIcon name={stat.iconName} className="w-5 h-5" />
                      </div>
                      <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight text-emerald-400 drop-shadow-[0_4px_10px_rgba(16,185,129,0.3)]">
                        {stat.value}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-100">{stat.label}</h4>
                      <p className="text-[11px] text-slate-400 font-mono mt-0.5">{stat.detail}</p>
                    </div>
                  </div>
                </TiltCard3D>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* ===================================================================
          4. SKILLS SECTION WITH SIMPLE ELEGANT SKILL PILLS
          =================================================================== */}
      <section id="skills" className="py-20 border-t border-slate-800/60 bg-slate-950/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold uppercase tracking-wider border border-emerald-500/20">
              <Cpu className="w-3.5 h-3.5" />
              Technical Mastery
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Technologies & Frameworks
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">
              Categorized breakdown of machine learning frameworks, full-stack technologies, and cloud tools I specialize in.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2.5">
            <button
              onClick={() => setSelectedSkillCategory('all')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all focus-visible:ring-2 focus-visible:ring-emerald-400 hover:scale-105 active:scale-95 ${
                selectedSkillCategory === 'all'
                  ? 'bg-emerald-500 text-black font-extrabold shadow-lg shadow-emerald-500/30'
                  : 'bg-slate-900/90 text-slate-300 hover:text-white border border-slate-800'
              }`}
            >
              All Categories
            </button>
            {PORTFOLIO_CONFIG.skills.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedSkillCategory(cat.id)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-emerald-400 hover:scale-105 active:scale-95 ${
                  selectedSkillCategory === cat.id
                    ? 'bg-emerald-500 text-black font-extrabold shadow-lg shadow-emerald-500/30'
                    : 'bg-slate-900/90 text-slate-300 hover:text-white border border-slate-800'
                }`}
              >
                <DynamicIcon name={cat.iconName} className="w-3.5 h-3.5" />
                <span>{cat.name}</span>
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PORTFOLIO_CONFIG.skills.categories
              .filter((cat) => selectedSkillCategory === 'all' || selectedSkillCategory === cat.id)
              .map((category) => (
                <TiltCard3D key={category.id} className="p-6">
                  <div className="translate-z-20 space-y-4">
                    <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
                      <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        <DynamicIcon name={category.iconName} className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-white">{category.name}</h3>
                    </div>

                    <div className="flex flex-wrap gap-2.5 pt-2">
                      {category.items.map((skill, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-950/90 border border-slate-800/90 hover:border-emerald-500/50 hover:bg-slate-900/80 transition-all duration-200 shadow-md group"
                        >
                          <span className="text-xs font-semibold text-slate-200 group-hover:text-emerald-300">
                            {skill.name}
                          </span>
                          <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            {skill.badge || skill.level}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </TiltCard3D>
              ))}
          </div>

        </div>
      </section>

      {/* ===================================================================
          5. PROJECTS SECTION WITH 3D PARALLAX CARDS
          =================================================================== */}
      <section id="projects" className="py-20 border-t border-slate-800/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold uppercase tracking-wider border border-emerald-500/20">
              <Briefcase className="w-3.5 h-3.5" />
              Featured Work
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Projects & Patented Innovations
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">
              Real-world systems spanning full-stack web applications, AI biometric security, and computer vision systems.
            </p>
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PORTFOLIO_CONFIG.projects.map((project) => (
              <TiltCard3D key={project.id} className="p-6 flex flex-col justify-between h-full">
                <div className="translate-z-30 space-y-4">
                  
                  {/* Top Badge */}
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[11px] font-mono font-semibold shadow-sm">
                      {project.badge}
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">{project.category}</span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2.5">
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-xs font-medium text-emerald-300 font-mono">
                      {project.subtitle}
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Impact Highlight */}
                  <div className="p-3 rounded-xl bg-slate-950/90 border border-slate-800 text-[11px] text-slate-200 font-mono flex items-start gap-2 shadow-inner">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{project.impact}</span>
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 text-[10px] font-mono border border-slate-700/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Action Links */}
                <div className="translate-z-40 flex items-center gap-3 pt-6 mt-4 border-t border-slate-800/80">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-400 hover:to-cyan-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-lg hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-emerald-400"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 hover:border-emerald-500/40 transition-all hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-emerald-400"
                    aria-label="View Source Code on GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </TiltCard3D>
            ))}
          </div>

        </div>
      </section>

      {/* ===================================================================
          6. EXPERIENCE SECTION WITH 3D TIMELINE CARDS
          =================================================================== */}
      <section id="experience" className="py-20 border-t border-slate-800/60 bg-slate-950/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold uppercase tracking-wider border border-emerald-500/20">
              <GraduationCap className="w-3.5 h-3.5" />
              Career & Achievements
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Experience & Education
            </h2>
          </div>

          {/* Timeline Container */}
          <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-800 space-y-10">
            {PORTFOLIO_CONFIG.experience.map((item, index) => (
              <div key={index} className="relative group">
                
                {/* Timeline Pulse Indicator */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-4 w-4 h-4 rounded-full bg-slate-950 border-2 border-emerald-500 group-hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/50"></div>

                <TiltCard3D className="p-6">
                  <div className="translate-z-20 space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                        {item.role}
                      </h3>
                      <span className="px-3 py-1 rounded-full bg-slate-800 text-emerald-300 font-mono text-xs w-fit border border-slate-700">
                        {item.period}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-300">
                      <span className="text-emerald-400 font-semibold">{item.organization}</span>
                      <span>•</span>
                      <span className="text-slate-400">{item.location}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </TiltCard3D>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===================================================================
          7. CONTACT SECTION WITH 3D FORM & SIDEBAR
          =================================================================== */}
      <section id="contact" className="py-20 border-t border-slate-800/60 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold uppercase tracking-wider border border-emerald-500/20">
              <Mail className="w-3.5 h-3.5" />
              Get In Touch
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Let's Build Something Together
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">
              Have an exciting project, role, or collaboration in mind? Send a message directly or connect via social links below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Direct Contact Info Sidebar */}
            <div className="lg:col-span-5">
              <TiltCard3D className="p-6 sm:p-8 h-full">
                <div className="translate-z-20 space-y-6">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-emerald-400" />
                    Contact Information
                  </h3>

                  <div className="space-y-4 text-xs sm:text-sm">
                    
                    {/* Email */}
                    <a
                      href={`mailto:${PORTFOLIO_CONFIG.personal.email}`}
                      className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-emerald-500/40 transition-colors group"
                    >
                      <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:scale-110 transition-transform">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-slate-400 text-[11px]">Email</div>
                        <div className="text-slate-200 font-mono font-medium group-hover:text-emerald-300">
                          {PORTFOLIO_CONFIG.personal.email}
                        </div>
                      </div>
                    </a>

                    {/* Phone */}
                    <a
                      href={`tel:${PORTFOLIO_CONFIG.personal.phone}`}
                      className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-emerald-500/40 transition-colors group"
                    >
                      <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:scale-110 transition-transform">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-slate-400 text-[11px]">Phone</div>
                        <div className="text-slate-200 font-mono font-medium group-hover:text-emerald-300">
                          {PORTFOLIO_CONFIG.personal.phone}
                        </div>
                      </div>
                    </a>

                    {/* GitHub */}
                    <a
                      href={PORTFOLIO_CONFIG.personal.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-emerald-500/40 transition-colors group"
                    >
                      <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:scale-110 transition-transform">
                        <Github className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-slate-400 text-[11px]">GitHub</div>
                        <div className="text-slate-200 font-mono font-medium group-hover:text-emerald-300 flex items-center gap-1">
                          <span>GitHub Repositories</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </div>
                      </div>
                    </a>

                    {/* LinkedIn */}
                    <a
                      href={PORTFOLIO_CONFIG.personal.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-emerald-500/40 transition-colors group"
                    >
                      <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:scale-110 transition-transform">
                        <Linkedin className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-slate-400 text-[11px]">LinkedIn</div>
                        <div className="text-slate-200 font-mono font-medium group-hover:text-emerald-300 flex items-center gap-1">
                          <span>Connect on LinkedIn</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </div>
                      </div>
                    </a>

                  </div>
                </div>
              </TiltCard3D>
            </div>

            {/* Contact Form 3D Container */}
            <div className="lg:col-span-7">
              <TiltCard3D className="p-6 sm:p-8">
                <form onSubmit={handleFormSubmit} className="translate-z-20 space-y-4">
                  
                  {/* Form Banners */}
                  {formStatus.success && (
                    <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm flex items-start gap-3 animate-in fade-in">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-emerald-400" />
                      <div>
                        <p className="font-bold">Message Submission Received!</p>
                        <p className="text-emerald-300/80 text-xs mt-0.5">
                          {formStatus.message || "Thank you! Your message has been sent successfully. I will get back to you soon."}
                        </p>
                      </div>
                    </div>
                  )}

                  {formStatus.error && (
                    <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs sm:text-sm flex items-start gap-3 animate-in fade-in">
                      <AlertCircle className="w-5 h-5 flex-shrink-0 text-rose-400" />
                      <div>
                        <p className="font-bold">Validation Alert</p>
                        <p className="text-rose-300/80 text-xs mt-0.5">{formStatus.error}</p>
                      </div>
                    </div>
                  )}

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300 flex items-center justify-between">
                        <span>Your Name</span>
                        <span className="text-rose-400 text-xs">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Alex Morgan"
                        required
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 text-xs sm:text-sm focus:border-emerald-500 focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300 flex items-center justify-between">
                        <span>Your Email</span>
                        <span className="text-rose-400 text-xs">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="alex@example.com"
                        required
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 text-xs sm:text-sm focus:border-emerald-500 focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Subject / Topic
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="e.g. AI Collaboration / Hiring Inquiry"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 text-xs sm:text-sm focus:border-emerald-500 focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 flex items-center justify-between">
                      <span>Message</span>
                      <span className="text-rose-400 text-xs">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Hi Mainuddin, I would like to discuss..."
                      required
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 text-xs sm:text-sm focus:border-emerald-500 focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={formStatus.submitting}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-400 hover:to-cyan-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 transition-all hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-emerald-400 disabled:opacity-50"
                  >
                    {formStatus.submitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending Message...</span>
                      </div>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                </form>
              </TiltCard3D>
            </div>

          </div>

        </div>
      </section>

      {/* ===================================================================
          8. FOOTER
          =================================================================== */}
      <footer className="py-8 border-t border-slate-800/80 bg-slate-950 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          
          {/* Left copyright */}
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} {PORTFOLIO_CONFIG.personal.name}. All rights reserved.</span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href={PORTFOLIO_CONFIG.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PORTFOLIO_CONFIG.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PORTFOLIO_CONFIG.personal.email}`}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-emerald-400"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

        </div>
      </footer>

    </div>
  );
}
