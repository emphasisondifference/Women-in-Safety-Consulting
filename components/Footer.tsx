// FIX: Reverted React namespace import to fix framer-motion prop type errors.
import React, { MouseEvent } from 'react';
import { motion } from 'framer-motion';

const LogoIcon: React.FC = () => (
    <svg width="44" height="48" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
        <defs>
            <linearGradient id="shieldGradient" x1="0.5" y1="0" x2="0.5" y2="1">
                <stop offset="0%" stopColor="#A78BFA" />
                <stop offset="100%" stopColor="#6D28D9" />
            </linearGradient>
        </defs>
        <path d="M22 0L0 7.33333V21.6C0 34.2 9.35 45.9333 22 48C34.65 45.9333 44 34.2 44 21.6V7.33333L22 0Z" fill="url(#shieldGradient)"/>
        <path d="M14 42 C15 32, 29 32, 30 42 Z" fill="#EC4899"/>
        <circle cx="22" cy="25" r="7" fill="white" />
    </svg>
);

interface FooterProps {
  handleNavigation: (link: string) => void;
}

const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const Footer = ({ handleNavigation }: FooterProps) => {
    const socialLinks = [
        { name: 'Twitter', url: 'https://twitter.com', icon: <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M22 5.8a8.5 8.5 0 01-2.4.6 4.2 4.2 0 001.8-2.3c-.8.5-1.7.8-2.6 1a4.2 4.2 0 00-7.2 3.8 12 12 0 01-8.7-4.4 4.2 4.2 0 001.3 5.6 4.2 4.2 0 01-1.9-.5v.1c0 2 .1 3.6 1.4 4.2a4.2 4.2 0 01-1.9.1 4.2 4.2 0 003.9 2.9 8.5 8.5 0 01-5.2 1.8A9 9 0 012 18a12 12 0 006.5 1.9c7.8 0 12-6.5 12-12l-.1-.5A8.5 8.5 0 0022 5.8z"/></svg> },
        { name: 'LinkedIn', url: 'https://linkedin.com', icon: <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6.5 21.5h-5v-13h5v13zM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.5 2.5-2.5 2.5 1.2 2.5 2.5-1 2.5-2.5 2.5zm16.5 15h-5v-6.3c0-1.5-.3-2.7-2-2.7-1.1 0-1.8.7-2.1 1.4-.1.2-.1.5-.1.8v6.8h-5v-13h5v2.2c.6-1 1.7-2.4 4.5-2.4 3.3 0 5.6 2.2 5.6 7v6.2z"/></svg> },
        { name: 'Instagram', url: 'https://instagram.com', icon: <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 2c-2.7 0-3 .01-4.1.06-1.1.05-1.8.2-2.5.5a4.8 4.8 0 00-1.8 1.8c-.3.7-.45 1.4-.5 2.5C2.01 9 2 9.3 2 12s.01 3 .06 4.1c.05 1.1.2 1.8.5 2.5a4.8 4.8 0 001.8 1.8c.7.3 1.4.45 2.5.5 1.1.05 1.4.06 4.1.06s3-.01 4.1-.06c1.1-.05 1.8-.2 2.5-.5a4.8 4.8 0 001.8-1.8c.3-.7.45-1.4.5-2.5.05-1.1.06-1.4.06-4.1s-.01-3-.06-4.1c-.05-1.1-.2-1.8-.5-2.5a4.8 4.8 0 00-1.8-1.8c-.7-.3-1.4-.45-2.5-.5C15 2.01 14.7 2 12 2zm0 2c2.7 0 3 .01 4 .06.9.04 1.4.2 1.8.35.4.15.7.3.9.6.3.3.45.5.6.9.15.4.3.9.35 1.8.05 1 .06 1.3.06 4s-.01 3-.06 4c-.04.9-.2 1.4-.35 1.8-.15.4-.3.7-.6.9-.3.3-.5.45-.9.6-.4.15-.9.3-1.8.35-1 .05-1.3.06-4 .06s-3-.01-4-.06c-.9-.04-1.4-.2-1.8-.35-.4-.15-.7-.3-.9-.6-.3-.3-.45-.5-.6.9-.15-.4-.3-.9-.35-1.8C4.01 15 4 14.7 4 12s.01-3 .06-4c.04-.9.2-1.4.35-1.8.15-.4.3.7-.6.9.3-.3.5-.45.9-.6.4-.15.9-.3 1.8-.35C9 4.01 9.3 4 12 4zm0 3a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zm6.5-9.8a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4z"/></svg> }
    ];

    const handleLinkClick = (e: MouseEvent, link: string) => {
        e.preventDefault();
        handleNavigation(link);
    }

    return (
        <motion.footer
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col">
                         <a href="#home" className="logo" onClick={(e) => handleLinkClick(e, 'home')}>
                            <LogoIcon />
                            <div className="logo-text">
                                <strong>WOMEN IN SAFETY</strong>
                                <span>CONSULTING (PTY, LTD)</span>
                            </div>
                        </a>
                    </div>
                    <div className="footer-col">
                        <h4>CONTACT</h4>
                        <ul>
                            <li><a href="mailto:info@womaninsafetyconsulting.co.za">info@womaninsafetyconsulting.co.za</a></li>
                            <li><a href="tel:+27740116930">+27740116930</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>QUICK LINKS</h4>
                        <ul>
                            <li><a href="#about" onClick={(e) => handleLinkClick(e, 'about')}>About</a></li>
                            <li><a href="#services" onClick={(e) => handleLinkClick(e, 'services')}>Services</a></li>
                            <li><a href="#blog" onClick={(e) => handleLinkClick(e, 'blog')}>Blog</a></li>
                            <li><a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')}>Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>FOLLOW US</h4>
                        <div className="footer-socials">
                            {socialLinks.map(link => (
                                <a 
                                  href={link.url} 
                                  key={link.name} 
                                  aria-label={link.name}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>Copyright © {new Date().getFullYear()} Women in Safety</p>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;