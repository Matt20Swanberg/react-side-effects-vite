import { useState, useEffect } from 'react'
import JokeDisplay from './components/JokeDisplay'
import FetchButton from './components/FetchButton'

function App() {

  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(false);

  function fetchJoke() {
    setLoading(true);
    fetch("https://v2.jokeapi.dev/joke/Programming?type=single")
      .then((response) => {

        return response.json();
      })
      .then((data) => {
        setJoke(data.joke);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Fetch error: ', error);
        setJoke('Failed to fetch joke. Please try again later!');
        setLoading(false);
      })
  }

  // Step 2: Use `useEffect` to call a function that fetches a joke when the component mounts
  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="app">
      <h1>Programming Jokes</h1>
      {/* Step 4: Pass the necessary props to JokeDisplay */}
      <JokeDisplay
        joke={joke}
        loading={loading}
      />
      {/* Step 5: Pass the function to FetchButton so it can fetch a new joke on click */}
      <FetchButton
        fetchJoke={fetchJoke}
      />
    </div>
  )
}

export default App
