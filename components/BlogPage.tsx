import React from 'react';
import { motion } from 'framer-motion';
import { BLOG_DATA } from '../constants';
import { Article } from '../types';

interface BlogPageProps {
  onViewArticle: (articleId: string) => void;
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: 'easeOut' }
    }
};

const ArticleImage = ({ title }: { title: string }) => (
    <div className="article-card-image">
        <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" aria-label={`Decorative image for article titled ${title}`}>
            <rect width="400" height="200" fill="#F1F5F9" />
            <circle cx="100" cy="150" r="80" fill="#A78BFA" opacity="0.2" />
            <circle cx="320" cy="80" r="120" fill="#EC4899" opacity="0.15" />
            <path d="M 0 50 Q 200 100 400 50" stroke="#6D28D9" strokeWidth="2" fill="none" opacity="0.3" />
            <path d="M 0 150 Q 200 100 400 150" stroke="#DB2777" strokeWidth="2" fill="none" opacity="0.3" />
        </svg>
    </div>
);

const FeaturedArticleImage = ({ title }: { title: string }) => (
    <div className="featured-article-image">
        <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" aria-label={`Decorative image for featured article titled ${title}`}>
            <rect width="500" height="400" fill="#F8FAFC" />
            <circle cx="150" cy="300" r="150" fill="#A78BFA" opacity="0.2" />
            <circle cx="400" cy="100" r="120" fill="#EC4899" opacity="0.15" />
             <path d="M 0 100 C 150 250, 350 -50, 500 100" stroke="#6D28D9" strokeWidth="3" fill="none" opacity="0.4" strokeDasharray="10 5" />
             <path d="M 0 300 C 150 150, 350 450, 500 300" stroke="#DB2777" strokeWidth="3" fill="none" opacity="0.4" strokeDasharray="10 5" />
        </svg>
    </div>
);


const BlogPage: React.FC<BlogPageProps> = ({ onViewArticle }) => {
    const featuredArticle = BLOG_DATA.find(article => article.featured) || BLOG_DATA[0];
    const otherArticles = BLOG_DATA.filter(article => article.id !== featuredArticle.id);
    
    const handleArticleClick = (e: React.MouseEvent<HTMLAnchorElement>, articleId: string) => {
        e.preventDefault();
        onViewArticle(articleId);
    };

    return (
        <motion.section 
            id="blog" 
            className="blog-page"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="container">
                <motion.div className="section-header" variants={itemVariants}>
                    <h1 className="page-title">Our Blog</h1>
                    <p className="page-subtitle">Insights, news, and stories from our team of safety experts.</p>
                </motion.div>

                {featuredArticle && (
                    <motion.div className="featured-article" variants={itemVariants}>
                        <div className="featured-article-image-container">
                             <FeaturedArticleImage title={featuredArticle.title} />
                        </div>
                        <div className="featured-article-content">
                            <h2>
                                <a href={`#blog/${featuredArticle.id}`} onClick={(e) => handleArticleClick(e, featuredArticle.id)}>
                                    {featuredArticle.title}
                                </a>
                            </h2>
                            <p className="article-meta">By <span>{featuredArticle.author}</span> on {featuredArticle.date}</p>
                            <p>{featuredArticle.excerpt}</p>
                            <a href={`#blog/${featuredArticle.id}`} onClick={(e) => handleArticleClick(e, featuredArticle.id)} className="btn btn-primary">
                                Read More
                            </a>
                        </div>
                    </motion.div>
                )}

                <motion.div className="articles-grid" variants={containerVariants}>
                    {otherArticles.map((article: Article) => (
                        <motion.div key={article.id} className="article-card" variants={itemVariants}>
                            <a href={`#blog/${article.id}`} onClick={(e) => handleArticleClick(e, article.id)} aria-label={`Read more about ${article.title}`}>
                                <ArticleImage title={article.title} />
                            </a>
                            <div className="article-card-content">
                                <h3>
                                    <a href={`#blog/${article.id}`} onClick={(e) => handleArticleClick(e, article.id)}>
                                        {article.title}
                                    </a>
                                </h3>
                                <p className="article-meta">By <span>{article.author}</span> on {article.date}</p>
                                <p>{article.excerpt}</p>
                                <a href={`#blog/${article.id}`} onClick={(e) => handleArticleClick(e, article.id)}>Read More</a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default BlogPage;
