
function Suggestion({ userId , setResults }){

  return (
    <div onClick={() => setResults(userId)} className="w-full flex items-center ml-4">
      <h3>{userId}</h3>
    </div>
  )
}
export default Suggestion;