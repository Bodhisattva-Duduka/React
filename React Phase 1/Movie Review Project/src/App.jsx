import MovieReviewCard from './MovieReviewCard.jsx'

const data = [
  {
      poster: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
      movieName: "Interstellar",
      director: "Christopher Nolan",
      description: "A team of astronauts travel through a wormhole near Saturn in search of a new home for humanity, while exploring themes of time, survival, love, and the future of mankind.",
      rating: 5
  },
  {
      poster: "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg",
      movieName: "The Dark Knight",
      director: "Christopher Nolan",
      description: "Batman faces the Joker, a chaotic criminal mastermind determined to plunge Gotham City into fear and anarchy, forcing Bruce Wayne to question the limits of justice and heroism.",
      rating: 5
  },
  {
      poster: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
      movieName: "Inception",
      director: "Christopher Nolan",
      description: "A skilled thief who steals corporate secrets through dream-sharing technology is given the dangerous task of planting an idea deep within a target's subconscious mind.",
      rating: 4
  },
  {
      poster: "https://upload.wikimedia.org/wikipedia/en/4/4a/Oppenheimer_%28film%29.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled",
      movieName: "Oppenheimer",
      director: "Christopher Nolan",
      description: "The story of J. Robert Oppenheimer and his critical role in developing the atomic bomb during World War II, highlighting the scientific ambition and moral consequences behind the project.",
      rating: 4
  },
  {
      poster: "https://upload.wikimedia.org/wikipedia/en/8/8e/Dune_%282021_film%29.jpg",
      movieName: "Dune",
      director: "Denis Villeneuve",
      description: "A noble family becomes caught in a deadly war for control over the galaxy's most valuable resource on the harsh desert planet Arrakis, where destiny, politics, and survival collide.",
      rating: 4
  },
  {
      poster: "https://upload.wikimedia.org/wikipedia/en/5/53/Parasite_%282019_film%29.png",
      movieName: "Parasite",
      director: "Bong Joon-ho",
      description: "A struggling poor family cleverly infiltrates the lives of a wealthy household by posing as skilled workers, leading to shocking revelations and a tense class conflict.",
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