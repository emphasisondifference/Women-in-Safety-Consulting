import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Page } from '../App';

const LogoIcon: React.FC = () => (
    <svg width="44" height="48" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
        <defs>
            <linearGradient id="shieldGradient" x1="0.5" y1="0" x2="0.5" y2="1">
                <stop offset="0%" stopColor="#A78BFA" />
                <stop offset="100%" stopColor="#6D28D9" />
            </linearGradient>
        </defs>
        <path d="M22 0L0 7.33333V21.6C0 34.2 9.35 45.9333 22 48C34.65 45.9333 44 34.2 44 21.6V7.33333L22 0Z" fill="url(#shieldGradient)"/>
        <path d="M14 42 C15 32, 29 32, 30 42 Z" fill="#EC4899"/>
        <circle cx="22" cy="25" r="7" fill="white" />
    </svg>
);


interface HeaderProps {
  currentPage: Page;
  handleNavigation: (link: string) => void;
  handleSearch: (query: string) => void;
}

const headerVariants = {
    top: { 
        backgroundColor: 'rgba(248, 250, 252, 0)',
        backdropFilter: 'blur(0px)',
        WebkitBackdropFilter: 'blur(0px)',
        boxShadow: '0 0 0 rgba(0,0,0,0)'
    },
    scrolled: { 
        backgroundColor: 'rgba(248, 250, 252, 0.8)',
        backdropFilter: 'blur(5px)',
        WebkitBackdropFilter: 'blur(5px)',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)'
    }
};


const Header: React.FC<HeaderProps> = ({ currentPage, handleNavigation, handleSearch }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  
  const navLinks = ['Home', 'About', 'Services', 'Blog', 'Contact'];

  // Scroll detection effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Debounced search effect
  useEffect(() => {
    if (!isSearchOpen) return;

    const timerId = setTimeout(() => {
      // Trigger search for non-empty queries, or for empty queries if already on search page (to clear results)
      if (searchInputValue.trim() !== '' || currentPage === 'search') {
        handleSearch(searchInputValue.trim());
      }
    }, 500); // 500ms delay

    return () => {
        clearTimeout(timerId);
    };
  }, [searchInputValue, isSearchOpen, currentPage, handleSearch]);
  
  // Effect to lock body scroll when an overlay is open
  useEffect(() => {
    const isOverlayOpen = isSearchOpen || isMobileMenuOpen;
    if (isOverlayOpen) {
      document.body.classList.add('search-active');
    } else {
      document.body.classList.remove('search-active');
    }
    // Cleanup on component unmount
    return () => {
      document.body.classList.remove('search-active');
    }
  }, [isSearchOpen, isMobileMenuOpen]);

  // Effect to close overlay on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const openSearch = () => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(true);
  };
  
  const toggleMobileMenu = () => {
    setIsSearchOpen(false);
    setIsMobileMenuOpen(prev => !prev);
  };
  
  const handleLinkClick = (link: string) => {
    handleNavigation(link);
    setIsMobileMenuOpen(false);
  };
  
  const onSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Trigger search immediately on submit, bypassing the debounce
    if (searchInputValue.trim()) {
      handleSearch(searchInputValue.trim());
    }
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Close the overlay if the click is on the background itself, not on its children
    if (e.target === e.currentTarget) {
      setIsSearchOpen(false);
    }
  };

  return (
    <motion.header
        variants={headerVariants}
        initial="top"
        animate={isScrolled ? 'scrolled' : 'top'}
        transition={{ ease: "easeInOut", duration: 0.3 }}
    >
      <div className="container header-container">
        <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); handleLinkClick('Home'); }}>
          <LogoIcon />
          <div className="logo-text">
            <strong>WOMEN IN SAFETY</strong>
            <span>CONSULTING (PTY, LTD)</span>
          </div>
        </a>
        <nav>
            <ul className="nav-menu">
                {navLinks.map(link => {
                  const pageName = link.toLowerCase();
                  const isActive = currentPage === pageName;
                  
                  return (
                    <li key={link}>
                        <a href={`#${pageName}`} 
                           onClick={(e) => { e.preventDefault(); handleLinkClick(link); }}
                           className={isActive ? 'active' : ''}>
                           {link}
                        </a>
                    </li>
                  )
                })}
            </ul>
        </nav>
         <div className="nav-actions">
            <motion.button 
                type="button" 
                className="btn btn-primary"
                onClick={() => handleLinkClick('Contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
                Join Us
            </motion.button>
            <button type="button" onClick={openSearch} className="search-icon-btn" aria-label="Open search">
                <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </button>
        </div>
        <button className="mobile-menu-btn" onClick={toggleMobileMenu} aria-label="Toggle menu" aria-expanded={isMobileMenuOpen}>
            {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
        </button>
      </div>
      
      <nav className={`mobile-nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul>
            {navLinks.map(link => (
                <li key={link}>
                    <a href={`#${link.toLowerCase()}`} onClick={(e) => { e.preventDefault(); handleLinkClick(link); }}>{link}</a>
                </li>
            ))}
            <li>
                <motion.button 
                    type="button" 
                    className="btn btn-primary"
                    onClick={() => handleLinkClick('Contact')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                    Join Us
                </motion.button>
            </li>
        </ul>
      </nav>

      <div 
        className={`search-overlay ${isSearchOpen ? 'open' : ''}`}
        onClick={handleOverlayClick}
      >
        <form className="search-overlay-content" onSubmit={onSearchSubmit}>
            <input 
                type="search" 
                placeholder="Search website..."
                value={searchInputValue}
                onChange={(e) => setSearchInputValue(e.target.value)}
                autoFocus 
            />
            <button type="button" className="close-btn" onClick={() => setIsSearchOpen(false)} aria-label="Close search">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
        </form>
      </div>
      
    </motion.header>
  );
};

export default Header;