import { useState } from "react";
import styles from '../styles/Services.module.css';

export default function Services() {
    const [activeAccordion, setActiveAccordion] = useState("uiux");
    console.log("activeAccordion", activeAccordion);

    const servicesData = [
        {
            id: 'uiux',
            title: 'UI/UX Designing',
            listItems: [
                'Wireframing & Prototyping',
                'User Journey Mapping',
                'Website & App Interface Design',
                'Responsive Design (Mobile, Tablet, Desktop)',
            ],
            linkText: 'Discover all services we provide',
            linkUrl: '#',
            image: '/service_image.png',
        },
        {
            id: 'webdev',
            title: 'Website Development Services',
            listItems: [
                'Custom Website Development',
                'CMS Development (WordPress, Shopify, Webflow, etc.)',
                'E-commerce Website Development',
                'Landing Page Development',
            ],
            linkText: 'Discover all services we provide',
            linkUrl: '#',
            image: '/service_image.png',
        },
        {
            id: 'mobile',
            title: 'Mobile App Development',
            listItems: [
                'iOS App Development',
                'Android App Development',
                'Cross-Platform App Development (Flutter, React Native)',
                'App UI/UX Design',
            ],
            linkText: 'Discover all services we provide',
            linkUrl: '#',
            image: '/service_image.png',
        },
        {
            id: 'marketing',
            title: 'Digital Marketing Services',
            listItems: [
                'Search Engine Optimization (SEO)',
                'Pay-Per-Click (PPC) Advertising (Google Ads, Bing Ads)',
                'Social Media Marketing (Organic & Paid)',
                'Content Marketing (Blogs, Articles, Video Content)',
                'Email Marketing Campaigns',
                'Influencer Marketing',
                'Online Reputation Management (ORM)',
                'Affiliate Marketing',
                'Marketing Automation (HubSpot, ActiveCampaign, etc.)',
            ],
            linkText: 'Discover all services we provide',
            linkUrl: '#',
            image: '/service_image.png',
        },
        {
            id: 'ai',
            title: 'AI & Automations',
            listItems: [
                'AI Chatbot Development',
                'AI-driven Content Creation (text, image, video)',
                'Custom AI Models for Business Workflows',
            ],
            linkText: 'Discover all services we provide',
            linkUrl: '#',
            image: '/service_image.png',
        },
        {
            id: 'cro',
            title: 'Conversion Rate Optimization',
            listItems: [
                'CRO Audits (Landing Pages, Funnels, Websites)',
                'Heatmap & Session Replay Analysis',
            ],
            linkText: 'Discover all services we provide',
            linkUrl: '#',
            image: '/service_image.png',
        },
    ];

    const handleToggle = (id) => {
        setActiveAccordion(prev => (prev === id ? null : id));
    };

    return (
        <div id="services" className={styles.services}>
            <div className={styles.sectionIntro}>
                <span className={styles.icon}><img src="STAR.svg" alt="STAR" /></span>
                <span className={styles.label}>OUR SERVICES</span>
            </div>
            <h2 className={styles.heading}>See What We Can Do For You</h2>
            <div className={styles.contentHeader}>
                <p>Service Name</p>
                <p>Click to get more info</p>
            </div>

            {servicesData.map((service) => {
                console.log("service.id", service.id);
                return (
                    <div className={styles.accordion} key={service.id}>
                        <div
                            className={`${styles.accordionTitle} ${activeAccordion === service.id ? styles.active : ''
                                }`}
                            onClick={() => handleToggle(service.id)}
                        >
                            {service.title}
                            <span className={styles.arrow}>
                                {activeAccordion === service.id ? '▲' : '▼'}
                            </span>
                        </div>

                        {activeAccordion === service.id && (
                            <div className={styles.accordionContent}>
                                <div className={styles.textContent}>
                                    <ul>
                                        {service.listItems.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>

                                    {service.linkText && (
                                        <a className={styles.linkButton} href={service.linkUrl}>
                                            {service.linkText}
                                        </a>
                                    )}
                                </div>

                                {service.image && (
                                    <div className={styles.imageContent}>
                                        <img src={service.image} alt={service.title} />
                                    </div>
                                )}
                            </div>
                        )}

                    </div>
                )
            })}
        </div>
    );
}