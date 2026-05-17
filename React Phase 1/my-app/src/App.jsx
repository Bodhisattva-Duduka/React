import MovieReviewCard from './MovieReviewCard.jsx'

const data = [
    {
        poster: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
        movieName: "Interstellar",
        director: "Christopher Nolan",
        description: "A team of astronauts travel through a wormhole near Saturn in search of a new home for humanity.",
        rating: 5
    },
    {
        poster: "https://upload.wikimedia.org/wikipedia/en/8/8a/The_Dark_Knight_2008_theatrical_poster.jpg",
        movieName: "The Dark Knight",
        director: "Christopher Nolan",
        description: "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham into anarchy.",
        rating: 5
    },
    {
        poster: "https://upload.wikimedia.org/wikipedia/en/a/a9/Inception_ver3.jpg",
        movieName: "Inception",
        director: "Christopher Nolan",
        description: "A thief who steals corporate secrets through dream-sharing technology is given the task of planting an idea.",
        rating: 4
    },
    {
        poster: "https://upload.wikimedia.org/wikipedia/en/0/0c/Oppenheimer_film_poster.jpg",
        movieName: "Oppenheimer",
        director: "Christopher Nolan",
        description: "The story of J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II.",
        rating: 4
    },
    {
        poster: "https://upload.wikimedia.org/wikipedia/en/1/1f/Dune_Part_One_poster.jpg",
        movieName: "Dune",
        director: "Denis Villeneuve",
        description: "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset on a desert planet.",
        rating: 4
    },
    {
        poster: "https://upload.wikimedia.org/wikipedia/en/3/3b/Parasite_%282019%29_film_poster.jpg",
        movieName: "Parasite",
        director: "Bong Joon-ho",
        description: "A poor family schemes to become employed by a wealthy family, leading to an unexpected and dark confrontation.",
        rating: 5
    },
]

function App() {
    return (
        <div className="min-h-screen bg-gray-100 py-10 px-6">
            <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">
                Movie Reviews
            </h1>
            <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md">
                {data.map((movie) => (
                    <MovieReviewCard
                        key={movie.movieName}
                        poster={movie.poster}
                        movieName={movie.movieName}
                        director={movie.director}
                        description={movie.description}
                        rating={movie.rating}
                    />
                ))}
            </div>
        </div>
    )
}

export default App