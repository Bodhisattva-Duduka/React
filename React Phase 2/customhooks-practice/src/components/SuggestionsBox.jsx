import Suggestion from "./Suggestion";

function SuggestionsBox({ suggestions, setResultQuery }) {

  const slicedSuggestions = suggestions?.items.slice(0, 5);

  return (
    <div className="w-120 mt-1 overflow-hidden border border-zinc-200 bg-white">
      {slicedSuggestions?.map((item) => <Suggestion key={item.id} setResultQuery={setResultQuery} userId={item.login}/>)}
    </div>
  )
}

export default SuggestionsBox;