import { ChangeEvent } from 'react';
import SearchIcon from '../../assets/search-icon';

interface SearchInputProps {
  setValue: (value: string) => void;
  placeholder?: string;
}

const SearchInput: React.FC<SearchInputProps>  = ({ setValue, placeholder }) => {
  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setValue(ev.target.value);
  };

  return (
    <div className="search-input-wrapper">
      <SearchIcon />
      <input
        placeholder={placeholder || "Type to search"}
        onChange={(ev) => handleChange(ev)}
      />
    </div>
  )
}

export default SearchInput;
