
function Suggestion({ userId , setResultQuery }){

  return (
    <div onClick={() => setResultQuery(userId)} className="w-full flex items-center gap h-8 hover:bg-blue-200 rounded-xl">
      <h2 className="ml-4 text-xl">{userId}</h2>
    </div>
  )
}
export default Suggestion;