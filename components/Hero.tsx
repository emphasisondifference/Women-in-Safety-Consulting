// FIX: Reverted React namespace import to fix framer-motion prop type errors.
import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  handleNavigation: (link: string) => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, 0.05, 0.01, 0.9],
    },
  },
};

const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: [0.6, 0.05, 0.01, 0.9],
            delay: 0.2
        }
    }
}

// New SVG illustration
const HeroIllustration = () => (
    <div className="hero-image-container">
        <svg viewBox="0 0 500 450" xmlns="http://www.w3.org/2000/svg" aria-label="An illustration of three women leaders in the safety industry." role="img">
            <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#9A76D6', stopOpacity:1}} />
                    <stop offset="100%" style={{stopColor: '#8a65c1', stopOpacity:1}} />
                </linearGradient>
                <clipPath id="clip-woman1">
                    <path d="M250 150 C350 50, 450 150, 450 250 S350 450, 250 450 S150 350, 150 250 S150 50, 250 150 Z" />
                </clipPath>
            </defs>
            
            {/* Background shapes */}
            <path d="M0 450 H500 V200 C400 250, 100 150, 0 200 Z" fill="rgba(154, 118, 214, 0.1)"/>
            <circle cx="50" cy="80" r="100" fill="rgba(255, 107, 107, 0.1)"/>

            {/* Woman 1: Leader with tablet */}
            <g transform="translate(20, 20)">
                <path d="M220 410 C180 410, 150 380, 150 340 V200 C150 140, 200 80, 260 80 S370 140, 370 200 V340 C370 380, 340 410, 300 410 H220 Z" fill="#f0eaff"/>
                {/* Head */}
                <circle cx="260" cy="140" r="40" fill="#f4d3be"/>
                {/* Hair */}
                <path d="M220 120 Q260 80 300 120 V160 H220 Z" fill="#4a3f35"/>
                {/* Body */}
                <path d="M200 200 H320 L300 410 H220 Z" fill="#9A76D6"/>
                {/* Tablet */}
                <rect x="270" y="240" width="80" height="100" rx="10" fill="#ffffff" stroke="#e0e0e0" strokeWidth="2"/>
                <line x1="280" y1="260" x2="340" y2="260" stroke="#FF6B6B" strokeWidth="4"/>
            </g>

            {/* Woman 2: Engineer with hard hat */}
            <g transform="translate(-100, 50)">
                <path d="M180 380 C150 380, 130 360, 130 330 V220 C130 180, 160 140, 200 140 S270 180, 270 220 V330 C270 360, 250 380, 220 380 H180 Z" fill="#e9f5f8"/>
                {/* Head */}
                <circle cx="200" cy="190" r="30" fill="#f8e5d9"/>
                {/* Body */}
                <path d="M160 220 H240 L230 380 H170 Z" fill="#333333"/>
                {/* Hard hat */}
                <path d="M170 170 C170 150, 230 150, 230 170 H170 Z" fill="#FF6B6B"/>
                <path d="M160 170 H240" stroke="#FF6B6B" strokeWidth="4"/>
            </g>
        </svg>
    </div>
);

const Hero = ({ handleNavigation }: HeroProps) => {
  return (
    <motion.section 
      id="home" 
      className="hero"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
        <div className="hero-container container">
            <motion.div className="hero-left" variants={containerVariants}>
                <motion.h1 variants={itemVariants}>
                    Empowering Safety.<br/>Inspiring Leadership.
                </motion.h1>
                <motion.a 
                  href="#services"
                  className="btn btn-primary"
                  onClick={(e) => { e.preventDefault(); handleNavigation('services'); }}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                    Explore Our Services
                </motion.a>
            </motion.div>
            <motion.div className="hero-right" variants={imageVariants}>
                <HeroIllustration />
            </motion.div>
        </div>
    </motion.section>
  );
};

export default Hero;