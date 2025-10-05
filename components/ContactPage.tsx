// FIX: Reverted React namespace import to fix framer-motion prop type errors.
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import FAQ from './FAQ';
import { FAQ_DATA } from '../constants';

const EmailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true" focusable="false"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>;
const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true" focusable="false"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.211-.992-.55-1.35l-2.455-2.456a2.25 2.25 0 00-3.182 0l-1.921 1.921c-.436.436-1.12.593-1.745.41l-2.923-1.118c-.625-.238-1.121-.734-1.359-1.359l-1.118-2.923c-.183-.625-.026-1.309.41-1.745l1.921-1.921a2.25 2.25 0 000-3.182L6.804 3.3a2.25 2.25 0 00-1.35-.55H4a2.25 2.25 0 00-2.25 2.25v2.25z" /></svg>;
const LocationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true" focusable="false"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>;
const ClockIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true" focusable="false"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const FacebookIcon = () => <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 2.04c-5.5 0-10 4.49-10 10s4.5 10 10 10 10-4.49 10-10-4.5-10-10-10zm2.5 10h-2v7h-3v-7h-2v-2h2v-1.5c0-1.4.9-2.5 2.5-2.5h1.5v2h-1c-.2 0-.5.1-.5.5v1.5h2l-.5 2z"/></svg>;
const LinkedInIcon = () => <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6.5 21.5h-5v-13h5v13zM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.5 2.5-2.5 2.5 1.2 2.5 2.5-1 2.5-2.5 2.5zm16.5 15h-5v-6.3c0-1.5-.3-2.7-2-2.7-1.1 0-1.8.7-2.1 1.4-.1.2-.1.5-.1.8v6.8h-5v-13h5v2.2c.6-1 1.7-2.4 4.5-2.4 3.3 0 5.6 2.2 5.6 7v6.2z"/></svg>;

