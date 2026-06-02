import { useState, useEffect } from 'react'
import JokeDisplay from './components/JokeDisplay'
import FetchButton from './components/FetchButton'

function App() {

  // Stores the current joke text displayed on the page
  const [joke, setJoke] = useState("");

  // Tracks whether a joke is currently being fetched
  const [loading, setLoading] = useState(false);

  // Fetches a programming joke from the JokeAPI and updates state
  function fetchJoke() {

    // Show the loading message while waiting for the API response
    setLoading(true);

    fetch("https://v2.jokeapi.dev/joke/Programming?type=single")
      .then((response) => {

        return response.json();
      })
      .then((data) => {

        // Save the fetched joke and stop showing the loading message
        setJoke(data.joke);
        setLoading(false);
      })
      .catch((error) => {

        // Display a fallback message if the API request fails
        console.error('Fetch error: ', error);
        setJoke('Failed to fetch joke. Please try again later!');
        setLoading(false);
      })
  }

  // Fetch a joke once when the component first mounts
  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="app">
      <h1>Programming Jokes</h1>
      {/*  Pass joke data and loading state to the display component */}
      <JokeDisplay
        joke={joke}
        loading={loading}
      />

      {/* Pass the fetch function so the button can request a new joke */}
      <FetchButton
        fetchJoke={fetchJoke}
      />
    </div>
  )
}

export default App
