import React from 'react';
import { motion } from 'framer-motion';
import { BLOG_DATA } from '../constants';
import { Article } from '../types';

interface ArticlePageProps {
  articleId: string;
  onBack: () => void;
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: 'easeOut' }
    }
};

const ArticlePage: React.FC<ArticlePageProps> = ({ articleId, onBack }) => {
  const article = BLOG_DATA.find(a => a.id === articleId);

  if (!article) {
    return (
      <div className="article-page">
        <div className="container article-container">
          <button onClick={onBack} className="back-to-blog">
             &larr; Back to Blog
          </button>
          <h1>Article not found</h1>
          <p>The article you are looking for does not exist.</p>
        </div>
      </div>
    );
  }

  return (
    <motion.section 
        className="article-page"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
    >
      <div className="container article-container">
        <motion.button onClick={onBack} className="back-to-blog" variants={itemVariants}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
            </svg>
            <span>Back to Blog</span>
        </motion.button>
        <motion.header className="article-header" variants={itemVariants}>
          <h1>{article.title}</h1>
          <p className="article-meta">By <span>{article.author}</span> on {article.date}</p>
        </motion.header>
        <motion.div className="article-content" variants={containerVariants}>
            {article.content.map((paragraph, index) => {
                const isHeading = paragraph.match(/^(\d+\.\s\*\*|##\s)(.*)/);
                if (isHeading) {
                    const headingText = isHeading[2].replace(/\*\*/g, '');
                     // Simple check for what kind of heading, default to h3
                    const Tag = paragraph.startsWith('##') ? 'h2' : 'h3';
                    return <motion.div key={index} variants={itemVariants}><Tag>{headingText}</Tag></motion.div>;
                }
                return <motion.p key={index} variants={itemVariants}>{paragraph}</motion.p>
            })}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ArticlePage;
