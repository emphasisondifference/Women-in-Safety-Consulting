import React from 'react';
import { motion } from 'framer-motion';

const ExpertIcon = () => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
        <path d="M32 10L12 20V34C12 45.2 32 54 32 54C32 54 52 45.2 52 34V20L32 10Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M26 30C26 33.3137 28.6863 36 32 36C35.3137 36 38 33.3137 38 30C38 26.6863 35.3137 24 32 24C28.6863 24 26 26.6863 26 30Z" stroke="#EC4899" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M42 42C42 36.4772 37.5228 32 32 32C26.4772 32 22 36.4772 22 42" stroke="#EC4899" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
const TailoredIcon = () => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
        <path d="M42 22H52V32" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 42H12V32" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M52 42L42 42" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 22H22" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M42 52V42" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 12V22" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M38.6274 25.3726L25.3726 38.6274" stroke="#EC4899" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M32 22H22V32H32V22Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
const CommunityIcon = () => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
        <circle cx="32" cy="20" r="6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M42 32C42 26.4772 37.5228 22 32 22" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="20" cy="34" r="6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M28 44C28 38.4772 24.5228 34 20 34" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="44" cy="34" r="6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M36 44C36 38.4772 39.4772 34 44 34" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M32 26C32 34 26 40 20 40" stroke="#EC4899" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M32 26C32 34 38 40 44 40" stroke="#EC4899" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const benefits = [
    {
        icon: <ExpertIcon />,
        title: "Woman-Owned Expertise",
        description: "Leverage the unique perspective and dedicated expertise of a 100% woman-owned firm in a traditionally male-dominated industry."
    },
    {
        icon: <TailoredIcon />,
        title: "Tailored Safety Solutions",
        description: "We don't believe in one-size-fits-all. Our solutions are meticulously customized to your specific industry needs and challenges."
    },
    {
        icon: <CommunityIcon />,
        title: "Empowerment & Community",
        description: "Beyond consulting, we are building a supportive community to mentor and elevate the next generation of female safety leaders."
    }
];

const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
            when: "beforeChildren",
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
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

const WhyChooseUs: React.FC = () => {
    return (
        <motion.section 
            className="why-choose-us"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className="container">
                <div className="section-header">
                    <h2>Why Choose Us?</h2>
                    <p>Partner with a firm that's redefining the industry standard.</p>
                </div>
                <div className="benefits-grid">
                    {benefits.map((benefit, index) => (
                        <motion.div key={index} className="benefit-card" variants={itemVariants}>
                            {benefit.icon}
                            <h3>{benefit.title}</h3>
                            <p>{benefit.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default WhyChooseUs;
