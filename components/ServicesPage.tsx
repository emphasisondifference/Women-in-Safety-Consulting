// FIX: Reverted React namespace import to fix framer-motion prop type errors.
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES_PAGE_DATA } from '../constants';

const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.5, when: "beforeChildren" }
    }
};

const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

const ServiceCardSkeleton = () => (
    <div className="skeleton-card">
        <div className="skeleton skeleton-icon"></div>
        <div className="skeleton skeleton-title"></div>
        <div className="skeleton skeleton-text"></div>
        <div className="skeleton skeleton-text"></div>
    </div>
);


const ServicesPage = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);


  const handleCardClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <motion.section 
      id="services" 
      className="services-page section-with-bg-animation"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div 
          className="animated-bg-shape"
          style={{
            width: '800px',
            height: '800px',
            bottom: '-200px',
            right: '-300px',
            background: 'radial-gradient(circle, rgba(255, 107, 107, 0.07) 0%, rgba(255, 107, 107, 0) 70%)',
          }}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: { duration: 1.5, ease: 'easeOut' }
          }}
          animate={{
            rotate: [0, 15, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }}
      />
      <div className="container">
        <h1 className="page-title">Our Services</h1>
        <motion.div 
            className="services-page-grid"
            variants={gridVariants}
        >
          {isLoading ? (
            Array.from({ length: 12 }).map((_, index) => (
                <ServiceCardSkeleton key={index} />
            ))
          ) : (
            SERVICES_PAGE_DATA.map((service, index) => (
              <motion.button 
                key={index}
                type="button"
                className="service-page-card"
                variants={cardVariants}
                onClick={() => handleCardClick(index)}
                whileHover={{ y: -5, boxShadow: '0 15px 40px rgba(0,0,0,0.08)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                layout
              >
                <motion.div layout="position">
                  {service.icon}
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </motion.div>
  
                <AnimatePresence>
                  {expandedIndex === index && service.details && (
                    <motion.div
                      className="service-details"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto', transition: { duration: 0.3, delay: 0.1 } }}
                      exit={{ opacity: 0, height: 0, transition: { duration: 0.2 } }}
                    >
                      <p>{service.details}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            ))
          )}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServicesPage;