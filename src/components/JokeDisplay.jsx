// Step 1: Accept `joke` and `loading` as props

const JokeDisplay = ({ joke, loading }) => {
  return (
    <div className="joke-container">

      <p>{loading ? "Loading..." : joke}</p>

    </div>
  )
}

export default JokeDisplay