const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { 
            duration: 0.5,
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

interface FormState {
    name: string;
    email: string;
    'phone-general': string;
    subject: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    message?: string;
}

const ContactPage = () => {
    const [formData, setFormData] = useState<FormState>({
        name: '',
        email: '',
        'phone-general': '',
        subject: 'General Inquiry',
        message: '',
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    const validate = (): FormErrors => {
        const newErrors: FormErrors = {};
        if (!formData.name.trim()) {
            newErrors.name = "Name is required.";
        }
        if (!formData.email.trim()) {
            newErrors.email = "Email address is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address.";
        }
        if (!formData.message.trim()) {
            newErrors.message = "Message is required.";
        }
        return newErrors;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(false);
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            console.log("Form submitted successfully:", formData);
            setErrors({});
            setIsSubmitted(true);
            // Optionally reset form
            // setFormData({ name: '', email: '', 'phone-general': '', subject: 'General Inquiry', message: '' });
        }
    };


    return (
        <motion.section 
            id="contact" 
            className="contact-page"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div
                style={{
                    position: 'absolute',
                    width: 0,
                    height: 0,
                    borderStyle: 'solid',
                    top: '200px',
                    left: '-80px',
                    borderWidth: '0 80px 80px 80px',
                    borderColor: 'transparent transparent var(--coral-pink) transparent',
                    zIndex: 0
                }}
                initial={{ opacity: 0, rotate: 45 }}
                whileInView={{ 
                    opacity: 0.2, 
                    transition: { duration: 1, ease: 'easeOut' }
                }}
                animate={{
                    rotate: [45, 65, 45],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut'
                }}
            />
            <motion.div
                style={{
                    position: 'absolute',
                    width: 0,
                    height: 0,
                    borderStyle: 'solid',
                    bottom: '200px',
                    right: '-80px',
                    borderWidth: '80px 80px 0 80px',
                    borderColor: 'var(--coral-pink) transparent transparent transparent',
                    zIndex: 0
                }}
                initial={{ opacity: 0, rotate: -45 }}
                whileInView={{ 
                    opacity: 0.2, 
                    transition: { duration: 1, ease: 'easeOut' }
                }}
                animate={{
                    rotate: [-45, -25, -45],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut'
                }}
            />

            <div className="container">
                <motion.div style={{textAlign: 'center'}} variants={itemVariants}>
                    <h1 className="page-title">CONTACT US</h1>
                    <p className="page-subtitle">We'd love to hear from you. Please feel free to reach out with any inquiries, feedback, or collaboration opportunities.</p>
                </motion.div>

                <motion.div className="contact-grid" variants={sectionVariants}>
                    <motion.div 
                        className="contact-form-container"
                        variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
                    >
                         {isSubmitted && (
                            <motion.div className="success-message" variants={itemVariants}>
                                Thank you for your message! We will get back to you shortly.
                            </motion.div>
                        )}
                        <motion.form 
                            className="contact-form" 
                            onSubmit={handleSubmit} 
                            noValidate
                            variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
                        >
                            <motion.div className="form-group" variants={itemVariants}>
                                <label htmlFor="name">Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={errors.name ? 'invalid' : ''}
                                    aria-invalid={!!errors.name}
                                    aria-describedby={errors.name ? 'name-error' : undefined}
                                />
                                {errors.name && <div id="name-error" className="error-message">{errors.name}</div>}
                            </motion.div>
                            <motion.div className="form-group" variants={itemVariants}>
                                <label htmlFor="email">Email Address</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={errors.email ? 'invalid' : ''}
                                    aria-invalid={!!errors.email}
                                    aria-describedby={errors.email ? 'email-error' : undefined}
                                />
                                {errors.email && <div id="email-error" className="error-message">{errors.email}</div>}
                            </motion.div>
                            <motion.div className="form-group" variants={itemVariants}>
                                <label htmlFor="phone-general">Phone Number (Optional)</label>
                                <input 
                                  type="tel" 
                                  id="phone-general" 
                                  name="phone-general" 
                                  value={formData['phone-general']}
                                  onChange={handleChange}
                                />
                            </motion.div>
                            <motion.div className="form-group" variants={itemVariants}>
                                <label htmlFor="subject">Subject / Topic</label>
                                <select 
                                  id="subject" 
                                  name="subject"
                                  value={formData.subject}
                                  onChange={handleChange}
                                >
                                    <option>General Inquiry</option>
                                    <option>Programs</option>
                                    <option>Partnerships</option>
                                    <option>Membership</option>
                                </select>
                            </motion.div>
                            <motion.div className="form-group" variants={itemVariants}>
                                <label htmlFor="message">Message</label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={errors.message ? 'invalid' : ''}
                                    aria-invalid={!!errors.message}
                                    aria-describedby={errors.message ? 'message-error' : undefined}
                                ></textarea>
                                {errors.message && <div id="message-error" className="error-message">{errors.message}</div>}
                            </motion.div>
                            <motion.button type="submit" className="btn btn-primary" variants={itemVariants}>
                                Submit
                            </motion.button>
                        </motion.form>
                    </motion.div>
                    <motion.aside className="contact-sidebar" variants={itemVariants}>
                        <div className="info-block">
                            <h3>DIRECT CONTACT INFORMATION</h3>
                            <ul>
                                <li><EmailIcon /> <a href="mailto:info@womaninsafetyconsulting.co.za">info@womaninsafetyconsulting.co.za</a></li>
                                <li><PhoneIcon /> <span>+27740116930</span></li>
                                <li><LocationIcon /> <span>23 Pauline Smith Crescent, Elandspark, Johannesburg, 2197, South Africa</span></li>
                                <li><ClockIcon /> <span>Mon-Fri: 9:00 AM - 5:00 PM EST</span></li>
                            </ul>
                        </div>
                        <div className="info-block department-contacts">
                            <h3>KEY CONTACTS</h3>
                            <p><strong>Dominique Butcher (Founder):</strong><br/><a href="mailto:Dominique@womaninsafetyconsulting.co.za">Dominique@womaninsafetyconsulting.co.za</a></p>
                            <p><strong>Sales Inquiries:</strong><br/><a href="mailto:Sales@womaninsafetyconsulting.co.za">Sales@womaninsafetyconsulting.co.za</a></p>
                        </div>
                        <div className="info-block">
                             <div className="map-container">
                                <img src="data:image/svg+xml,%3csvg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='400' height='300' fill='%23f5f5f5'/%3e%3cpath d='M-100 150 Q200 -50 500 150' stroke='%23e0e0e0' stroke-width='30' fill='none'/%3e%3cpath d='M-100 200 Q200 50 500 200' stroke='%23e9ecef' stroke-width='20' fill='none'/%3e%3cpath d='M150 -50 Q50 150 150 350' stroke='%23e9ecef' stroke-width='20' fill='none'/%3e%3cpath d='M250 -50 Q450 150 250 350' stroke='%23e0e0e0' stroke-width='30' fill='none'/%3e%3ccircle cx='200' cy='150' r='80' fill='rgba(154,118,214,0.1)'/%3e%3ccircle cx='200' cy='150' r='10' fill='%23FF6B6B' stroke='%23fff' stroke-width='3'/%3e%3cpath d='M200 140 C190 110 230 110 220 140' fill='%23FF6B6B'/%3e%3ctext x='200' y='180' font-family='Montserrat, sans-serif' font-size='12' fill='%23333' text-anchor='middle' font-weight='bold'%3eJOHANNESBURG%3c/text%3e%3c/svg%3e" alt="Stylized map showing the location of the Women in Safety Consulting office in Johannesburg." />
                            </div>
                            <a href="#">Find Our Office / Get Directions</a>
                        </div>
                        <div className="info-block">
                            <h3>CONNECT WITH US</h3>
                            <p>Stay connected through our channels</p>
                            <div className="social-links-contact">
                                <a href="#" aria-label="Facebook"><FacebookIcon /></a>
                                <a href="#" aria-label="LinkedIn"><LinkedInIcon /></a>
                            </div>
                        </div>
                    </motion.aside>
                </motion.div>
                
                <motion.section className="faq-section" variants={itemVariants}>
                    <div className="section-header">
                        <h2>Frequently Asked Questions</h2>
                        <p>Find quick answers to common questions about our services and mission.</p>
                    </div>
                    <FAQ items={FAQ_DATA} />
                </motion.section>
            </div>
        </motion.section>
    );
};

export default ContactPage;