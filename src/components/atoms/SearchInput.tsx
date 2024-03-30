import { useRef, ChangeEvent } from 'react';
import SearchIcon from '../../assets/search-icon';

interface SearchInputProps {
  setValue: (value: string) => void;
  setFocused: (value: boolean) => void;
  placeholder?: string;
}

const SearchInput: React.FC<SearchInputProps>  = ({ setFocused = () => {}, setValue, placeholder }) => {
  const inputRef = useRef(null);

  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setValue(ev.target.value);
  };

  return (
    <div className="search-input-wrapper">
      <SearchIcon />
      <input
        ref={inputRef}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder || "Type to search"}
        onChange={(ev) => handleChange(ev)}
      />
    </div>
  )
}

export default SearchInput;
