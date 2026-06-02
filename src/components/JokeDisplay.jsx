// Displays either a loading message or the current joke
const JokeDisplay = ({ joke, loading }) => {
  return (
    <div className="joke-container">

      {/* Show "Loading..." while data is being fetched, otherwise show the joke */}
      <p>{loading ? "Loading..." : joke}</p>
    </div>
  )
}

export default JokeDisplay
