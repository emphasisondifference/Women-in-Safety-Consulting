// FIX: Reverted React namespace import to fix framer-motion prop type errors.
import React from 'react';
import { motion } from 'framer-motion';

const ValueIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true" focusable="false">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const HistoryIllustration = () => (
    <div className="history-illustration" aria-hidden="true">
        <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="history-path" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#FF6B6B" />
                    <stop offset="100%" stopColor="#9A76D6" />
                </linearGradient>
            </defs>
            {/* Timeline Path */}
            <path d="M50 50 C 200 50, 100 250, 200 250 S 350 200, 350 350" stroke="url(#history-path)" strokeWidth="4" fill="none" strokeDasharray="10 5" />

            {/* Milestone 1: Founding */}
            <g transform="translate(50, 50)">
                <circle cx="0" cy="0" r="10" fill="#FF6B6B"/>
                <circle cx="0" cy="0" r="15" fill="#FF6B6B" opacity="0.3"/>
                <text x="20" y="5" fontFamily="Montserrat, sans-serif" fontSize="14" fill="#333">2008: Founded</text>
            </g>

            {/* Milestone 2: Training */}
            <g transform="translate(150, 150)">
                <circle cx="0" cy="0" r="10" fill="#E5629A"/>
                <circle cx="0" cy="0" r="15" fill="#E5629A" opacity="0.3"/>
                <text x="-120" y="5" fontFamily="Montserrat, sans-serif" fontSize="14" fill="#333" textAnchor="start">Training Programs</text>
            </g>
            
            {/* Milestone 3: Community */}
             <g transform="translate(200, 250)">
                <circle cx="0" cy="0" r="10" fill="#CF5CB8"/>
                <circle cx="0" cy="0" r="15" fill="#CF5CB8" opacity="0.3"/>
                <text x="20" y="5" fontFamily="Montserrat, sans-serif" fontSize="14" fill="#333">Community Growth</text>
            </g>

            {/* Milestone 4: Leading Firm */}
            <g transform="translate(350, 350)">
                <circle cx="0" cy="0" r="10" fill="#9A76D6"/>
                <circle cx="0" cy="0" r="15" fill="#9A76D6" opacity="0.3"/>
                <text x="-20" y="5" fontFamily="Montserrat, sans-serif" fontSize="14" fill="#333" textAnchor="end">Leading Firm</text>
            </g>
        </svg>
    </div>
);


const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
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

