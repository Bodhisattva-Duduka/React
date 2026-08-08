
function Suggestion({ userId , setResultQuery }){

  return (
    <div onClick={() => setResultQuery(userId)} className="w-full flex items-center gap h-8 hover:bg-zinc-100">
      <h2 className="cursor-pointer px-4 py-2.5 text-sm text-zinc-800">{userId}</h2>
    </div>
  )
}
export default Suggestion;