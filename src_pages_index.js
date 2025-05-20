import { FaBook } from 'react-icons/fa';
import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import { FaBook, FaRocket, FaTools, FaUserShield } from 'react-icons/fa';

const features = [
  {
    title: 'Getting Started',
    icon: <FaRocket />,
    description: 'Quick start guides and basic concepts to get you up and running.',
    articles: '5 articles'
  },
  {
    title: 'Security',
    icon: <FaUserShield />,
    description: 'Learn about security features and best practices.',
    articles: '8 articles'
  },
  {
    title: 'Integration',
    icon: <FaTools />,
    description: 'Integrate with your existing tools and workflows.',
    articles: '12 articles'
  },
  {
    title: 'Documentation',
    icon: <FaBook />,
    description: 'Detailed documentation and API references.',
    articles: '20 articles'
  }
];

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Search documentation, tutorials, and more!"
    >
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>How can we help you today?</h1>
          <div className={styles.searchBar}>
            <input
              type="text"
              placeholder="Search for tutorials, documentation, and more..."
              className={styles.searchInput}
            />
            <button className={styles.searchButton}>Search</button>
          </div>
        </div>
      </header>

      <section className={styles.cardsSection}>
        <h2 className={styles.sectionTitle}>Documentation</h2>
        <div className={styles.cardsGrid}>
          {features.map((feature, idx) => (
            <div className={styles.card} key={idx}>
              <div className={styles.cardIcon}>{feature.icon}</div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDescription}>{feature.description}</p>
              <p className={styles.cardFooter}>{feature.articles}</p>
            </div>
          ))}
        </div>
        <div className={styles.contactButtonWrapper}>
          <button className={styles.contactButton}>Contact Support</button>
        </div>
      </section>
    </Layout>
  );
}
