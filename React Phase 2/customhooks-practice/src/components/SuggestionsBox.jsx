import Suggestion from "./Suggestion";

function SuggestionsBox({ suggestions, setResults }) {

  const slicedSuggestions = suggestions.items.slice(0, 5);

  return (
    <div>
      {slicedSuggestions.map((item) => <Suggestion key={item.id} setResults={setResults} userId={item.login}/>)}
    </div>
  )
}

export default SuggestionsBox;