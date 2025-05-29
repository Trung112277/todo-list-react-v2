import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { useSearch } from '@/contexts/search/context';
import { useCallback, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export function SearchInputTask() {
  const { setSearchQuery } = useSearch();
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  // Initialize search from URL
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('q') || '';
    setInputValue(query);
    setSearchQuery(query);
  }, [location.search, setSearchQuery]);

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    
    // Debounce the search
    const timeoutId = setTimeout(() => {
      setSearchQuery(value);
      // Update URL with search query
      const searchParams = new URLSearchParams(location.search);
      if (value) {
        searchParams.set('q', value);
      } else {
        searchParams.delete('q');
      }
      navigate(`?${searchParams.toString()}`, { replace: true });
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [setSearchQuery, navigate, location.search]);

  return (
    <div className="relative w-full max-w-[300px]">
      <Search className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search task"
        className="pr-8 [&::-webkit-search-cancel-button]:hidden text-md text-slate-700 dark:text-slate-200 font-medium placeholder:text-gray-400 placeholder:font-normal"
        value={inputValue}
        onChange={handleSearch}
      />
    </div>
  );
}
