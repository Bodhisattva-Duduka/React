import Result from './Result.jsx'
function ResultsBox({ data }) {
  let arr = [1,2,3,4,5];
  return (
    <div className="mt-2 flex flex-col gap-2">
      {arr.map((key)=> <Result key={key} />)}
    </div>
  )
}

export default ResultsBox
