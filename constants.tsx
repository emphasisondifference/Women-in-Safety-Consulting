import React from 'react';
import type { Testimonial, Stat, Service, Event, SearchableItem, FAQItem, Article } from './types';

export const FOUNDER_MESSAGE_DATA: Testimonial = {
    quote: "There is no force more powerful than a woman determined to rise. We are here to provide the platform, the tools, and the community for that ascent in the world of safety.",
    author: 'Dominique Butcher',
    title: 'Founder & CEO',
    imageUrl: "data:image/svg+xml,%3csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cclipPath id='clip0'%3e%3ccircle cx='100' cy='100' r='100'/%3e%3c/clipPath%3e%3c/defs%3e%3cg clip-path='url(%23clip0)'%3e%3crect width='200' height='200' fill='%239A76D6'/%3e%3c!-- Face --%3e%3ccircle cx='100' cy='100' r='60' fill='%23fde0d6'/%3e%3cpath d='M100 160 Q120 180 140 160 L140 100 Q100 80 60 100 L60 160 Q80 180 100 160 Z' fill='%23fde0d6'/%3e%3c!-- Hair --%3e%3cpath d='M60 60 Q100 30 140 60 L150 120 Q100 130 50 120 Z' fill='%23333333'/%3e%3cpath d='M100 60 Q120 50 140 60' stroke='%23555555' stroke-width='4' fill='none'/%3e%3c!-- Eyes --%3e%3ccircle cx='85' cy='105' r='5' fill='%23333333'/%3e%3ccircle cx='115' cy='105' r='5' fill='%23333333'/%3e%3c!-- Smile --%3e%3cpath d='M90 130 Q100 140 110 130' stroke='%23333333' stroke-width='3' fill='none' stroke-linecap='round'/%3e%3c!-- Blouse --%3e%3cpath d='M70 160 L130 160 L120 200 L80 200 Z' fill='%23FFFFFF'/%3e%3cpath d='M100 160 L100 175 M85 160 L95 170 M115 160 L105 170' stroke='%23f0f0f0' stroke-width='2'/%3e%3c!-- Blazer --%3e%3cpath d='M60 160 L140 160 L140 200 H60 Z' fill='%23FF6B6B'/%3e%3cpath d='M100 160 L130 200 M100 160 L70 200' stroke='rgba(0,0,0,0.1)' stroke-width='5'/%3e%3c/g%3e%3c/svg%3e",
};

export const STATS_DATA: Stat[] = [
    { value: '45%', iconValue: '📈', label: 'Reduction in workplace injury potential' },
    { value: '10,000+', iconValue: '👩‍🎓', label: 'Women instructed and certified' },
    { value: '15+', iconValue: '🏆', label: 'Years of combined experience' },
];

