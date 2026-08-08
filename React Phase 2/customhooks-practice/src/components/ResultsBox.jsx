import Result from './Result.jsx'
function ResultsBox({ savedResults }) {
  return (
    <div className="mt-2 flex flex-col gap-2">
      {savedResults.map((item)=> <Result key={item.id} data={item} />)}
    </div>
  )
}

export default ResultsBox
