import React, { useState, useCallback, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MissionStats from './components/MissionStats';
import FounderMessage from './components/SuccessStories';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import ContactPage from './components/ContactPage';
import SearchResultsPage from './components/SearchResultsPage';
import Programs from './components/Programs';
import WhyChooseUs from './components/WhyChooseUs';
import BlogPage from './components/BlogPage';
import ArticlePage from './components/ArticlePage';
import { BLOG_DATA } from './constants';

export type Page = 'home' | 'about' | 'services' | 'contact' | 'search' | 'blog';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);


  // SEO: Update meta tags when page changes
  useEffect(() => {
    let title = 'Women in Safety Consulting | Empowering Female Safety Leaders';
    let description = 'A leading 100% woman-owned safety consultancy in South Africa. We offer specialized PPE, risk assessments, safety audits, and community programs.';

    const pageInfo = {
      home: { title, description },
      about: {
        title: 'About Us | Women in Safety Consulting',
        description: 'Learn about our mission to pioneer a safer, more inclusive future in the safety industry. Discover our history, values, and company overview.'
      },
      services: {
        title: 'Our Services | Women in Safety Consulting',
        description: 'Explore our comprehensive safety services including specialized PPE, ISO 9001 systems, risk assessments, audits, and health & safety consulting.'
      },
       blog: {
        title: 'Blog | Women in Safety Consulting',
        description: 'Read the latest articles, insights, and news from industry experts at Women in Safety Consulting. Topics include safety culture, compliance, and leadership.'
      },
      contact: {
        title: 'Contact Us | Women in Safety Consulting',
        description: 'Get in touch with our team. Reach out for inquiries, partnerships, or to join our community of female safety professionals in Johannesburg.'
      },
      search: {
        title: `Search Results for "${searchQuery}" | Women in Safety Consulting`,
        description: `Find information about our services, mission, and programs. Search results for "${searchQuery}".`
      }
    };
    
    if (currentPage === 'blog' && selectedArticleId) {
        const article = BLOG_DATA.find(a => a.id === selectedArticleId);
        if (article) {
            title = `${article.title} | Women in Safety Blog`;
            description = article.excerpt;
        }
    } else {
        const info = pageInfo[currentPage] || pageInfo.home;
        title = info.title;
        description = info.description;
    }
    
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', description);

  }, [currentPage, searchQuery, selectedArticleId]);

  const handleNavigation = (link: string, articleId?: string) => {
    const page = link.toLowerCase() as Page;
    const pageRoutes: Page[] = ['home', 'about', 'services', 'contact', 'blog'];
    const homeSections = ['programs', 'founder-message'];

    if (pageRoutes.includes(page)) {
      setCurrentPage(page);
      setSelectedArticleId(articleId || null);
      window.scrollTo(0, 0);
    } else if (homeSections.includes(page)) {
        setCurrentPage('home');
        setSelectedArticleId(null);
        // Use a timeout to ensure the component has rendered and the ID is available
        setTimeout(() => {
            const element = document.getElementById(page);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 100);
    }
  };

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    setCurrentPage('search');
    setSelectedArticleId(null);
    window.scrollTo(0, 0);
  }, []);

  const viewArticle = (articleId: string) => {
    handleNavigation('blog', articleId);
  };
  
  const backToBlog = () => {
    handleNavigation('blog');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero handleNavigation={handleNavigation} />
            <MissionStats />
            <Programs />
            <WhyChooseUs />
            <FounderMessage handleNavigation={handleNavigation} />
          </>
        );
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage />;
       case 'blog':
        return selectedArticleId ? (
          <ArticlePage articleId={selectedArticleId} onBack={backToBlog} />
        ) : (
          <BlogPage onViewArticle={viewArticle} />
        );
      case 'contact':
        return <ContactPage />;
      case 'search':
        return <SearchResultsPage query={searchQuery} handleNavigation={handleNavigation} />;
      default:
        return <Hero handleNavigation={handleNavigation} />;
    }
  }

  return (
    <>
      <Header 
        currentPage={currentPage} 
        handleNavigation={handleNavigation}
        handleSearch={handleSearch} 
      />
      <main>
        {renderPage()}
      </main>
      <Footer handleNavigation={handleNavigation} />
    </>
  );
};

export default App;