// Icons for Services Page
const SmsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} aria-hidden="true" focusable="false"><path d="M32 8L10 18V32C10 44 32 56 32 56C32 56 54 44 54 32V18L32 8Z" stroke="#9A76D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/><path d="M39.6 37.1C42.9 34.9 44 32.6 44 30C44 23.4 38.6 18 32 18C25.4 18 20 23.4 20 30C20 36.6 25.4 42 32 42C34.4 42 36.4 41.2 38 40.1" stroke="#9A76D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/><path d="M42 20L40 22" stroke="#9A76D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/><path d="M22 40L24 38" stroke="#9A76D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/><path d="M42 40L40 38" stroke="#9A76D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/><path d="M22 20L24 22" stroke="#9A76D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/><circle cx="32" cy="30" r="4" stroke="#9A76D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
);
const RiskIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} aria-hidden="true" focusable="false"><path d="M32 12L54 52H10L32 12Z" stroke="#9A76D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/><path d="M32 26V38" stroke="#FF6B6B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/><path d="M32 44V46" stroke="#FF6B6B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
);
const SignageIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} aria-hidden="true" focusable="false"><path d="M32 14V50" stroke="#9A76D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/><path d="M32 22H46L54 30L46 38H32V22Z" stroke="#9A76D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
);
const PpeHardhatIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} aria-hidden="true" focusable="false"><path d="M14 38C14 32.5 18.5 28 24 28H40C45.5 28 50 32.5 50 38V42H14V38Z" stroke="#9A76D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/><path d="M24 28V22H40V28" stroke="#9A76D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 42H54" stroke="#9A76D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
);
const PpeGlovesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} aria-hidden="true" focusable="false"><path d="M22 38V22C22 18.7 24.7 16 28 16H36C39.3 16 42 18.7 42 22V38L32 48L22 38Z" stroke="#9A76D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/><path d="M22 28H16C13.8 28 12 29.8 12 32V40C12 42.2 13.8 44 16 44H18" stroke="#9A76D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/><path d="M42 28H48C50.2 28 52 29.8 52 32V40C52 42.2 50.2 44 48 44H46" stroke="#9A76D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
);
const AuditsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} aria-hidden="true" focusable="false"><path d="M44 14H20C17.8 14 16 15.8 16 18V46C16 48.2 17.8 50 20 50H44C46.2 50 48 48.2 48 46V18C48 15.8 46.2 14 44 14Z" stroke="#9A76D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/><path d="M24 26H40" stroke="#9A76D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/><path d="M24 34H40" stroke="#9A76D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/><path d="M24 42H32" stroke="#9A76D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/><path d="M30 14V10C30 8.9 30.9 8 32 8C33.1 8 34 8.9 34 10V14" stroke="#9A76D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/><path d="M38 38L42 42L38 46" stroke="#FF6B6B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
);
const BrandingIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} aria-hidden="true" focusable="false">
        <path d="M50 14H14L32 32L50 14Z" stroke="#9A76D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M32 32V50" stroke="#9A76D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M26 50H38" stroke="#9A76D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="32" cy="20" r="3" stroke="#FF6B6B" strokeWidth="3"/>
    </svg>
);
const MiningIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} aria-hidden="true" focusable="false">
        <path d="M14 38C14 32.5 18.5 28 24 28H40C45.5 28 50 32.5 50 38V42H14V38Z" stroke="#9A76D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 42H54" stroke="#9A76D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="28" y="20" width="8" height="8" rx="2" stroke="#9A76D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M38 24H42" stroke="#FF6B6B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M26 24H22" stroke="#FF6B6B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
const RoadSafetyIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} aria-hidden="true" focusable="false">
        <path d="M22 50H42V54H22V50Z" stroke="#9A76D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M32 12L25 50H39L32 12Z" stroke="#9A76D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M27.5 38H36.5" stroke="#FF6B6B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M29.5 26H34.5" stroke="#FF6B6B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
const CleaningIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} aria-hidden="true" focusable="false">
        <path d="M24 20V14H40V20" stroke="#9A76D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M32 14V10" stroke="#9A76D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M36 18H28" stroke="#9A76D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M40 20H24L20 52H44L40 20Z" stroke="#9A76D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M26 36H38" stroke="#9A76D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
const ConsultingIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} aria-hidden="true" focusable="false">
        <rect x="12" y="12" width="40" height="30" rx="2" stroke="#9A76D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M32 42V52" stroke="#9A76D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M24 52H40" stroke="#9A76D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 22H32" stroke="#FF6B6B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 32H44" stroke="#FF6B6B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
const FirstAidIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} aria-hidden="true" focusable="false">
        <rect x="14" y="18" width="36" height="28" rx="4" stroke="#9A76D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M32 26V38" stroke="#FF6B6B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M26 32H38" stroke="#FF6B6B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M26 18V14H38V18" stroke="#9A76D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

// FIX: Add missing PROGRAMS_DATA and its icons
// Icons for Programs section
const MentorshipIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} aria-hidden="true" focusable="false">
        <path d="M32 34C37.5228 34 42 29.5228 42 24C42 18.4772 37.5228 14 32 14C26.4772 14 22 18.4772 22 24C22 29.5228 26.4772 34 32 34Z" stroke="#9A76D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M44 48C44 42.4772 38.6274 38 32 38C25.3726 38 20 42.4772 20 48" stroke="#9A76D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 40l-2 2 2 2" stroke="#FF6B6B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M52 40l2 2-2 2" stroke="#FF6B6B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
const LeadershipIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} aria-hidden="true" focusable="false">
        <path d="M32 12L12 22L32 32L52 22L32 12Z" stroke="#9A76D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 38V22" stroke="#9A76D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M52 38V22" stroke="#9A76D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 27.5V44L32 50L42 44V27.5" stroke="#9A76D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
const CommunityIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} aria-hidden="true" focusable="false">
        <circle cx="32" cy="20" r="6" stroke="#9A76D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M42 32C42 26.4772 37.5228 22 32 22" stroke="#9A76D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="20" cy="34" r="6" stroke="#9A76D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M28 44C28 38.4772 24.5228 34 20 34" stroke="#9A76D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="44" cy="34" r="6" stroke="#9A76D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M36 44C36 38.4772 39.4772 34 44 34" stroke="#9A76D6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M32 26C32 34 26 40 20 40" stroke="#FF6B6B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M32 26C32 34 38 40 44 40" stroke="#FF6B6B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const PROGRAMS_DATA: Service[] = [
    { icon: <MentorshipIcon />, title: "Mentorship Program", description: "Connect with experienced safety professionals for one-on-one guidance and career support." },
    { icon: <LeadershipIcon />, title: "Leadership Development", description: "Cultivate your leadership potential with workshops designed for aspiring female leaders in safety." },
    { icon: <CommunityIcon />, title: "Community & Networking", description: "Join a vibrant community of peers for networking events, discussions, and collaborative opportunities." },
];

export const SERVICES_PAGE_DATA: Service[] = [
    { 
        icon: <PpeGlovesIcon/>, 
        title: "Specialized PPE", 
        description: "Customized personal protective equipment for unique industry hazards.",
        details: "We go beyond standard-issue gear. Our experts assess your specific workplace risks to design and source Personal Protective Equipment (PPE) that offers maximum protection without compromising comfort or productivity. From chemical-resistant gloves to arc-flash rated suits, we ensure your team is covered."
    },
    { 
        icon: <BrandingIcon/>, 
        title: "Company Logo Branding", 
        description: "Enhance brand visibility with custom logos on safety gear and apparel.",
        details: "Promote a unified and professional image while reinforcing safety culture. We offer high-quality logo application on a wide range of PPE, including hard hats, vests, and workwear, turning your safety equipment into a branding opportunity."
    },
    { 
        icon: <SignageIcon/>, 
        title: "Safety Signs", 
        description: "Clear, compliant signage for hazard communication and safety awareness.",
        details: "Effective signage is critical for accident prevention. We provide a comprehensive range of durable, OSHA/ANSI compliant safety signs for various applications, including hazard warnings, instructional signs, and emergency exit routes, tailored to your facility's needs."
    },
    { 
        icon: <PpeHardhatIcon/>, 
        title: "Construction PPE & Equipment", 
        description: "Durable safety gear and equipment tailored for the construction industry.",
        details: "The construction site is a high-risk environment. We supply a full suite of robust and reliable PPE, from head and fall protection to high-visibility apparel, ensuring your crew meets and exceeds all safety regulations on the job."
    },
    { 
        icon: <MiningIcon/>, 
        title: "Mining PPE & Equipment", 
        description: "Robust protective equipment designed for the demanding mining environment.",
        details: "Mining operations demand the toughest safety gear. We source and supply specialized equipment built to withstand harsh conditions, including respiratory protection, heavy-duty gloves, and intrinsically safe lighting, to protect your most valuable asset: your people."
    },
    { 
        icon: <RoadSafetyIcon/>, 
        title: "Road Safety Equipment", 
        description: "High-visibility gear, barriers, and signals for roadway work zones.",
        details: "Protect workers and the public in and around traffic work zones. Our inventory includes everything from traffic cones and barriers to reflective apparel and portable signage, ensuring compliance and enhancing safety for all."
    },
    { 
        icon: <CleaningIcon/>, 
        title: "Industrial & Cleaning Supplies", 
        description: "Professional-grade supplies to maintain a safe and hygienic environment.",
        details: "A clean worksite is a safe worksite. We offer a wide selection of industrial-grade cleaning chemicals, spill control kits, and janitorial supplies to help you manage workplace hygiene and respond effectively to spills and contaminants."
    },
    { 
        icon: <SmsIcon/>, 
        title: "ISO 9001 Systems & Docs", 
        description: "Develop compliant Safety Management Systems and Site Safety Files.",
        details: "Achieve and maintain ISO 9001 certification with our expert assistance. We help you develop, implement, and document a comprehensive Safety Management System (SMS) and prepare all necessary Site Safety Files, ensuring you meet the highest international standards."
    },
    { 
        icon: <AuditsIcon/>, 
        title: "Internal/External Audits", 
        description: "Thorough auditing to ensure compliance and identify improvement areas.",
        details: "Our certified auditors conduct comprehensive internal and external audits of your safety protocols. We identify gaps, ensure regulatory compliance, and provide actionable recommendations to continuously improve your safety performance and culture."
    },
    { 
        icon: <RiskIcon/>, 
        title: "Site & Risk Assessments", 
        description: "In-depth analysis to proactively identify and mitigate workplace hazards.",
        details: "A cornerstone of any safety program. Our experts perform detailed on-site assessments to identify potential hazards, evaluate risks, and develop effective control measures. We provide a clear, documented pathway to a safer workplace."
    },
    { 
        icon: <ConsultingIcon/>, 
        title: "Health & Safety Consulting", 
        description: "Expert guidance and strategy to build a world-class safety culture.",
        details: "Leverage our deep industry expertise to transform your safety culture. We partner with you to develop strategic safety initiatives, provide leadership training, and implement behavioral-based safety programs that drive lasting change."
    },
    { 
        icon: <FirstAidIcon/>, 
        title: "First Aid Services", 
        description: "Comprehensive first aid kit inspections, restocking, and compliance checks.",
        details: "Be prepared for any incident. We offer scheduled services to inspect, clean, and restock all your workplace first aid stations, ensuring they are always compliant with regulations and fully equipped to handle emergencies."
    },
];

