import { useEffect, useState } from 'react';

import fetchDataURL from '../../helpers/fetchDataURL';
import useDebounce from '../../hooks/useDebounce';

import SearchResult from '../atoms/SearchResult';

interface SearchResultsListProps {
  results?: string[];
  searchStr: string;
  apiURL: string;
}
interface Currencies {
  [key: string]: {
    name: string;
    symbol: string;
  };
}
interface CountryDataProps {
  name: {
    common: string;
    official: string;
  };
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Currencies;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  latlng: number[];
  landlocked: boolean;
  borders: string[];
  area: number;
  flag: string;
  population: number;
  fifa: string;
  timezones: string[];
  continents: string[];
  startOfWeek: string;
}
interface SimplifiedCountryDataProps {
  flag: string;
  name: string;
}

const DEBOUNCE_TIME = 600;

const SearchResultsList: React.FC<SearchResultsListProps> = ({ results, searchStr, apiURL }) => {
  const [showingResults, setShowingResults] = useState<SimplifiedCountryDataProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const debouncedQueryString = useDebounce(searchStr, DEBOUNCE_TIME);

  useEffect(() => {
    setShowingResults([]);
    if (debouncedQueryString.length > 0) {
      searchCharacter();
    }

    async function searchCharacter() {
      setShowingResults([]);
      setLoading(true);

      try {
        const data:CountryDataProps[] = await fetchDataURL(`${apiURL}/${debouncedQueryString}`);

        const compositeArray = data.map((item) => {
          return {
            flag: item.flag,
            name: item.name.common
          }
        })

        const filteredResults:SimplifiedCountryDataProps[] = compositeArray.filter(
          (item: SimplifiedCountryDataProps) =>
            item.name.toLowerCase().includes(debouncedQueryString.toLowerCase()
          )
        );
        setShowingResults(filteredResults);
      } catch {
        setShowingResults([]);
      } finally {
        setLoading(false);    
      }
    }
  }, [debouncedQueryString, results]);

  if (debouncedQueryString.length === 0) {
    return <></>
  }

  if (loading) {
    return <div className="search-list">
      <div className="text-center">
        loading...
      </div>
    </div>
  }

  if (debouncedQueryString.length > 0 && showingResults.length === 0 && !loading) {
    return <div className="search-list">
      <div className="text-center">No results found.</div>
    </div>
  }

  return (
    <div className="search-list">
      {showingResults.map((result: SimplifiedCountryDataProps) => (
        <SearchResult key={result.name} text={result.name} searchStr={debouncedQueryString}>
          <span className="text-base mr-2">{result.flag}</span>
        </SearchResult>
      ))}
    </div>
  );
};

export default SearchResultsList;
