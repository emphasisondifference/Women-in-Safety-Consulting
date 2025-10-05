// FIX: Reverted React namespace import to fix framer-motion prop type errors.
import React, { MouseEvent } from 'react';
import { motion } from 'framer-motion';
import { FOUNDER_MESSAGE_DATA } from '../constants';

interface FounderMessageProps {
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

const FounderMessage = ({ handleNavigation }: FounderMessageProps) => {
  const { quote, author, title, imageUrl } = FOUNDER_MESSAGE_DATA;
  
  const handleLinkClick = (e: MouseEvent, link: string) => {
    e.preventDefault();
    handleNavigation(link);
  };

  return (
    <motion.section 
        id="founder-message" 
        className="success-stories section-with-bg-animation"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div 
          className="animated-bg-shape"
          style={{
            width: '400px',
            height: '400px',
            top: '-100px',
            left: '-150px',
            background: 'radial-gradient(circle, rgba(154, 118, 214, 0.08) 0%, rgba(154, 118, 214, 0) 70%)',
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ 
            opacity: 1, 
            transition: { duration: 1, ease: 'easeOut' }
          }}
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }}
      />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-header">
          <h2>Word from the Founder</h2>
        </div>
        <div className="story-container">
            <img src={imageUrl} alt={`Headshot of ${author}, ${title}`} className="story-image" />
            <div className="story-content">
                <p>{quote}</p>
                <span className="story-author">&ndash; {author}, {title}</span>
            </div>
            <div className="story-quick-links">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="#about" onClick={(e) => handleLinkClick(e, 'about')}>About</a></li>
                    <li><a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')}>Contact</a></li>
                </ul>
            </div>
        </div>
      </div>
    </motion.section>
  );
};

export default FounderMessage;