export const EVENTS_DATA: Event[] = [
  {
    month: 'AUG',
    day: '15',
    title: 'Annual Safety Leadership Conference',
    details: 'Join us for a day of insightful talks and networking opportunities with leaders in the safety industry.',
  },
  {
    month: 'SEP',
    day: '22',
    title: 'Workshop: Advanced Risk Assessment',
    details: 'A hands-on workshop designed to enhance your skills in identifying and mitigating workplace hazards.',
  },
  {
    month: 'OCT',
    day: '10',
    title: 'Webinar: The Future of Workplace Safety',
    details: 'Explore emerging trends and technologies that are shaping the future of occupational safety.',
  },
];

export const BLOG_DATA: Article[] = [
    {
        id: 'top-10-safety-consulting-companies',
        title: 'Top 10 Safety Consulting Companies in South Africa: A 2024 Review',
        author: 'Dominique Butcher',
        date: 'July 28, 2024',
        excerpt: 'In a landscape where workplace safety is paramount, selecting the right consulting partner is crucial. We review the leading safety consulting firms in South Africa for 2024, highlighting their strengths and specializations.',
        featured: true,
        content: [
            "South Africa's industrial, mining, and construction sectors are cornerstones of the economy, but they also present significant workplace safety challenges. As regulations evolve and the demand for safer work environments grows, the role of expert safety consultants has never been more critical. A top-tier safety consultancy does more than ensure compliance; it fosters a proactive safety culture that protects employees, reduces financial risk, and enhances operational efficiency. In this 2024 review, we evaluate the top 10 safety consulting companies in South Africa, based on their industry reputation, range of services, client feedback, and innovative approaches to occupational health and safety.",
            "When selecting a partner, it's essential to look beyond a simple checklist of services. Key differentiators include a deep understanding of sector-specific risks, the ability to provide customized solutions, and a commitment to ongoing support and training. The best firms act as strategic partners, integrating seamlessly with your team to build a sustainable safety framework. This list aims to provide a comprehensive guide for businesses seeking to elevate their safety standards.",
            "Here are the top 10 companies making a significant impact in 2024:",
            "1. **Women in Safety Consulting**: As a 100% woman-owned firm, we bring a unique and vital perspective to the industry. Specializing in creating inclusive safety cultures and empowering female leadership, we offer bespoke solutions across mining, construction, and corporate sectors. Our focus on community and mentorship sets us apart.",
            "2. **NOSA**: A long-standing leader in the field, NOSA is renowned for its comprehensive training programs and auditing services that are recognized globally.",
            "3. **MakroSafe**: Known for their technology-driven approach, MakroSafe offers an integrated software solution to help businesses manage safety compliance efficiently.",
            "4. **Action OHS Consulting**: With a strong focus on legal compliance, they provide expert guidance on the Occupational Health and Safety Act.",
            "5. **Absolute Health Services**: They offer a holistic approach by combining occupational health services, such as medical surveillance, with traditional safety consulting.",
            "6. **The SHE Group**: Experts in Safety, Health, and Environmental (SHE) management, they are a top choice for companies needing integrated SHEQ systems.",
            "7. **SAI Global**: Offering a broad range of risk management solutions, their expertise extends beyond safety to include quality and environmental standards.",
            "8. **ConSafe**: A specialist in the construction industry, ConSafe provides invaluable site-specific safety files and risk assessments.",
        ]
    },
    {
        id: 'critical-role-of-women',
        title: "The Critical Role of Women in Shaping South Africa's Safety Culture",
        author: 'Dominique Butcher',
        date: 'July 25, 2024',
        excerpt: 'Diversity is not just a buzzword; it’s a cornerstone of a robust safety culture. We explore how female leadership and participation are transforming the safety industry for the better.',
        content: [
            "For decades, the health and safety industry, particularly in sectors like mining and construction, has been predominantly male-driven. However, a transformative shift is underway. Women are not only entering the field in greater numbers but are also ascending to leadership roles, bringing fresh perspectives that are fundamentally reshaping South Africa's safety culture. This evolution is not just about equity; it's about effectiveness. Diverse teams are proven to be more innovative, communicative, and thorough—qualities that are essential in risk management and accident prevention.",
            "Women often bring a different approach to leadership, emphasizing collaboration, communication, and empathy. In a safety context, these skills are invaluable. A leader who listens actively and builds trust is more likely to receive honest feedback from workers on the ground about potential hazards. This open communication is the lifeblood of a proactive safety culture, where issues are identified and addressed before they lead to incidents. By fostering more inclusive environments, companies can tap into a wider pool of talent and ideas, leading to more comprehensive and effective safety strategies.",
            "At Women in Safety Consulting, we have seen firsthand how empowering female professionals creates a ripple effect. It inspires a new generation to pursue careers in safety, challenges outdated stereotypes, and ultimately leads to workplaces that are safer and more respectful for everyone. The future of safety in South Africa is not just about new technologies or stricter regulations; it's about harnessing the full potential of our entire workforce.",
        ]
    },
    {
        id: 'navigating-iso-9001',
        title: 'Navigating ISO 9001: A Practical Guide for Johannesburg Businesses',
        author: 'Safety Systems Team',
        date: 'July 22, 2024',
        excerpt: 'ISO 9001 certification can seem daunting, but its benefits are undeniable. This guide breaks down the process and explains how it can enhance your safety management system.',
        content: [
            "For businesses in Johannesburg's competitive market, achieving ISO 9001 certification is a powerful statement of commitment to quality and operational excellence. While often associated with quality management, the principles of ISO 9001 are deeply intertwined with effective health and safety management. The standard's emphasis on process-driven approaches, risk-based thinking, and continual improvement provides a robust framework for building a world-class Safety Management System (SMS).",
            "So, where do you begin? The journey to ISO 9001 starts with a gap analysis to understand how your current processes measure up to the standard's requirements. This involves documenting your procedures, defining roles and responsibilities, and establishing clear objectives for both quality and safety. A key aspect is 'risk-based thinking'—proactively identifying potential issues (including workplace hazards) and implementing controls to mitigate them. This aligns perfectly with the core purpose of health and safety regulations.",
            "Implementing ISO 9001 is not just about paperwork; it's about embedding a culture of quality and safety into your organization. It requires leadership commitment, employee engagement, and a focus on customer (and employee) satisfaction. The benefits extend far beyond the certificate on the wall; they include improved efficiency, reduced incidents, greater consistency, and enhanced brand reputation. Partnering with a consultancy that understands both the ISO standards and the specific challenges of your industry can streamline the process, ensuring a successful certification that delivers tangible value to your business.",
        ]
    },
    {
        id: 'common-workplace-hazards-mining',
        title: '5 Common Workplace Hazards in Mining and How to Mitigate Them',
        author: 'Risk Assessment Unit',
        date: 'July 18, 2024',
        excerpt: 'The mining industry is one of South Africa’s most vital, but also one of its most hazardous. We identify five common risks and the essential strategies to keep workers safe.',
        content: [
            "The mining sector in South Africa is a high-risk environment where a proactive approach to safety is not just a legal requirement but a moral imperative. Understanding and mitigating the most common hazards is the first step toward a zero-harm workplace. Here are five prevalent risks and strategies to control them:",
            "**1. Rockfalls and Ground Instability:** Unstable ground is a constant threat. Mitigation involves rigorous geotechnical assessments, implementing support systems like rock bolts and mesh, and continuous monitoring of ground conditions. Exclusion zones in high-risk areas are also critical.",
            "**2. Dust and Respiratory Hazards:** Inhalation of coal or silica dust can lead to severe long-term illnesses. Control measures include advanced ventilation systems to dilute and extract dust, wet drilling techniques to suppress dust at the source, and mandatory use of appropriate Respiratory Protective Equipment (RPE). Regular health surveillance is essential to monitor worker health.",
            "**3. Mobile Equipment and Vehicle Collisions:** The movement of heavy machinery in confined underground spaces creates a high risk of collisions. This can be managed through traffic management plans, proximity detection systems on vehicles, positive communication protocols (e.g., radio call-ups at intersections), and ensuring high visibility for both vehicles and pedestrians.",
            "**4. Noise-Induced Hearing Loss:** The constant operation of loud machinery can cause permanent hearing damage. Engineering controls, such as enclosing or muffling equipment, are the first line of defense. This should be supplemented with mandatory hearing protection in designated areas and regular audiometric testing for all exposed employees.",
            "**5. Fire and Explosions:** The presence of flammable gases like methane and combustible materials like coal dust creates a significant risk of fire. Mitigation strategies include robust ventilation to prevent gas accumulation, use of intrinsically safe electrical equipment, strict no-smoking policies, and comprehensive emergency response plans with regular drills.",
        ]
    },
    {
        id: 'beyond-compliance-safety-culture',
        title: 'Beyond Compliance: Building a Proactive Safety Culture That Lasts',
        author: 'Dominique Butcher',
        date: 'July 15, 2024',
        excerpt: 'Meeting legal requirements is the baseline, not the goal. A truly safe workplace is built on a shared culture of responsibility, care, and continuous improvement. Here’s how to build it.',
        content: [
            "Compliance with the Occupational Health and Safety Act is the legal and ethical minimum for any responsible business. However, organizations that stop at compliance often find themselves in a reactive cycle—addressing issues only after an incident occurs. The most resilient and successful companies move beyond this baseline to cultivate a proactive safety culture, where every employee feels a sense of ownership and responsibility for their own safety and that of their colleagues.",
            "What does a proactive safety culture look like? It's an environment where reporting a near-miss is encouraged and celebrated as a learning opportunity, not punished as a mistake. It's where leadership is visibly committed to safety, not just through policies, but through their daily actions and conversations. It's where safety is integrated into every business decision, from procurement of new equipment to the planning of a new project.",
            "Building this culture requires a multi-faceted approach. It starts with strong, visible leadership commitment. It is nurtured through continuous, engaging training that goes beyond rules and regulations to explain the 'why' behind them. It is sustained by empowering employees to stop work if they feel unsafe, without fear of reprisal, and by involving them in the development of safety procedures. Ultimately, a lasting safety culture transforms safety from a 'department' into a shared value that protects your people, strengthens your brand, and drives sustainable success.",
        ]
    }
];

