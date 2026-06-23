import { useState } from 'react';
import { HiSearch, HiAdjustments } from 'react-icons/hi';
import styles from './SearchBar.module.css';

interface SearchBarProps {
  onSearch: (query: string) => void;
  onFilter?: () => void;
  placeholder?: string;
  variant?: 'default' | 'hero' | 'inline';
  initialValue?: string;
}

const SearchBar = ({
  onSearch,
  onFilter,
  placeholder = 'Search for services...',
  variant = 'default',
  initialValue = '',
}: SearchBarProps) => {
  const [query, setQuery] = useState(initialValue);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query.trim());
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={[styles.searchBar, styles[variant]].join(' ')}
      role="search"
    >
      <div className={styles.inputWrap}>
        <HiSearch className={styles.searchIcon} aria-hidden="true" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className={styles.input}
          aria-label="Search services"
        />
      </div>

      {onFilter && (
        <button
          type="button"
          onClick={onFilter}
          className={styles.filterBtn}
          aria-label="Filter results"
        >
          <HiAdjustments size={18} />
          <span className={styles.filterText}>Filters</span>
        </button>
      )}

      <button type="submit" className={styles.submitBtn} aria-label="Search">
        <span className={styles.submitText}>Search</span>
        <HiSearch className={styles.submitIcon} />
      </button>
    </form>
  );
};

export default SearchBar;
