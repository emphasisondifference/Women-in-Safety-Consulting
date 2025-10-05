import React, { useMemo } from 'react';
import { SEARCHABLE_CONTENT } from '../constants';
import { SearchableItem } from '../types';

interface SearchResultsPageProps {
  query: string;
  handleNavigation: (page: string, articleId?: string) => void;
}

const SearchResultsPage: React.FC<SearchResultsPageProps> = ({ query, handleNavigation }) => {
  const searchResults = useMemo(() => {
    if (!query) {
      return [];
    }
    const lowerCaseQuery = query.toLowerCase();
    return SEARCHABLE_CONTENT.filter(item => 
      item.title.toLowerCase().includes(lowerCaseQuery) || 
      item.content.toLowerCase().includes(lowerCaseQuery)
    );
  }, [query]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, item: SearchableItem) => {
    e.preventDefault();
    const page = item.path.replace('#', '');
    
    if (item.type === 'Article') {
        // For articles, we navigate to the 'blog' page and pass the article's specific ID
        handleNavigation('blog', item.id);
    } else {
        // For other types, navigate as before
        handleNavigation(page);
    }
  };

  return (
    <section className="search-results-page">
      <div className="container">
        <div className="search-results-header">
          <h1 className="page-title">Search Results</h1>
          {query && <p>Showing results for: <span className="search-query">"{query}"</span></p>}
        </div>

        <div className="search-results-list">
          {searchResults.length > 0 ? (
            searchResults.map((item: SearchableItem) => (
              <div key={item.id} className="result-item">
                <h3><a href={item.path} onClick={(e) => handleLinkClick(e, item)}>{item.title}</a></h3>
                <p>{item.content}</p>
              </div>
            ))
          ) : (
            <p className="no-results">No results found for your search.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default SearchResultsPage;