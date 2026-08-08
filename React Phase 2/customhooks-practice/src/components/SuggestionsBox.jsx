import Suggestion from "./Suggestion";

function SuggestionsBox({ suggestions, setResultQuery }) {

  const slicedSuggestions = suggestions?.items.slice(0, 5);

  return (
    <div className="w-120 flex flex-col gap-3 border-2 border-blue-500 rounded-2xl">
      {slicedSuggestions?.map((item) => <Suggestion key={item.id} setResultQuery={setResultQuery} userId={item.login}/>)}
    </div>
  )
}

export default SuggestionsBox;