const AboutPage = () => {
    const values = [
        { title: "Empowerment", description: "Fostering an environment where women can thrive and lead." },
        { title: "Integrity", description: "Upholding the highest standards of safety and professional ethics." },
        { title: "Inclusivity", description: "Creating a diverse and welcoming community for all safety professionals." },
        { title: "Excellence", description: "Committing to continuous learning and the highest quality of service." },
        { title: "Collaboration", description: "Building strong partnerships to advance the field of safety." },
        { title: "Leadership", description: "Inspiring the next generation of leaders in the safety industry." },
    ];

    return (
        <motion.div 
            className="about-page"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.2 }}}}
        >
            <motion.section className="about-hero" variants={sectionVariants}>
                <div className="container">
                    <h1>About Us</h1>
                    <p>Pioneering a safer, more inclusive future in the safety industry.</p>
                </div>
            </motion.section>

            <motion.section 
                id="mission" 
                className="section"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <div className="container">
                    <div className="section-header">
                        <h2>Our Mission</h2>
                    </div>
                    <p style={{textAlign: 'center', fontSize: '1.1rem'}}>
                        Our mission is to break barriers and build a legacy of female leadership in the safety industry. We are dedicated to empowering women by providing the essential resources, expert mentorship, and a vibrant community network necessary to excel. We strive to not only advance individual careers but also to elevate the safety standards of entire industries, creating safer, more inclusive workplaces for everyone.
                    </p>
                </div>
            </motion.section>

            <motion.section 
                id="overview" 
                className="section"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <div className="container" style={{ textAlign: 'center' }}>
                    <div className="section-header">
                        <h2>Company Overview</h2>
                    </div>
                     <p style={{ maxWidth: '800px', margin: '0 auto 20px' }}>
                        Women in Safety Consulting (PTY) Ltd is a proudly 100% woman-owned consultancy at the forefront of the health, safety, and environmental sectors in South Africa. Based in Johannesburg, we bring a unique and vital perspective to a traditionally male-dominated field. Our identity is rooted in the conviction that "there is no force more powerful than a woman determined to rise," and we embody this in every project we undertake.
                    </p>
                    <p style={{ maxWidth: '800px', margin: '0 auto' }}>
                       We specialize in delivering a comprehensive suite of consultation services, from developing robust safety management systems to executing detailed risk assessments. Our expertise spans corporate, manufacturing, mining, and civil engineering sectors, enabling our clients to achieve and exceed compliance with Workplace Health and Safety (WHS) regulations. We are more than consultants; we are partners in building a safer, more equitable professional landscape.
                    </p>
                </div>
            </motion.section>

            <motion.section 
                id="values" 
                className="section section-with-bg-animation"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <motion.div 
                    className="animated-bg-shape"
                    style={{
                        width: '500px',
                        height: '500px',
                        top: '50%',
                        right: '-250px',
                        transform: 'translateY(-50%)',
                        background: 'radial-gradient(circle, rgba(154, 118, 214, 0.08) 0%, rgba(154, 118, 214, 0) 70%)',
                    }}
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ 
                        opacity: 1, 
                        x: 0,
                        transition: { duration: 1.5, ease: 'easeOut' }
                    }}
                    animate={{
                        rotate: [0, -10, 0],
                    }}
                    transition={{
                        duration: 22,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        ease: 'easeInOut'
                    }}
                />
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div className="section-header">
                        <h2>Our Core Values</h2>
                    </div>
                    <p style={{textAlign: 'center', maxWidth: '700px', margin: '0 auto 40px'}}>Our values are the bedrock of our organization, guiding every decision we make and every partnership we forge. They are the principles we live by in our quest for a safer, more equitable world.</p>
                    <motion.div className="values-grid" variants={gridVariants}>
                        {values.map(value => (
                            <motion.div key={value.title} className="value-card" variants={cardVariants}>
                                <h3><ValueIcon /> {value.title}</h3>
                                <p>{value.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>

            <motion.section 
                id="history" 
                className="section history-section section-with-bg-animation"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                 <motion.div 
                    className="animated-bg-shape"
                    style={{
                        width: '500px',
                        height: '500px',
                        bottom: '-150px',
                        left: '-250px',
                        background: 'radial-gradient(circle, rgba(255, 107, 107, 0.07) 0%, rgba(255, 107, 107, 0) 70%)',
                    }}
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ 
                        opacity: 1, 
                        scale: 1,
                        transition: { duration: 1.5, ease: 'easeOut' }
                    }}
                    animate={{
                        y: [0, 30, 0],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        ease: 'easeInOut'
                    }}
                />
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div className="section-header">
                        <h2>Our History</h2>
                    </div>
                    <div className="history-layout">
                        <div className="history-text">
                            <p>
                                Founded in 2008, Women in Safety Consulting was born from a simple yet powerful observation: the safety industry needed more female voices in leadership. What began as a series of informal meetups among a handful of passionate female safety professionals quickly revealed a widespread demand for a dedicated support system. The energy was undeniable, and the path forward became clear.
                            </p>
                            <p>
                                From these humble beginnings, we have grown into a leading consulting firm, recognized for our unwavering commitment to excellence and our tangible impact on workplace safety. Along the way, we have launched mentorship programs that have shaped careers, developed training that has saved lives, and built a vibrant, inclusive community. Our journey is a testament to the power of collaboration and the profound belief that a more diverse industry is a safer, stronger industry.
                            </p>
                        </div>
                        <HistoryIllustration />
                    </div>
                </div>
            </motion.section>
        </motion.div>
    );
};

export default AboutPage;