export const SEARCHABLE_CONTENT: SearchableItem[] = [
  ...SERVICES_PAGE_DATA.map((service, index) => ({
    id: `service-${index}`,
    type: 'Service',
    title: service.title,
    content: service.description,
    path: '#services',
  })),
  ...BLOG_DATA.map(article => ({
      id: article.id,
      type: 'Article',
      title: article.title,
      content: article.excerpt,
      path: '#blog'
  })),
  {
    id: 'mission',
    type: 'About',
    title: 'Our Mission',
    content: 'To empower women in safety professions through mentoring, education, and community, fostering a more inclusive future for all.',
    path: '#home',
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: "What types of industries do you serve?",
    answer: "We serve a wide range of industries including corporate, manufacturing, mining, and civil engineering. Our expertise allows us to tailor safety solutions to the unique challenges of each sector."
  },
  {
    question: "Are you a certified and compliant organization?",
    answer: "Absolutely. We are a 100% woman-owned consultancy and adhere to the highest standards of the health, safety, and environmental sectors in South Africa. We help our clients achieve and exceed compliance with all relevant Workplace Health and Safety (WHS) regulations."
  },
  {
    question: "How does your consulting process work?",
    answer: "Our process begins with a thorough consultation to understand your specific needs. We then conduct comprehensive site and risk assessments to identify hazards. Based on our findings, we develop and help implement a customized safety management system, provide training, and offer ongoing support to ensure a lasting culture of safety."
  },
  {
    question: "What makes Women in Safety Consulting different?",
    answer: "Our unique perspective as a woman-owned firm in a male-dominated industry sets us apart. We focus not only on compliance but on building a supportive community and empowering the next generation of female safety leaders through mentorship and targeted programs."
  },
  {
    question: "How can I partner with or join your community?",
    answer: "We welcome partnerships and new members! Please fill out our contact form with your inquiry, and we will get back to you promptly. We have various opportunities for collaboration, sponsorship, and professional networking."
  }
];