import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { HiViewGrid, HiViewList } from 'react-icons/hi';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import SearchBar from '../../components/SearchBar/SearchBar';
import { services, categories } from '../../data/services';
import styles from './Services.module.css';

const sortOptions = ['Relevance', 'Price: Low to High', 'Price: High to Low', 'Top Rated', 'Most Reviews'];

const Services = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'All');
  const [sortBy, setSortBy] = useState('Relevance');
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    document.title = 'Browse Services — TalentHub';
  }, []);

  const filtered = useMemo(() => {
    let result = [...services];
    if (activeCategory !== 'All') result = result.filter((s) => s.category === activeCategory);
    if (query) {
      const q = query.toLowerCase();
      result = result.filter(
        (s) => s.title.toLowerCase().includes(q) || s.description.toLowerCase().includes(q) || s.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    switch (sortBy) {
      case 'Price: Low to High': return result.sort((a, b) => a.price - b.price);
      case 'Price: High to Low': return result.sort((a, b) => b.price - a.price);
      case 'Top Rated': return result.sort((a, b) => b.rating - a.rating);
      case 'Most Reviews': return result.sort((a, b) => b.reviews - a.reviews);
      default: return result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }
  }, [query, activeCategory, sortBy]);

  const handleSearch = (q: string) => {
    setQuery(q);
    setSearchParams(q ? { q } : {});
  };

  return (
    <div className={styles.page}>
      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div className={styles.pageHeaderBg} aria-hidden="true" />
        <div className={`container ${styles.pageHeaderInner}`}>
          <span className="section-badge" style={{ color: 'rgba(255,255,255,0.9)', borderColor: 'rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.1)' }}>
            {filtered.length} Services Available
          </span>
          <h1 className={styles.pageTitle}>
            Find the Perfect <span className={styles.pageTitleHighlight}>Service</span>
          </h1>
          <p className={styles.pageSubtitle}>
            Browse thousands of services from top-rated freelancers and find exactly what your project needs.
          </p>
          <SearchBar
            onSearch={handleSearch}
            onFilter={() => setShowFilters(!showFilters)}
            placeholder="Search services, skills, or tools..."
            variant="hero"
            initialValue={query}
          />
        </div>
      </div>

      <div className={`container ${styles.content}`}>
        {/* Categories */}
        <div className={styles.categoriesWrap}>
          <div className={styles.categories}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={[styles.catBtn, activeCategory === cat ? styles.catBtnActive : ''].join(' ')}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Toolbar */}
        <div className={styles.toolbar}>
          <p className={styles.resultCount}>
            Showing <strong>{filtered.length}</strong> results
            {activeCategory !== 'All' && <> in <strong>{activeCategory}</strong></>}
            {query && <> for "<strong>{query}</strong>"</>}
          </p>
          <div className={styles.toolbarRight}>
            <select
              className={styles.sortSelect}
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              aria-label="Sort services"
            >
              {sortOptions.map((o) => <option key={o}>{o}</option>)}
            </select>
            <div className={styles.viewToggle}>
              <button
                className={[styles.viewBtn, view === 'grid' ? styles.viewBtnActive : ''].join(' ')}
                onClick={() => setView('grid')}
                aria-label="Grid view"
              >
                <HiViewGrid />
              </button>
              <button
                className={[styles.viewBtn, view === 'list' ? styles.viewBtnActive : ''].join(' ')}
                onClick={() => setView('list')}
                aria-label="List view"
              >
                <HiViewList />
              </button>
            </div>
          </div>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className={[styles.grid, view === 'list' ? styles.listView : ''].join(' ')}>
            {filtered.map((service) => (
              <ServiceCard key={service.id} service={service} variant={view === 'list' ? 'compact' : 'default'} />
            ))}
          </div>
        ) : (
          <div className={styles.empty}>
            <div className={styles.emptyIcon}>🔍</div>
            <h3 className={styles.emptyTitle}>No services found</h3>
            <p className={styles.emptyText}>Try adjusting your search or category filter.</p>
            <button className="btn btn-primary" onClick={() => { setQuery(''); setActiveCategory('All'); }}>
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
