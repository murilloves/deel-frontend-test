const getHighlightedText = ({ text = "", highlight = "" }: { text?: string; highlight?: string }): JSX.Element => {

  if (highlight.trim().length === 0) {
    return (
      <span>
        { text }
      </span>
    )
  }

  const segments = text.split(new RegExp(`(${highlight})`, 'gi'));

  if (segments.length <= 1) {
    return <></>
  }

  return (
    <span>
      {segments.map((part, index) => (
        <span
          key={index}
          className={part.toLowerCase() === highlight.toLowerCase() ? "highlight" : ""}
        >
          {part}
        </span>
      ))}
    </span>
  );
};

export default getHighlightedText;
