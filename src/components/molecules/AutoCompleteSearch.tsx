import { useState } from 'react';
import SearchInput from '../atoms/SearchInput';
import SearchResultsList from '../molecules/SearchResultsList';

interface AutoCompleteSearchProps {
  inputPlaceholder?: string;
}

const AutoCompleteSearch: React.FC<AutoCompleteSearchProps> = ({ inputPlaceholder }) => {
  const [searchStr, setSearchStr] = useState<string>("");

  return (
    <div>
      <SearchInput setValue={setSearchStr} placeholder={inputPlaceholder} />
      <SearchResultsList
        searchStr={searchStr}
        apiURL={`https://restcountries.com/v3.1/name`}
      />
    </div>
  );
};

export default AutoCompleteSearch;
