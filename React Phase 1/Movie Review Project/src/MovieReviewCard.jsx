
function RatingStars() {
    return <>⭐</>
}

function MovieReviewCard({ poster, movieName, director, description, rating }) {

    const stars = []
    for (let i = 1; i <= rating; i++) {
        stars.push(<RatingStars key={i} />)
    }

    return (
        <div className="flex w-full gap-4 border-b border-gray-200 p-4 m-3">
            <div className="poster-part w-1/3">
                <img src={poster} className="w-full h-auto rounded-md" />
            </div>
            <div className="title-part w-2/3">
                <h4 className="text-lg font-bold text-gray-900">{movieName}</h4>
                <h6 className="text-sm text-gray-500 mb-2">{director}</h6>
                <p className="text-sm text-gray-700">{description}</p>
                <div className="flex gap-0.5 mt-2">{stars}</div>
            </div>
        </div>
    );
}

export default MovieReviewCard;