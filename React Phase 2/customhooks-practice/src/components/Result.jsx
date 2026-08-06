function Result({ data }) {
  return (
    <div className="max-w-120 rounded-2xl border border-blue-600 bg-white p-4">
      <div className="flex items-center gap-4">
        <div className="h-20 w-20 shrink-0 rounded-full border-2 border-blue-600 overflow-hidden">
          <img
            src={data?.avatar_url}
            alt={data?.login}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex-1">
          <h3 className="rounded-lg border border-blue-600 px-4 py-2 text-black">
            {data?.login || "Username"}
          </h3>

          <div className="mt-3 flex gap-2">
            <div className="rounded-lg border border-blue-600 px-3 py-2 text-black">
              Followers
            </div>
            <div className="rounded-lg border border-blue-600 px-3 py-2 text-black">
              Following
            </div>
            <div className="rounded-lg border border-blue-600 px-3 py-2 text-black">
              Repositories
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;