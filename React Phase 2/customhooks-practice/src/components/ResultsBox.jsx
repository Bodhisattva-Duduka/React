import Result from './Result.jsx'
function ResultsBox({ savedResults }) {
  return (
    <div className="flex flex-col gap-3">
      {savedResults.map((item)=> <Result key={item.id} data={item} />)}
    </div>
  )
}

export default ResultsBox
