// Button component used to fetch a new joke on demand
const FetchButton = ({ fetchJoke }) => {
  return (
   
    // Call the fetchJoke function when the button is clicked
    <button
      className="fetch-button"
      onClick={fetchJoke}
    >
      Get a New Joke
    </button>
  )
}

export default FetchButton
