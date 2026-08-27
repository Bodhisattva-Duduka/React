function Result({ data }) {
  return (
    <div className="flex gap-4 border border-zinc-300 bg-white p-4">
      
      <img
        src={data?.avatar_url}
        alt={data?.login}
        className="h-16 w-16 shrink-0 rounded-full object-cover"
      />

      <div className="min-w-0 flex-1">
        
        <h3 className="mb-3 text-base font-medium text-zinc-900">
          {data?.name || "Username"}
        </h3>

        <div className="flex gap-2">
          <div className="bg-zinc-200 px-3 py-2 text-sm">
            <span >Followers</span>
            <p className="mt-1 font-medium text-zinc-900">
              {data?.followers}
            </p>
          </div>

          <div className="bg-zinc-200 px-3 py-2 text-sm">
            <span >Following</span>
            <p className="mt-1 font-medium text-zinc-900">
              {data?.following}
            </p>
          </div>

          <div className="bg-zinc-200 px-3 py-2 text-sm">
            <span >Repositories</span>
            <p className="mt-1 font-medium text-zinc-900">
              {data?.public_repos}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Result;