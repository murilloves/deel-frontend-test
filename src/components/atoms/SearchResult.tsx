import getHighlightedText from '../../helpers/getHighlightedText';

interface SearchResultProps {
  text: string;
  searchStr: string;
  children: React.ReactNode;
}

const SearchResult: React.FC<SearchResultProps> = ({ text, searchStr, children }) => {
  return (
    <div className="ml-3">
      {children}
      {getHighlightedText({ text, highlight: searchStr })}
    </div>
  );
};

export default SearchResult;
